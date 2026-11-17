// Remote state sync for chat history + editor/model settings.
// Injects into src/app/sync/neon-bridge.ts at build time.
// API keys / credentials are NOT synced: they stay in the browser's encrypted store.
const PREFIX = 'open-pencil:'
const MARKER = 'open-pencil:sync-installed'
const CHAT_DB = 'open-pencil-chats'
const STORES = ['conversations', 'messages', 'selected', 'deleted'] as const
const ENDPOINT = '/api/state'

type State = {
  localStorage: Record<string, string>
  chats: Record<string, unknown[]>
  savedAt: number
}

function toBase64(bytes: Uint8Array): string {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
}

function fromBase64(value: string): ArrayBuffer {
  const binary = atob(value)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index)
  return bytes.buffer
}

function encode(value: unknown): unknown {
  if (value instanceof ArrayBuffer) return { __b64: toBase64(new Uint8Array(value)) }
  if (ArrayBuffer.isView(value)) {
    return {
      __b64: toBase64(new Uint8Array(value.buffer, value.byteOffset, value.byteLength))
    }
  }
  if (Array.isArray(value)) return value.map(encode)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, encode(entry)]))
  }
  return value
}

function decode(value: unknown): unknown {
  if (value && typeof value === 'object' && '__b64' in value) {
    return fromBase64((value as { __b64: string }).__b64)
  }
  if (Array.isArray(value)) return value.map(decode)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, decode(entry)]))
  }
  return value
}

function openChats(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(CHAT_DB)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('conversations')) {
        const store = db.createObjectStore('conversations', { keyPath: 'id' })
        store.createIndex('document', 'documentId')
      }
      for (const name of STORES) {
        if (!db.objectStoreNames.contains(name)) db.createObjectStore(name)
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function readChats(): Promise<Record<string, unknown[]>> {
  const db = await openChats()
  const result: Record<string, unknown[]> = {}
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction([...STORES], 'readonly')
    for (const name of STORES) {
      const request = transaction.objectStore(name).getAll()
      request.onsuccess = () => {
        result[name] = request.result.map((value) => encode(value))
      }
    }
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
  db.close()
  return result
}

async function writeChats(chats: Record<string, unknown[]>): Promise<void> {
  const db = await openChats()
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction([...STORES], 'readwrite')
    for (const name of STORES) {
      const store = transaction.objectStore(name)
      store.clear()
      for (const row of chats[name] ?? []) store.put(decode(row))
    }
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
  db.close()
}

async function snapshot(): Promise<State> {
  const localStorageState: Record<string, string> = {}
  for (let index = 0; index < window.localStorage.length; index++) {
    const key = window.localStorage.key(index)
    if (key?.startsWith(PREFIX) && key !== MARKER) {
      localStorageState[key] = window.localStorage.getItem(key) ?? ''
    }
  }
  return { localStorage: localStorageState, chats: await readChats(), savedAt: Date.now() }
}

async function restore(state: State): Promise<void> {
  for (const [key, value] of Object.entries(state.localStorage ?? {})) {
    if (key !== MARKER) window.localStorage.setItem(key, value)
  }
  await writeChats(state.chats ?? {})
}

async function fetchRemote(): Promise<State | null> {
  try {
    const response = await fetch(ENDPOINT, { headers: { accept: 'application/json' } })
    if (!response.ok) return null
    return (await response.json()) as State | null
  } catch {
    return null
  }
}

async function push(state: State): Promise<boolean> {
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(state)
    })
    return response.ok
  } catch {
    return false
  }
}

export async function restoreRemoteState(): Promise<void> {
  const remote = await fetchRemote()
  const installed = Number(window.localStorage.getItem(MARKER) || 0)
  if (remote && remote.savedAt > installed) {
    await restore(remote)
    window.localStorage.setItem(MARKER, String(remote.savedAt))
  } else if (!remote) {
    const initial = await snapshot()
    if (await push(initial)) window.localStorage.setItem(MARKER, String(initial.savedAt))
  }
}

export function startStateSync(): void {
  let lastSignature = ''
  setInterval(async () => {
    const state = await snapshot()
    const signature = JSON.stringify([state.localStorage, state.chats])
    if (signature === lastSignature) return
    if (await push(state)) {
      lastSignature = signature
      window.localStorage.setItem(MARKER, String(state.savedAt))
    }
  }, 10_000)
}
