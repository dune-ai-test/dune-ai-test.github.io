# Deploy OpenPencil web editor to Render (no fork, no secrets)

## What is in this folder
- `.github/workflows/build.yml` — copy this whole `.github` folder into a new, empty GitHub repo.

## Steps
1. Create a **new empty GitHub repo** (e.g. `my-openpencil-web`). Do **not** fork upstream.
2. Copy the `.github` folder from this directory into the root of that repo and commit/push it to `main`.
3. In the repo: **Settings → Actions → General → Workflow permissions → Read and write permissions**.
4. **Actions → Build OpenPencil web editor → Run workflow**.
5. When it finishes, a `site` branch exists containing only the built static site.
6. Render: **New → Static Site** → connect this repo, branch `site`.
   - Build Command: *(leave empty)*
   - Publish Directory: `.`
   - Redirects/Rewrites: `/*` → `/index.html` (Rewrite, 200)
7. Add your AI provider key in the editor at **Settings → Models** (in the browser; never in GitHub).

Notes:
- No secrets are needed: GitHub's built-in `GITHUB_TOKEN` publishes the `site` branch.
- The AI key stays in your browser's encrypted local storage. Documents are saved on your machine.
- Local MCP only attaches to the desktop app or a local dev server, not this hosted build. Use the built-in AI chat (Ctrl+J / Cmd+J) to create designs.
