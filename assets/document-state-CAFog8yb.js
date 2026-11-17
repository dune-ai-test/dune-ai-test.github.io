import{c as e,l as t,s as n,u as r}from"./constants-ZM8gixXD.js";import{t as i}from"./preload-helper-Czpn1I53.js";import{t as a}from"./groupBy-D2hoC06s.js";import{i as o,r as s,t as c}from"./arrays-BCOu-Xh9.js";import{b as l,c as u,g as d,h as f,m as p,n as m,v as h,x as g}from"./paragraphs-PUgiadhN.js";import{t as _}from"./clamp-Dd1_o4QK.js";import{i as v,r as y}from"./kinds-t4Et9cMz.js";import{t as b}from"./mapKeys-BMD69-Wt.js";import{t as x}from"./omit-D6pUlkfa.js";import{_ as S}from"./color-BYvyypcm.js";import{t as C}from"./pick-BIfRzfj9.js";import{S as ee,a as te,d as ne,h as re,k as ie,s as ae}from"./value-CMdf6eEf.js";import{$ as w,A as oe,B as se,D as ce,I as T,L as le,R as E,S as ue,T as D,U as de,W as O,X as fe,i as pe,k as me,l as he,n as ge,q as _e,r as ve,st as ye,u as be,v as xe,w as Se,z as Ce}from"./dist-bFEPLr2Y.js";import{c as we,d as Te,g as Ee}from"./shared-styles-bgqwmPWB.js";import{K as De,L as Oe,Y as ke,a as Ae,r as je,t as Me}from"./graph-CnBLdmSI.js";import{_ as Ne,b as Pe,g as Fe,h as Ie,o as Le,u as Re,v as ze,y as Be}from"./schema-Dx8jw79m.js";import{Ct as Ve,Q as He,ct as Ue,dt as We,f as Ge,it as Ke,mt as qe,rt as Je,st as Ye,xt as k}from"./geometry-D03E49cB.js";import{h as Xe,p as Ze,x as Qe}from"./copy-Dhna4kRn.js";import{C as $e,D as et,I as tt,M as nt,O as rt,P as it,X as at,et as ot,j as st,k as ct,nt as lt,ut,w as dt}from"./pieces-1PamNx4I.js";import{t as ft}from"./random-gYa_nnkk.js";import{b as pt,c as mt,d as ht,g as gt,n as _t,p as vt}from"./bindings-CNZOOCxb.js";import{L as yt,N as bt,R as xt,b as St,g as Ct,j as wt,o as Tt,r as Et,s as Dt,t as A}from"./fields-D9I9p9cr.js";import{A as j,C as Ot,O as M,S as kt,b as At,j as N,k as P,v as jt,w as Mt,x as Nt,y as Pt}from"./render-CP_Kwq6P.js";import{H as Ft,I as It,J as Lt,N as Rt,W as zt}from"./visual-bounds-B-EqakAp.js";import{n as Bt}from"./lists-WTVw0TMm.js";import{f as Vt,m as Ht,p as Ut}from"./emoji-Bzt9JZqY.js";import{c as Wt}from"./images-BLDhcWEB.js";import{a as Gt,i as Kt,l as qt,n as Jt,o as Yt,r as Xt}from"./browser-BSC-3Ymk.js";function Zt(e){return e===null?1:e===void 0?2:0}function Qt(e,t){let n=Zt(e),r=Zt(t);return n<r?-1:n>r?1:n===0?e<t?-1:+(e>t):0}function $t(e,t,n){return n===`asc`?Qt(e,t):Qt(t,e)}function en(e,t,n){return e.slice().sort((e,r)=>{let i=n.length;for(let a=0;a<t.length;a++){let o=i>a?n[a]:n[i-1],s=t[a],c=typeof s==`function`,l=$t(c?s(e):e[s],c?s(r):r[s],o);if(l!==0)return l}return 0})}function tn(e,t){return en(e,t,[`asc`])}var nn=O(T(),be()),rn=ve(),an=w(),on=le({r:nn,g:nn,b:nn,a:nn});function sn(e,t){let n=t.get(e);if(n)return n;let r=e>0?O(le({operator:de(Tt),operands:O(ge(sn(e-1,t)),me(1),ce(3))}),pe(e=>e.operands.length===re(e.operator),`Wrong number of operands`)):void 0,i=ue(e=>typeof e==`number`?nn:typeof e==`boolean`?rn:typeof e==`string`?an:typeof e==`object`&&e&&`operator`in e&&r?r:typeof e==`object`&&e&&`aliasId`in e?te:on);return t.set(e,i),i}function cn(e){try{let t=ne(e.value);return t===void 0||t===e.type}catch{return!1}}var ln=O(le({expression:Se(`FORMULA`),type:de([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),value:sn(64,new Map)}),pe(cn,`Formula operands do not fit their operators`));function un(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function dn(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function fn(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=un(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:dn(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:dn(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}function pn(e){return e.map(e=>({axis:e.axis===`x`?`X`:`Y`,offset:e.position,...e.figGuid?{guid:e.figGuid}:{}}))}function mn(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function hn(e){return Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`, `)}function gn(e,t){let n=e.baselines??[];if(e.logicalIndexToCharacterOffsetMap?.length!==t.length+1||n.length!==1)return!1;let r=n[0].position.y;return(e.glyphs??[]).every(e=>(e.rotation??0)===0&&e.position.y===r)}function _n(e){if(!e.emojiCodePoints?.length)return{};let t={emojiCodePoints:[...e.emojiCodePoints]};return e.emojiImageSet===`NOTO`&&(t.emojiImageSet=`NOTO`),t}function vn(e,t,n){if(!e||gn(e,n))return[];let r=[],i=e.truncationStartIndex??-1,a=e.glyphs??[];for(let e of i>=0?a.slice(0,i):a){let n=e.commandsBlob===void 0?void 0:t[e.commandsBlob];if(!n)return[];let i=e.advance*e.fontSize;r.push({commandsBlob:n,x:e.position.x,y:e.position.y,fontSize:e.fontSize,firstCharacter:e.firstCharacter,rotation:e.rotation,advance:Number.isFinite(i)?i:void 0,..._n(e)})}return r}var yn=new Int32Array(1),bn=new Float32Array(yn.buffer),xn=new TextDecoder,F=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}get bytes(){return this._data}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,yn[0]=r,bn[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,xn.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){if(!(e instanceof Uint8Array)&&!Array.isArray(e))throw TypeError(`Expected byte array`);this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;bn[0]=e;let n=yn[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function I(e){return JSON.stringify(e)}function L(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}var R={BOOL:0,BYTE:1,INT:2,UINT:3,FLOAT:4,STRING:5,INT64:6,UINT64:7,ENUM:8,STRUCT:9,MESSAGE:10},Sn=new Map([[`bool`,R.BOOL],[`byte`,R.BYTE],[`int`,R.INT],[`uint`,R.UINT],[`float`,R.FLOAT],[`string`,R.STRING],[`int64`,R.INT64],[`uint64`,R.UINT64]]),Cn={ENUM:R.ENUM,STRUCT:R.STRUCT,MESSAGE:R.MESSAGE},wn=Symbol(`header bytes`),Tn=Symbol(`header start`),En=Symbol(`header whole decoder`);function Dn(e){let t=Reflect.get(e,wn),n=Reflect.get(e,Tn),r=Reflect.get(e,En);if(!(t instanceof Uint8Array)||typeof n!=`number`||typeof r!=`function`)return;let i=new F(t);return i.offset=n,r(i)}function On(e,t,n){Reflect.defineProperty(e,t,{value:n,enumerable:!1})}function kn(){throw Error(`Attempted to parse invalid message`)}function An(e,t){let n=new Map;for(let t of e.definitions)n.set(t.name,t);let r=new Map,i=e.definitions.map(e=>{let n=[],i=[],a=[],o=new Map;if(e.kind===`ENUM`)for(let t of e.fields)a[t.value]=t.name,o.set(t.name,t.value);let s=t?.[e.name],c={name:e.name,kind:e.kind,fields:n,byId:i,names:a,values:o,header:e.kind===`MESSAGE`&&s!==void 0};return r.set(e.name,c),c});return e.definitions.forEach((e,a)=>{if(e.kind===`ENUM`)return;let o=i[a],s=o.fields,c=o.byId,l=t?.[e.name];for(let t of e.fields){let e=jn(t,l,n,r);s.push(e),c[t.value]=e}}),i}function jn(e,t,n,r){let i=e.type;i===null&&L(`Invalid type null for field `+I(e.name),e.line,e.column);let a=Sn.get(i),o=a===void 0?n.get(i):void 0;return a===void 0&&!o&&L(`Invalid type `+I(i)+` for field `+I(e.name),e.line,e.column),{name:e.name,id:e.value,isArray:e.isArray,isDeprecated:e.isDeprecated,type:a??Cn[o.kind],definition:o?r.get(o.name)??null:null,kept:t===void 0||t.includes(e.name)}}function Mn(e,t){let n=An(e,t),r=new Map(n.map(e=>[e.name,e])),i=0,a=new WeakMap,o=e=>{let t=r.get(e);return t||L(`Invalid type `+I(e),0,0),t},s=(e,t)=>{switch(e.type){case R.BOOL:return!!t.readByte();case R.BYTE:return t.readByte();case R.INT:return t.readVarInt();case R.UINT:return t.readVarUint();case R.FLOAT:return t.readVarFloat();case R.STRING:return t.readString();case R.INT64:return t.readVarInt64();case R.UINT64:return t.readVarUint64();case R.ENUM:return e.definition.names[t.readVarUint()];default:return f(e.definition,t)}},c=(e,t)=>{if(!e.isArray)return s(e,t);if(e.type===R.BYTE)return t.readByteArray();let n=t.readVarUint(),r=Array.from({length:n});for(let i=0;i<n;i++)r[i]=s(e,t);return r},l=(e,t)=>{switch(e.type){case R.BOOL:case R.BYTE:t.readByte();return;case R.INT:case R.UINT:case R.ENUM:t.readVarUint();return;case R.FLOAT:t.readVarFloat();return;case R.STRING:t.skipString();return;case R.INT64:case R.UINT64:t.readVarUint64();return;case R.STRUCT:for(let n of e.definition.fields)u(n,t);return;default:{let n=e.definition.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint())u(n[e]??kn(),t)}}},u=(e,t)=>{if(!e.isArray){l(e,t);return}if(e.type===R.BYTE){t.skipByteArray();return}for(let n=t.readVarUint();n>0;n--)l(e,t)},d=(e,t,n)=>{e.isDeprecated?u(e,t):n[e.name]=c(e,t)},f=(e,t)=>{let n={};if(e.kind===`STRUCT`){for(let r of e.fields)d(r,t,n);return n}let r=e.header&&i===0;r&&(On(n,wn,t.bytes),On(n,Tn,t.offset),On(n,En,p(e)));let a=e.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint()){let i=a[e]??kn();r&&!i.kept?u(i,t):d(i,t,n)}return n},p=e=>{let t=a.get(e);return t||(t=t=>{i++;try{return f(e,t)}finally{i--}},a.set(e,t)),t},m=(e,t,n)=>{switch(e.type){case R.BOOL:case R.BYTE:n.writeByte(t);return;case R.INT:n.writeVarInt(t);return;case R.UINT:n.writeVarUint(t);return;case R.FLOAT:n.writeVarFloat(t);return;case R.STRING:n.writeString(t);return;case R.INT64:n.writeVarInt64(t);return;case R.UINT64:n.writeVarUint64(t);return;case R.ENUM:{let r=e.definition,i=r.values.get(t);if(i===void 0)throw Error(`Invalid value `+JSON.stringify(t)+` for enum `+I(r.name));n.writeVarUint(i);return}default:g(e.definition,t,n)}},h=(e,t,n)=>{if(!e.isArray){m(e,t,n);return}if(e.type===R.BYTE){n.writeByteArray(t);return}let r=t;n.writeVarUint(r.length);for(let t of r)m(e,t,n)},g=(e,t,n)=>{let r=e.kind===`MESSAGE`;for(let i of e.fields){if(i.isDeprecated)continue;let e=t[i.name];if(e!=null)r&&n.writeVarUint(i.id),h(i,e,n);else if(!r)throw Error(`Missing required field `+I(i.name))}r&&n.writeVarUint(0)};return{definitions:n,definition:o,read:c,skip:u,write:h,decode:f,encode:g}}function Nn(e,t){let n=Mn(e,t),r={ByteBuffer:F,schema:n};for(let e of n.definitions){if(e.kind===`ENUM`){let t={};for(let[n,r]of e.values)t[n]=r,t[r]=n;r[e.name]=t;continue}r[`decode`+e.name]=t=>n.decode(e,t instanceof r.ByteBuffer?t:new r.ByteBuffer(t)),r[`encode`+e.name]=(t,i)=>{let a=i??new r.ByteBuffer;return n.encode(e,t,a),i?void 0:a.toUint8Array()}}return r}var Pn=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],Fn=[`ENUM`,`STRUCT`,`MESSAGE`];function In(e){let t=e instanceof F?e:new F(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:Fn[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:Fn[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=Pn.length)throw Error(`Invalid type `+i);n.type=Pn[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function Ln(e){let t=new F,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(Fn.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=Pn.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(+!!n.isArray),t.writeVarUint(n.value)}}return t.toUint8Array()}var Rn=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],zn=[`ByteBuffer`,`package`],Bn=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,Vn=/^[A-Za-z_][A-Za-z0-9_]*$/,Hn=/^\/\/.*|\s+$/,Un=/^=$/,Wn=/^$/,Gn=/^;$/,Kn=/^-?\d+$/,qn=/^\{$/,Jn=/^\}$/,Yn=/^\[\]$/,Xn=/^enum$/,Zn=/^struct$/,Qn=/^message$/,$n=/^package$/,er=/^\[deprecated\]$/;function tr(e){let t=e.split(Bn),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?Hn.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&L(`Syntax error `+I(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function nr(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();L(`Expected `+r+` but found `+I(e.text),e.line,e.column)}}function i(){let e=t();L(`Unexpected token `+I(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n($n)&&(o=t().text,r(Vn,`identifier`),r(Gn,`";"`));s<e.length&&!n(Wn);){let e=[],o;n(Xn)?o=`ENUM`:n(Zn)?o=`STRUCT`:n(Qn)?o=`MESSAGE`:i();let s=t();for(r(Vn,`identifier`),r(qn,`"{"`);!n(Jn);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(Vn,`identifier`),a=n(Yn));let c=t();r(Vn,`identifier`);let l=null;o!==`STRUCT`&&(r(Un,`"="`),l=t(),r(Kn,`integer`),(l.text|0)+``!==l.text&&L(`Invalid integer `+I(l.text),l.line,l.column));let u=t();n(er)&&(o!==`MESSAGE`&&L(`Cannot deprecate this field`,u.line,u.column),s=!0),r(Gn,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function rr(e){let t=Rn.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&L(`The type `+I(i.name)+` is defined twice`,i.line,i.column),zn.includes(i.name)&&L(`The type name `+I(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||L(`The type `+I(n.type)+` is not defined for field `+I(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&L(`The id for field `+I(t.name)+` is used twice`,t.line,t.column),t.value<=0&&L(`The id for field `+I(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&L(`Recursive nesting of `+I(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function ir(e){let t=nr(tr(e));return rr(t),t}function ar(e){for(let t of e.definitions)or(t),t.kind===`ENUM`&&sr(t)}function or(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&L(`The field ${I(n.name)} is defined twice in ${I(e.name)}`,n.line,n.column),t.add(n.name)}function sr(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&L(`The enum value ${n.value} is used twice in ${I(e.name)}`,n.line,n.column),t.add(n.value)}var cr=ir(`enum MessageType {
  JOIN_START = 0;
  NODE_CHANGES = 1;
  USER_CHANGES = 2;
  JOIN_END = 3;
  SIGNAL = 4;
  STYLE = 5;
  STYLE_SET = 6;
  JOIN_START_SKIP_RELOAD = 7;
  NOTIFY_SHOULD_UPGRADE = 8;
  UPGRADE_DONE = 9;
  UPGRADE_REFRESH = 10;
  SCENE_GRAPH_QUERY = 11;
  SCENE_GRAPH_REPLY = 12;
  DIFF = 13;
  CLIENT_BROADCAST = 14;
  JOIN_START_JOURNALED = 15;
  STREAM_START = 16;
  STREAM_END = 17;
  INTERACTIVE_SLIDE_CHANGE = 18;
  RECONNECT_SCENE_GRAPH_QUERY = 19;
  RECONNECT_SCENE_GRAPH_REPLY = 20;
  JOIN_END_INCREMENTAL_RECONNECT = 21;
  NODE_STATUS_CHANGE = 22;
  CLIENT_RENDERED = 23;
  BUZZ_APPROVAL_CHANGE = 24;
}

enum Axis {
  X = 0;
  Y = 1;
}

enum Access {
  READ_ONLY = 0;
  READ_WRITE = 1;
}

enum NodePhase {
  CREATED = 0;
  REMOVED = 1;
}

enum WindingRule {
  NONZERO = 0;
  ODD = 1;
}

enum NodeType {
  NONE = 0;
  DOCUMENT = 1;
  CANVAS = 2;
  GROUP = 3;
  FRAME = 4;
  BOOLEAN_OPERATION = 5;
  VECTOR = 6;
  STAR = 7;
  LINE = 8;
  ELLIPSE = 9;
  RECTANGLE = 10;
  REGULAR_POLYGON = 11;
  ROUNDED_RECTANGLE = 12;
  TEXT = 13;
  SLICE = 14;
  SYMBOL = 15;
  INSTANCE = 16;
  STICKY = 17;
  SHAPE_WITH_TEXT = 18;
  CONNECTOR = 19;
  CODE_BLOCK = 20;
  WIDGET = 21;
  STAMP = 22;
  MEDIA = 23;
  HIGHLIGHT = 24;
  SECTION = 25;
  SECTION_OVERLAY = 26;
  WASHI_TAPE = 27;
  VARIABLE = 28;
  TABLE = 29;
  TABLE_CELL = 30;
  VARIABLE_SET = 31;
  SLIDE = 32;
  ASSISTED_LAYOUT = 33;
  INTERACTIVE_SLIDE_ELEMENT = 34;
  VARIABLE_OVERRIDE = 35;
  MODULE = 36;
  SLIDE_GRID = 37;
  SLIDE_ROW = 38;
  RESPONSIVE_SET = 39;
  CODE_COMPONENT = 40;
  TEXT_PATH = 41;
  CODE_INSTANCE = 42;
  CODE_LIBRARY = 43;
  CODE_FILE = 44;
  CODE_LAYER = 45;
  BRUSH = 46;
  MANAGED_STRING = 47;
  TRANSFORM = 48;
  CMS_RICH_TEXT = 49;
  REPEATER = 50;
  JSX = 51;
  EMBEDDED_PROTOTYPE = 52;
  REACT_FIBER = 53;
  RESPONSIVE_NODE_SET = 54;
  WEBPAGE = 55;
  KEYFRAME = 56;
  KEYFRAME_TRACK = 57;
  ANIMATION_PRESET_INSTANCE = 58;
  CODE_EMBED = 59;
  BINARY_FILE = 60;
  SPEC_BLOCK = 61;
  TOOL_INSTANCE = 62;
  CUSTOM_EFFECT_INSTANCE = 63;
  NATIVE_CODE_LAYER_INSTANCE = 64;
}

enum ShapeWithTextType {
  SQUARE = 0;
  ELLIPSE = 1;
  DIAMOND = 2;
  TRIANGLE_UP = 3;
  TRIANGLE_DOWN = 4;
  ROUNDED_RECTANGLE = 5;
  PARALLELOGRAM_RIGHT = 6;
  PARALLELOGRAM_LEFT = 7;
  ENG_DATABASE = 8;
  ENG_QUEUE = 9;
  ENG_FILE = 10;
  ENG_FOLDER = 11;
  TRAPEZOID = 12;
  PREDEFINED_PROCESS = 13;
  SHIELD = 14;
  DOCUMENT_SINGLE = 15;
  DOCUMENT_MULTIPLE = 16;
  MANUAL_INPUT = 17;
  HEXAGON = 18;
  CHEVRON = 19;
  PENTAGON = 20;
  OCTAGON = 21;
  STAR = 22;
  PLUS = 23;
  ARROW_LEFT = 24;
  ARROW_RIGHT = 25;
  SUMMING_JUNCTION = 26;
  OR = 27;
  SPEECH_BUBBLE = 28;
  INTERNAL_STORAGE = 29;
}

enum BlendMode {
  PASS_THROUGH = 0;
  NORMAL = 1;
  DARKEN = 2;
  MULTIPLY = 3;
  LINEAR_BURN = 4;
  COLOR_BURN = 5;
  LIGHTEN = 6;
  SCREEN = 7;
  LINEAR_DODGE = 8;
  COLOR_DODGE = 9;
  OVERLAY = 10;
  SOFT_LIGHT = 11;
  HARD_LIGHT = 12;
  DIFFERENCE = 13;
  EXCLUSION = 14;
  HUE = 15;
  SATURATION = 16;
  COLOR = 17;
  LUMINOSITY = 18;
}

enum PaintType {
  SOLID = 0;
  GRADIENT_LINEAR = 1;
  GRADIENT_RADIAL = 2;
  GRADIENT_ANGULAR = 3;
  GRADIENT_DIAMOND = 4;
  IMAGE = 5;
  EMOJI = 6;
  VIDEO = 7;
  PATTERN = 8;
  NOISE = 9;
  CUSTOM = 10;
}

enum ImageScaleMode {
  STRETCH = 0;
  FIT = 1;
  FILL = 2;
  TILE = 3;
}

enum EffectType {
  INNER_SHADOW = 0;
  DROP_SHADOW = 1;
  FOREGROUND_BLUR = 2;
  BACKGROUND_BLUR = 3;
  REPEAT = 4;
  SYMMETRY = 5;
  GRAIN = 6;
  NOISE = 7;
  GLASS = 8;
  CUSTOM = 9;
}

enum TextCase {
  ORIGINAL = 0;
  UPPER = 1;
  LOWER = 2;
  TITLE = 3;
  SMALL_CAPS = 4;
  SMALL_CAPS_FORCED = 5;
}

enum TextDecoration {
  NONE = 0;
  UNDERLINE = 1;
  STRIKETHROUGH = 2;
}

enum TextDecorationStyle {
  SOLID = 0;
  DOTTED = 1;
  WAVY = 2;
}

enum LeadingTrim {
  NONE = 0;
  CAP_HEIGHT = 1;
}

enum NumberUnits {
  RAW = 0;
  PIXELS = 1;
  PERCENT = 2;
}

enum ConstraintType {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  SCALE = 4;
  FIXED_MIN = 5;
  FIXED_MAX = 6;
}

enum StrokeAlign {
  CENTER = 0;
  INSIDE = 1;
  OUTSIDE = 2;
  OFFSET = 3;
}

enum StrokeCap {
  NONE = 0;
  ROUND = 1;
  SQUARE = 2;
  ARROW_LINES = 3;
  ARROW_EQUILATERAL = 4;
  DIAMOND_FILLED = 5;
  TRIANGLE_FILLED = 6;
  HIGHLIGHT = 7;
  WASHI_TAPE_1 = 8;
  WASHI_TAPE_2 = 9;
  WASHI_TAPE_3 = 10;
  WASHI_TAPE_4 = 11;
  WASHI_TAPE_5 = 12;
  WASHI_TAPE_6 = 13;
  CIRCLE_FILLED = 14;
  ERD_ZERO_OR_ONE = 15;
  ERD_EXACTLY_ONE = 16;
  ERD_ZERO_OR_MORE = 17;
  ERD_ONE_OR_MORE = 18;
  ERD_ONE = 19;
  ERD_MANY = 20;
}

enum StrokeJoin {
  MITER = 0;
  BEVEL = 1;
  ROUND = 2;
}

enum BooleanOperation {
  UNION = 0;
  INTERSECT = 1;
  SUBTRACT = 2;
  XOR = 3;
}

enum TextAlignHorizontal {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
  JUSTIFIED = 3;
}

enum TextAlignVertical {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

enum MouseCursor {
  DEFAULT = 0;
  CROSSHAIR = 1;
  EYEDROPPER = 2;
  HAND = 3;
  PAINT_BUCKET = 4;
  PEN = 5;
  PENCIL = 6;
  MARKER = 7;
  ERASER = 8;
  HIGHLIGHTER = 9;
  LASSO = 10;
}

enum VectorMirror {
  NONE = 0;
  ANGLE = 1;
  ANGLE_AND_LENGTH = 2;
}

enum DashMode {
  CLIP = 0;
  STRETCH = 1;
}

enum ImageType {
  PNG = 0;
  JPEG = 1;
  SVG = 2;
  PDF = 3;
  MP4 = 4;
  GIF = 5;
}

enum ExportConstraintType {
  CONTENT_SCALE = 0;
  CONTENT_WIDTH = 1;
  CONTENT_HEIGHT = 2;
}

enum LayoutGridType {
  MIN = 0;
  CENTER = 1;
  STRETCH = 2;
  MAX = 3;
}

enum LayoutGridPattern {
  STRIPES = 0;
  GRID = 1;
}

enum TextAutoResize {
  NONE = 0;
  WIDTH_AND_HEIGHT = 1;
  HEIGHT = 2;
}

enum TextTruncation {
  DISABLED = 0;
  ENDING = 1;
}

enum StyleSetType {
  PERSONAL = 0;
  TEAM = 1;
  CUSTOM = 2;
  FREQUENCY = 3;
  TEMPORARY = 4;
}

enum StyleSetContentType {
  SOLID = 0;
  GRADIENT = 1;
  IMAGE = 2;
}

enum StackMode {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  GRID = 3;
}

enum StackAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  BASELINE = 3;
}

enum StackCounterAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  AUTO = 4;
  BASELINE = 5;
}

enum StackJustify {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  SPACE_EVENLY = 3;
  SPACE_BETWEEN = 4;
}

enum GridChildAlign {
  AUTO = 0;
  MIN = 1;
  CENTER = 2;
  MAX = 3;
}

enum GridAutoTracks {
  NONE = 0;
  ROWS = 1;
}

enum StackSize {
  FIXED = 0;
  RESIZE_TO_FIT = 1;
  RESIZE_TO_FIT_WITH_IMPLICIT_SIZE = 2;
}

enum StackPositioning {
  AUTO = 0;
  ABSOLUTE = 1;
}

enum StackWrap {
  NO_WRAP = 0;
  WRAP = 1;
}

enum StackCounterAlignContent {
  AUTO = 0;
  SPACE_BETWEEN = 1;
}

enum ConnectionType {
  NONE = 0;
  INTERNAL_NODE = 1;
  URL = 2;
  BACK = 3;
  CLOSE = 4;
  SET_VARIABLE = 5;
  UPDATE_MEDIA_RUNTIME = 6;
  CONDITIONAL = 7;
  SET_VARIABLE_MODE = 8;
  OBJECT_ANIMATION = 9;
  UPDATE_ANIMATION_TIMELINE_STATE = 10;
}

enum InteractionType {
  ON_CLICK = 0;
  AFTER_TIMEOUT = 1;
  MOUSE_IN = 2;
  MOUSE_OUT = 3;
  ON_HOVER = 4;
  MOUSE_DOWN = 5;
  MOUSE_UP = 6;
  ON_PRESS = 7;
  NONE = 8;
  DRAG = 9;
  ON_KEY_DOWN = 10;
  ON_VOICE = 11;
  ON_MEDIA_HIT = 12;
  ON_MEDIA_END = 13;
  MOUSE_ENTER = 14;
  MOUSE_LEAVE = 15;
}

enum TransitionType {
  INSTANT_TRANSITION = 0;
  DISSOLVE = 1;
  FADE = 2;
  SLIDE_FROM_LEFT = 3;
  SLIDE_FROM_RIGHT = 4;
  SLIDE_FROM_TOP = 5;
  SLIDE_FROM_BOTTOM = 6;
  PUSH_FROM_LEFT = 7;
  PUSH_FROM_RIGHT = 8;
  PUSH_FROM_TOP = 9;
  PUSH_FROM_BOTTOM = 10;
  MOVE_FROM_LEFT = 11;
  MOVE_FROM_RIGHT = 12;
  MOVE_FROM_TOP = 13;
  MOVE_FROM_BOTTOM = 14;
  SLIDE_OUT_TO_LEFT = 15;
  SLIDE_OUT_TO_RIGHT = 16;
  SLIDE_OUT_TO_TOP = 17;
  SLIDE_OUT_TO_BOTTOM = 18;
  MOVE_OUT_TO_LEFT = 19;
  MOVE_OUT_TO_RIGHT = 20;
  MOVE_OUT_TO_TOP = 21;
  MOVE_OUT_TO_BOTTOM = 22;
  MAGIC_MOVE = 23;
  SMART_ANIMATE = 24;
  SCROLL_ANIMATE = 25;
}

enum EasingType {
  IN_CUBIC = 0;
  OUT_CUBIC = 1;
  INOUT_CUBIC = 2;
  LINEAR = 3;
  IN_BACK_CUBIC = 4;
  OUT_BACK_CUBIC = 5;
  INOUT_BACK_CUBIC = 6;
  CUSTOM_CUBIC = 7;
  SPRING = 8;
  GENTLE_SPRING = 9;
  CUSTOM_SPRING = 10;
  SPRING_PRESET_ONE = 11;
  SPRING_PRESET_TWO = 12;
  SPRING_PRESET_THREE = 13;
  HOLD = 14;
}

enum ScrollDirection {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  BOTH = 3;
}

enum ScrollContractedState {
  EXPANDED = 0;
  CONTRACTED = 1;
}

struct GUID {
  uint sessionID;
  uint localID;
}

struct Color {
  float r;
  float g;
  float b;
  float a;
}

struct Vector {
  float x;
  float y;
}

struct Rect {
  float x;
  float y;
  float w;
  float h;
}

struct ColorStop {
  Color color;
  float position;
}

message ColorStopVar {
  Color color = 1;
  VariableData colorVar = 2;
  float position = 3;
}

struct Matrix {
  float m00;
  float m01;
  float m02;
  float m10;
  float m11;
  float m12;
}

struct ParentIndex {
  GUID guid;
  string position;
}

struct Number {
  float value;
  NumberUnits units;
}

struct FontName {
  string family;
  string style;
  string postscript;
}

enum FontVariantNumericFigure {
  NORMAL = 0;
  LINING = 1;
  OLDSTYLE = 2;
}

enum FontVariantNumericSpacing {
  NORMAL = 0;
  PROPORTIONAL = 1;
  TABULAR = 2;
}

enum FontVariantNumericFraction {
  NORMAL = 0;
  DIAGONAL = 1;
  STACKED = 2;
}

enum FontVariantCaps {
  NORMAL = 0;
  SMALL = 1;
  ALL_SMALL = 2;
  PETITE = 3;
  ALL_PETITE = 4;
  UNICASE = 5;
  TITLING = 6;
}

enum FontVariantPosition {
  NORMAL = 0;
  SUB = 1;
  SUPER = 2;
}

enum FontStyle {
  NORMAL = 0;
  ITALIC = 1;
}

enum SemanticWeight {
  NORMAL = 0;
  BOLD = 1;
}

enum SemanticItalic {
  NORMAL = 0;
  ITALIC = 1;
}

enum CodeSnapshotState {
  INITIAL = 0;
  SNAPSHOTTING = 1;
  OK = 2;
  SNAPSHOT_ERROR = 3;
  LLM_IN_PROGRESS = 4;
}

enum SnapshotCaptureMode {
  FULL = 0;
  PARTIAL = 1;
}

message CodeSourceInfo {
  string originReferenceId = 1;
  GUID originNodeId = 2;
  GUID linkedSnapshotId = 3;
  SnapshotCaptureMode captureMode = 4;
  string sourceBlobRef = 5;
  string sourceElementId = 6;
}

enum CodeObjectType {
  WEB_LAYER = 0;
  WEB_INTERACTION = 1;
  NATIVE_LAYER = 2;
  ANIMATION_PRESET = 3;
  TOOL = 4;
  CUSTOM_EFFECT = 5;
  PLUGIN = 6;
  WEB_LAYER_GENERIC = 7;
  CUSTOM_FILL = 8;
}

message CustomToolArtifactRef {
  string customToolId = 1;
  string customToolVersion = 2;
  string publishedCustomToolId = 3;
  string publishedCustomToolVersionId = 4;
}

enum LockMode {
  NONE = 0;
  ALL = 1;
  BACKGROUND_ONLY = 2;
}

enum OpenTypeFeature {
  PCAP = 0;
  C2PC = 1;
  CASE = 2;
  CPSP = 3;
  TITL = 4;
  UNIC = 5;
  ZERO = 6;
  SINF = 7;
  ORDN = 8;
  AFRC = 9;
  DNOM = 10;
  NUMR = 11;
  LIGA = 12;
  CLIG = 13;
  DLIG = 14;
  HLIG = 15;
  RLIG = 16;
  AALT = 17;
  CALT = 18;
  RCLT = 19;
  SALT = 20;
  RVRN = 21;
  VERT = 22;
  SWSH = 23;
  CSWH = 24;
  NALT = 25;
  CCMP = 26;
  STCH = 27;
  HIST = 28;
  SIZE = 29;
  ORNM = 30;
  ITAL = 31;
  RAND = 32;
  DTLS = 33;
  FLAC = 34;
  MGRK = 35;
  SSTY = 36;
  KERN = 37;
  FWID = 38;
  HWID = 39;
  HALT = 40;
  TWID = 41;
  QWID = 42;
  PWID = 43;
  JUST = 44;
  LFBD = 45;
  OPBD = 46;
  RTBD = 47;
  PALT = 48;
  PKNA = 49;
  LTRA = 50;
  LTRM = 51;
  RTLA = 52;
  RTLM = 53;
  ABRV = 54;
  ABVM = 55;
  ABVS = 56;
  VALT = 57;
  VHAL = 58;
  BLWF = 59;
  BLWM = 60;
  BLWS = 61;
  AKHN = 62;
  CJCT = 63;
  CFAR = 64;
  CPCT = 65;
  CURS = 66;
  DIST = 67;
  EXPT = 68;
  FALT = 69;
  FINA = 70;
  FIN2 = 71;
  FIN3 = 72;
  HALF = 73;
  HALN = 74;
  HKNA = 75;
  HNGL = 76;
  HOJO = 77;
  INIT = 78;
  ISOL = 79;
  JP78 = 80;
  JP83 = 81;
  JP90 = 82;
  JP04 = 83;
  LJMO = 84;
  LOCL = 85;
  MARK = 86;
  MEDI = 87;
  MED2 = 88;
  MKMK = 89;
  NLCK = 90;
  NUKT = 91;
  PREF = 92;
  PRES = 93;
  VPAL = 94;
  PSTF = 95;
  PSTS = 96;
  RKRF = 97;
  RPHF = 98;
  RUBY = 99;
  SMPL = 100;
  TJMO = 101;
  TNAM = 102;
  TRAD = 103;
  VATU = 104;
  VJMO = 105;
  VKNA = 106;
  VKRN = 107;
  VRTR = 108;
  VRT2 = 109;
  SS01 = 110;
  SS02 = 111;
  SS03 = 112;
  SS04 = 113;
  SS05 = 114;
  SS06 = 115;
  SS07 = 116;
  SS08 = 117;
  SS09 = 118;
  SS10 = 119;
  SS11 = 120;
  SS12 = 121;
  SS13 = 122;
  SS14 = 123;
  SS15 = 124;
  SS16 = 125;
  SS17 = 126;
  SS18 = 127;
  SS19 = 128;
  SS20 = 129;
  CV01 = 130;
  CV02 = 131;
  CV03 = 132;
  CV04 = 133;
  CV05 = 134;
  CV06 = 135;
  CV07 = 136;
  CV08 = 137;
  CV09 = 138;
  CV10 = 139;
  CV11 = 140;
  CV12 = 141;
  CV13 = 142;
  CV14 = 143;
  CV15 = 144;
  CV16 = 145;
  CV17 = 146;
  CV18 = 147;
  CV19 = 148;
  CV20 = 149;
  CV21 = 150;
  CV22 = 151;
  CV23 = 152;
  CV24 = 153;
  CV25 = 154;
  CV26 = 155;
  CV27 = 156;
  CV28 = 157;
  CV29 = 158;
  CV30 = 159;
  CV31 = 160;
  CV32 = 161;
  CV33 = 162;
  CV34 = 163;
  CV35 = 164;
  CV36 = 165;
  CV37 = 166;
  CV38 = 167;
  CV39 = 168;
  CV40 = 169;
  CV41 = 170;
  CV42 = 171;
  CV43 = 172;
  CV44 = 173;
  CV45 = 174;
  CV46 = 175;
  CV47 = 176;
  CV48 = 177;
  CV49 = 178;
  CV50 = 179;
  CV51 = 180;
  CV52 = 181;
  CV53 = 182;
  CV54 = 183;
  CV55 = 184;
  CV56 = 185;
  CV57 = 186;
  CV58 = 187;
  CV59 = 188;
  CV60 = 189;
  CV61 = 190;
  CV62 = 191;
  CV63 = 192;
  CV64 = 193;
  CV65 = 194;
  CV66 = 195;
  CV67 = 196;
  CV68 = 197;
  CV69 = 198;
  CV70 = 199;
  CV71 = 200;
  CV72 = 201;
  CV73 = 202;
  CV74 = 203;
  CV75 = 204;
  CV76 = 205;
  CV77 = 206;
  CV78 = 207;
  CV79 = 208;
  CV80 = 209;
  CV81 = 210;
  CV82 = 211;
  CV83 = 212;
  CV84 = 213;
  CV85 = 214;
  CV86 = 215;
  CV87 = 216;
  CV88 = 217;
  CV89 = 218;
  CV90 = 219;
  CV91 = 220;
  CV92 = 221;
  CV93 = 222;
  CV94 = 223;
  CV95 = 224;
  CV96 = 225;
  CV97 = 226;
  CV98 = 227;
  CV99 = 228;
}

struct ExportConstraint {
  ExportConstraintType type;
  float value;
}

struct GUIDMapping {
  GUID from;
  GUID to;
}

struct Blob {
  byte[] bytes;
}

message Image {
  byte[] hash = 1;
  string name = 2;
  uint dataBlob = 3;
}

message Video {
  byte[] hash = 1;
  string s3Url = 2;
}

message PasteSource {
  string srcFile = 1;
  GUID srcNode = 2;
}

struct FilterColorAdjust {
  float tint;
  float shadows;
  float highlights;
  float detail;
  float exposure;
  float vignette;
  float temperature;
  float vibrance;
}

message PaintFilterMessage {
  float tint = 1;
  float shadows = 2;
  float highlights = 3;
  float detail = 4;
  float exposure = 5;
  float vignette = 6;
  float temperature = 7;
  float vibrance = 8;
  float contrast = 9;
  float brightness = 10;
}

message Paint {
  PaintType type = 1;
  Color color = 2;
  float opacity = 3;
  bool visible = 4;
  BlendMode blendMode = 5;
  ColorStop[] stops = 6;
  Matrix transform = 7;
  Image image = 8;
  Image imageThumbnail = 9;
  Image animatedImage = 16;
  uint animationFrame = 17;
  ImageScaleMode imageScaleMode = 10;
  bool imageShouldColorManage = 22;
  float rotation = 11;
  float scale = 12;
  FilterColorAdjust filterColorAdjust = 13;
  PaintFilterMessage paintFilter = 14;
  uint[] emojiCodePoints = 15;
  Video video = 18;
  uint originalImageWidth = 19;
  uint originalImageHeight = 20;
  VariableData opacityVar = 38;
  VariableData colorVar = 21;
  VariableData imageVar = 31;
  ColorStopVar[] stopsVar = 23;
  string thumbHashBase64 = 24;
  byte[] thumbHash = 25;
  GUID sourceNodeId = 26;
  float spacing = 27;
  Vector patternSpacing = 37;
  PatternTileType patternTileType = 28;
  PatternAlignment verticalAlignment = 29;
  PatternAlignment horizontalAlignment = 30;
  GUID id = 32;
  string altText = 33;
  NoiseType noiseType = 34;
  float density = 35;
  Vector noiseSize = 36;
  CodeComponentId customEffectId = 39;
  ComponentPropAssignment[] componentPropAssignments = 40;
}

enum NoiseType {
  MULTITONE = 0;
  MONOTONE = 1;
  DUOTONE = 2;
}

enum PatternTileType {
  RECTANGULAR = 0;
  HORIZONTAL_HEXAGONAL = 1;
  VERTICAL_HEXAGONAL = 2;
}

enum PatternAlignment {
  START = 0;
  CENTER = 1;
  END = 2;
}

message FontMetaData {
  FontName key = 1;
  float fontLineHeight = 2;
  byte[] fontDigest = 3;
  FontStyle fontStyle = 4;
  int fontWeight = 5;
}

message FontVariation {
  uint axisTag = 1;
  string axisName = 2;
  float value = 3;
}

message TextData {
  string characters = 1;
  uint[] characterStyleIDs = 2;
  NodeChange[] styleOverrideTable = 3;
  TextLineData[] lines = 12;
  uint layoutVersion = 8;
  FontName[] fallbackFonts = 10;
  float minContentHeight = 17;
  Vector layoutSize = 4;
  Baseline[] baselines = 5;
  Glyph[] glyphs = 6;
  Decoration[] decorations = 7;
  Blockquote[] blockquotes = 16;
  FontMetaData[] fontMetaData = 9;
  HyperlinkBox[] hyperlinkBoxes = 11;
  int truncationStartIndex = 13;
  float truncatedHeight = 14;
  float[] logicalIndexToCharacterOffsetMap = 15;
  MentionBox[] mentionBoxes = 18;
  DerivedTextLineData[] derivedLines = 19;
}

message DerivedTextData {
  Vector layoutSize = 1;
  Baseline[] baselines = 2;
  Glyph[] glyphs = 3;
  Decoration[] decorations = 4;
  Blockquote[] blockquotes = 5;
  FontMetaData[] fontMetaData = 6;
  HyperlinkBox[] hyperlinkBoxes = 7;
  int truncationStartIndex = 8;
  float truncatedHeight = 9;
  float[] logicalIndexToCharacterOffsetMap = 10;
  MentionBox[] mentionBoxes = 11;
  DerivedTextLineData[] derivedLines = 12;
}

message HyperlinkBox {
  Rect bounds = 1;
  string url = 2;
  GUID guid = 3;
  CMSItemPageTarget cmsTarget = 5;
  bool openInNewTab = 6;
  int hyperlinkID = 4;
}

message MentionBox {
  Rect bounds = 1;
  uint startIndex = 2;
  uint endIndex = 3;
  bool isValid = 4;
  uint mentionKey = 5;
}

message Baseline {
  Vector position = 1;
  float width = 2;
  float lineY = 3;
  float lineHeight = 4;
  float lineAscent = 7;
  float ignoreLeadingTrim = 8;
  uint firstCharacter = 5;
  uint endCharacter = 6;
}

message Glyph {
  uint commandsBlob = 1;
  Vector position = 2;
  uint styleID = 3;
  float fontSize = 4;
  uint firstCharacter = 5;
  float advance = 6;
  uint[] emojiCodePoints = 7;
  EmojiImageSet emojiImageSet = 8;
  float rotation = 9;
}

message Decoration {
  Rect[] rects = 1;
  uint styleID = 2;
}

message Blockquote {
  Rect verticalBar = 1;
  Rect quoteMarkBounds = 2;
  uint styleID = 3;
}

message VectorData {
  uint vectorNetworkBlob = 1;
  Vector normalizedSize = 2;
  NodeChange[] styleOverrideTable = 3;
}

message TextPathStart {
  float tValue = 1;
  bool forward = 2;
}

message GUIDPath {
  GUID[] guids = 1;
}

message SymbolData {
  GUID symbolID = 1;
  NodeChange[] symbolOverrides = 2;
  float uniformScaleFactor = 3;
}

message GUIDPathMapping {
  GUID id = 1;
  GUIDPath path = 2;
}

message DerivedBreakpointData {
  NodeChange[] overrides = 1;
}

message NodeGenerationData {
  NodeChange[] overrides = 1;
  bool useFineGrainedSyncing = 2;
  NodeChange[] diffOnlyRemovals = 3;
}

message DerivedImmutableFrameData {
  NodeChange[] overrides = 1;
  uint version = 2;
}

message JsxData {
  NodeChange[] overrides = 1;
}

message DerivedJsxData {
  NodeChange[] overrides = 1;
}

message AssetIdMap {
  AssetIdEntry[] entries = 1;
}

message AssetIdEntry {
  string assetKey = 1;
  AssetId assetId = 2;
}

message AssetRef {
  string key = 1;
  string version = 2;
}

message AssetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
  StateGroupId stateGroupId = 3;
  StyleId styleId = 4;
  SymbolId symbolId = 5;
  VariableID variableId = 6;
  VariableSetID variableSetId = 7;
}

message StateGroupId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message StyleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message SymbolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableOverrideId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableSetID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ModuleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ResponsiveSetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message WebpageId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ThemeID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeLibraryId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeFileId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeComponentId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CanvasNodeId {
  GUID guid = 1;
  SymbolId symbolId = 2;
  StateGroupId stateGroupId = 3;
}

struct IndexRange {
  uint startIndex;
  uint endIndexExclusive;
}

struct CollaborativeTextOpID {
  uint sessionID;
  uint counterID;
}

enum CollaborativeTextOpType {
  INSERT = 0;
  DELETE = 1;
}

message CollaborativeTextStrippedOpRunWithIDs {
  CollaborativeTextOpID firstId = 1;
  uint runLength = 2;
  CollaborativeTextOpID[] parentIds = 3;
  CollaborativeTextOpID[] rebasedOnOpIds = 4;
}

message CollaborativeTextStrippedOpRunWithLoc {
  CollaborativeTextOpType type = 1;
  IndexRange range = 2;
  bool rangeShouldBeIteratedInReverse = 3;
  IndexRange contentBytesInBuffer = 4;
  IndexRange rebasedRange = 5;
}

message CollaborativeTextOpRun {
  CollaborativeTextOpID id = 1;
  CollaborativeTextOpID[] parentIds = 2;
  CollaborativeTextOpType type = 3;
  IndexRange range = 4;
  bool rangeShouldBeIteratedInReverse = 5;
  string content = 6;
  CollaborativeTextOpID[] rebasedOnOpIds = 7;
  IndexRange rebasedRange = 8;
}

message CollaborativePlainText {
  CollaborativeTextStrippedOpRunWithIDs[] historyOpsWithIds = 1;
  CollaborativeTextStrippedOpRunWithLoc[] historyOpsWithLoc = 2;
  byte[] historyStringContentBuffer = 3;
  CollaborativeTextOpRun[] changesToAppend = 4;
}

message CollaborativeTextSelection {
  GUID node = 1;
  uint field = 2;
  IndexRange selectedRange = 3;
  bool caretAtFront = 4;
  CollaborativeTextOpID[] textVersion = 5;
}

message ResponsiveTextStyleVariant {
  float minWidth = 1;
  NodeChange fields = 2;
  VariableData variableFontSize = 3;
  VariableData variableLineHeight = 4;
  VariableData variableLetterSpacing = 5;
  VariableData variableParagraphSpacing = 6;
  string name = 7;
}

enum FlappType {
  POLL = 0;
  EMBED = 1;
  FACEPILE = 2;
  ALIGNMENT = 3;
  YOUTUBE = 4;
}

message SlideThemeProps {
  string themeVersion = 1;
  VariableSetID variableSetId = 2;
  StyleId[] textStyleIds = 3;
  bool isTextColorManuallySelected = 4;
  bool isBorderColorManuallySelected = 5;
  AssetRef subscribedThemeRef = 6;
  uint schemaVersion = 7;
  bool isGeneratedFromDesign = 8;
}

message SlideThemeMap {
  SlideThemeMapEntry[] entries = 1;
}

message SlideThemeMapEntry {
  ThemeID themeId = 1;
  SlideThemeProps themeProps = 2;
}

message SharedSymbolReference {
  string fileKey = 1;
  GUID symbolID = 2;
  string versionHash = 3;
  GUIDPathMapping[] guidPathMappings = 4;
  byte[] bytes = 5;
  GUIDMapping[] libraryGUIDToSubscribingGUID = 6;
  string componentKey = 7;
  GUIDPathMapping[] unflatteningMappings = 8;
  bool isUnflattened = 9;
}

message SharedComponentMasterData {
  string componentKey = 1;
  GUIDPathMapping[] publishingGUIDPathToTeamLibraryGUID = 2;
  bool isUnflattened = 3;
}

message InstanceOverrideStash {
  GUIDPath overridePathOfSwappedInstance = 1;
  string componentKey = 2;
  NodeChange[] overrides = 3;
}

message InstanceOverrideStashV2 {
  GUIDPath overridePathOfSwappedInstance = 1;
  GUID localSymbolID = 2;
  NodeChange[] overrides = 3;
}

message ImportedCodeFileEntry {
  CodeFileId codeFileId = 1;
}

message ImportedCodeFiles {
  ImportedCodeFileEntry[] entries = 1;
}

enum BlurOpType {
  NORMAL = 0;
  PROGRESSIVE = 1;
}

enum RepeatType {
  LINEAR = 0;
  RADIAL = 1;
}

enum UnitType {
  PIXELS = 0;
  RELATIVE = 1;
}

enum RepeatOrder {
  FORWARD = 0;
  REVERSE = 1;
}

enum EffectAxis {
  X = 0;
  Y = 1;
  X_AND_Y = 2;
}

message Effect {
  EffectType type = 1;
  Vector offset = 3;
  float radius = 4;
  bool visible = 5;
  BlendMode blendMode = 6;
  float spread = 7;
  bool showShadowBehindNode = 8;
  VariableData radiusVar = 9;
  VariableData colorVar = 10;
  VariableData spreadVar = 11;
  VariableData xVar = 12;
  VariableData yVar = 13;
  uint count = 14;
  RepeatType repeatType = 15;
  EffectAxis axis = 16;
  UnitType unitType = 17;
  RepeatOrder order = 18;
  BlurOpType blurOpType = 19;
  Vector startOffset = 20;
  Vector endOffset = 28;
  float startRadius = 21;
  Color color = 2;
  Color secondaryColor = 24;
  Vector noiseSize = 22;
  uint seed = 29;
  bool clipToShape = 23;
  float density = 25;
  NoiseType noiseType = 26;
  float opacity = 27;
  float refractionRadius = 30;
  float specularAngle = 31;
  float specularIntensity = 32;
  float bevelSize = 33;
  float chromaticAberration = 34;
  float reflectionDistance = 35;
  float refractionIntensity = 36;
  VariableData refractionRadiusVar = 37;
  VariableData specularAngleVar = 38;
  VariableData specularIntensityVar = 39;
  VariableData chromaticAberrationVar = 40;
  VariableData splayVar = 41;
  VariableData refractionIntensityVar = 42;
  CodeComponentId customEffectId = 43;
  ComponentPropAssignment[] componentPropAssignments = 44;
  VariableData startRadiusVar = 45;
  VariableData startOffsetXVar = 46;
  VariableData startOffsetYVar = 47;
  VariableData endOffsetXVar = 48;
  VariableData endOffsetYVar = 49;
  VariableData noiseSizeXVar = 50;
  VariableData noiseSizeYVar = 51;
  VariableData densityVar = 52;
  VariableData effectOpacityVar = 53;
  VariableData secondaryColorVar = 54;
  GUID id = 55;
}

enum TransformModifierType {
  REPEAT = 0;
  SYMMETRY = 1;
  SKEW = 2;
}

message TransformModifier {
  TransformModifierType type = 1;
  Vector offset = 2;
  bool visible = 3;
  uint count = 4;
  RepeatType repeatType = 5;
  EffectAxis axis = 6;
  UnitType unitType = 7;
  RepeatOrder order = 8;
  float skewX = 9;
  float skewY = 10;
}

enum TransformSchemaType {
  NONE = 0;
  FIXED_ORDER = 1;
  FREEFORM = 2;
}

struct Matrix4f {
  float m00;
  float m01;
  float m02;
  float m03;
  float m10;
  float m11;
  float m12;
  float m13;
  float m20;
  float m21;
  float m22;
  float m23;
  float m30;
  float m31;
  float m32;
  float m33;
}

message FixedOrderTransform3d {
  float perspective = 1;
  float translateZ = 2;
  float rotateX = 3;
  float rotateY = 4;
  float rotateZ = 5;
}

enum TransformFnType {
  NONE = 0;
  MATRIX_3D = 1;
  PERSPECTIVE = 2;
  TRANSLATE_Z = 3;
  ROTATE_X = 4;
  ROTATE_Y = 5;
  ROTATE_Z = 6;
}

message TransformFnValue {
  Matrix4f matrix3d = 1;
  float perspective = 2;
  float rotateAngle = 3;
  float translateValue = 4;
}

message TransformFn {
  TransformFnType type = 1;
  TransformFnValue value = 2;
}

message TransformSchemaValue {
  FixedOrderTransform3d fixedOrderTransform3d = 1;
  TransformFn[] transformFunctions = 2;
}

message Transform3d {
  TransformSchemaType type = 1;
  TransformSchemaValue value = 2;
  bool backfaceHidden = 3;
}

struct NumberVector2D {
  Number x;
  Number y;
}

message Scene3d {
  float perspective = 1;
  NumberVector2D perspectiveOrigin = 2;
  bool preserve3d = 3;
}

message TransformOrigin {
  Number x = 1;
  Number y = 2;
}

message TransitionInfo {
  TransitionType type = 1;
  float duration = 2;
}

enum PrototypeDeviceType {
  NONE = 0;
  PRESET = 1;
  CUSTOM = 2;
  PRESENTATION = 3;
}

enum DeviceRotation {
  NONE = 0;
  CCW_90 = 1;
}

message PrototypeDevice {
  PrototypeDeviceType type = 1;
  Vector size = 2;
  string presetIdentifier = 3;
  DeviceRotation rotation = 4;
}

enum OverlayPositionType {
  CENTER = 0;
  TOP_LEFT = 1;
  TOP_CENTER = 2;
  TOP_RIGHT = 3;
  BOTTOM_LEFT = 4;
  BOTTOM_CENTER = 5;
  BOTTOM_RIGHT = 6;
  MANUAL = 7;
}

enum OverlayBackgroundInteraction {
  NONE = 0;
  CLOSE_ON_CLICK_OUTSIDE = 1;
}

enum OverlayBackgroundType {
  NONE = 0;
  SOLID_COLOR = 1;
}

message OverlayBackgroundAppearance {
  OverlayBackgroundType backgroundType = 1;
  Color backgroundColor = 2;
}

enum NavigationType {
  NAVIGATE = 0;
  OVERLAY = 1;
  SWAP = 2;
  SWAP_STATE = 3;
  SCROLL_TO = 4;
}

enum ExportColorProfile {
  DOCUMENT = 0;
  SRGB = 1;
  DISPLAY_P3_V4 = 2;
  CMYK = 3;
}

enum ExportBackgroundType {
  SOLID = 0;
  TRANSPARENT = 1;
  GRID = 2;
}

message ExportSettings {
  string suffix = 1;
  ImageType imageType = 2;
  ExportConstraint constraint = 3;
  bool svgDataName = 4;
  ExportSVGIDMode svgIDMode = 5;
  bool svgOutlineText = 6;
  bool contentsOnly = 7;
  bool svgForceStrokeMasks = 8;
  bool useAbsoluteBounds = 9;
  ExportColorProfile colorProfile = 10;
  float quality = 11;
  bool useBicubicSampler = 12;
  int frameRate = 13;
  int loopCount = 14;
  ExportBackgroundType backgroundType = 15;
}

enum ExportSVGIDMode {
  IF_NEEDED = 0;
  ALWAYS = 1;
}

message LayoutGrid {
  LayoutGridType type = 1;
  Axis axis = 2;
  bool visible = 3;
  int numSections = 4;
  float offset = 5;
  float sectionSize = 6;
  float gutterSize = 7;
  Color color = 8;
  LayoutGridPattern pattern = 9;
  VariableData numSectionsVar = 10;
  VariableData offsetVar = 11;
  VariableData sectionSizeVar = 12;
  VariableData gutterSizeVar = 13;
}

message Guide {
  Axis axis = 1;
  float offset = 2;
  GUID guid = 3;
}

message Path {
  WindingRule windingRule = 1;
  uint commandsBlob = 2;
  uint styleID = 3;
}

enum StyleType {
  NONE = 0;
  FILL = 1;
  STROKE = 2;
  TEXT = 3;
  EFFECT = 4;
  EXPORT = 5;
  GRID = 6;
  ANIMATION = 7;
}

enum BrushOrientation {
  FORWARD = 0;
  REVERSE = 1;
}

enum BrushType {
  STRETCH = 0;
  SCATTER = 1;
}

message DynamicStrokeSettings {
  float frequency = 1;
  float wiggle = 2;
  float smoothen = 3;
}

message ScatterStrokeSettings {
  float gap = 1;
  float wiggle = 2;
  float angularJitter = 3;
  float rotation = 4;
  float sizeJitter = 5;
}

message StretchStrokeSettings {
  BrushOrientation orientation = 1;
}

message StrokeData {
  Stroke[] strokes = 1;
  uint version = 2;
}

message Stroke {
  int strokeId = 1;
  float strokeWeight = 2;
  VariableData strokeWeightVar = 3;
  Paint[] strokePaint = 4;
  StyleId styleIdForStrokeFill = 5;
  StrokeAlign strokeAlign = 6;
  StrokeCap strokeCap = 7;
  Number strokeCapSize = 8;
  StrokeJoin strokeJoin = 9;
  float miterLimit = 10;
  float[] dashPattern = 11;
  OptionalVector pathTrim = 12;
  float strokeOffset = 13;
  bool isDeleted = 14;
}

message VariableWidthPoint {
  float position = 1;
  float ascent = 2;
  float descent = 3;
  int segmentId = 4;
}

message SharedStyleReference {
  string styleKey = 1;
  string versionHash = 2;
}

message SharedStyleMasterData {
  string styleKey = 1;
  string sortPosition = 2;
  string fileKey = 3;
}

enum ScrollBehavior {
  SCROLLS = 0;
  FIXED_WHEN_CHILD_OF_SCROLLING_FRAME = 1;
  STICKY_SCROLLS = 2;
}

message ArcData {
  float startingAngle = 1;
  float endingAngle = 2;
  float innerRadius = 3;
}

message SymbolLink {
  string uri = 1;
  string displayName = 2;
  string displayText = 3;
}

message PluginData {
  string pluginID = 1;
  string value = 2;
  string key = 3;
}

message PluginRelaunchData {
  string pluginID = 1;
  string message = 2;
  string command = 3;
  bool isDeleted = 4;
  CodeComponentId customToolId = 5;
}

message MultiplayerFieldVersion {
  uint counter = 1;
  uint sessionID = 2;
}

enum ConnectorMagnet {
  NONE = 0;
  AUTO = 1;
  TOP = 2;
  LEFT = 3;
  BOTTOM = 4;
  RIGHT = 5;
  CENTER = 6;
  AUTO_HORIZONTAL = 7;
  EDGE = 8;
  ABSOLUTE = 9;
}

message ConnectorEndpoint {
  GUID endpointNodeID = 1;
  Vector position = 2;
  ConnectorMagnet magnet = 3;
  Vector relativePosition = 4;
}

message ConnectorControlPoint {
  Vector position = 1;
  Vector axis = 2;
}

enum ConnectorTextSection {
  MIDDLE_TO_START = 0;
  MIDDLE_TO_END = 1;
}

enum ConnectorOffAxisOffset {
  NONE = 0;
  ABOVE = 1;
  BELOW = 2;
}

message ConnectorTextMidpoint {
  ConnectorTextSection section = 1;
  float offset = 2;
  ConnectorOffAxisOffset offAxisOffset = 3;
}

enum ConnectorLineStyle {
  ELBOWED = 0;
  STRAIGHT = 1;
  CURVED = 2;
}

enum ConnectorType {
  MANUAL = 0;
  DIAGRAM = 1;
}

enum AnnotationPropertyType {
  FILL = 0;
  STROKE = 1;
  WIDTH = 2;
  HEIGHT = 3;
  MIN_WIDTH = 4;
  MIN_HEIGHT = 5;
  MAX_WIDTH = 6;
  MAX_HEIGHT = 7;
  STROKE_WIDTH = 8;
  CORNER_RADIUS = 9;
  EFFECT = 10;
  TEXT_STYLE = 11;
  TEXT_ALIGN_HORIZONTAL = 12;
  FONT_FAMILY = 13;
  FONT_SIZE = 14;
  FONT_WEIGHT = 15;
  LINE_HEIGHT = 16;
  LETTER_SPACING = 17;
  STACK_SPACING = 18;
  STACK_PADDING = 19;
  STACK_MODE = 20;
  STACK_ALIGNMENT = 21;
  OPACITY = 22;
  COMPONENT = 23;
  FONT_STYLE = 24;
  GRID_ROW_GAP = 25;
  GRID_COLUMN_GAP = 26;
  GRID_ROW_COUNT = 27;
  GRID_COLUMN_COUNT = 28;
  GRID_ROW_ANCHOR_INDEX = 29;
  GRID_COLUMN_ANCHOR_INDEX = 30;
  GRID_ROW_SPAN = 31;
  GRID_COLUMN_SPAN = 32;
}

message AnnotationProperty {
  AnnotationPropertyType type = 1;
}

enum AnnotationCategoryPreset {
  NONE = 0;
  ACCESSIBILITY = 1;
  BEHAVIOR = 2;
  CONTENT = 3;
  DEVELOPMENT = 4;
  INTERACTION = 5;
}

enum AnnotationCategoryColor {
  YELLOW = 0;
  ORANGE = 1;
  RED = 2;
  PINK = 3;
  VIOLET = 4;
  BLUE = 5;
  TEAL = 6;
  GREEN = 7;
}

message AnnotationCategoryCustom {
  AnnotationCategoryColor color = 1;
  Color customColor = 2;
  string label = 3;
}

message AnnotationCategory {
  GUID id = 1;
  AnnotationCategoryPreset preset = 2;
  AnnotationCategoryCustom custom = 3;
}

message AnnotationCategories {
  uint version = 1;
  AnnotationCategory[] items = 2;
}

message Annotation {
  string label = 1;
  AnnotationProperty[] properties = 2;
  string labelV2 = 3;
  GUID categoryId = 4;
}

enum AnnotationMeasurementNodeSide {
  TOP = 0;
  BOTTOM = 1;
  LEFT = 2;
  RIGHT = 3;
}

message AnnotationMeasurement {
  GUID id = 1;
  GUID fromNode = 2;
  GUID toNode = 3;
  AnnotationMeasurementNodeSide fromNodeSide = 4;
  bool toSameSide = 5;
  float innerOffsetRelative = 6;
  float outerOffsetFixed = 7;
  GUIDPath toNodeStablePath = 8;
  string freeText = 9;
}

message LibraryMoveInfo {
  string oldKey = 1;
  string pasteFileKey = 2;
}

message LibraryMoveHistoryItem {
  GUID sourceNodeId = 1;
  string sourceComponentKey = 2;
}

message DeveloperRelatedLink {
  string nodeId = 1;
  string fileKey = 2;
  string linkName = 3;
  string linkUrl = 4;
}

message WidgetPointer {
  GUID nodeId = 1;
}

message EditInfo {
  string timestampIso8601 = 1;
  string userId = 2;
  uint lastEditedAt = 3;
  uint createdAt = 4;
}

enum EditorType {
  DESIGN = 0;
  WHITEBOARD = 1;
  SLIDES = 2;
  DEV_HANDOFF = 3;
  SITES = 4;
  COOPER = 5;
  ILLUSTRATION = 6;
  FIGMAKE = 7;
  FIGSPEC = 8;
}

enum MaskType {
  ALPHA = 0;
  OUTLINE = 1;
  LUMINANCE = 2;
}

enum ModuleType {
  NONE = 0;
  SINGLE_NODE = 1;
  MULTI_NODE = 2;
}

enum SectionStatus {
  NONE = 0;
  BUILD = 1;
  COMPLETED = 2;
}

message SectionStatusInfo {
  SectionStatus status = 1;
  uint lastUpdateUnixTimestamp = 2;
  string description = 3;
  string userId = 4;
  SectionStatus prevStatus = 5;
}

message BuzzApprovalRequestInfo {
  string requestId = 1;
  string requesterUserId = 2;
  uint requestedAt = 3;
  string[] reviewerUserIds = 4;
  string title = 5;
  string note = 6;
  GUID[] assetsInRequest = 7;
}

message BuzzApprovalRequests {
  BuzzApprovalRequestInfo[] requests = 1;
}

enum BuzzApprovalNodeStatus {
  NONE = 0;
  IN_REVIEW = 1;
  APPROVED = 2;
  CHANGES_REQUESTED = 3;
}

message BuzzApprovalNodeStatusInfo {
  BuzzApprovalNodeStatus currentStatus = 1;
  bool wasPreviouslyApproved = 2;
  uint[] approvalRevokedAtHistory = 3;
}

message CodeEmbedInfo {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailImageHash = 4;
  bool isPublishedSite = 5;
}

enum VariableTimingDisplayUnit {
  MILLISECONDS = 0;
  SECONDS = 1;
}

message NodeChange {
  GUID guid = 1;
  uint guidTag = 53;
  NodePhase phase = 2;
  uint phaseTag = 54;
  ParentIndex parentIndex = 3;
  uint parentIndexTag = 55;
  NodeType type = 4;
  uint typeTag = 56;
  string name = 5;
  uint nameTag = 57;
  bool isPublishable = 174;
  string description = 318;
  LibraryMoveInfo libraryMoveInfo = 256;
  LibraryMoveHistoryItem[] libraryMoveHistory = 281;
  string key = 319;
  AssetIdMap fileAssetIds = 383;
  uint styleID = 49;
  uint styleIDTag = 101;
  bool isFillStyle = 157;
  bool isStrokeStyle = 161;
  bool isOverrideOverTextStyle = 376;
  StyleType styleType = 163;
  string styleDescription = 191;
  string version = 171;
  string userFacingVersion = 399;
  string sortPosition = 320;
  SharedStyleMasterData ojansSuperSecretNodeField = 345;
  SharedStyleMasterData sevMoonlitLilyData = 348;
  bool isSoftDeletedStyle = 176;
  bool isNonUpdateable = 177;
  SharedStyleMasterData sharedStyleMasterData = 172;
  SharedStyleReference sharedStyleReference = 173;
  GUID inheritFillStyleID = 158;
  GUID inheritStrokeStyleID = 162;
  GUID inheritTextStyleID = 167;
  GUID inheritExportStyleID = 168;
  GUID inheritEffectStyleID = 169;
  GUID inheritGridStyleID = 170;
  GUID inheritFillStyleIDForStroke = 185;
  StyleId styleIdForFill = 332;
  StyleId styleIdForStrokeFill = 333;
  StyleId styleIdForText = 334;
  StyleId styleIdForEffect = 335;
  StyleId styleIdForGrid = 336;
  StyleAnimation[] styleAnimations = 580;
  Paint[] backgroundPaints = 193;
  GUID inheritFillStyleIDForBackground = 194;
  bool isStateGroup = 225;
  StateGroupPropertyValueOrder[] stateGroupPropertyValueOrders = 238;
  PartialPasteAnnotation partialPasteAnnotation = 581;
  SharedSymbolReference sharedSymbolReference = 122;
  bool isSymbolPublishable = 123;
  GUIDPathMapping[] sharedSymbolMappings = 124;
  string sharedSymbolVersion = 126;
  SharedComponentMasterData sharedComponentMasterData = 152;
  string symbolDescription = 144;
  GUIDPathMapping[] unflatteningMappings = 164;
  GUIDPathMapping[] forceUnflatteningMappings = 228;
  string publishFile = 214;
  string sourceLibraryKey = 395;
  GUID publishID = 215;
  string componentKey = 216;
  bool isC2 = 217;
  string publishedVersion = 218;
  string originComponentKey = 252;
  ComponentPropDef[] componentPropDefs = 266;
  ComponentPropRef[] componentPropRefs = 267;
  VariantPropSpec[] variantPropSpecs = 483;
  SymbolData symbolData = 113;
  uint symbolDataTag = 114;
  NodeChange[] derivedSymbolData = 125;
  bool nestedInstanceResizeEnabled = 394;
  GUID overriddenSymbolID = 143;
  ComponentPropAssignment[] componentPropAssignments = 268;
  bool propsAreBubbled = 305;
  InstanceOverrideStash[] overrideStash = 248;
  InstanceOverrideStashV2[] overrideStashV2 = 250;
  GUIDPath guidPath = 111;
  uint guidPathTag = 112;
  int overrideLevel = 321;
  ModuleType moduleType = 382;
  bool isSlot = 463;
  bool isSlotContent = 495;
  float fontSize = 21;
  uint fontSizeTag = 73;
  float paragraphIndent = 22;
  uint paragraphIndentTag = 74;
  float paragraphSpacing = 23;
  uint paragraphSpacingTag = 75;
  TextAlignHorizontal textAlignHorizontal = 32;
  uint textAlignHorizontalTag = 84;
  TextAlignVertical textAlignVertical = 33;
  uint textAlignVerticalTag = 85;
  TextCase textCase = 34;
  uint textCaseTag = 86;
  TextDecoration textDecoration = 35;
  uint textDecorationTag = 87;
  Number lineHeight = 40;
  uint lineHeightTag = 92;
  FontName fontName = 41;
  uint fontNameTag = 93;
  TextData textData = 42;
  uint textDataTag = 94;
  DerivedTextData derivedTextData = 359;
  bool fontVariantCommonLigatures = 127;
  bool fontVariantContextualLigatures = 128;
  bool fontVariantDiscretionaryLigatures = 129;
  bool fontVariantHistoricalLigatures = 130;
  bool fontVariantOrdinal = 131;
  bool fontVariantSlashedZero = 132;
  FontVariantNumericFigure fontVariantNumericFigure = 133;
  FontVariantNumericSpacing fontVariantNumericSpacing = 134;
  FontVariantNumericFraction fontVariantNumericFraction = 135;
  FontVariantCaps fontVariantCaps = 136;
  FontVariantPosition fontVariantPosition = 137;
  Number letterSpacing = 165;
  string fontVersion = 202;
  LeadingTrim leadingTrim = 322;
  bool hangingPunctuation = 337;
  bool hangingList = 339;
  bool fallbackGlyphs = 550;
  int maxLines = 351;
  ResponsiveTextStyleVariant[] responsiveTextStyleVariants = 417;
  SectionStatus sectionStatus = 352;
  SectionStatusInfo sectionStatusInfo = 355;
  uint textUserLayoutVersion = 203;
  uint textExplicitLayoutVersion = 396;
  OpenTypeFeature[] toggledOnOTFeatures = 205;
  OpenTypeFeature[] toggledOffOTFeatures = 206;
  Hyperlink hyperlink = 223;
  Mention mention = 340;
  FontVariation[] fontVariations = 260;
  uint textBidiVersion = 279;
  TextTruncation textTruncation = 280;
  bool hasHadRTLText = 292;
  EmojiImageSet emojiImageSet = 391;
  string slideThumbnailHash = 392;
  bool visible = 6;
  uint visibleTag = 58;
  bool locked = 7;
  uint lockedTag = 59;
  LockMode lockMode = 434;
  float opacity = 8;
  uint opacityTag = 60;
  BlendMode blendMode = 9;
  uint blendModeTag = 61;
  Vector size = 11;
  uint sizeTag = 63;
  Matrix transform = 12;
  uint transformTag = 64;
  float[] dashPattern = 13;
  uint dashPatternTag = 65;
  bool mask = 16;
  uint maskTag = 68;
  Vector rotationOrigin = 424;
  bool maskIsOutline = 18;
  uint maskIsOutlineTag = 70;
  MaskType maskType = 317;
  float backgroundOpacity = 19;
  uint backgroundOpacityTag = 71;
  float cornerRadius = 20;
  uint cornerRadiusTag = 72;
  float strokeWeight = 26;
  uint strokeWeightTag = 78;
  StrokeAlign strokeAlign = 29;
  uint strokeAlignTag = 81;
  StrokeCap strokeCap = 30;
  uint strokeCapTag = 82;
  Number strokeCapSize = 497;
  StrokeJoin strokeJoin = 31;
  uint strokeJoinTag = 83;
  Paint[] fillPaints = 38;
  uint fillPaintsTag = 90;
  Paint[] strokePaints = 39;
  uint strokePaintsTag = 91;
  Effect[] effects = 43;
  uint effectsTag = 95;
  Color backgroundColor = 50;
  uint backgroundColorTag = 102;
  Path[] fillGeometry = 51;
  uint fillGeometryTag = 103;
  Path[] strokeGeometry = 52;
  uint strokeGeometryTag = 104;
  Path[] offsetFillMaskGeometry = 564;
  Paint[] textDecorationFillPaints = 411;
  bool textDecorationSkipInk = 412;
  Number textUnderlineOffset = 413;
  Number textDecorationThickness = 415;
  TextDecorationStyle textDecorationStyle = 416;
  TransformModifier[] transformModifiers = 455;
  Transform3d transform3d = 570;
  StrokeData strokeData = 571;
  Scene3d scene3d = 572;
  TransformOrigin transformOrigin = 587;
  float rectangleTopLeftCornerRadius = 145;
  float rectangleTopRightCornerRadius = 146;
  float rectangleBottomLeftCornerRadius = 147;
  float rectangleBottomRightCornerRadius = 148;
  bool rectangleCornerRadiiIndependent = 149;
  bool rectangleCornerToolIndependent = 150;
  bool proportionsConstrained = 151;
  OptionalVector targetAspectRatio = 423;
  bool useAbsoluteBounds = 258;
  bool borderTopHidden = 287;
  bool borderBottomHidden = 288;
  bool borderLeftHidden = 289;
  bool borderRightHidden = 290;
  bool bordersTakeSpace = 294;
  float borderTopWeight = 295;
  float borderBottomWeight = 296;
  float borderLeftWeight = 297;
  float borderRightWeight = 298;
  bool borderStrokeWeightsIndependent = 299;
  ConstraintType horizontalConstraint = 28;
  uint horizontalConstraintTag = 80;
  StackMode stackMode = 105;
  uint stackModeTag = 106;
  float stackSpacing = 107;
  uint stackSpacingTag = 108;
  float stackPadding = 109;
  uint stackPaddingTag = 110;
  StackCounterAlign stackCounterAlign = 120;
  StackJustify stackJustify = 121;
  StackAlign stackAlign = 208;
  float stackHorizontalPadding = 209;
  float stackVerticalPadding = 210;
  StackSize stackWidth = 211;
  StackSize stackHeight = 212;
  StackSize stackPrimarySizing = 229;
  StackJustify stackPrimaryAlignItems = 230;
  StackAlign stackCounterAlignItems = 231;
  float stackChildPrimaryGrow = 232;
  float stackPaddingRight = 233;
  float stackPaddingBottom = 234;
  StackCounterAlign stackChildAlignSelf = 236;
  StackPositioning stackPositioning = 269;
  bool stackReverseZIndex = 271;
  StackWrap stackWrap = 323;
  float stackCounterSpacing = 324;
  OptionalVector minSize = 325;
  OptionalVector maxSize = 326;
  StackCounterAlignContent stackCounterAlignContent = 343;
  int[] sortedMovingChildIndices = 406;
  uint stackLayoutVersion = 574;
  GUIDPositionMap gridRows = 435;
  GUIDPositionMap gridColumns = 436;
  float gridRowGap = 437;
  float gridColumnGap = 438;
  GUID gridRowAnchor = 439;
  GUID gridColumnAnchor = 440;
  uint gridRowSpan = 441;
  uint gridColumnSpan = 442;
  GUIDGridTrackSizeMap gridColumnsSizing = 474;
  GUIDGridTrackSizeMap gridRowsSizing = 475;
  GridChildAlign gridChildVerticalAlign = 476;
  GridChildAlign gridChildHorizontalAlign = 477;
  GridAutoTracks gridAutoTracks = 555;
  bool gridReflowEnabled = 556;
  bool isSnakeGameBoard = 344;
  GUID transitionNodeID = 139;
  GUID prototypeStartNodeID = 140;
  Color prototypeBackgroundColor = 141;
  TransitionInfo transitionInfo = 153;
  TransitionType transitionType = 154;
  float transitionDuration = 155;
  EasingType easingType = 156;
  bool transitionPreserveScroll = 181;
  ConnectionType connectionType = 182;
  string connectionURL = 183;
  PrototypeDevice prototypeDevice = 184;
  InteractionType interactionType = 187;
  float transitionTimeout = 188;
  bool interactionMaintained = 189;
  float interactionDuration = 190;
  bool destinationIsOverlay = 192;
  bool transitionShouldSmartAnimate = 207;
  PrototypeInteraction[] prototypeInteractions = 226;
  PrototypeInteraction[] objectAnimations = 426;
  PrototypeStartingPoint prototypeStartingPoint = 249;
  PluginData[] pluginData = 204;
  PluginRelaunchData[] pluginRelaunchData = 219;
  ConnectorEndpoint connectorStart = 242;
  ConnectorEndpoint connectorEnd = 243;
  ConnectorLineStyle connectorLineStyle = 244;
  StrokeCap connectorStartCap = 245;
  StrokeCap connectorEndCap = 246;
  ConnectorControlPoint[] connectorControlPoints = 253;
  ConnectorControlPoint[] connectorBezierControlPoints = 479;
  ConnectorTextMidpoint connectorTextMidpoint = 255;
  ConnectorType connectorType = 373;
  int connectorVersion = 533;
  Annotation[] annotations = 369;
  AnnotationMeasurement[] measurements = 384;
  AnnotationCategories annotationCategories = 453;
  ShapeWithTextType shapeWithTextType = 241;
  float shapeUserHeight = 247;
  bool isStrokePaintDerived = 530;
  DerivedImmutableFrameData derivedImmutableFrameData = 254;
  MultiplayerFieldVersion derivedImmutableFrameDataVersion = 338;
  NodeGenerationData nodeGenerationData = 240;
  JsxData jsxData = 491;
  DerivedJsxData derivedJsxData = 492;
  string stableKey = 493;
  CodeBlockLanguage codeBlockLanguage = 259;
  CodeBlockTheme codeBlockTheme = 433;
  LinkPreviewData linkPreviewData = 278;
  bool shapeTruncates = 282;
  bool sectionContentsHidden = 283;
  VideoPlayback videoPlayback = 300;
  StampData stampData = 301;
  SectionPresetInfo sectionPresetInfo = 370;
  PlatformShapeDefinition platformShapeDefinition = 409;
  MultiplayerMap widgetSyncedState = 273;
  uint widgetSyncCursor = 274;
  WidgetDerivedSubtreeCursor widgetDerivedSubtreeCursor = 275;
  WidgetPointer widgetCachedAncestor = 276;
  WidgetInputBehavior widgetInputBehavior = 285;
  string widgetTooltip = 286;
  WidgetHoverStyle widgetHoverStyle = 291;
  bool isWidgetStickable = 293;
  bool shouldHideCursorsOnWidgetHover = 360;
  WidgetMetadata widgetMetadata = 262;
  WidgetEvent[] widgetEvents = 263;
  WidgetPropertyMenuItem[] widgetPropertyMenuItems = 265;
  WidgetInputTextNodeType widgetInputTextNodeType = 401;
  MultiplayerMap jsxProps = 489;
  TableRowColumnPositionMap tableRowPositions = 308;
  TableRowColumnPositionMap tableColumnPositions = 309;
  TableRowColumnSizeMap tableRowHeights = 310;
  TableRowColumnSizeMap tableColumnWidths = 311;
  TableMergedCellMap tableMergedCells = 538;
  MultiplayerMap interactiveSlideConfigData = 371;
  MultiplayerMap interactiveSlideParticipantData = 372;
  FlappType flappType = 402;
  bool isEmbeddedPrototype = 486;
  string slideSpeakerNotes = 389;
  bool isSkippedSlide = 410;
  MultiplayerMap presentationOutlines = 573;
  ThemeID themeID = 379;
  SlideThemeData slideThemeData = 381;
  SlideThemeMap slideThemeMap = 390;
  string slideTemplateFileKey = 393;
  SlideNumber slideNumber = 443;
  string slideNumberSeparator = 456;
  GUID diagramParentId = 363;
  GUID layoutRoot = 362;
  string layoutPosition = 364;
  DiagramLayoutRuleType diagramLayoutRuleType = 366;
  DiagramParentIndex diagramParentIndex = 367;
  DiagramLayoutPaused diagramLayoutPaused = 368;
  bool isPageDivider = 380;
  InternalEnumForTest internalEnumForTest = 251;
  InternalDataForTest internalDataForTest = 257;
  bool autoRename = 14;
  uint autoRenameTag = 66;
  bool backgroundEnabled = 15;
  uint backgroundEnabledTag = 67;
  bool exportContentsOnly = 17;
  uint exportContentsOnlyTag = 69;
  float miterLimit = 25;
  uint miterLimitTag = 77;
  float textTracking = 27;
  uint textTrackingTag = 79;
  ConstraintType verticalConstraint = 37;
  uint verticalConstraintTag = 89;
  ExportSettings[] exportSettings = 45;
  uint exportSettingsTag = 97;
  TextAutoResize textAutoResize = 46;
  uint textAutoResizeTag = 98;
  LayoutGrid[] layoutGrids = 47;
  uint layoutGridsTag = 99;
  bool frameMaskDisabled = 115;
  uint frameMaskDisabledTag = 116;
  bool resizeToFit = 117;
  uint resizeToFitTag = 118;
  BooleanOperation booleanOperation = 36;
  uint booleanOperationTag = 88;
  VectorMirror handleMirroring = 44;
  uint handleMirroringTag = 96;
  uint count = 10;
  uint countTag = 62;
  float starInnerScale = 24;
  uint starInnerScaleTag = 76;
  ArcData arcData = 195;
  VectorData vectorData = 48;
  uint vectorDataTag = 100;
  uint vectorOperationVersion = 425;
  TextPathStart textPathStart = 432;
  bool exportBackgroundDisabled = 119;
  Guide[] guides = 138;
  bool internalOnly = 142;
  ScrollDirection scrollDirection = 159;
  float cornerSmoothing = 160;
  Vector scrollOffset = 166;
  bool exportTextAsSVGText = 175;
  ScrollContractedState scrollContractedState = 178;
  Vector contractedSize = 179;
  string fixedChildrenDivider = 180;
  ScrollBehavior scrollBehavior = 186;
  int derivedSymbolDataLayoutVersion = 196;
  NavigationType navigationType = 197;
  OverlayPositionType overlayPositionType = 198;
  Vector overlayRelativePosition = 199;
  OverlayBackgroundInteraction overlayBackgroundInteraction = 200;
  OverlayBackgroundAppearance overlayBackgroundAppearance = 201;
  GUID overrideKey = 213;
  bool containerSupportsFillStrokeAndCorners = 220;
  StackSize stackCounterSizing = 221;
  bool containersSupportFillStrokeAndCorners = 222;
  KeyTrigger keyTrigger = 224;
  string voiceEventPhrase = 227;
  GUID[] ancestorPathBeforeDeletion = 235;
  SymbolLink[] symbolLinks = 237;
  TextListData textListData = 239;
  bool detachOpticalSizeFromFontSize = 261;
  float listSpacing = 264;
  EmbedData embedData = 270;
  RichMediaData richMediaData = 272;
  MultiplayerMap renderedSyncedState = 277;
  bool simplifyInstancePanels = 284;
  HTMLTag accessibleHTMLTag = 302;
  ARIARole ariaRole = 303;
  ARIAAttributesMap ariaAttributes = 357;
  string accessibleLabel = 304;
  bool isDecorativeImage = 490;
  VariableData variableData = 306;
  VariableDataMap variableConsumptionMap = 307;
  VariableModeBySetMap variableModeBySetMap = 316;
  VariableSetMode[] variableSetModes = 312;
  VariableSetID variableSetID = 313;
  VariableResolvedDataType variableResolvedType = 314;
  VariableDataValues variableDataValues = 315;
  string variableTokenName = 350;
  VariableTimingDisplayUnit timingDisplayUnit = 566;
  VariableScope[] variableScopes = 353;
  VariableDataMap parameterConsumptionMap = 445;
  CodeSyntaxMap codeSyntax = 358;
  PasteSource pasteSource = 388;
  EditorType pageType = 397;
  GUID strokeBrushGuid = 446;
  uint64 strokeSeed = 482;
  VariableWidthPoint[] variableWidthPoints = 447;
  DynamicStrokeSettings dynamicStrokeSettings = 448;
  ScatterStrokeSettings scatterStrokeSettings = 449;
  StretchStrokeSettings stretchStrokeSettings = 450;
  Matrix[] scatterBrushTransforms = 488;
  BrushType brushType = 452;
  OptionalVector pathTrim = 542;
  float strokeOffset = 554;
  VariableSetID backingVariableSetId = 377;
  VariableID overriddenVariableId = 464;
  VariableIdOrVariableOverrideId backingVariableId = 378;
  bool isCollectionExtendable = 385;
  string rootVariableKey = 386;
  InheritedVariablesData inheritedVariableIds = 517;
  HandoffStatusMap handoffStatusMap = 361;
  AgendaPositionMap agendaPositionMap = 327;
  AgendaMetadataMap agendaMetadataMap = 328;
  MigrationStatus migrationStatus = 329;
  bool isSoftDeleted = 330;
  EditInfo editInfo = 331;
  ColorProfile colorProfile = 341;
  SymbolId detachedSymbolId = 342;
  ChildReadingDirection childReadingDirection = 346;
  string readingIndex = 347;
  DocumentColorProfile documentColorProfile = 349;
  DeveloperRelatedLink[] developerRelatedLinks = 354;
  string slideActiveThemeLibKey = 356;
  EditScopeInfo editScopeInfo = 365;
  SemanticWeight semanticWeight = 374;
  SemanticItalic semanticItalic = 375;
  bool areSlidesManuallyIndented = 403;
  bool isResponsiveSet = 387;
  DerivedBreakpointData derivedBreakpointData = 500;
  GUID defaultResponsiveSetId = 398;
  bool isPrimaryBreakpoint = 458;
  GUID primaryResponsiveNodeId = 457;
  GUID multiEditGlueId = 462;
  float breakpointMinWidth = 501;
  bool isBreakpointInFocus = 522;
  ResponsiveSetSettings responsiveSetSettings = 400;
  NodeBehaviors behaviors = 404;
  string sourceCode = 414;
  CollaborativeTextOpID[] sourceCodeCollaborativeTextVersion = 534;
  CollaborativePlainText collaborativeSourceCode = 444;
  CodeLibraryId belongsToCodeLibraryId = 427;
  ImportedCodeFiles importedCodeFiles = 467;
  CanvasNodeId codeFileCanvasNodeId = 468;
  bool isEntrypointCodeFile = 498;
  string componentOrStateGroupKey = 502;
  uint componentOrStateGroupVersion = 503;
  string sourceCodeLibraryKey = 504;
  string[] sourceCodeLibraryKeys = 515;
  UsedMakeLibrary[] usedMakeLibraries = 524;
  string makeLibraryComponentId = 518;
  bool shouldHidePreviewForMakeKitCreation = 520;
  bool isMakeKit = 551;
  PrototypeDevice codePreviewSettings = 531;
  CodeExample[] codeExamples = 525;
  CodeFileId exportedFromCodeFileId = 428;
  string codeExportName = 430;
  string codeComponentDescription = 547;
  CodeComponentId backingCodeComponentId = 429;
  bool isMainCodeComponent = 487;
  CodeSnapshotState codeSnapshotState = 431;
  NodeChatMessage[] chatMessages = 451;
  NodeChatCompressionState chatCompressionState = 485;
  AIChatThread aiChatThread = 496;
  string codeChatMessagesKey = 484;
  CodeSnapshot codeSnapshot = 459;
  CodeSnapshotLayers codeSnapshotLayers = 589;
  uint codeSnapshotInvalidatedAt = 480;
  bool isCodeBehavior = 465;
  bool autoForkCode = 469;
  bool hasBeenManuallyRenamed = 470;
  bool codeCreatedFromDesign = 471;
  CanvasNodeId codeCreatedFromDesignNodeId = 481;
  ImageImportMap imageImports = 473;
  CodeObjectType codeObjectType = 516;
  string codeFilePath = 472;
  CodeBehaviorData codeBehaviorData = 478;
  uint codeLibraryFormat = 519;
  bool isCodePreviewPlayingOnCanvas = 527;
  CodeEmbedInfo codeEmbedInfo = 532;
  bool isEmbedCodeLayer = 546;
  CodeSourceInfo codeSourceInfo = 558;
  string mimeType = 536;
  byte[] blobRef = 537;
  CMSSelector cmsSelector = 419;
  CMSConsumptionMap cmsConsumptionMap = 420;
  CMSRichTextStyleMap cmsRichTextStyleMap = 460;
  SymbolId repeaterSymbolId = 539;
  RepeaterCmsOverrideData repeaterCmsOverrideData = 540;
  RepeaterSymbolOverrideData repeaterSymbolOverrideData = 549;
  RepeaterOverrideData repeaterOverrideData = 541;
  uint[] aiEditedNodeChangeFieldNumbers = 405;
  string aiEditScopeLabel = 408;
  FirstDraftData firstDraftData = 407;
  FirstDraftKitElementData firstDraftKitElementData = 418;
  CooperRevertData cooperRevertData = 421;
  CooperTemplateData cooperTemplateData = 461;
  BuzzApprovalRequests buzzApprovalRequests = 528;
  BuzzApprovalNodeStatusInfo buzzApprovalNodeStatusInfo = 529;
  HubFileAttribution hubFileAttribution = 422;
  ManagedStringData managedStringData = 454;
  ThumbnailInfo thumbnailInfo = 466;
  AiCanvasPrompt aiCanvasPrompt = 494;
  CanvasNodeId backingNodeId = 499;
  string pageStatus = 548;
  TRSSTransform2D motionTransform = 523;
  int64 timelinePosition = 506;
  KeyframeValueData keyframeValue = 507;
  VariableData keyframeValueRef = 586;
  InterpolationType interpolationType = 505;
  BezierHandles bezierHandles = 508;
  EasingData easingData = 535;
  KeyframeOperation keyframeOperation = 509;
  TimelinePositionType timelinePositionType = 510;
  bool isClip = 545;
  GUID clipId = 511;
  uint64 timelineDuration = 512;
  int64 timelineOffset = 513;
  bool timelineDisabled = 543;
  PlaybackStyle playbackStyle = 514;
  TimelineDefinitionsMap timelineDefinitions = 552;
  TimelineAssignmentsMap timelineAssignments = 553;
  AnimationPresets animationPresets = 521;
  StyleIdForAnimation[] styleIdsForAnimation = 582;
  AnimationPresetId backingAnimationPresetId = 583;
  Tools tools = 568;
  CustomEffects customEffects = 569;
  TransitionOverrideData transitionOverrides = 526;
  bool useLegacySmartAnimate = 544;
  SourceControlConfig sourceControlConfig = 557;
  SpecBlockType specBlockType = 559;
  CollaborativePlainText specBlockContent = 560;
  string specCodeBlockLanguage = 561;
  string specBlockTableAlignment = 562;
  int specBlockIndentLevel = 563;
  string specImageHash = 575;
  int specWidth = 576;
  int specHeight = 577;
  TableRowColumnSizeMap specBlockTableRowHeights = 578;
  TableRowColumnSizeMap specBlockTableColumnWidths = 579;
  string specEmbedUrl = 590;
  bool placeholder = 565;
  string placeholderClientLifecycleId = 584;
  int placeholderInvalidateAt = 585;
  bool disableJitDst = 567;
  CustomToolArtifactRef customToolArtifactRef = 588;
}

enum GitRepoRefProvider {
  UGIT = 0;
  GITHUB = 1;
  OTHER = 2;
}

message GitRepoRef {
  GitRepoRefProvider provider = 1;
  string gitRepo = 2;
  string gitRef = 3;
}

message SourceControlConfig {
  GitRepoRef origin = 1;
  GitRepoRef upstream = 2;
}

message CodeSnapshot {
  CodeSnapshotState state = 6;
  uint invalidatedAt = 7;
  Paint[] paints = 1;
  Vector offset = 2;
  Vector layoutSize = 3;
  Vector canvasSize = 5;
  uint devicePixelRatio = 4;
}

message CodeOutputLayer {
  NodeChange node = 1;
}

message CodeSnapshotLayers {
  CodeSnapshotState state = 1;
  uint invalidatedAt = 2;
  CodeOutputLayer[] layers = 3;
}

message CodeBehaviorData {
  string name = 1;
  string icon = 2;
  string[] nodeTypes = 3;
  string category = 4;
  uint apiVersion = 5;
}

message CodeExample {
  string exampleName = 1;
  string codeExportName = 2;
}

message UsedMakeLibrary {
  string makeLibraryId = 1;
}

message CookieBannerText {
  string bannerHeader = 1;
  string bannerDisclaimerExplicit = 2;
  string bannerDisclaimerImplicit = 3;
  string policyLabel = 4;
  string acceptText = 5;
  string acknowledgeText = 6;
  string manageText = 7;
  string rejectText = 8;
  string necessaryText = 9;
  string necessaryDescription = 10;
  string analyticsText = 11;
  string analyticsDescription = 12;
  string preferencesText = 13;
  string preferencesDescription = 14;
  string marketingText = 15;
  string marketingDescription = 16;
  string saveLabel = 17;
  string triggerLabel = 18;
}

message CookieBannerSettings {
  bool enabled = 1;
  CookieBannerComponentType componentType = 2;
  CookieXAlignment xAlignment = 3;
  CookieYAlignment yAlignment = 4;
  CookieXAlignment triggerXAlignment = 5;
  CookieYAlignment triggerYAlignment = 6;
  TriggerComponentType triggerComponentType = 7;
  string policyUrl = 8;
  CookieBannerText text = 9;
  GUID policyLink = 10;
  string locale = 11;
}

enum CookieBannerComponentType {
  BANNER = 0;
  MODAL = 1;
}

enum TriggerComponentType {
  BANNER = 0;
  TAG = 1;
}

enum CookieXAlignment {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
}

enum CookieYAlignment {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

message ResponsiveSetSettings {
  string title = 1;
  string description = 2;
  ResponsiveScalingMode scalingMode = 3;
  float scalingMinFontSize = 4;
  float scalingMaxFontSize = 5;
  float scalingMinLayoutWidth = 6;
  float scalingMaxLayoutWidth = 7;
  string lang = 8;
  string faviconHash = 9;
  string socialImageHash = 10;
  string googleAnalyticsID = 11;
  bool blockSearchIndexing = 12;
  string customCodeHeadStart = 13;
  string customCodeHeadEnd = 14;
  string customCodeBodyStart = 15;
  string customCodeBodyEnd = 16;
  GUID faviconID = 17;
  GUID socialImageID = 18;
  bool addBypassLinks = 19;
  bool ignoreReducedMotion = 20;
  CookieBannerSettings cookieBanner = 21;
}

enum ResponsiveScalingMode {
  REFLOW = 0;
  SCALE = 1;
}

message CMSSelector {
  string cmsCollectionId = 1;
  CMSFilterCritera filterCriteria = 2;
  CMSSelectorSort[] sorts = 3;
  uint limit = 4;
}

message CMSFilterCritera {
  CMSFilterCriteriaMatchType matchType = 1;
  CMSSelectorFilter[] filters = 2;
}

enum CMSFilterCriteriaMatchType {
  MATCH_ALL = 0;
  MATCH_ANY = 1;
}

message CMSSelectorFilter {
  string cmsFieldId = 1;
  CMSSelectorFilterOperator op = 2;
  string comparisonValue = 3;
}

enum CMSSelectorFilterOperator {
  EQUALS = 0;
}

message CMSSelectorSort {
  string cmsFieldId = 1;
  CMSFieldOrderBy orderBy = 2;
}

enum CMSFieldOrderBy {
  ASCENDING = 0;
  DESCENDING = 1;
}

message CMSConsumptionMap {
  CMSConsumptionMapEntry[] entries = 1;
}

message CMSConsumptionMapEntry {
  CMSConsumptionField consumptionField = 1;
  string cmsFieldId = 2;
}

enum CMSConsumptionField {
  MISSING = 0;
  TEXT_DATA = 1;
}

message CMSRichTextStyleMap {
  CMSRichTextStyleEntry[] entries = 1;
}

message CMSRichTextStyleEntry {
  CMSRichTextStyleClass styleClass = 1;
  CMSRichTextDescriptor textDescriptor = 2;
}

enum CMSRichTextStyleClass {
  HEADING1 = 0;
  HEADING2 = 1;
  HEADING3 = 2;
  HEADING4 = 3;
  HEADING5 = 4;
  HEADING6 = 5;
  PARAGRAPH = 6;
  LINK = 7;
  BLOCKQUOTE = 8;
}

message CMSRichTextDescriptor {
  StyleId textStyleId = 1;
  FontName[] fontNameVariants = 2;
}

message RepeaterCmsOverrideData {
  NodeChange[] overrides = 1;
}

message RepeaterOverrideData {
  NodeChange[] parentIndexOverrides = 1;
}

message RepeaterSymbolOverrideData {
  RepeaterPositionOverrides[] overridesByPosition = 1;
}

message RepeaterPositionOverrides {
  ParentIndex position = 1;
  NodeChange[] overrides = 2;
}

message InheritedVariablesData {
  InheritedVariableEntry[] variableIds = 1;
}

message InheritedVariableEntry {
  VariableID variableId = 1;
}

message HubFileAttribution {
  string hubFileId = 1;
  string hubFileName = 2;
}

message ManagedStringData {
  string key = 1;
  string context = 2;
  string locale = 3;
  ManagedStringNode content = 4;
  ManagedStringContentSchema contentSchema = 5;
}

enum ManagedStringContentSchema {
  V0 = 0;
}

enum ManagedStringNodeType {
  TEXT = 0;
  CONCATENATE = 1;
  PLURAL = 2;
  PLACEHOLDER = 3;
}

message ManagedStringNode {
  ManagedStringNodeType type = 1;
  ManagedStringTextNodeData textNodeData = 2;
  ManagedStringConcatenateAstNodeData concatenateNodeData = 3;
  ManagedStringPluralAstNodeData pluralNodeData = 4;
  ManagedStringPlaceholderAstNodeData placeholderNodeData = 5;
}

message ManagedStringTextNodeData {
  string value = 1;
}

message ManagedStringConcatenateAstNodeData {
  ManagedStringNode[] values = 1;
}

enum ManagedStringPluralType {
  ZERO = 0;
  ONE = 1;
  TWO = 2;
  FEW = 3;
  MANY = 4;
  OTHER = 5;
}

message ManagedStringPluralAstNodeData {
  string identifier = 1;
  ManagedStringPluralTypeMapEntry[] conditions = 2;
}

message ManagedStringPluralTypeMapEntry {
  ManagedStringPluralType key = 1;
  ManagedStringNode value = 2;
}

enum ManagedStringFormatType {
  TEXT = 0;
  DATE = 1;
  TIME = 2;
  NUMBER = 3;
}

message ManagedStringPlaceholderAstNodeData {
  string identifier = 1;
  ManagedStringFormatType formatType = 2;
  string formatPattern = 3;
}

message CooperRevertData {
  NodeChange originalValues = 1;
}

message VideoPlayback {
  bool autoplay = 1;
  bool mediaLoop = 2;
  bool muted = 3;
  bool showControls = 4;
  uint startTimeMs = 5;
  uint endTimeMs = 6;
}

enum MediaAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  MUTE = 3;
  UNMUTE = 4;
  TOGGLE_MUTE_UNMUTE = 5;
  SKIP_FORWARD = 6;
  SKIP_BACKWARD = 7;
  SKIP_TO = 8;
  SET_PLAYBACK_RATE = 9;
}

enum AnimationTimelineAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  SET_PLAYHEAD = 3;
}

message WidgetHoverStyle {
  Paint[] fillPaints = 1;
  Paint[] strokePaints = 2;
  float opacity = 3;
  bool areFillPaintsSet = 4;
  bool areStrokePaintsSet = 5;
  bool isOpacitySet = 6;
}

message WidgetDerivedSubtreeCursor {
  uint sessionID = 1;
  uint counter = 2;
}

message MultiplayerMap {
  MultiplayerMapEntry[] entries = 1;
}

message MultiplayerMapEntry {
  string key = 1;
  string value = 2;
}

message VariableDataMap {
  VariableDataMapEntry[] entries = 1;
}

message VariableDataMapEntry {
  uint nodeField = 1;
  VariableData variableData = 2;
  VariableField variableField = 3;
}

enum VariableField {
  MISSING = 0;
  CORNER_RADIUS = 1;
  PARAGRAPH_SPACING = 2;
  PARAGRAPH_INDENT = 3;
  STROKE_WEIGHT = 4;
  STACK_SPACING = 5;
  STACK_PADDING_LEFT = 6;
  STACK_PADDING_TOP = 7;
  STACK_PADDING_RIGHT = 8;
  STACK_PADDING_BOTTOM = 9;
  VISIBLE = 10;
  TEXT_DATA = 11;
  WIDTH = 12;
  HEIGHT = 13;
  RECTANGLE_TOP_LEFT_CORNER_RADIUS = 14;
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS = 15;
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS = 16;
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS = 17;
  BORDER_TOP_WEIGHT = 18;
  BORDER_BOTTOM_WEIGHT = 19;
  BORDER_LEFT_WEIGHT = 20;
  BORDER_RIGHT_WEIGHT = 21;
  VARIANT_PROPERTIES = 22;
  STACK_COUNTER_SPACING = 23;
  MIN_WIDTH = 24;
  MAX_WIDTH = 25;
  MIN_HEIGHT = 26;
  MAX_HEIGHT = 27;
  FONT_FAMILY = 28;
  FONT_STYLE = 29;
  FONT_VARIATIONS = 30;
  OPACITY = 31;
  FONT_SIZE = 32;
  LETTER_SPACING = 34;
  LINE_HEIGHT = 36;
  OVERRIDDEN_SYMBOL_ID = 37;
  HYPERLINK = 38;
  CMS_SERIALIZED_RICH_TEXT_DATA = 39;
  SLOT_CONTENT_ID = 40;
  GRID_ROW_GAP = 41;
  GRID_COLUMN_GAP = 42;
  X_POSITION = 43;
  Y_POSITION = 44;
  ROTATION = 45;
  MOTION_TRANSLATION_X = 46;
  MOTION_TRANSLATION_Y = 47;
  MOTION_ROTATION = 48;
  MOTION_SCALE_X = 49;
  MOTION_SCALE_Y = 50;
  MOTION_SHEAR = 51;
  SCROLL_OFFSET_X = 52;
  SCROLL_OFFSET_Y = 53;
  PATH_TRIM_START = 54;
  PATH_TRIM_END = 55;
  DISSOLVE_PROGRESS = 56;
  EASING_DATA = 57;
  MEDIA_CURRENT_TIME = 58;
  TRANSFORM_3D_PERSPECTIVE = 59;
  TRANSFORM_3D_TRANSLATION_Z = 60;
  TRANSFORM_3D_ROTATION_X = 61;
  TRANSFORM_3D_ROTATION_Y = 62;
  TRANSFORM_3D_ROTATION_Z = 63;
  POLYGON_COUNT = 64;
  ARC_DATA_STARTING_ANGLE = 65;
  ARC_DATA_ENDING_ANGLE = 66;
  ARC_DATA_INNER_RADIUS = 67;
}

message VariableModeBySetMap {
  VariableModeBySetMapEntry[] entries = 1;
}

message VariableModeBySetMapEntry {
  VariableSetID variableSetID = 1;
  GUID variableModeID = 2;
  VariableSetID variableSetExtensionID = 3;
}

message CodeSyntaxMap {
  CodeSyntaxMapEntry[] entries = 1;
}

message CodeSyntaxMapEntry {
  CodeSyntaxPlatform platform = 1;
  string value = 2;
}

message TableMergedCellMap {
  TableMergedCellMapEntry[] entries = 1;
}

message TableMergedCellMapEntry {
  GUID rowId = 1;
  GUID colId = 2;
  int rowSpan = 3;
  int colSpan = 4;
}

message TableRowColumnPositionMap {
  TableRowColumnPositionMapEntry[] entries = 1;
}

message TableRowColumnPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDPositionMap {
  GUIDPositionMapEntry[] entries = 1;
}

message GUIDPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDGridTrackSizeMap {
  GUIDGridTrackSizeMapEntry[] entries = 1;
}

message GUIDGridTrackSizeMapEntry {
  GUID id = 1;
  GridTrackSize trackSize = 2;
}

message ObjectAnimationList {
  ObjectAnimationListItem[] entries = 1;
}

message ObjectAnimationListItem {
  GUID targetNodeId = 1;
  PrototypeAction animation = 2;
}

message GridTrackSize {
  GridTrackSizingFunction minSizing = 1;
  GridTrackSizingFunction maxSizing = 2;
}

message GridTrackSizingFunction {
  GridTrackSizingType type = 1;
  float value = 2;
}

enum GridTrackSizingType {
  FLEX = 0;
  FIXED = 1;
  HUG = 2;
}

message TableRowColumnSizeMap {
  TableRowColumnSizeMapEntry[] entries = 1;
}

message TableRowColumnSizeMapEntry {
  GUID id = 1;
  float size = 2;
}

message AgendaPositionMap {
  AgendaPositionMapEntry[] entries = 1;
}

message AgendaPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

enum AgendaItemType {
  NODE = 0;
  BLOCK = 1;
}

message AgendaMetadataMap {
  AgendaMetadataMapEntry[] entries = 1;
}

message AgendaMetadataMapEntry {
  GUID id = 1;
  AgendaMetadata data = 2;
}

message AgendaMetadata {
  string name = 1;
  AgendaItemType type = 2;
  GUID targetNodeID = 3;
  AgendaTimerInfo timerInfo = 4;
  AgendaVoteInfo voteInfo = 5;
  AgendaMusicInfo musicInfo = 6;
}

message AgendaTimerInfo {
  uint timerLength = 1;
}

message AgendaVoteInfo {
  uint voteCount = 1;
}

message AgendaMusicInfo {
  string songID = 1;
  uint startTimeMs = 2;
}

enum DiagramLayoutRuleType {
  NONE = 0;
  TREE = 1;
}

struct DiagramParentIndex {
  GUID guid;
  string position;
}

enum DiagramLayoutPaused {
  NO = 0;
  YES = 1;
}

message ComponentPropRef {
  uint nodeField = 1;
  GUID defID = 2;
  string zombieFallbackName = 3;
  ComponentPropNodeField componentPropNodeField = 4;
  bool isDeleted = 5;
}

enum ComponentPropNodeField {
  VISIBLE = 0;
  TEXT_DATA = 1;
  OVERRIDDEN_SYMBOL_ID = 2;
  INHERIT_FILL_STYLE_ID = 3;
  SLOT_CONTENT_ID = 4;
}

message ComponentPropAssignment {
  GUID defID = 1;
  ComponentPropValue value = 2;
  VariableData varValue = 3;
  DerivedTextData legacyDerivedTextData = 4;
}

message ComponentPropDef {
  GUID id = 1;
  string name = 2;
  ComponentPropValue initialValue = 3;
  string sortPosition = 4;
  GUID parentPropDefId = 5;
  ComponentPropType type = 6;
  bool isDeleted = 7;
  ComponentPropPreferredValues preferredValues = 8;
  VariableData varValue = 9;
  ParameterConfig parameterConfig = 10;
  string description = 11;
  SlotPropConfig slotPropConfig = 12;
  ColorArrayConfig colorArrayConfig = 13;
}

message ComponentPropValue {
  bool boolValue = 1;
  TextData textValue = 2;
  GUID guidValue = 3;
  float floatValue = 4;
  EasingData easingData = 5;
  Vector vectorValue = 6;
  Line lineValue = 7;
  Circle circleValue = 8;
  Rotation3D rotation3DValue = 9;
  CirclePoint circlePointValue = 10;
  Gradient gradientValue = 11;
  ColorPoint colorPointValue = 12;
}

message TimelineData {
  uint64 durationUs = 1;
  bool defaultTimeline = 2;
  GUID parentTimelineDefId = 3;
  PlaybackStyle playbackStyle = 4;
}

message TimelineDefinitionsMap {
  TimelineDefinitionsMapEntry[] entries = 1;
}

message TimelineDefinitionsMapEntry {
  GUID id = 1;
  TimelineData data = 2;
}

message TimelineAssignmentKey {
  GUID assignedTimelineId = 1;
  GUID containingTimelineId = 2;
}

message TimelineBindingData {
  int64 offsetUs = 1;
  bool disabled = 2;
}

message TimelineAssignmentsMap {
  TimelineAssignmentsMapEntry[] entries = 1;
}

message TimelineAssignmentsMapEntry {
  TimelineAssignmentKey key = 1;
  TimelineBindingData value = 2;
}

enum ComponentPropType {
  BOOL = 0;
  TEXT = 1;
  COLOR = 2;
  INSTANCE_SWAP = 3;
  VARIANT = 4;
  NUMBER = 5;
  IMAGE = 6;
  SLOT = 7;
  EASING = 8;
  COLOR_ARRAY = 9;
  VECTOR = 10;
  LINE = 11;
  CIRCLE = 12;
  ROTATION_3D = 13;
  CIRCLE_POINT = 14;
  GRADIENT = 15;
  COLOR_POINT = 16;
}

message ComponentPropPreferredValues {
  string[] stringValues = 1;
  InstanceSwapPreferredValue[] instanceSwapValues = 2;
}

message ParameterConfig {
  NumberPropConfig numberPropConfig = 1;
  ParameterConfigControl control = 2;
  SliderConfig sliderConfig = 3;
  VariableData label = 4;
  InputConfig inputConfig = 5;
  SelectConfig selectConfig = 6;
  PointConfig pointConfig = 7;
  LineConfig lineConfig = 8;
  PointRadiusConfig pointRadiusConfig = 9;
  Rotation3DConfig rotation3DConfig = 10;
  CirclePointConfig circlePointConfig = 11;
  ColorPointConfig colorPointConfig = 12;
  bool showDividerAbove = 13;
}

enum ParameterConfigControl {
  DEFAULT = 0;
  SLIDER = 1;
  INPUT = 2;
  SELECT = 3;
}

message InputConfig {
  VariableData unit = 1;
  VariableData min = 2;
  VariableData max = 3;
}

message SliderConfig {
  VariableData min = 1;
  VariableData max = 2;
  VariableData step = 3;
  VariableData unit = 4;
}

enum PointMode {
  CANVAS_AND_UI = 0;
  CANVAS = 1;
  UI = 2;
}

message PointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Line {
  Vector a = 1;
  Vector b = 2;
}

message LineConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Circle {
  Vector center = 1;
  float radius = 2;
}

message PointRadiusConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message Rotation3D {
  float x = 1;
  float y = 2;
  float z = 3;
  float translateZ = 4;
}

message Rotation3DConfig {
  PointMode mode = 1;
}

message CirclePoint {
  Vector center = 1;
  float radius = 2;
  float angle = 3;
}

message CirclePointConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message ColorPoint {
  Vector point = 1;
  VariableData color = 2;
}

message ColorPointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Gradient {
  GradientStop[] stops = 1;
}

message GradientStop {
  float position = 1;
  VariableData color = 2;
}

message SelectOption {
  VariableData value = 1;
  string label = 2;
}

message SelectConfig {
  SelectOption[] options = 1;
}

message ColorArrayConfig {
  uint minLength = 1;
  uint maxLength = 2;
}

message SlotPropConfig {
  bool stretchChildOnInsert = 1;
  bool displayByDefault = 2;
  uint minChildren = 3;
  uint maxChildren = 4;
  bool allowPreferredValuesOnly = 5;
}

message NumberPropConfig {
  ParameterConfigControl control = 1;
  VariableData min = 2;
  VariableData max = 3;
  VariableData step = 4;
}

message InstanceSwapPreferredValue {
  InstanceSwapPreferredValueType type = 1;
  string key = 2;
}

enum InstanceSwapPreferredValueType {
  COMPONENT = 0;
  STATE_GROUP = 1;
}

enum WidgetEvent {
  MOUSE_DOWN = 0;
  CLICK = 1;
  TEXT_EDIT_END = 2;
  ATTACHED_STICKABLES_CHANGED = 3;
  STUCK_STATUS_CHANGED = 4;
}

enum WidgetInputBehavior {
  WRAP = 0;
  TRUNCATE = 1;
  MULTILINE = 2;
}

message WidgetMetadata {
  string pluginID = 1;
  string pluginVersionID = 2;
  string widgetName = 3;
  bool isResizable = 4;
  bool isRotatable = 5;
}

enum WidgetPropertyMenuItemType {
  ACTION = 0;
  SEPARATOR = 1;
  COLOR = 2;
  DROPDOWN = 3;
  COLOR_SELECTOR = 4;
  TOGGLE = 5;
  LINK = 6;
}

message WidgetPropertyMenuSelectorOption {
  string option = 1;
  string tooltip = 2;
}

enum WidgetInputTextNodeType {
  WIDGET_CONTROLLED = 0;
  RICH_TEXT = 1;
}

message WidgetPropertyMenuItem {
  string propertyName = 1;
  string tooltip = 2;
  WidgetPropertyMenuItemType itemType = 3;
  string icon = 4;
  WidgetPropertyMenuSelectorOption[] options = 5;
  string selectedOption = 6;
  bool isToggled = 7;
  string href = 8;
  bool allowCustomColor = 9;
}

enum CodeBlockLanguage {
  TYPESCRIPT = 0;
  CPP = 1;
  RUBY = 2;
  CSS = 3;
  JAVASCRIPT = 4;
  HTML = 5;
  JSON = 6;
  GRAPHQL = 7;
  PYTHON = 8;
  GO = 9;
  SQL = 10;
  SWIFT = 11;
  KOTLIN = 12;
  RUST = 13;
  BASH = 14;
  PLAINTEXT = 15;
  MARKDOWN = 16;
}

enum CodeBlockTheme {
  FIGJAM_DARK = 0;
  DRACULA = 1;
  DUOTONE_SEA = 2;
  DUOTONE_SPACE = 3;
  DUOTONE_EARTH = 4;
  DUOTONE_FOREST = 5;
  DUOTONE_LIGHT = 6;
}

enum SpecBlockType {
  DEFAULT = 0;
  PARAGRAPH = 1;
  HEADING_1 = 2;
  HEADING_2 = 3;
  HEADING_3 = 4;
  HEADING_4 = 5;
  HEADING_5 = 6;
  HEADING_6 = 7;
  CODE_BLOCK = 8;
  BLOCK_QUOTE = 9;
  HORIZONTAL_RULE = 10;
  ORDERED_LIST_ITEM = 11;
  UNORDERED_LIST_ITEM = 12;
  DOCUMENT = 13;
  TABLE = 14;
  TABLE_ROW = 15;
  TABLE_CELL = 16;
  TODO_LIST_ITEM_UNCHECKED = 17;
  TODO_LIST_ITEM_CHECKED = 18;
  IMAGE = 19;
  EMBED = 20;
}

enum InternalEnumForTest {
  OLD = 1;
}

message InternalDataForTest {
  int testFieldA = 1;
}

message StateGroupPropertyValueOrder {
  string property = 1;
  string[] values = 2;
}

enum BackfillError {
  NONE = 0;
  TRANSIENT_RETRYING = 1;
  PERMANENTLY_FAILED = 2;
  PASTE_FAILED = 3;
}

message PartialPasteAnnotation {
  bool isPartial = 1;
  uint64 annotatedAt = 2;
  BackfillError errorState = 3;
}

message VariantPropSpec {
  GUID propDefId = 1;
  string value = 2;
}

message TextListData {
  int listID = 1;
  BulletType bulletType = 2;
  int indentationLevel = 3;
  int lineNumber = 4;
}

enum BulletType {
  ORDERED = 0;
  UNORDERED = 1;
  INDENT = 2;
  NO_LIST = 3;
}

message TextLineData {
  LineType lineType = 1;
  int styleId = 10;
  int indentationLevel = 2;
  SourceDirectionality sourceDirectionality = 9;
  Directionality directionality = 3;
  DirectionalityIntent directionalityIntent = 4;
  int downgradeStyleId = 5;
  int consistencyStyleId = 6;
  int listStartOffset = 7;
  bool isFirstLineOfList = 8;
}

message DerivedTextLineData {
  Directionality directionality = 1;
}

enum LineType {
  PLAIN = 0;
  ORDERED_LIST = 1;
  UNORDERED_LIST = 2;
  BLOCKQUOTE = 3;
  HEADER = 4;
}

enum SourceDirectionality {
  AUTO = 0;
  LTR = 1;
  RTL = 2;
}

enum Directionality {
  LTR = 0;
  RTL = 1;
}

enum DirectionalityIntent {
  IMPLICIT = 0;
  EXPLICIT = 1;
}

message PrototypeInteraction {
  GUID id = 1;
  PrototypeEvent event = 2;
  PrototypeAction[] actions = 3;
  bool isDeleted = 4;
  int stateManagementVersion = 5;
}

message PrototypeEvent {
  InteractionType interactionType = 1;
  bool interactionMaintained = 2;
  float interactionDuration = 3;
  KeyTrigger keyTrigger = 4;
  string voiceEventPhrase = 5;
  float transitionTimeout = 6;
  float mediaHitTime = 7;
}

message PrototypeVariableTarget {
  VariableID id = 1;
  NodeFieldAlias nodeFieldAlias = 2;
}

message ConditionalActions {
  PrototypeAction[] actions = 1;
  VariableData condition = 2;
}

message PrototypeAction {
  GUID transitionNodeID = 1;
  TransitionType transitionType = 2;
  float transitionDuration = 3;
  EasingType easingType = 4;
  float transitionTimeout = 5;
  bool transitionShouldSmartAnimate = 6;
  ConnectionType connectionType = 7;
  Vector overlayRelativePosition = 9;
  NavigationType navigationType = 10;
  bool transitionPreserveScroll = 11;
  float[] easingFunction = 12;
  Vector extraScrollOffset = 13;
  bool transitionResetScrollPosition = 25;
  bool transitionResetInteractiveComponents = 26;
  bool transitionOverridesEnabled = 42;
  string connectionURL = 8;
  bool openUrlInNewTab = 18;
  VariableData linkParam = 34;
  CMSItemPageTarget cmsTarget = 35;
  GUID targetVariableID = 14;
  VariableAnyValue targetVariableValue = 15;
  PrototypeVariableTarget targetVariable = 19;
  VariableData targetVariableData = 20;
  MediaAction mediaAction = 16;
  bool transitionResetVideoPosition = 17;
  float mediaSkipToTime = 21;
  float mediaSkipByAmount = 22;
  float mediaPlaybackRate = 36;
  VariableData[] conditions = 23;
  ConditionalActions[] conditionalActions = 24;
  VariableSetID targetVariableSetID = 27;
  GUID targetVariableModeID = 28;
  string targetVariableSetKey = 29;
  VariableSetID variableSetTargetExtensionId = 38;
  AnimationType animationType = 30;
  GUID animationTargetId = 31;
  AnimationPhase animationPhase = 32;
  AnimationState animationState = 33;
  bool simpleLink = 37;
  AnimationTimelineAction animationTimelineAction = 39;
  GUID animationTimelineDefId = 41;
  float animationSkipToTime = 40;
}

enum AnimationPhase {
  IN = 0;
  OUT = 1;
}

enum AnimationType {
  NONE = 0;
  FADE = 1;
  SLIDE_FROM_LEFT = 2;
  SLIDE_FROM_RIGHT = 3;
  SLIDE_FROM_TOP = 4;
  SLIDE_FROM_BOTTOM = 5;
}

message AnimationState {
  float opacity = 1;
  Matrix transform = 2;
}

message PrototypeStartingPoint {
  string name = 1;
  string description = 2;
  string position = 3;
}

enum TriggerDevice {
  KEYBOARD = 0;
  UNKNOWN_CONTROLLER = 1;
  XBOX_ONE = 2;
  PS4 = 3;
  SWITCH_PRO = 4;
}

message KeyTrigger {
  int[] keyCodes = 1;
  TriggerDevice triggerDevice = 2;
}

message Hyperlink {
  string url = 1;
  GUID guid = 2;
  CMSItemPageTarget cmsTarget = 4;
  bool openInNewTab = 3;
}

message CMSItemPageTarget {
  GUID nodeId = 1;
  string cmsItemId = 2;
  string fieldSchemaId = 3;
}

enum MentionSource {
  DEFAULT = 0;
  COPY_DUPLICATE = 1;
  SILENT_INSERT = 2;
}

message Mention {
  GUID id = 1;
  string mentionedUserId = 2;
  string mentionedByUserId = 3;
  string fileKey = 4;
  MentionSource source = 5;
  uint64 mentionedUserIdInt = 6;
  uint64 mentionedByUserIdInt = 7;
  string mentionedUserGroupId = 8;
}

message EmbedData {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailUrl = 4;
  float width = 5;
  float height = 6;
  string embedType = 7;
  string thumbnailImageHash = 8;
  string faviconImageHash = 9;
  string provider = 10;
  string originalText = 11;
  string description = 12;
  string embedVersionId = 13;
  bool isPublishedSite = 14;
}

message StampData {
  string userId = 1;
  string votingSessionId = 2;
  string stampedByUserId = 3;
}

message LinkPreviewData {
  string url = 1;
  string title = 2;
  string provider = 3;
  string description = 4;
  string thumbnailImageHash = 5;
  string faviconImageHash = 6;
  float thumbnailImageWidth = 7;
  float thumbnailImageHeight = 8;
}

message Viewport {
  Rect canvasSpaceBounds = 1;
  bool pixelPreview = 2;
  float pixelDensity = 3;
  GUID canvasGuid = 4;
}

message Mouse {
  MouseCursor cursor = 1;
  Vector canvasSpaceLocation = 2;
  Rect canvasSpaceSelectionBox = 3;
  GUID canvasGuid = 4;
  uint cursorHiddenReason = 5;
}

struct Click {
  uint id;
  Vector point;
}

struct ScrollPosition {
  GUID node;
  Vector scrollOffset;
}

struct TriggeredOverlay {
  GUID overlayGuid;
  GUID hotspotGuid;
  GUID swapGuid;
}

message TriggeredOverlayData {
  GUID overlayGuid = 1;
  GUID hotspotGuid = 2;
  GUID swapGuid = 3;
  GUID prototypeInteractionGuid = 4;
  GUIDPath hotspotBlueprintId = 5;
}

message TriggeredSetVariableActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableId = 2;
  string targetVariableData = 3;
  string resolvedVariableModes = 4;
}

message TriggeredSetVariableModeActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableSetKey = 2;
  string targetVariableModeId = 3;
  VariableSetID targetVariableSetId = 4;
}

message VideoStateChangeData {
  GUID targetNodeId = 1;
  bool isPlaying = 2;
  bool isPlayingSound = 3;
  uint[] currentTimes = 4;
  uint actionTakenTimestamp = 5;
}

message EmbeddedPrototypeData {
  GUID nodeId = 1;
  uint sessionId = 2;
}

message PresentedState {
  GUID baseScreenID = 1;
  TriggeredOverlayData[] overlays = 2;
}

enum TransitionDirection {
  FORWARD = 0;
  REVERSE = 1;
}

message TopLevelPlaybackChange {
  PresentedState oldState = 1;
  PresentedState newState = 2;
  GUIDPath hotspotBlueprintID = 3;
  GUID interactionID = 4;
  bool isHotspotInNewPresentedState = 5;
  TransitionDirection direction = 6;
  GUIDPath instanceStablePath = 7;
}

message InstanceStateChange {
  GUID stateID = 1;
  GUID interactionID = 2;
  GUIDPath hotspotStablePath = 3;
  GUIDPath instanceStablePath = 4;
  PlaybackChangePhase phase = 5;
}

message TextCursor {
  Rect selectionBox = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
}

message TextSelection {
  Rect[] selectionBoxes = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
  Vector textSelectionRange = 4;
  GUID textNodeOrContainingIfGuid = 5;
  GUID tableCellRowId = 6;
  GUID tableCellColId = 7;
}

enum PlaybackChangePhase {
  INITIATED = 0;
  ABORTED = 1;
  COMMITTED = 2;
}

message PlaybackChangeKeyframe {
  PlaybackChangePhase phase = 1;
  float progress = 2;
  float timestamp = 3;
}

message StateMapping {
  GUIDPath stablePath = 1;
  TopLevelPlaybackChange lastTopLevelChange = 2;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 3;
  float timestamp = 4;
}

message ScrollMapping {
  GUIDPath blueprintID = 1;
  uint overlayIndex = 2;
  Vector scrollOffset = 3;
}

message PlaybackUpdate {
  TopLevelPlaybackChange lastTopLevelChange = 1;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 2;
  ScrollMapping[] scrollMappings = 3;
  float timestamp = 4;
  Vector pointerLocation = 5;
  bool isTopLevelFrameChange = 6;
  StateMapping[] stateMappings = 7;
}

message ChatMessage {
  string text = 1;
  string previousText = 2;
}

message VoiceMetadata {
  string connectedCallId = 1;
}

message AprilFunCursor {
  string id = 1;
  bool trailEnabled = 2;
}

message AprilFunFigPal {
  string customization = 1;
  string name = 2;
}

enum Heartbeat {
  FOREGROUND = 0;
  BACKGROUND = 1;
}

enum SitesViewState {
  FILE = 0;
  CODE = 1;
  DAKOTA = 2;
  SETTINGS = 3;
  INSERT = 4;
  VARIABLES = 5;
}

enum DesignFullPageViewState {
  NONE = 0;
  DESIGN_SYSTEM = 1;
  VARIABLES = 2;
}

message AgentInfo {
  string name = 1;
  string logo = 2;
  string oauthClientId = 3;
}

message UserChange {
  uint sessionID = 1;
  string stableSessionID = 44;
  bool connected = 2;
  string name = 3;
  Color color = 4;
  string imageURL = 5;
  Viewport viewport = 6;
  Mouse mouse = 7;
  GUID[] selection = 8;
  uint[] observing = 9;
  string deviceName = 10;
  Click[] recentClicks = 11;
  ScrollPosition[] scrollPositions = 12;
  TriggeredOverlay[] triggeredOverlays = 13;
  string userID = 14;
  GUID lastTriggeredHotspot = 15;
  GUID lastTriggeredPrototypeInteractionID = 16;
  uint lastTriggeredObjectAnimationIndex = 38;
  TriggeredOverlayData[] triggeredOverlaysData = 17;
  PlaybackUpdate[] playbackUpdates = 18;
  ChatMessage chatMessage = 19;
  VoiceMetadata voiceMetadata = 20;
  bool canWrite = 21;
  bool highFiveStatus = 22;
  InstanceStateChange[] instanceStateChanges = 23;
  TextCursor textCursor = 24;
  TextSelection textSelection = 25;
  uint connectedAtTimeS = 26;
  bool focusOnTextCursor = 27;
  Heartbeat heartbeat = 28;
  TriggeredSetVariableActionData[] triggeredSetVariableActionData = 29;
  VideoStateChangeData[] videoStateChangeData = 30;
  string clientID = 31;
  GUID focusedSlideId = 32;
  TriggeredSetVariableModeActionData[] triggeredSetVariableModeActionData = 33;
  AprilFunCursor aprilFunCursor = 34;
  EmbeddedPrototypeData[] embeddedPrototypeData = 35;
  GUID activeSlidesEmbeddablePrototype = 36;
  GUID[] activeEmbeddedPrototypes = 43;
  GUID activeCodeComponentId = 37;
  AprilFunFigPal aprilFunFigPal = 39;
  CollaborativeTextSelection collaborativeTextSelection = 40;
  SitesViewState sitesViewState = 41;
  NodeChatExchange[] nodeChatExchanges = 42;
  DesignFullPageViewState designFullPageViewState = 45;
  AgentInfo agentInfo = 46;
}

message InteractiveSlideElementChange {
  string userID = 1;
  string anonymousUserID = 2;
  GUID nodeID = 3;
  string responseData = 4;
}

message NodeStatusChange {
  GUID[] nodeIds = 1;
  SectionStatusInfo statusInfo = 2;
}

message BuzzApprovalAssetEntry {
  GUID assetNodeId = 1;
  bool approved = 2;
}

message BuzzApprovalChange {
  BuzzApprovalAssetEntry[] assetEntries = 1;
  GUID canvasGridNodeId = 2;
  string requestId = 3;
}

enum SceneGraphQueryBehavior {
  DEFAULT = 0;
  CONTAINING_PAGE = 1;
  PLUGIN = 2;
}

enum SceneGraphQueryMode {
  ADD = 0;
  SET = 1;
}

message SceneGraphQuery {
  GUID startingNode = 1;
  uint depth = 2;
  SceneGraphQueryBehavior behavior = 3;
}

message NodeChangesMetadata {
  uint blobsFieldOffset = 1;
}

message CursorReaction {
  string imageUrl = 1;
}

message TimerInfo {
  bool isPaused = 1;
  uint timeRemainingMs = 2;
  uint totalTimeMs = 3;
  uint timerID = 4;
  string setBy = 5;
  uint songID = 6;
  uint lastReceivedSongTimestampMs = 7;
  string songUUID = 8;
}

message MusicInfo {
  bool isPaused = 1;
  uint messageID = 2;
  string songID = 3;
  uint lastReceivedSongTimestampMs = 4;
  bool isStopped = 5;
}

message PresenterNomination {
  uint sessionID = 1;
  bool isCancelled = 2;
}

message PresenterInfo {
  uint sessionID = 1;
  PresenterNomination nomination = 2;
  bool isReconnected = 3;
}

message ClientBroadcast {
  uint sessionID = 1;
  CursorReaction cursorReaction = 2;
  TimerInfo timer = 3;
  PresenterInfo presenter = 4;
  PresenterInfo prototypePresenter = 5;
  MusicInfo music = 6;
}

enum PasteAssetType {
  UNKNOWN = 0;
  VARIABLE = 1;
  STYLE_PROPERTIES = 2;
  STYLE_PROPERTIES_FILL = 3;
  STYLE_PROPERTIES_STROKE = 4;
  STYLE_PROPERTIES_EFFECT = 5;
}

message Message {
  MessageType type = 1;
  uint sessionID = 2;
  string stableSessionID = 42;
  uint ackID = 3;
  bool isRetransmission = 37;
  NodeChange[] nodeChanges = 4;
  UserChange[] userChanges = 5;
  InteractiveSlideElementChange interactiveSlideElementChange = 32;
  NodeStatusChange nodeStatusChange = 36;
  BuzzApprovalChange buzzApprovalChange = 44;
  Blob[] blobs = 6;
  uint blobBaseIndex = 30;
  string signalName = 7;
  Access access = 8;
  string styleSetName = 9;
  StyleSetType styleSetType = 10;
  StyleSetContentType styleSetContentType = 11;
  int pasteID = 12;
  Vector pasteOffset = 13;
  string pasteFileKey = 14;
  string signalPayload = 15;
  SceneGraphQuery[] sceneGraphQueries = 16;
  NodeChangesMetadata nodeChangesMetadata = 17;
  uint fileVersion = 18;
  bool pasteIsPartiallyOutsideEnclosingFrame = 19;
  GUID pastePageId = 20;
  bool isCut = 21;
  Message[] localUndoStack = 22;
  Message[] localRedoStack = 23;
  ClientBroadcast[] broadcasts = 24;
  uint reconnectSequenceNumber = 25;
  string pasteBranchSourceFileKey = 26;
  EditorType pasteEditorType = 27;
  string postSyncActions = 28;
  GUID[] publishedAssetGuids = 29;
  bool dirtyFromInitialLoad = 31;
  ClipboardSelectionRegion[] clipboardSelectionRegions = 33;
  EncodedOffsetsIndex encodedOffsetsIndex = 34;
  bool hasRepeatingContent = 35;
  uint64 sentTimestamp = 38;
  AnnotationCategory[] annotationCategories = 39;
  ClientRenderedMetadata clientRenderedMetadata = 40;
  PasteAssetType pasteAssetType = 41;
  ObjectAnimationList objectAnimations = 43;
  SceneGraphQueryMode sceneGraphQueryMode = 45;
}

message EncodedOffsetsIndex {
  uint nodeChangesFieldOffset = 1;
  uint nodeChangesFieldLength = 2;
  uint blobsFieldOffset = 3;
  GUIDAndEncodedOffset[] nodeChangeOffsets = 4;
}

struct GUIDAndEncodedOffset {
  GUID guid;
  uint offset;
}

message DiffChunk {
  uint[] nodeChanges = 1;
  NodePhase phase = 2;
  NodeChange displayNode = 3;
  GUID canvasId = 4;
  string canvasName = 5;
  bool canvasIsInternal = 6;
  uint[] chunksAffectingThisChunk = 7;
  NodeChange[] basisParentHierarchy = 8;
  NodeChange[] parentHierarchy = 9;
  GUID[] basisParentHierarchyGuids = 10;
  GUID[] parentHierarchyGuids = 11;
}

enum DiffType {
  BRANCHING = 0;
  NODE_CHANGES_ONLY = 1;
}

message DiffPayload {
  NodeChange[] nodeChanges = 1;
  Blob[] blobs = 2;
  DiffChunk[] diffChunks = 3;
  NodeChange[] diffBasis = 4;
  NodeChange[] basisParentNodeChanges = 5;
  NodeChange[] parentNodeChanges = 6;
  DiffType diffType = 7;
}

enum RichMediaType {
  ANIMATED_IMAGE = 0;
  VIDEO = 1;
}

message RichMediaData {
  string mediaHash = 1;
  RichMediaType richMediaType = 2;
}

enum VariableDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  ALIAS = 3;
  COLOR = 4;
  EXPRESSION = 5;
  MAP = 6;
  SYMBOL_ID = 7;
  FONT_STYLE = 8;
  TEXT_DATA = 9;
  INVALID = 10;
  NODE_FIELD_ALIAS = 11;
  CMS_ALIAS = 12;
  PROP_REF = 13;
  IMAGE = 14;
  MANAGED_STRING_ALIAS = 15;
  LINK = 16;
  JS_RUNTIME_ALIAS = 17;
  SLOT_CONTENT_ID = 18;
  DATE = 19;
  KEYFRAME_TRACK_ID = 20;
  KEYFRAME_TRACK_PARAMETER_DATA = 21;
  EASING = 22;
  TIMING = 23;
  VECTOR = 24;
  COLOR_ARRAY = 25;
  LINE = 26;
  CIRCLE = 27;
  ROTATION_3D = 28;
  CIRCLE_POINT = 29;
  GRADIENT = 30;
  COLOR_POINT = 31;
}

enum VariableResolvedDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  COLOR = 4;
  MAP = 5;
  SYMBOL_ID = 6;
  FONT_STYLE = 7;
  TEXT_DATA = 8;
  IMAGE = 9;
  LINK = 10;
  JS_RUNTIME_ALIAS = 11;
  SLOT_CONTENT_ID = 12;
  KEYFRAME_TRACK_ID = 13;
  KEYFRAME_TRACK_PARAMETER_DATA = 14;
  EASING = 15;
  TIMING = 16;
  VECTOR = 17;
  COLOR_ARRAY = 18;
  LINE = 19;
  CIRCLE = 20;
  ROTATION_3D = 21;
  CIRCLE_POINT = 22;
  GRADIENT = 23;
  COLOR_POINT = 24;
}

message VariableAnyValue {
  bool boolValue = 1;
  string textValue = 2;
  float floatValue = 3;
  VariableID alias = 4;
  Color colorValue = 5;
  Expression expressionValue = 6;
  VariableMap mapValue = 7;
  SymbolId symbolIdValue = 8;
  VariableFontStyle fontStyleValue = 9;
  TextData textDataValue = 10;
  NodeFieldAlias nodeFieldAliasValue = 11;
  CMSAlias cmsAliasValue = 12;
  PropRefValue propRefValue = 13;
  ImageParameterValue imageValue = 14;
  ManagedStringAlias managedStringAliasValue = 15;
  Hyperlink linkValue = 16;
  JsRuntimeAlias jsRuntimeAliasValue = 17;
  SlotContentId slotContentIdValue = 18;
  KeyframeTrackId keyframeTrackIdValue = 19;
  KeyframeTrackParameterValue keyframeTrackParameterValue = 20;
  EasingData easingValue = 21;
  Vector vectorValue = 22;
  ColorArray colorArrayValue = 23;
  Line lineValue = 24;
  Circle circleValue = 25;
  Rotation3D rotation3DValue = 26;
  CirclePoint circlePointValue = 27;
  Gradient gradientValue = 28;
  ColorPoint colorPointValue = 29;
}

enum ExpressionFunction {
  ADDITION = 0;
  SUBTRACTION = 1;
  RESOLVE_VARIANT = 2;
  MULTIPLY = 3;
  DIVIDE = 4;
  EQUALS = 5;
  NOT_EQUAL = 6;
  LESS_THAN = 7;
  LESS_THAN_OR_EQUAL = 8;
  GREATER_THAN = 9;
  GREATER_THAN_OR_EQUAL = 10;
  AND = 11;
  OR = 12;
  NOT = 13;
  STRINGIFY = 14;
  TERNARY = 15;
  VAR_MODE_LOOKUP = 16;
  NEGATE = 17;
  IS_TRUTHY = 18;
  KEYFRAME = 19;
  COMPOSE_COLOR = 20;
}

message Expression {
  ExpressionFunction expressionFunction = 1;
  VariableData[] expressionArguments = 2;
}

message VariableMapValue {
  string key = 1;
  VariableData value = 2;
  GUID guidKey = 3;
}

message VariableMap {
  VariableMapValue[] values = 1;
}

message ColorArray {
  VariableData[] colors = 1;
}

message VariableFontStyle {
  VariableData asString = 1;
  VariableData asFloat = 2;
  VariableData asVariations = 3;
}

message ImageParameterValue {
  Image image = 1;
  Image imageThumbnail = 2;
  Image animatedImage = 6;
  string altText = 3;
  uint originalImageHeight = 4;
  uint originalImageWidth = 5;
  uint animationFrame = 7;
}

message ThumbnailInfo {
  GUID nodeID = 1;
  string thumbnailVersion = 2;
}

message AiCanvasPrompt {
  string userPrompt = 1;
  string authorId = 2;
  GUID[] parentNodeIds = 3;
}

message NodeFieldAlias {
  GUIDPath stablePathToNode = 1;
  NodeFieldAliasType nodeField = 2;
  string indexOrKey = 3;
}

enum NodeFieldAliasType {
  MISSING = 0;
  COMPONENT_PROP_ASSIGNMENTS = 1;
}

message CMSAlias {
  string collectionId = 1;
  string itemId = 2;
  string fieldId = 3;
  VariableDataType type = 4;
}

message JsRuntimeAlias {
  string lookupKey = 1;
}

message PropRefValue {
  GUID defId = 1;
}

message ManagedStringId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ManagedStringPlaceholderMapEntry {
  string key = 1;
  string value = 2;
}

message SlotContentId {
  GUID guid = 1;
}

message ManagedStringAlias {
  ManagedStringId managedStringId = 1;
  ManagedStringPlaceholderMapEntry[] placeholderValues = 2;
}

message KeyframeTrackId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message AnimationPresetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ToolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CustomEffectId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message TRSSTransform2D {
  Vector translation = 1;
  float rotation = 2;
  Vector scale = 3;
  float shearX = 4;
}

message VariableData {
  VariableAnyValue value = 1;
  VariableDataType dataType = 2;
  VariableResolvedDataType resolvedDataType = 3;
}

message VariableSetMode {
  GUID id = 1;
  string name = 2;
  string sortPosition = 3;
  VariableSetID parentVariableSetId = 4;
  GUID parentModeId = 5;
}

message VariableDataValues {
  VariableDataValuesEntry[] entries = 1;
}

message VariableDataValuesEntry {
  GUID modeID = 1;
  VariableData variableData = 2;
}

enum VariableScope {
  ALL_SCOPES = 0;
  TEXT_CONTENT = 1;
  CORNER_RADIUS = 2;
  WIDTH_HEIGHT = 3;
  GAP = 4;
  ALL_FILLS = 5;
  FRAME_FILL = 6;
  SHAPE_FILL = 7;
  TEXT_FILL = 8;
  STROKE = 9;
  STROKE_FLOAT = 10;
  EFFECT_FLOAT = 11;
  EFFECT_COLOR = 12;
  OPACITY = 13;
  FONT_STYLE = 14;
  FONT_FAMILY = 15;
  FONT_SIZE = 16;
  LINE_HEIGHT = 17;
  LETTER_SPACING = 18;
  PARAGRAPH_SPACING = 19;
  PARAGRAPH_INDENT = 20;
  FONT_VARIATIONS = 21;
  TRANSFORM = 22;
}

message KeyframeAnyValue {
  float floatValue = 1;
  Color colorValue = 2;
  TextData textDataValue = 3;
  Vector vectorValue = 4;
}

enum KeyframeValueType {
  FLOAT = 0;
  INVALID = 1;
  COLOR = 2;
  TEXT_DATA = 3;
  VECTOR = 4;
}

message KeyframeValueData {
  KeyframeAnyValue value = 1;
  KeyframeValueType valueType = 2;
}

enum KeyframeTrackParameterType {
  INVALID = 0;
  MANUAL = 1;
  ANIMATION_PRESET = 2;
}

message ManualKeyframeTrackParameter {
  KeyframeTrackId keyframeTrackId = 1;
  GUID timelineDefId = 2;
}

message AnimationPresetKeyframeTrackParameter {
  AnimationPresetId animationPresetId = 1;
  KeyframeTrackId keyframeTrackId = 2;
  GUID timelineDefId = 3;
}

message KeyframeTrackAnyParameter {
  ManualKeyframeTrackParameter manual = 1;
  AnimationPresetKeyframeTrackParameter animationPreset = 2;
  GUID animationStyleBindingId = 3;
}

message KeyframeTrackParameter {
  KeyframeTrackAnyParameter value = 1;
  KeyframeTrackParameterType type = 2;
}

message KeyframeTrackParameterValue {
  KeyframeTrackParameter[] parameters = 1;
}

message AnimationPresets {
  AnimationPresetData[] presets = 1;
}

message AnimationPresetData {
  AnimationPresetId animationPresetId = 1;
  GUID timelineDefId = 2;
}

message StyleAnimation {
  AnimationPresetId animationPresetId = 1;
}

message StyleIdForAnimation {
  GUID id = 1;
  GUID timelineDefId = 2;
  StyleId animationStyleId = 3;
  int64 timelineOffset = 4;
}

message Tools {
  ToolData[] tools = 1;
}

message ToolData {
  ToolId toolId = 1;
  CodeComponentId backingCodeComponentId = 2;
  ComponentPropAssignment[] componentPropAssignments = 3;
}

message CustomEffects {
  CustomEffectData[] customEffects = 1;
}

message CustomEffectData {
  CustomEffectId customEffectId = 1;
}

message SpringParams {
  float stiffness = 1;
  float damping = 2;
  float mass = 3;
}

message TransitionEasingAnyValue {
  SpringParams springEasing = 1;
  BezierHandles bezierEasing = 2;
}

message EasingData {
  EasingType easingType = 1;
  TransitionEasingAnyValue easingValue = 2;
}

message TransitionOverride {
  GUID id = 1;
  float duration = 2;
  VariableData durationVar = 3;
  float delay = 4;
  VariableData delayVar = 5;
  EasingData easing = 6;
  VariableData easingVar = 7;
  uint64 createdAtMs = 8;
  GUID[] interactionIDs = 9;
  bool disabled = 10;
}

message TransitionOverrideData {
  TransitionOverride[] all = 1;
  TransitionOverridePropMap propertyOverrides = 2;
}

enum TransitionOverrideProp {
  ALL = 0;
  OPACITY = 1;
  TRANSLATION = 2;
  ROTATION = 3;
  SCALE = 4;
}

enum TransitionOverrideBindingTopLevelField {
  MISSING = 0;
  PARAMETER_CONSUMPTION_MAP = 1;
  EFFECT_DATA = 2;
  FILL_PAINT_DATA = 3;
  STROKE_PAINT_DATA = 4;
}

message TransitionOverrideBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  int parameterFieldValue = 2;
  int index = 3;
  int effectParametrizedFieldValue = 4;
}

enum KeyframeBindingEffectParametrizedField {
  MISSING = 0;
  OFFSET_X = 1;
  OFFSET_Y = 2;
  RADIUS = 3;
  SPREAD = 4;
  COLOR = 5;
  REFRACTION_RADIUS = 6;
  SPECULAR_ANGLE = 7;
  SPECULAR_INTENSITY = 8;
  CHROMATIC_ABERRATION = 9;
  SPLAY = 10;
  REFRACTION_INTENSITY = 11;
  START_RADIUS = 12;
  START_OFFSET_X = 13;
  START_OFFSET_Y = 14;
  END_OFFSET_X = 15;
  END_OFFSET_Y = 16;
  NOISE_SIZE_X = 17;
  NOISE_SIZE_Y = 18;
  DENSITY = 19;
  EFFECT_OPACITY = 20;
  SECONDARY_COLOR = 21;
}

message NodeContentsKeyframeBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  VariableField parameterFieldValue = 2;
  int index = 3;
  KeyframeBindingEffectParametrizedField effectParametrizedFieldValue = 4;
}

message TransitionOverridePropMap {
  TransitionOverridePropMapEntry[] entries = 1;
}

message TransitionOverridePropMapEntry {
  TransitionOverrideProp prop = 1;
  TransitionOverride[] overrides = 2;
  TransitionOverrideBindingLocation bindingLocation = 3;
  NodeContentsKeyframeBindingLocation nodeContentsBindingLocation = 4;
}

enum CodeSyntaxPlatform {
  WEB = 0;
  ANDROID = 1;
  iOS = 2;
}

message OptionalVector {
  Vector value = 1;
}

enum HTMLTag {
  AUTO = 0;
  ARTICLE = 1;
  SECTION = 2;
  NAV = 3;
  ASIDE = 4;
  H1 = 5;
  H2 = 6;
  H3 = 7;
  H4 = 8;
  H5 = 9;
  H6 = 10;
  HGROUP = 11;
  HEADER = 12;
  FOOTER = 13;
  ADDRESS = 14;
  P = 15;
  HR = 16;
  PRE = 17;
  BLOCKQUOTE = 18;
  OL = 19;
  UL = 20;
  MENU = 21;
  LI = 22;
  DL = 23;
  DT = 24;
  DD = 25;
  FIGURE = 26;
  FIGCAPTION = 27;
  MAIN = 28;
  DIV = 29;
  A = 30;
  EM = 31;
  STRONG = 32;
  SMALL = 33;
  S = 34;
  CITE = 35;
  Q = 36;
  DFN = 37;
  ABBR = 38;
  RUBY = 39;
  RT = 40;
  RP = 41;
  DATA = 42;
  TIME = 43;
  CODE = 44;
  VAR = 45;
  SAMP = 46;
  KBD = 47;
  SUB = 48;
  SUP = 49;
  I = 50;
  B = 51;
  U = 52;
  MARK = 53;
  BDI = 54;
  BDO = 55;
  SPAN = 56;
  BR = 57;
  WBR = 58;
  PICTURE = 59;
  SOURCE = 60;
  IMG = 61;
  FORM = 62;
  LABEL = 63;
  INPUT = 64;
  BUTTON = 65;
  SELECT = 66;
  DATALIST = 67;
  OPTGROUP = 68;
  OPTION = 69;
  TEXTAREA = 70;
  OUTPUT = 71;
  PROGRESS = 72;
  METER = 73;
  FIELDSET = 74;
  LEGEND = 75;
  VIDEO = 76;
}

enum ARIARole {
  AUTO = 0;
  NONE = 52;
  APPLICATION = 30;
  BANNER = 67;
  COMPLEMENTARY = 68;
  CONTENTINFO = 69;
  FORM = 70;
  MAIN = 71;
  NAVIGATION = 72;
  REGION = 73;
  SEARCH = 74;
  SEPARATOR = 13;
  ARTICLE = 31;
  COLUMNHEADER = 35;
  DEFINITION = 36;
  DIRECTORY = 38;
  DOCUMENT = 39;
  GROUP = 44;
  HEADING = 45;
  IMG = 46;
  LIST = 48;
  LISTITEM = 49;
  MATH = 50;
  NOTE = 53;
  PRESENTATION = 55;
  ROW = 56;
  ROWGROUP = 57;
  ROWHEADER = 58;
  TABLE = 62;
  TOOLBAR = 65;
  BUTTON = 1;
  CHECKBOX = 2;
  GRIDCELL = 3;
  LINK = 4;
  MENUITEM = 5;
  MENUITEMCHECKBOX = 6;
  MENUITEMRADIO = 7;
  OPTION = 8;
  PROGRESSBAR = 9;
  RADIO = 10;
  SCROLLBAR = 11;
  SLIDER = 14;
  SPINBUTTON = 15;
  TAB = 17;
  TABPANEL = 18;
  TEXTBOX = 19;
  TREEITEM = 20;
  COMBOBOX = 21;
  GRID = 22;
  LISTBOX = 23;
  MENU = 24;
  MENUBAR = 25;
  RADIOGROUP = 26;
  TABLIST = 27;
  TREE = 28;
  TREEGRID = 29;
  TOOLTIP = 66;
  ALERT = 75;
  LOG = 76;
  MARQUEE = 77;
  STATUS = 78;
  TIMER = 79;
  ALERTDIALOG = 80;
  DIALOG = 81;
  SEARCHBOX = 12;
  SWITCH = 16;
  BLOCKQUOTE = 32;
  CAPTION = 33;
  CELL = 34;
  DELETION = 37;
  EMPHASIS = 40;
  FEED = 41;
  FIGURE = 42;
  GENERIC = 43;
  INSERTION = 47;
  METER = 51;
  PARAGRAPH = 54;
  STRONG = 59;
  SUBSCRIPT = 60;
  SUPERSCRIPT = 61;
  TERM = 63;
  TIME = 64;
  IMAGE = 82;
  HEADING_1 = 83;
  HEADING_2 = 84;
  HEADING_3 = 85;
  HEADING_4 = 86;
  HEADING_5 = 87;
  HEADING_6 = 88;
  HEADER = 89;
  FOOTER = 90;
  SIDEBAR = 91;
  SECTION = 92;
  MAINCONTENT = 93;
  TABLE_CELL = 94;
  WIDGET = 95;
}

message MigrationStatus {
  bool dsdCleanup = 1;
}

message NodeFieldMap {
  NodeFieldMapEntry[] entries = 1;
}

message NodeFieldMapEntry {
  GUID guid = 1;
  uint field = 2;
  uint lastModifiedSequenceNumber = 3;
}

enum ColorProfile {
  SRGB = 0;
  DISPLAY_P3 = 1;
}

enum DocumentColorProfile {
  LEGACY = 0;
  SRGB = 1;
  DISPLAY_P3 = 2;
}

enum ChildReadingDirection {
  NONE = 0;
  LEFT_TO_RIGHT = 1;
  RIGHT_TO_LEFT = 2;
}

message ARIAAttributeAnyValue {
  bool boolValue = 1;
  string stringValue = 2;
  float floatValue = 3;
  int intValue = 4;
  string[] stringArrayValue = 5;
}

enum ARIAAttributeDataType {
  BOOLEAN = 0;
  STRING = 1;
  FLOAT = 2;
  INT = 3;
  STRING_LIST = 4;
}

message ARIAAttributeData {
  ARIAAttributeDataType type = 1;
  ARIAAttributeAnyValue value = 2;
}

message ARIAAttributesMap {
  ARIAAttributesMapEntry[] entries = 1;
}

message ARIAAttributesMapEntry {
  string attribute = 1;
  ARIAAttributeData value = 2;
}

message HandoffStatusMapEntry {
  GUID guid = 1;
  SectionStatusInfo handoffStatus = 2;
}

message HandoffStatusMap {
  HandoffStatusMapEntry[] entries = 1;
}

message EditScopeInfo {
  EditScopeStack[] editScopeStacks = 1;
  EditScopeSnapshot[] snapshots = 2;
}

message EditScopeSnapshot {
  EditScopeStack[] frames = 1;
  uint[] nodeChangeFieldNumbers = 2;
}

message EditScopeStack {
  EditScope[] stack = 1;
}

message EditScope {
  EditScopeType type = 1;
  string label = 2;
  EditorType editorType = 3;
}

enum EditScopeType {
  INVALID = 0;
  TEST_SETUP = 1;
  USER = 2;
  PLUGIN = 3;
  SYSTEM = 4;
  REST_API = 5;
  ONBOARDING = 6;
  AUTOSAVE = 7;
  AI = 8;
}

enum SectionPresetState {
  INSERTED = 0;
  USER_EDITED = 1;
}

enum EmojiImageSet {
  APPLE = 0;
  NOTO = 1;
}

enum SelectionRegionFocusType {
  NONE = 0;
  PRIMARY = 1;
  SECONDARY = 2;
}

message SectionPresetInfo {
  uint64 shelfId = 1;
  uint64 templateId = 2;
  string templateName = 3;
  SectionPresetState state = 4;
}

message ClipboardSelectionRegion {
  GUID parent = 1;
  GUID[] nodes = 2;
  Vector enclosingFrameOffset = 3;
  bool pasteIsPartiallyOutsideEnclosingFrame = 4;
  SelectionRegionFocusType focusType = 5;
}

enum FirstDraftKitType {
  LOCAL = 0;
  LIBRARY = 1;
  NONE = 2;
}

message FirstDraftKit {
  string key = 1;
  FirstDraftKitType type = 2;
}

message FirstDraftData {
  string generationId = 1;
  FirstDraftKit kit = 2;
}

enum FirstDraftKitElementType {
  NONE = 0;
  BUILDING_BLOCK = 1;
  GROUPED_COMPONENT = 2;
}

message FirstDraftKitElementData {
  FirstDraftKitElementType type = 1;
}

enum PlatformShapeProperty {
  FILL = 0;
  STROKE = 1;
  TEXT = 2;
  STROKE_COLOR = 3;
}

enum PlatformShapeBehaviorType {
  SHAPE = 0;
  CONTAINER = 1;
  ADVANCED_CONTAINER = 2;
}

message PlatformShapePropertyMapEntry {
  PlatformShapeProperty property = 1;
  GUIDPath[] nodePaths = 2;
}

message PlatformShapeDefinition {
  PlatformShapePropertyMapEntry[] propertyMapEntries = 1;
  PlatformShapeBehaviorType behaviorType = 2;
  GUIDPath thumbnailNode = 3;
}

message NodeBehaviors {
  LinkBehavior link = 1;
  AppearBehavior appear = 2;
  HoverBehavior hover = 3;
  PressBehavior press = 4;
  FocusBehavior focus = 5;
  ScrollParallaxBehavior scrollParallax = 6;
  ScrollTransformBehavior scrollTransform = 7;
  CursorBehavior cursor = 8;
  MarqueeBehavior marquee = 9;
  CodeBehavior[] code = 10;
}

message BehaviorTransition {
  EasingType easingType = 1;
  float[] easingFunction = 2;
  float transitionDuration = 3;
  float delay = 4;
  VariableData transitionDurationVar = 5;
  VariableData delayVar = 6;
}

enum AppearBehaviorTrigger {
  PAGE_LOAD = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
  SCROLL_DIRECTION = 4;
}

enum RelativeDirection {
  UP = 1;
  DOWN = 2;
  LEFT = 3;
  RIGHT = 4;
}

message AppearBehavior {
  AppearBehaviorTrigger trigger = 1;
  RelativeDirection direction = 2;
  GUID otherLayer = 3;
  BehaviorTransition enterTransition = 4;
  NodeChange enterState = 5;
  BehaviorTransition exitTransition = 6;
  NodeChange exitState = 7;
  bool playsOnce = 8;
  VariableData playsOnceVar = 9;
  bool isDeleted = 10;
}

message HoverBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message PressBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message FocusBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message ScrollParallaxBehavior {
  ScrollDirection axis = 1;
  float speed = 2;
  bool relativeToPage = 3;
  VariableData speedVar = 4;
  bool isDeleted = 5;
}

enum ScrollTransformBehaviorTrigger {
  PAGE_HEIGHT = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
}

message ScrollTransformBehavior {
  ScrollTransformBehaviorTrigger trigger = 1;
  GUID otherLayer = 2;
  BehaviorTransition transition = 3;
  NodeChange fromState = 4;
  NodeChange toState = 5;
  bool playsOnce = 6;
  bool playsOnceVar = 7;
  VariableData playsOnceVar2 = 8;
  bool isDeleted = 9;
}

message CursorBehavior {
  float hotspotX = 1;
  float hotspotY = 2;
  GUID cursorGuid = 3;
  bool isDeleted = 4;
}

message MarqueeBehavior {
  RelativeDirection direction = 1;
  float speed = 2;
  bool shouldLoopInfinitely = 3;
  VariableData speedVar = 4;
  VariableData shouldLoopInfinitelyVar = 5;
  VariableData pauseOnHover = 6;
  bool isDeleted = 7;
}

message CodeBehavior {
  CodeComponentId codeComponentId = 1;
  ComponentPropAssignment[] componentPropAssignments = 2;
  bool isDeleted = 3;
}

message ClientRenderedMetadata {
  string loadID = 1;
  string trackingSessionId = 2;
  uint trackingSessionSequenceId = 3;
  string reconnectID = 4;
}

enum LinkBehaviorType {
  URL = 1;
  PAGE = 2;
}

message LinkBehavior {
  LinkBehaviorType type = 1;
  string url = 2;
  GUID page = 3;
  bool openInNewWindow = 4;
}

message VariableIdOrVariableOverrideId {
  VariableID variableId = 1;
  VariableOverrideId variableOverrideId = 2;
}

struct IndexFontVariationAxis {
  string tag;
  string name;
  float min;
  float max;
  float defaultValue;
}

struct IndexFontVariationAxisValue {
  string tag;
  float value;
}

message IndexFontStyle {
  string name = 1;
  string postscript = 2;
  float weight = 3;
  bool italic = 4;
  float stretch = 5;
  IndexFontVariationAxisValue[] variationAxisValues = 6;
}

message IndexFontFile {
  string filename = 1;
  uint version = 2;
  string family = 3;
  IndexFontStyle[] styles = 4;
  IndexFontVariationAxis[] variationAxes = 5;
  bool useFontOpticalSize = 6;
}

struct IndexFamilyRename {
  string oldFamily;
  string newFamily;
}

struct IndexStyleRename {
  string oldStyle;
  string newStyle;
}

struct IndexFamilyStylesRename {
  string familyName;
  IndexStyleRename[] styleRenames;
}

struct IndexRenames {
  IndexFamilyRename[] family;
  IndexFamilyStylesRename[] style;
}

struct IndexEmojiSequence {
  uint[] codepoints;
}

struct IndexEmojis {
  uint revision;
  uint[] sizes;
  IndexEmojiSequence[] sequences;
}

message FontIndex {
  uint schemaVersion = 1;
  IndexFontFile[] files = 2;
  IndexRenames renames = 3;
  IndexEmojis emojis = 4;
}

message SlideThemeData {
  ThemeID themeID = 1;
  string version = 2;
}

enum SlideNumber {
  NONE = 0;
  SLIDE = 1;
  SECTION = 2;
  SUBSECTION = 3;
  TOTAL_WITHIN_DECK = 4;
  TOTAL_WITHIN_SECTION = 5;
}

enum NodeChatMessageType {
  USER_MESSAGE = 0;
  ASSISTANT_MESSAGE = 1;
  TOOL_MESSAGE = 2;
  SYSTEM_MESSAGE = 3;
}

message NodeChatMessage {
  GUID id = 1;
  NodeChatMessageType type = 2;
  string userId = 3;
  string textContent = 4;
  uint sentAt = 5;
  NodeChatToolCall[] toolCalls = 6;
  NodeChatToolResult[] toolResults = 7;
  uint64 sentAt64 = 8;
}

message NodeChatToolCall {
  string toolCallId = 1;
  string toolName = 2;
  string argsJson = 3;
}

message NodeChatToolResult {
  string toolCallId = 1;
  string toolName = 2;
  string resultJson = 3;
}

message NodeChatExchange {
  GUID node = 1;
  NodeChatMessage[] messages = 2;
  bool isTyping = 3;
  FileUpdate[] fileUpdates = 4;
}

message NodeChatCompressionState {
  uint startIndex = 1;
  string summary = 2;
}

message FileUpdate {
  string name = 1;
  string contents = 2;
  bool isDeleted = 3;
}

message AIChatContentPart {
  AIChatContentPartType type = 1;
  AIChatContentPartAnyValue value = 2;
}

enum AIChatContentPartType {
  INVALID = 0;
  TEXT = 1;
  SELECTED_NODE_IDS = 2;
}

message AIChatContentPartAnyValue {
  string textValue = 1;
  string[] selectedNodeIds = 2;
}

enum AIChatMessageRole {
  USER = 0;
  ASSISTANT = 1;
  TOOL = 2;
  SYSTEM = 3;
}

message AIChatMessage {
  uint createdAtMs = 1;
  AIChatMessageRole role = 2;
  AIChatContentPart[] content = 3;
  string clientId = 4;
  uint64 createdAtMs64 = 5;
}

message AIChatThread {
  AIChatMessage[] messages = 1;
}

enum CooperTemplateType {
  CUSTOM = 0;
  TWITTER_POST = 1;
  LINKEDIN_POST = 2;
  INSTA_POST_SQUARE = 3;
  INSTA_POST_PORTRAIT = 4;
  INSTA_STORY = 5;
  INSTA_AD = 6;
  FACEBOOK_POST = 7;
  FACEBOOK_COVER_PHOTO = 8;
  FACEBOOK_EVENT_COVER = 9;
  FACEBOOK_AD_PORTRAIT = 10;
  FACEBOOK_AD_SQUARE = 11;
  PINTEREST_AD_PIN = 12;
  TWITTER_BANNER = 13;
  LINKEDIN_POST_SQUARE = 15;
  LINKEDIN_POST_PORTRAIT = 16;
  LINKEDIN_POST_LANDSCAPE = 17;
  LINKEDIN_PROFILE_BANNER = 18;
  LINKEDIN_ARTICLE_BANNER = 19;
  LINKEDIN_AD_LANDSCAPE = 20;
  LINKEDIN_AD_SQUARE = 21;
  LINKEDIN_AD_VERTICAL = 22;
  YOUTUBE_THUMBNAIL = 23;
  YOUTUBE_BANNER = 24;
  YOUTUBE_AD = 25;
  TWITCH_BANNER = 26;
  GOOGLE_LEADERBOARD_AD = 27;
  GOOGLE_LARGE_AD = 28;
  GOOGLE_MED_AD = 29;
  GOOGLE_MOBILE_BANNER_AD = 30;
  GOOGLE_SKYSCRAPER_AD = 31;
  CARD_HORIZONTAL = 32;
  CARD_VERTICAL = 33;
  PRINT_US_LETTER = 34;
  POSTER = 35;
  BANNER_STANDARD = 36;
  BANNER_WIDE = 37;
  BANNER_ULTRAWIDE = 38;
  NAME_TAG_PORTRAIT = 39;
  NAME_TAG_LANDSCAPE = 40;
  INSTA_REEL_COVER = 41;
  ZOOM_BACKGROUND = 42;
  TIKTOK_POST = 43;
  INSTA_AD_PORTRAIT = 44;
  INSTA_POST_TALL_PORTRAIT = 45;
  TWITTER_POST_SQUARE = 46;
  FACEBOOK_POST_SQUARE = 47;
  FACEBOOK_POST_PORTRAIT = 48;
  FACEBOOK_STORY = 49;
  GOOGLE_SQUARE_AD = 50;
  GOOGLE_SMALL_SQUARE_AD = 51;
  GOOGLE_NARROW_SKYSCRAPER_AD = 52;
  GOOGLE_HALF_PAGE_AD = 53;
  GOOGLE_LARGE_LEADERBOARD_AD = 54;
  GOOGLE_BILLBOARD_AD = 55;
  GOOGLE_BANNER_LEADERBOARD_AD = 56;
  GOOGLE_TOP_BANNER_AD = 57;
  GOOGLE_MOBILE_LEADERBOARD_BANNER_AD = 58;
  GOOGLE_LARGE_MOBILE_BANNER_AD = 59;
  GOOGLE_MOBILE_INTERSTITIAL_AD = 60;
  GOOGLE_MOBILE_MED_RECTANGLE_AD = 61;
  PINTEREST_PIN_STANDARD = 62;
  PINTEREST_PIN_SQUARE = 63;
  PINTEREST_AD_SQUARE = 64;
  PRINT_A4 = 65;
}

message CooperTemplateData {
  CooperTemplateType type = 1;
}

message ImageImportMap {
  ImageImport[] imports = 1;
}

message ImageImport {
  string name = 1;
  Image image = 2;
}

enum InterpolationType {
  HOLD = 0;
  BEZIER = 1;
  SPRING = 2;
}

message BezierHandles {
  float p1x = 1;
  float p1y = 2;
  float p2x = 3;
  float p2y = 4;
}

enum KeyframeOperation {
  SET = 0;
  SCALE = 1;
  OFFSET = 2;
}

enum TimelinePositionType {
  ABSOLUTE = 0;
  RELATIVE = 1;
}

enum PlaybackStyle {
  ONCE = 0;
  LOOP = 1;
  BOOMERANG = 2;
}
`);ar(cr);function lr(e,t){let n=e.readVarUint();return t?.kind===`ENUM`?t.names[n]??null:null}function ur(e,t,n){let r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=!1;for(let f=e.readVarUint();f!==0;f=e.readVarUint()){let p=n.byId[f];if(!p)throw Error(`Invalid field ${f} in Kiwi NodeChange`);switch(p.name){case`guid`:r=e.readVarUint(),i=e.readVarUint();break;case`parentIndex`:a=e.readVarUint(),o=e.readVarUint(),s=e.offset,e.skipString();break;case`phase`:c=lr(e,p.definition);break;case`type`:l=lr(e,p.definition);break;case`name`:l===`DOCUMENT`||l===`CANVAS`?u=e.readString():e.skipString();break;case`internalOnly`:d=!!e.readByte();break;default:t.skip(p,e)}}if(l!==`DOCUMENT`&&l!==`CANVAS`||r===null||i===null)return null;let f=null;if(s!==null){let t=e.offset;e.offset=s,f=e.readString(),e.offset=t}let p=a===null||o===null?null:`${a}:${o}`;return{sourceId:`${r}:${i}`,parentId:p,position:f,phase:c,type:l,name:u??`Page`,internalOnly:d}}function dr(e,t){let n=e.definition(`Message`),r=e.definition(`NodeChange`);if(n.kind!==`MESSAGE`||r.kind!==`MESSAGE`)return[];let i=new F(t),a=[];for(let t=i.readVarUint();t!==0;t=i.readVarUint()){let o=n.byId[t];if(!o)throw Error(`Invalid field ${t} in Kiwi Message`);if(o.name!==`nodeChanges`||!o.isArray){e.skip(o,i);continue}for(let t=i.readVarUint();t>0;t--){let t=ur(i,e,r);t&&a.push(t)}break}let o=a.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return a.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!o||e.parentId===o)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}new Uint8Array([40,181,47,253]);function fr(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var pr=new Set((cr.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name)),mr=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],hr=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]],gr=Object.fromEntries(mr.map(([e,t])=>[t,e])),_r={LNUM:{field:`fontVariantNumericFigure`,value:`LINING`},ONUM:{field:`fontVariantNumericFigure`,value:`OLDSTYLE`},PNUM:{field:`fontVariantNumericSpacing`,value:`PROPORTIONAL`},TNUM:{field:`fontVariantNumericSpacing`,value:`TABULAR`},FRAC:{field:`fontVariantNumericFraction`,value:`DIAGONAL`},AFRC:{field:`fontVariantNumericFraction`,value:`STACKED`},SMCP:{field:`fontVariantCaps`,value:`SMALL`},PCAP:{field:`fontVariantCaps`,value:`PETITE`},C2SC:{field:`fontVariantCaps`,value:`ALL_SMALL`},C2PC:{field:`fontVariantCaps`,value:`ALL_PETITE`},UNIC:{field:`fontVariantCaps`,value:`UNICASE`},TITL:{field:`fontVariantCaps`,value:`TITLING`}};function vr(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function yr(e){let t=[];for(let[n,r]of mr){let i=e[n];i!==void 0&&vr(t,r,i)}for(let[n,r]of hr){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)vr(t,e,!0);else i&&vr(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])vr(t,n,!0);for(let n of e.toggledOffOTFeatures??[])vr(t,n,!1);return t}function br(e,t,n,r,i,a){let o=gr[t];if(o){e[o]=n;return}let s=_r[t];if(s){n?(e[s.field]=s.value,a.delete(s.field)):e[s.field]===void 0&&a.set(s.field,`NORMAL`);return}pr.has(t)&&(n?r.push(t):i.push(t))}function xr(e,t){let n=[],r=[],i=new Map;for(let a of t)br(e,a.tag.toUpperCase(),a.enabled,n,r,i);for(let t of i.keys())e[t]=`NORMAL`;n.length>0&&(e.toggledOnOTFeatures=n),r.length>0&&(e.toggledOffOTFeatures=r)}function Sr(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function Cr(e){if(e.length===4)return(e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3))>>>0}function wr(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?Sr(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function Tr(e,t,n){return t===0&&n===0?e:Xe(e,1,0,0,1,t,n)}function Er(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?Ge(r):null,a=i?.x??0,o=i?.y??0,s=i?i.x+i.width:t,c=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),o=Math.min(o,t.y-e),s=Math.max(s,t.x+e),c=Math.max(c,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-o+ +(o<0)),right:Math.max(0,s-t+ +(s>t)),bottom:Math.max(0,c-n+ +(c>n))}}function Dr(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=Tr(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=Tr(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function Or(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=Er(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},Dr(e,a,o))}function kr(e){return Object.getPrototypeOf(e)===Object.prototype}function Ar(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(e=>Ar(e));if(!kr(e))return structuredClone(e);let t={};for(let n of Object.keys(e))t[n]=Ar(e[n]);return t}function z(e){return Ar(e)}var jr=64;function Mr(e,t=0){if(t>jr)throw Error(`Variable expression exceeds maximum depth`);let n=e?.value;if(e?.dataType===`EXPRESSION`&&!n?.expressionValue)throw Error(`Missing variable expression value`);if(!n)return;if(n.alias)return{multiplier:1,reference:n.alias};if(typeof n.floatValue==`number`&&Number.isFinite(n.floatValue))return{multiplier:n.floatValue};let r=n.expressionValue;if(r){if(r.expressionFunction===`STRINGIFY`||r.expressionFunction===`IS_TRUTHY`)return Nr(r);if(r.expressionFunction!==`MULTIPLY`||!r.expressionArguments?.length)throw Error(`Unsupported variable expression ${r.expressionFunction}`);return Pr(r.expressionArguments,t)}}function Nr(e){let t=e.expressionArguments??[],n=t.length===1?t[0].value?.alias:void 0,r=e.expressionFunction;if(!n)throw Error(`Variable expression ${r} must wrap one alias`);return{multiplier:1,reference:n}}function Pr(e,t){let n={multiplier:1};for(let r of e){let e=Mr(r,t+1);if(!e||n.reference&&e.reference)throw Error(`Variable expression is not a constant multiplied by one alias`);n.multiplier*=e.multiplier,e.reference&&(n.reference=e.reference)}if(!Number.isFinite(n.multiplier))throw Error(`Variable expression has a non-finite multiplier`);return n}function Fr(e,t,n=0){if(n>jr)throw Error(`Variable expression exceeds maximum depth`);e?.value?.alias&&t(e.value.alias);for(let r of e?.value?.expressionValue?.expressionArguments??[])Fr(r,t,n+1)}var Ir={};function Lr(e){return e.variableModeBySetMap?.entries??[]}function Rr(e){let t=e.variableSetID?.guid;return t?P(t):void 0}function zr(e){let t=new Map;for(let n of Lr(e)){let e=Rr(n);e&&t.set(e,n.variableModeID?P(n.variableModeID):void 0)}return t}function Br(e,t){return`variableModeBySetMap`in t?Hr(e,t,`clear`):Ir}function Vr(e,t){return!(`variableModeBySetMap`in t)||!(`variableModeBySetMap`in e)?Ir:Hr(e,t,`keep`)}function Hr(e,t,n){let r=[],i=new Map;for(let a of[...Lr(e),...Lr(t)]){let e=Rr(a);e?a.variableModeID||n===`keep`?i.set(e,a):i.delete(e):r.push(a)}let a=[...i.values(),...r];return{variableModeBySetMap:{entries:structuredClone(a)}}}var Ur={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,text:`TEXT_DATA`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},Wr=Object.fromEntries(Object.entries(Ur).map(([e,t])=>[t,e])),Gr=.01;function Kr(e){return e===`ALIAS`||e===`EXPRESSION`}function B(e){let t=e.parameterConsumptionMap,n=new Map,r=[];for(let i of[...e.variableConsumptionMap?.entries??[],...t?.entries??[]])i.variableField?n.set(i.variableField,i):r.push(i);return[...r,...n.values()]}function qr(e,t){let n=B(t);if(n.length===0)return{};let r=[];for(let t of[...B(e),...n]){let e=t.variableField?r.findIndex(e=>e.variableField===t.variableField):-1;e<0?r.push(z(t)):r[e]=z(t)}return{parameterConsumptionMap:{entries:r}}}function Jr(e,t){return{...qr(e,t),...Br(e,t)}}function Yr(e,t,n,r,i=1,a=!1){let o=Ur[e];if(o)return ti(o,t,n,r,i,a)}var Xr={fontFamily:`FONT_FAMILY`,fontStyle:`FONT_STYLE`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,paragraphSpacing:`PARAGRAPH_SPACING`,paragraphIndent:`PARAGRAPH_INDENT`},Zr=v(Xr);function Qr(e,t,n){return Object.entries(e).flatMap(([e,r])=>{let i=Xr[e];return!i||!r||!t.variables.has(r)?[]:[ti(i,r,t,n)]})}function $r(e){let t={};for(let n of B(e)){let e=n.variableField&&Zr[n.variableField],r=e?Mr(n.variableData)?.reference?.guid:void 0;e&&r&&(t[e]=P(r))}return t}function ei(e,t,n){let r=e.variables.get(t);return r?.key?{assetRef:{key:r.key,...r.version?{version:r.version}:{}}}:{guid:n?.get(t)??N(t)}}function ti(e,t,n,r,i=1,a=!1){if(!t)return{variableField:e};let o=n.variables.get(t);if(!o)throw Error(`Missing bound variable ${t}`);if(!Number.isFinite(i))throw Error(`Non-finite variable binding multiplier`);let s={dataType:`ALIAS`,resolvedDataType:o.type,value:{alias:ei(n,t,r)}},c;return e===`VISIBLE`?c=`IS_TRUTHY`:e===`TEXT_DATA`&&o.type!==`STRING`&&(c=`STRINGIFY`),c?{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:c===`IS_TRUTHY`?`BOOLEAN`:`STRING`,value:{expressionValue:{expressionFunction:c,expressionArguments:[s]}}}}:o.type!==`FLOAT`||!a&&i===1?{variableField:e,variableData:s}:{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:`FLOAT`,value:{expressionValue:{expressionFunction:`MULTIPLY`,expressionArguments:[{dataType:`FLOAT`,resolvedDataType:`FLOAT`,value:{floatValue:i}},s]}}}}}function ni(e,t){return e===`opacity`?Gr:e===`rotation`?1:t}function ri(e,t,n,r,i){let a=ni(e,n.componentScale),o=t.variableBindingScales[e]===void 0?1:t.variableBindingScales[e]/a;return Yr(e,t.boundVariables[e],r,i,o)}function ii(e,t,n){let r=new Set(Object.keys(e.boundVariables));for(let t of B(Ft(e))){if(!Kr(t.variableData?.dataType))continue;let e=t.variableField&&Wr[t.variableField];e&&r.add(e)}return[...r].flatMap(r=>{let i=(e.variableBindingScales[r]??1)/(r===`opacity`?Gr:1),a=Yr(r,e.boundVariables[r],t,n,i,e.type===`INSTANCE`&&e.componentScale!==1);return a?[a]:[]})}function ai(e){let t=e.variableField?Wr[e.variableField]:void 0;if(!t)return;let n=Mr(e.variableData);if(e.variableData?.value?.expressionValue&&!n?.reference)throw Error(`Variable expression must contain one alias`);let r=n?.reference?.guid;return r?{field:t,variableId:P(r),multiplier:n.multiplier}:void 0}function oi(e){let t={};for(let n of B(e)){let e=ai(n);e&&Be(e.field)&&(t[e.field]=e.multiplier*(e.field===`opacity`?Gr:1))}return t}function si(e=1){return e===1?{}:Object.fromEntries(Object.entries(ci(Ur,e)).filter(([,e])=>e!==1))}function ci(e,t,n={}){let r={};for(let i of Object.keys(e))Be(i)&&(r[i]=n[i]??ni(i,t));return r}function li(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t*Gr))}:Be(e)?{[e]:_t(e,t)}:void 0}var V={color:`colorVar`,radius:`radiusVar`,spread:`spreadVar`,offsetX:`xVar`,offsetY:`yVar`};function ui(e){return Re.flatMap(t=>{let n=e[V[t]]?.value?.alias;return n?[n]:[]})}function di(e){let t={},n=Ot(e);return e.forEach((e,r)=>{let i=n[r],a=Mt(e.type);if(!(i===null||!a))for(let n of Ie(a)){let r=e[V[n]]?.value?.alias?.guid;r&&(t[Fe(i,n)]=P(r))}}),t}function fi(e,t,n,r){let i=x(e,Object.values(V));for(let e of Re){let a=n[Fe(t,e)];a&&(i[V[e]]={dataType:`ALIAS`,resolvedDataType:ze(e),value:{alias:r(a)}})}return i}var{boundVariables:pi,exportSettings:mi,libraryLayer:hi,librarySource:gi,textPathBox:_i}=A,vi={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function H(e,t){return t.decode(e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t.key)?.value)}function yi(e){e.exportSettings.length!==0&&(!wt(e.pluginData,mi)&&Array.isArray(zt(e,`exportSettings`))||(e.pluginData=yt(e.pluginData,mi,e.exportSettings)))}function bi(e,t){e.textPathBox&&(e.pluginData=yt(e.pluginData,_i,t?void 0:e.textPathBox))}function xi(e){return H(e,_i)??null}function Si(e){let t=H(e,pi)??{},n=t=>{if(Ne(t))return e.effects!==void 0;let n=Pe(t)?.list;return n===`fills`?e.fillPaints!==void 0:n===`strokes`&&e.strokePaints!==void 0};t=Object.fromEntries(Object.entries(t).filter(([e])=>!n(e)));for(let n of B(e)){let e=ai(n);if(e)t[e.field]=e.variableId;else if(n.variableField&&!Kr(n.variableData?.dataType)){let e=Wr[n.variableField];e&&(t=x(t,[e]))}}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=P(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=P(r))}),e.effects&&Object.assign(t,di(e.effects)),t}function Ci(e){return typeof e==`string`?vi[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function wi(e){return H(e,mi)||(e.exportSettings??[]).flatMap(e=>{let t=fe(ki,e);if(!t.success)return[];let n=Ci(t.output.imageType);return n?[Ai(t.output,n)]:[]})}function Ti(e,t){let n=typeof t==`number`?e[t]:t;return e.find(e=>e===n)}var Ei=[`CONTENT_SCALE`,`CONTENT_WIDTH`,`CONTENT_HEIGHT`],Di=[`DOCUMENT`,`SRGB`,`DISPLAY_P3_V4`],Oi=[`IF_NEEDED`,`ALWAYS`],ki=D({imageType:ye(),suffix:E(w()),constraint:E(D({type:ye(),value:E(O(T(),be()))})),contentsOnly:E(ve()),useAbsoluteBounds:E(ve()),colorProfile:E(ye()),svgOutlineText:E(ve()),svgIDMode:E(ye()),svgForceStrokeMasks:E(ve())});function Ai(e,t){let n=Ti(Ei,e.constraint?.type)??`CONTENT_SCALE`,r=e.constraint?.value,i=Ti(Oi,e.svgIDMode),a=n!==`CONTENT_SCALE`&&r!==void 0;return St({scale:n===`CONTENT_SCALE`&&r!==void 0?Ct(r):1,format:t,size:a?{type:n===`CONTENT_WIDTH`?`WIDTH`:`HEIGHT`,value:r}:void 0,suffix:e.suffix,contentsOnly:e.contentsOnly,useAbsoluteBounds:e.useAbsoluteBounds,colorProfile:Ti(Di,e.colorProfile),svgOutlineText:e.svgOutlineText,svgIdAttribute:i===void 0?void 0:i===`ALWAYS`,svgSimplifyStroke:e.svgForceStrokeMasks===void 0?void 0:!e.svgForceStrokeMasks})}function ji(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function Mi(e){return H(e,gi)??null}function Ni(e){return H(e,hi)??null}function Pi(e){e.pluginData=yt(e.pluginData,gi,e.librarySource??void 0),e.pluginData=yt(e.pluginData,hi,e.libraryLayerId??void 0)}function Fi(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function Ii(e){return e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value}))}function Li(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}var Ri={READY_FOR_DEV:`BUILD`,COMPLETED:`COMPLETED`},zi=le({status:he(de([`NONE`,`BUILD`,`COMPLETED`]),`NONE`)});function Bi(e){let t=fe(zi,e.sectionStatusInfo),n=t.success?t.output.status:`NONE`;return n===`BUILD`?`READY_FOR_DEV`:n===`COMPLETED`?`COMPLETED`:null}function Vi(e){let t=Bi(e),n=H(e,A.status)??null;return n!==null&&It(n)===t?n:t?Rt[t]:null}function Hi(e,t){if(e.pluginData=yt(e.pluginData,A.status,e.status??void 0),zt(e,`sectionStatusInfo`)!==void 0)return;let n=e.status?It(e.status):null;n&&(t.sectionStatusInfo={status:Ri[n]})}var Ui=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`,`paragraphSpacing`,`paragraphIndent`,`listSpacing`,`leadingTrim`];function Wi(e,t,n){if(t?.guid)return e.get(P(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function Gi(e){let t=new Map;for(let n of e)if(n.guid&&typeof n.key==`string`){let e=P(n.guid);t.set(n.key,e),typeof n.version==`string`&&t.set(`${n.key}@${n.version}`,e)}return t}function Ki(e,t){return n=>{let r=Wi(e,n,t);return r?.type===`TEXT`&&r.styleType===`TEXT`?r:void 0}}function qi(e){let t={textDecoration:e.textDecoration};for(let n of Ui)e[n]!==void 0&&Object.assign(t,{[n]:e[n]});return t}function Ji(e,t,n){let r=Wi(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints)}function Yi(e,t,n){let r=Wi(e,t.styleIdForStrokeFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.strokePaints=r.fillPaints)}function Xi(e,t,n){let r=Wi(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=Wi(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function Zi(e,t,n){let r=Wi(e,t.styleIdForText,n);r?.type!==`TEXT`||r.styleType!==`TEXT`||Object.assign(t,qi(r))}function Qi(e,t,n){Ji(e,t,n),Yi(e,t,n),Xi(e,t,n),Zi(e,t,n)}function U(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`||j(t)?null:P(t)}var $i=(e,t,n)=>Ht(t,n),ea={Inter:{ExtraLight:`Extra Light`,"ExtraLight Italic":`Extra Light Italic`,SemiBold:`Semi Bold`,"SemiBold Italic":`Semi Bold Italic`,ExtraBold:`Extra Bold`,"ExtraBold Italic":`Extra Bold Italic`}};function ta(e,t,n){let r=t.fontFamily??e.fontFamily,i=we(e,t)??n(r,t.fontWeight??e.fontWeight,t.italic??e.italic);return ea[Vt(r)]?.[i]??i}function na(e,t){let n=e.derivedTextData?.fontMetaData?.find(({key:e})=>e.family===t.family&&e.style===t.style);if(n?.fontWeight!==void 0)return{fontWeight:n.fontWeight,italic:n.fontStyle===`ITALIC`};let{weight:r,italic:i}=Ut(t.style);return{fontWeight:r,italic:i}}function ra(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}var ia={value:100,units:`PERCENT`};function aa(e){return e?.units===ia.units&&e.value===ia.value}function oa(e){return!e||aa(e)?null:e.units===`PIXELS`?Ke(e.value):e.units===`PERCENT`?Je(e.value):e.units===`RAW`?Je(e.value*100):null}function sa(e){return e?e.units===`PIXELS`?Ke(e.value):Je(e.value):He}function ca(e){return e?e.unit===`PIXELS`?{value:e.value,units:`PIXELS`}:{value:e.value/100,units:`RAW`}:{...ia}}function la(e){return{value:e.value,units:e.unit}}var ua=new Set([`ORIGINAL`,`UPPER`,`LOWER`,`TITLE`]);function da(e){if(!e||typeof e!=`object`)return;let t=e;if(typeof t.url==`string`&&t.url!==``)return{type:`URL`,value:t.url};if(t.guid&&!j(t.guid))return{type:`NODE`,value:P(t.guid)}}function fa(e,t,n){ua.has(t.textCase)&&(e.textCase=t.textCase);let r=da(t.hyperlink);r&&(e.hyperlink=r);for(let[r,i]of[[`textStyleId`,`styleIdForText`],[`fillStyleId`,`styleIdForFill`]]){if(t[i]===void 0)continue;let a=U(t[i]);a!==U(n[i])&&(e[r]=a)}let i=$r(t);ie(i)||(e.boundVariables=i)}function pa(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=ra(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=Pt(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function ma(e,t){let n={};if(e.fontName){n.fontFamily=e.fontName.family;let r=na(t,e.fontName);n.fontWeight=r.fontWeight,n.italic=r.italic,n.fontStyle=e.fontName.style||null}e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=wr(e);r.length>0&&(n.fontVariations=r),e.detachOpticalSizeFromFontSize!==void 0&&(n.opticalSizeFromFontSize=!e.detachOpticalSizeFromFontSize);let i=yr(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=sa(e.letterSpacing)),e.lineHeight&&(n.lineHeight=oa(e.lineHeight)),pa(n,e),e.fillPaints){let t=Pt(e.fillPaints);t.length>0&&(n.fills=t)}return fa(n,e,t),n}function ha(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0||e===0)continue;let i=ma(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function ga(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){let o=t.get(r);o&&n.push({start:i,length:a-i,style:o}),a<e.length&&(r=e[a],i=a)}return n}function _a(e,t,n,r){for(let e of n.values())e.hyperlink??=r;return n.set(0,{hyperlink:r}),Array.from({length:t},(t,n)=>e[n]??0)}function va(e){let t=e.textData,n=da(e.hyperlink),r=t?.characters.length??0,i=ha(t?.styleOverrideTable??[],e),a=n?_a(t?.characterStyleIDs??[],r,i,n):t?.characterStyleIDs??[];return a.length===0||i.size===0?[]:ga(a,i)}var ya={NONE:`PLAIN`,ORDERED:`ORDERED_LIST`,UNORDERED:`UNORDERED_LIST`};function ba(e){return e.lineType===`ORDERED_LIST`?`ORDERED`:e.lineType===`UNORDERED_LIST`?`UNORDERED`:`NONE`}function xa(e,t=[]){if(!e)return[];let n=new Map(t.map(e=>[e.styleID,e])),r=e.map(e=>{let t={listType:ba(e),indentation:e.indentationLevel??0};t.listType!==`NONE`&&(t=d(t,t.indentation));let r=e.styleId?n.get(e.styleId):void 0;for(let e of m){let n=r?.[e];n!==void 0&&(t=h(t,e,n))}return t});return f(r,r.length)}function Sa(e,t=1){let n=new Set(Bt(e.text,e.textParagraphs).filter(e=>e.startsList).map(e=>e.paragraph)),r=[],i=new Map,a=e=>{let n={};for(let t of m){let r=e[t];r!==void 0&&(n[t]=r)}if(ie(n))return 0;let a=JSON.stringify(n),o=i.get(a);return o===void 0&&(o=t+r.length,i.set(a,o),r.push({styleID:o,...n})),o};return{lines:p(e.text).map((t,r)=>{let i=u(e.textParagraphs,r);return{lineType:ya[i.listType],styleId:a(i),indentationLevel:i.indentation,sourceDirectionality:`AUTO`,listStartOffset:0,isFirstLineOfList:n.has(r)}}),overrides:r}}function Ca(e,t){return Ta(e,t).network}function wa(e){if(!e?.fillPaints)return{};let t=Pt(e.fillPaints),n=U(e.styleIdForFill);return n?{fills:t,fillStyleId:n}:{fills:t}}function Ta(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),a?.strokeJoin&&(o.strokeJoin=a.strokeJoin),a?.cornerRadius!==void 0&&(o.cornerRadius=a.cornerRadius),c.push(o)}let l=[],u=[];for(let e=0;e<a;e++){u.push(n.getUint32(r,!0)),r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let d=[];for(let e=0;e<o;e++){let e=n.getUint32(r,!0),t=(e&1)==1?`NONZERO`:`EVENODD`,i=s.get(e>>>1);r+=4;let a=n.getUint32(r,!0);r+=4;let o=[];for(let e=0;e<a;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;o.push(t)}d.push({windingRule:t,loops:o,...wa(i)})}return{network:{vertices:c,segments:l,regions:d},segmentStyles:u}}function Ea(e){return[e.handleMirroring??`NONE`,e.strokeCap??``,e.strokeJoin??``,e.cornerRadius??``].join(`|`)}function Da(e,t){let n=new Map,r=[],i=1;for(let t of e.vertices){let e=t.handleMirroring??`NONE`;if(e===`NONE`&&!t.strokeCap&&!t.strokeJoin&&t.cornerRadius===void 0)continue;let a=Ea(t);if(n.has(a))continue;n.set(a,i);let o={styleID:i};e!==`NONE`&&(o.handleMirroring=e),t.strokeCap&&(o.strokeCap=t.strokeCap),t.strokeJoin&&(o.strokeJoin=t.strokeJoin),t.cornerRadius!==void 0&&(o.cornerRadius=t.cornerRadius),r.push(o),i++}return{table:r,styleToId:n,regionStyleIds:e.regions.map(e=>{if(!e.fills)return 0;let n={styleID:i,fillPaints:e.fills.map(kt)};return e.fillStyleId&&t&&(n.styleIdForFill=t(e.fillStyleId)),r.push(n),i++})}}function Oa(e,t,n){let r=0;for(let t of e.regions){r+=8;for(let e of t.loops)r+=4+e.length*4}let i=new ArrayBuffer(12+e.vertices.length*12+e.segments.length*28+r),a=new DataView(i),o=0;a.setUint32(o,e.vertices.length,!0),o+=4,a.setUint32(o,e.segments.length,!0),o+=4,a.setUint32(o,e.regions.length,!0),o+=4;for(let n of e.vertices)a.setUint32(o,t?.get(Ea(n))??0,!0),o+=4,a.setFloat32(o,n.x,!0),o+=4,a.setFloat32(o,n.y,!0),o+=4;for(let t of e.segments)a.setUint32(o,0,!0),o+=4,a.setUint32(o,t.start,!0),o+=4,a.setFloat32(o,t.tangentStart.x,!0),o+=4,a.setFloat32(o,t.tangentStart.y,!0),o+=4,a.setUint32(o,t.end,!0),o+=4,a.setFloat32(o,t.tangentEnd.x,!0),o+=4,a.setFloat32(o,t.tangentEnd.y,!0),o+=4;for(let[t,r]of e.regions.entries()){let e=n?.[t]??0;a.setUint32(o,e<<1|(r.windingRule===`EVENODD`?0:1),!0),o+=4,a.setUint32(o,r.loops.length,!0),o+=4;for(let e of r.loops){a.setUint32(o,e.length,!0),o+=4;for(let t of e)a.setUint32(o,t,!0),o+=4}}return new Uint8Array(i)}var ka=33554431;function Aa(e){let{segmentStyles:t}=Ta(e),n=t.findIndex(e=>(e&ka)===ka);return Math.max(n,0)}function ja(e){return e===`EVENODD`?`ODD`:`NONZERO`}function Ma(e){return e===`ODD`||e===`EVENODD`?`EVENODD`:`NONZERO`}function Na(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function Pa(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=Ca(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0,c=a&&a.x>0&&o>0?o/a.x:1,l=a&&a.y>0&&s>0?s/a.y:1;if(c!==1||l!==1){for(let e of i.vertices)e.x*=c,e.y*=l;for(let e of i.segments)e.tangentStart={x:e.tangentStart.x*c,y:e.tangentStart.y*l},e.tangentEnd={x:e.tangentEnd.x*c,y:e.tangentEnd.y*l}}return i}catch{return null}}function Fa(e,t){if(!e||e.length===0)return[];let n=[];for(let r of e){if(r.commandsBlob===void 0||r.commandsBlob<0||r.commandsBlob>=t.length)continue;let e=t[r.commandsBlob];e.length!==0&&n.push({windingRule:Ma(r.windingRule),commandsBlob:e})}return n}function Ia(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[P(n)]=P(r))}return t}var La={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,STICKY:`STICKY`,TEXT_PATH:`TEXT`};function Ra(e){return e?La[e]??`RECTANGLE`:`RECTANGLE`}function za(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function Ba(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function Va(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;default:return`FIXED`}}function Ha(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function Ua(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Wa(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function Ga(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function Ka(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function qa(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1,s=Ra(e.type);if(e.transform&&s!==`DOCUMENT`&&s!==`VARIABLE`){let c=e.transform;c.m00*c.m11-c.m01*c.m10<0&&(o=!0),a=Math.atan2(c.m10,o?c.m11:c.m00)*(180/Math.PI);let l=ut({type:s,x:0,y:0,width:t,height:n,rotation:a,flipX:o,flipY:!1});r=c.m02-l[2],i=c.m12-l[5]}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function Ja(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function Ya(e){let t={};return e.count!==void 0&&(t.pointCount=_(e.count,ke.min,ke.max)),e.starInnerScale!==void 0&&Number.isFinite(e.starInnerScale)&&(t.starInnerRadius=_(e.starInnerScale,0,1)),t}function Xa(e){if(!e.lineHeight||aa(e.lineHeight))return null;let t=e.derivedTextData?.baselines?.[0];return e.lineHeight.units===`PIXELS`&&t!==void 0&&Number.isFinite(t.lineHeight)&&t.lineHeight<e.lineHeight.value&&!Za(e,t.firstCharacter,t.endCharacter)?Ke(t.lineHeight):oa(e.lineHeight)}function Za(e,t,n){let r=new Set((e.textData?.styleOverrideTable??[]).filter(e=>e.lineHeight).map(e=>e.styleID));return(e.textData?.characterStyleIDs??[]).slice(t,n).some(e=>e!==0&&r.has(e))}function Qa(e){return{textDecoration:ra(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:Pt(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function $a(e){return{textParagraphs:xa(e.textData?.lines,e.textData?.styleOverrideTable),listSpacing:e.listSpacing??0,paragraphSpacing:e.paragraphSpacing??0,paragraphIndent:e.paragraphIndent??0,hangingList:e.hangingList??!1}}function eo(e){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:0}function to(e){return e.type===`SHAPE_WITH_TEXT`?{shapeWithTextType:y(e.shapeWithTextType)?e.shapeWithTextType:`SQUARE`,shapeUserHeight:eo(e.shapeUserHeight),shapeTruncates:e.shapeTruncates===!0}:{}}function no(e,t){let n=e.fontName?na(e,e.fontName):{fontWeight:400,italic:!1};return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:n.fontWeight,italic:n.italic,fontStyle:e.fontName?.style||null,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...Qa(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:Xa(e),letterSpacing:sa(e.letterSpacing),maxLines:e.maxLines??null,...$a(e),styleRuns:va(e),fontVariations:wr(e),opticalSizeFromFontSize:e.detachOpticalSizeFromFontSize!==!0,fontFeatures:yr(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:H(e,A.textDirection)??`AUTO`,...ro(e,t)}}function ro(e,t){let n=e.derivedTextData?.layoutSize;return{derivedLayout:n?{width:n.x,height:n.y}:null,derivedTextHeight:io(e)?null:ao(e),derivedTextGlyphs:vn(e.derivedTextData,t,e.textData?.characters??``)}}function io(e){return e.textAutoResize===`HEIGHT`||e.textAutoResize===`WIDTH_AND_HEIGHT`}function ao(e){let t=e.derivedTextData?.baselines??[];if(t.length===0)return null;let n=t.map(e=>e.lineY??e.position.y-e.lineAscent);return s(t.map((e,t)=>n[t]+e.lineHeight))-o(n)}function oo(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function so(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(t===`NONE`||!i||!a)return;let{x:o,y:s,width:c,height:l}=qa(e);return{x:o,y:s,width:c,height:l}}function co(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function lo(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function uo(e){let t=e.targetAspectRatio?.value;return!t||!Number.isFinite(t.x)||!Number.isFinite(t.y)?null:{x:t.x,y:t.y}}function fo(e){let t=Ba(e.stackMode),n=e.stackPrimarySizing===void 0&&(t===`HORIZONTAL`||t===`VERTICAL`)?`HUG`:Va(e.stackPrimarySizing),r=Va(e.stackCounterSizing),i=so(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...oo(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:Ha(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:Ua(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:Number.isNaN(e.stackCounterSpacing)?null:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Wa(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:H(e,A.layoutDirection)??`AUTO`,...i?{derivedLayout:i}:{}}}function po(e){return e.strokeCap??`NONE`}function mo(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function ho(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function go(e){return Array.isArray(e)?structuredClone(e).filter(Lt).map(e=>({...e,color:e.color??{...n}})):[]}function _o(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:Ca(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0,startSegment:Aa(a)}}catch{return null}}function vo(e,t){let n=Pa(e,t),r=po(e),i=mo(e,n);return{vectorNetwork:n,fillGeometry:Na(Fa(e.fillGeometry,t),n),strokeGeometry:Fa(e.strokeGeometry,t),arcData:Ka(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function yo(e){let t=Ra(e.type);return t===`FRAME`&&Lo(e)||H(e,A.nodeType)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}var bo=new Set([`stackCounterSpacing`]);function xo(e){let t=(e,t)=>typeof e==`number`&&!Number.isFinite(e)&&!(Number.isNaN(e)&&bo.has(t));return Object.entries(e).some(([e,n])=>t(n,e))?S(e,t):e}function So(e,t,n=`source`){let r=xo(e),i=yo(r),a=vo(r,t),o=_o(r,t),s={nodeType:i,name:r.name??i,source:n===`source`?Bo(r,t):zo(r),...qa(r),opacity:r.opacity??1,visible:r.visible??!0,locked:r.locked??!1,internalOnly:r.internalOnly===!0||ho(r.styleType)!==null,blendMode:r.blendMode??`PASS_THROUGH`,booleanOperation:za(r),fills:Pt(r.fillPaints),strokes:Nt(r.strokePaints,r.strokeWeight,r.strokeAlign,a.strokeCap,a.strokeJoin,r.dashPattern??[]),strokeWeight:r.strokeWeight??1,strokeAlign:At(r.strokeAlign),effects:jt(r.effects),layoutGrids:go(r.layoutGrids),guides:fn(r.guides),fillStyleId:U(r.styleIdForFill),strokeStyleId:U(r.styleIdForStrokeFill),textStyleId:U(r.styleIdForText),effectStyleId:U(r.styleIdForEffect),gridStyleId:U(r.styleIdForGrid),sharedStyleType:ho(r.styleType),...Ja(r),...Ya(r),...no(r,t),...to(r),horizontalConstraint:Ga(r.horizontalConstraint),verticalConstraint:Ga(r.verticalConstraint),...fo(r),...a,minWidth:co(r.minSize,`x`),maxWidth:lo(r.maxSize,`x`),minHeight:co(r.minSize,`y`),maxHeight:lo(r.maxSize,`y`),targetAspectRatio:uo(r),isMask:r.mask??!1,maskType:r.maskType===`OUTLINE`?`VECTOR`:r.maskType??`ALPHA`,maskIsOutline:r.maskIsOutline??!1,expanded:!0,autoRename:r.autoRename??!0,boundVariables:Si(r),variableAssignmentScales:si(),variableBindingScales:oi(r),variableModes:Ia(r),exportSettings:wi(r),status:Vi(r),pluginData:ji(r),librarySource:Mi(r),libraryLayerId:Ni(r),pluginRelaunchData:Fi(r),clipsContent:r.frameMaskDisabled===!1&&r.resizeToFit!==!0,componentId:Go(r),componentPropertyDefinitions:i===`INSTANCE`?[]:Eo(r),componentPropertyReferences:Do(r),componentPropertyAssignments:ko(r),componentPropertyValues:jo(r),...Io(r)};Or(s,o);let c=xi(r);return c&&s.textPathBox&&(s.textPathBox={x:c.x+s.textPathBox.x,y:c.y+s.textPathBox.y,width:c.width,height:c.height}),s}var Co={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`,SLOT:`SLOT`};function wo(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?P(t.guidValue):``}function To(e){let t={allowPreferredValuesOnly:e.allowPreferredValuesOnly??!1,displayEmptyByDefault:e.displayByDefault??!1,stretchChildOnInsert:e.stretchChildOnInsert??!1};return e.minChildren!==void 0&&(t.minChildren=e.minChildren),e.maxChildren!==void 0&&(t.maxChildren=e.maxChildren),t}function Eo(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let r of t){if(!r.id||!r.name)continue;let t=Co[r.type??``]??`VARIANT`,i=e.stateGroupPropertyValueOrders?.find(e=>e.property===r.name)?.values,a={id:P(r.id),name:r.name,type:t,defaultValue:wo(r.initialValue),variantOptions:t===`VARIANT`?r.preferredValues?.stringValues??i:void 0,preferredValues:t===`INSTANCE_SWAP`||t===`SLOT`?r.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0};r.description&&(a.description=r.description),t===`SLOT`&&r.slotPropConfig&&(a.slotSettings=To(r.slotPropConfig)),n.push(a)}return n}function Do(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,4:`SLOT_CONTENT`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`,SLOT_CONTENT_ID:`SLOT_CONTENT`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:P(e.defID),field:t}]:[]})}function Oo(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return wo(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?P(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function ko(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[P(e.defID),Oo(e)]]:[])):{}}function Ao(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:P(e.propDefId),value:e.value??``})):[]}function jo(e){let t=Ao(e),n=new Map(Eo(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?mn(r):{}}function Mo(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.sessionID!=`number`||typeof t.localID!=`number`)return null;let n={sessionID:t.sessionID,localID:t.localID};return j(n)?null:P(n)}function No(e){return typeof e==`string`?e:null}function Po(e){return typeof e==`string`?e:``}function Fo(e){return typeof e==`boolean`&&e}function Io(e){let t=e.symbolLinks??[];return{componentKey:No(e.componentKey),sourceLibraryKey:No(e.sourceLibraryKey),publishId:Mo(e.publishID),overrideKey:Mo(e.overrideKey),sharedSymbolVersion:No(e.sharedSymbolVersion),publishedVersion:No(e.publishedVersion),isPublishable:Fo(e.isPublishable),isSymbolPublishable:Fo(e.isSymbolPublishable),isExposedInstance:Fo(e.propsAreBubbled),symbolDescription:Po(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:Ao(e)}}function Lo(e){return Ra(e.type)===`COMPONENT_SET`||!!e.componentPropDefs?.some(e=>e.type===`VARIANT`)||H(e,A.nodeType)===`COMPONENT_SET`}function Ro(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function zo(e){let t=Qe();return t.fig.layout=Ro(e),t}function Bo(e,t){return{format:`fig`,id:e.guid?P(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...Uo(e,t),...Wo(e,t),layout:Ro(e)}}}function Vo(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Vo(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=Vo(i,t);return n}var Ho=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.emojiImageSet.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.detachOpticalSizeFromFontSize.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function Uo(e,t){let n={};for(let r of Ho){let i=e[r];i!==void 0&&(n[r]=Vo(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function Wo(e,t){let n=e.symbolData;return{symbolOverrides:Vo(n?.symbolOverrides??[],t),componentPropAssignments:Vo(e.componentPropAssignments??[],t),derivedSymbolData:Vo(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function Go(e){let t=e.symbolData;return t?.symbolID?P(t.symbolID):null}function Ko(e){let t=Cr(e.axis);return t===void 0?{axisName:e.axis,value:e.value}:{axisTag:t,axisName:e.axis,value:e.value}}function qo(e,t,n){t.textDecoration&&(e.textDecoration=t.textDecoration),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness!=null&&(e.textDecorationThickness={value:t.textDecorationThickness,units:`PIXELS`}),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset!=null&&(e.textUnderlineOffset={value:t.textUnderlineOffset,units:`PIXELS`}),t.textDecorationFills&&t.textDecorationFills.length>0&&(e.textDecorationFillPaints=t.textDecorationFills.map(n))}function Jo(e,t,n,r,i){let a={styleID:e};return a.fontName={family:Vt(t.fontFamily??n.fontFamily),style:ta(n,t,i),postscript:``},t.fontSize!==void 0&&(a.fontSize=t.fontSize),t.fontVariations&&t.fontVariations.length>0&&(a.fontVariations=t.fontVariations.map(Ko)),t.opticalSizeFromFontSize!==void 0&&(a.detachOpticalSizeFromFontSize=!t.opticalSizeFromFontSize),t.fontFeatures&&t.fontFeatures.length>0&&xr(a,t.fontFeatures),t.letterSpacing!==void 0&&(a.letterSpacing=la(t.letterSpacing)),t.lineHeight!==void 0&&(a.lineHeight=ca(t.lineHeight)),qo(a,t,r),t.textCase&&(a.textCase=t.textCase),t.fills&&t.fills.length>0&&(a.fillPaints=t.fills.map(r)),a}function Yo(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function Xo(e){return[...Yo(e).styleMap.values()]}function Zo(e){return Yo(e).charIds}function Qo(e,t,n=$i){let{charIds:r,styleMap:i}=Yo(e),a=[...i.values()].map(({id:r,style:i})=>Jo(r,i,e,t,n)),o=Sa(e,i.size+1),s=[...a,...o.overrides],c={characters:e.text,lines:o.lines};return e.styleRuns.length>0&&(c.characterStyleIDs=r),s.length>0&&(c.styleOverrideTable=s),c}function $o(e){let t=new Map;for(let n of e.getAllNodes()){if(n.sharedStyleType===null||!n.source.id)continue;let e=Ft(n);typeof e.key==`string`&&t.set(n.source.id,{assetRef:{key:e.key,...typeof e.version==`string`?{version:e.version}:{}}})}return t}function es(e,t){e.styleNodeIds||=new Map([...Te(e.graph)].map(([e,t])=>[e,t.id]));let n=e.styleNodeIds.get(t);return(n?e.nodeIdToGuid?.get(n):void 0)??e.nodeIdToGuid?.get(t)??N(t)}function ts(e,t){return e.styleReferences??=$o(e.graph),e.styleReferences.get(t)??{guid:es(e,t)}}var ns=2147483647;function rs(e,{wholeParts:t=!1}={}){if(!/^\d+:\d+$/.test(e))return null;let n=N(e);if(j(n))return null;let r=t?M.sessionID:ns;return n.sessionID<=r&&n.localID<=r?n:null}function is(e,t){let n=new Set,r=t;for(;!n.has(r);){n.add(r);let t=e.graph.getNode(r);if(t?.type!==`INSTANCE`||!t.componentId)return r;r=t.componentId}return t}function as(e,t,n){let r=e.graph.getNode(t);if(!r)return;let i=e.nodeIdToGuid?.get(t);if(i)return i;let a=!r.source.id||!e.recordOwners||e.recordOwners.get(r.source.id)===t,o=r.source.id&&a?rs(r.source.id):null;if(o&&e.assignedGuidValues){let r=`${o.sessionID}:${o.localID}`;if(e.assignedGuidValues.has(r)){let r={sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,r),e.assignedGuidValues.add(`${r.sessionID}:${r.localID}`),r}}let s=o??{sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,s),e.assignedGuidValues?.add(`${s.sessionID}:${s.localID}`),s}function os(e,t,n){let r=e.propertyIdToGuid.get(t);if(r)return r;let i=rs(t);if(i)return i;let a={sessionID:1,localID:n.value++};return e.propertyIdToGuid.set(t,a),e.assignedGuidValues?.add(`${a.sessionID}:${a.localID}`),a}function ss(e,t,n){let r=e.graph.getNode(t);for(;r?.parentId;){if(r.parentId===n)return!0;r=e.graph.getNode(r.parentId)}return!1}function cs(e,t,n,r){let i=t.boundVariables[r];if(!i){if(!n.colorVar)return n;let{colorVar:e,...t}=n;return t}return{...n,colorVar:{dataType:`ALIAS`,resolvedDataType:`COLOR`,value:{alias:ei(e.graph,i,e.varIdToGuid)}}}}function ls(e,t){return t.fills.map((n,r)=>cs(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))}function us(e,t){return t.strokes.map((n,r)=>cs(e,t,e.fillToKiwiPaint(n),`strokes/${r}/color`))}function ds(e,t,n,r=!1){let i=t=>ei(e.graph,t,e.varIdToGuid),a=Ot(n);return n.map((n,o)=>{let s=a[o];if(s===null)return n;let c=fi(n,s,t.boundVariables,i),l=t.effects.at(s);for(let i of Re){let a=V[i],o=n[a]?.value?.alias;r&&!c[a]&&o?.assetRef&&!o.guid&&(c[a]=n[a]),!(!l||!t.boundVariables[Fe(s,i)])&&(i===`color`?c.color=e.safeColor(l.color):i===`radius`?c.radius=l.radius:i===`spread`?c.spread=l.spread:c.offset={...l.offset})}return c})}function fs(e,t){return ds(e,t,t.effects.map(t=>({type:ps[t.type],color:e.safeColor(t.color),offset:t.offset,radius:t.radius,spread:t.spread,visible:t.visible,blendMode:t.blendMode??`NORMAL`,showShadowBehindNode:t.showShadowBehindNode,...ms(t)})))}var ps={DROP_SHADOW:`DROP_SHADOW`,INNER_SHADOW:`INNER_SHADOW`,LAYER_BLUR:`FOREGROUND_BLUR`,BACKGROUND_BLUR:`BACKGROUND_BLUR`,FOREGROUND_BLUR:`FOREGROUND_BLUR`,GLASS:`GLASS`,NOISE:`NOISE`,TEXTURE:`GRAIN`};function ms(n){return n.type===`GLASS`?hs(n.glass??e):n.type===`NOISE`?gs(n.noise??t,n.color):n.type===`TEXTURE`?_s(n.texture??r):n.progressive?{blurOpType:`PROGRESSIVE`,startRadius:n.progressive.startRadius,startOffset:{...n.progressive.startOffset},endOffset:{...n.progressive.endOffset}}:{}}function hs(e){return{refractionRadius:e.depth,specularAngle:e.lightAngle,specularIntensity:e.lightIntensity,bevelSize:1,chromaticAberration:e.dispersion,refractionIntensity:e.refraction}}function gs(e,t){let n={noiseType:e.noiseType,noiseSize:{...e.noiseSize},density:e.density};return e.noiseType===`DUOTONE`&&(n.secondaryColor={...e.secondaryColor??t}),e.noiseType===`MULTITONE`&&(n.opacity=e.opacity??1),e.seed!==void 0&&(n.seed=e.seed),n}function _s(e){let t={noiseSize:{...e.noiseSize},clipToShape:e.clipToShape};return e.seed!==void 0&&(t.seed=e.seed),t}function vs(e,t){return n=>{let r=e.graph.getNode(n);return(r?.overrideKey?rs(r.overrideKey):null)??as(e,n,t)}}function ys(e,t,n){let r=t=>e.nodeIdToGuid?.get(t)??N(t),i=n.hyperlink;i&&(t.hyperlink=i.type===`URL`?{url:i.value}:{guid:r(i.value)}),n.textStyleId!==void 0&&(t.styleIdForText=n.textStyleId?ts(e,n.textStyleId):{guid:{...M}}),n.fillStyleId!==void 0&&(t.styleIdForFill=n.fillStyleId?ts(e,n.fillStyleId):{guid:{...M}});let a=Qr(n.boundVariables??{},e.graph,e.varIdToGuid);a.length>0&&(t.parameterConsumptionMap={entries:a})}function bs(e,t,n){let r=n.styleOverrideTable;if(!r)return;let i=new Map(Xo(t).map(({id:e,style:t})=>[e,t]));for(let t of r){let n=i.get(t.styleID);n&&ys(e,t,n)}}function xs(e,t,n){e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),n.textData&&bs(e,t,n.textData)}var Ss=4e7;function W(e){return{guids:[{sessionID:Ss,localID:e}]}}function Cs(e){let t=e.guidPath?.guids;if(!(t?.length!==1||t[0].sessionID!==4e7))return t[0].localID}function ws(e){let t=new Map;for(let n of e?.overrides??[]){let e=Cs(n);e!==void 0&&t.set(e,n)}return t}function Ts(e){return ws(e.nodeGenerationData)}function Es(e){return ws(e.derivedImmutableFrameData)}function Ds(e,t,n){let{guidPath:r,...i}=z(t??{}),a={...i,type:e};return n?.size&&(a.size=z(n.size)),n?.transform&&(a.transform=z(n.transform)),n?.vectorData&&(a.vectorData=z(n.vectorData)),n?.derivedTextData&&(a.derivedTextData=z(n.derivedTextData)),a}function Os(e){return{size:{x:e.width,y:e.height},transform:{m00:1,m01:0,m02:e.x,m10:0,m11:1,m12:e.y}}}function ks(e,t,n){let r={};xs(e,n,r);let{derivedTextData:i,...a}=r,o={...a,guidPath:W(t),visible:n.visible,fillPaints:ls(e,n)},s={guidPath:W(t),...Os(n)};return i&&(s.derivedTextData=i),{entry:o,derived:s}}function As(e,t){return e.text===``||(t.derivedTextData?.glyphs?.length??0)>0}var js={line:0,label:1,labelBackground:2},Ms=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function Ns(e,t){return Array.isArray(e)?e.map(({position:e,axis:n})=>({position:{x:(e?.x??0)-t.x,y:(e?.y??0)-t.y},direction:n?.x?`HORIZONTAL`:`VERTICAL`})):[]}function Ps(e,t){let n=Ns(e,t),r=n.at(0),i=n.at(1);return r&&i?[r.position,i.position]:null}function Fs(e,t){return e.map(({position:e,direction:n})=>({position:{x:e.x+t.x,y:e.y+t.y},axis:n===`HORIZONTAL`?{x:1,y:0}:{x:0,y:1}}))}var Is=new Set([`MIDDLE_TO_START`,`MIDDLE_TO_END`]),Ls=new Set([`NONE`,`ABOVE`,`BELOW`]);function Rs(e){if(!e||typeof e!=`object`)return null;let{section:t,offset:n,offAxisOffset:r}=e;return!t||!Is.has(t)||typeof n!=`number`?null:{section:t,offset:n,offAxis:r&&Ls.has(r)?r:`NONE`}}var zs=new Set([`NONE`,`AUTO`,`AUTO_HORIZONTAL`,`TOP`,`RIGHT`,`BOTTOM`,`LEFT`,`CENTER`,`EDGE`,`ABSOLUTE`]),Bs=new Set([`NONE`,`ROUND`,`SQUARE`,`ARROW_LINES`,`ARROW_EQUILATERAL`,`TRIANGLE_FILLED`,`DIAMOND_FILLED`,`CIRCLE_FILLED`]),Vs=new Set([`ELBOWED`,`STRAIGHT`,`CURVED`]);function Hs(e){return e&&zs.has(e)?e:`NONE`}function Us(e,t){return typeof e==`string`&&Bs.has(e)?e:t}function Ws(e){let t=e??{},n=t.endpointNodeID;return{sourceId:n&&!j(n)?P(n):null,magnet:Hs(t.magnet),position:{x:t.position?.x??0,y:t.position?.y??0}}}function Gs(e,t,n){let r=e.sourceId===null?null:n(e.sourceId)??null;return r||e.sourceId===null?{nodeId:r,magnet:e.magnet,position:e.position}:{nodeId:null,magnet:`NONE`,position:t??e.position}}function Ks(e,t,n,r){let i=ot(e,t);e.updateNode(t.id,{connectorStart:Gs(Ws(n.connectorStart),i?.start,r),connectorEnd:Gs(Ws(n.connectorEnd),i?.end,r)})}function qs(e,t,n,r){let{nodeType:i,name:a,...o}=So(Ds(e,t,n),r,`occurrence`);return o}function Js(e,t,n,r){let i=Ts(n),a=Es(n),{line:o,label:s,labelBackground:c}=js,l=n.connectorLineStyle;e.updateNode(t.id,{fills:[],strokes:[],connectorLineType:typeof l==`string`&&Vs.has(l)?l:`ELBOWED`,connectorStartCap:Us(n.connectorStartCap,`ROUND`),connectorEndCap:Us(n.connectorEndCap,`ARROW_LINES`),connectorControlPoints:Ns(n.connectorControlPoints,t),connectorCurveHandles:Ps(n.connectorBezierControlPoints,t),connectorLabelPosition:Rs(n.connectorTextMidpoint)});let u=i.get(s)?.textData?.characters??``,d=qs(`RECTANGLE`,i.get(c),a.get(c),r),f=qs(`TEXT`,i.get(s),a.get(s),r);at(e,t,{line:qs(`VECTOR`,i.get(o),a.get(o),r),labelBackground:{...d,visible:u!==``},label:{...f,x:(f.x??0)+(d.x??0),y:(f.y??0)+(d.y??0),visible:u!==``}})}function Ys(e,t,n){let r=t?.nodeId?e.nodeIdToGuid?.get(t.nodeId):void 0;return t&&(r||!t.nodeId)?{endpointNodeID:r??{...M},position:{...t.position},magnet:t.magnet}:{endpointNodeID:{...M},position:{...n??{x:0,y:0}},magnet:`NONE`}}function Xs(e,t,n){let r=new Map(e.flatMap(e=>e.guid?[[P(e.guid),e]]:[]));for(let[e,i]of n){let a=t.getNode(e),o=r.get(P(i));if(!(a?.type!==`CONNECTOR`||o?.type!==`CONNECTOR`))for(let[e,t]of[[`connectorStart`,a.connectorStart],[`connectorEnd`,a.connectorEnd]]){let i=t?.nodeId?n.get(t.nodeId):void 0;!t||!i||!r.has(P(i))||(o[e]={endpointNodeID:{...i},position:{...t.position},magnet:t.magnet})}}}function Zs(e,t,n){let r=C(n,Ms),i=lt(e.graph,t);if(!i)return r;let a=ot(e.graph,t);if(r.connectorStart=Ys(e,t.connectorStart,a?.start),r.connectorEnd=Ys(e,t.connectorEnd,a?.end),r.connectorLineStyle=t.connectorLineType,r.connectorStartCap=t.connectorStartCap,r.connectorEndCap=t.connectorEndCap,t.connectorControlPoints.length>0&&(r.connectorControlPoints=Fs(t.connectorControlPoints,t)),t.connectorCurveHandles&&(r.connectorBezierControlPoints=Fs(t.connectorCurveHandles.map(e=>({position:e,direction:`HORIZONTAL`})),t)),t.connectorLabelPosition){let{section:e,offset:n,offAxis:i}=t.connectorLabelPosition;r.connectorTextMidpoint={section:e,offset:n,offAxisOffset:i}}r.connectorType=`MANUAL`,r.connectorVersion=1;let{line:o,label:s,labelBackground:c}=i,l={guidPath:W(js.line),strokePaints:us(e,o),strokeWeight:o.strokes[0]?.weight??o.strokeWeight,strokeCap:`ROUND`,cornerRadius:o.cornerRadius,dashPattern:[...o.dashPattern]},{entry:u,derived:d}=ks(e,js.label,s);r.nodeGenerationData={overrides:[l,u,{guidPath:W(js.labelBackground),visible:c.visible,fillPaints:ls(e,c),cornerRadius:c.cornerRadius}],useFineGrainedSyncing:!1,diffOnlyRemovals:[]};let f={};return e.serializeGeometry(o,f,e.blobs,t=>ts(e,t)),d.transform={m00:1,m01:0,m02:s.x-c.x,m10:0,m11:1,m12:s.y-c.y},f.vectorData&&As(s,d)&&(r.derivedImmutableFrameData={overrides:[{guidPath:W(js.line),...Os(o),vectorData:f.vectorData},d,{guidPath:W(js.labelBackground),...Os(c)}],version:1}),r}var Qs={read:Js,link:Ks,write:Zs};function $s(e,t){if(t.type!==`COMPONENT`||!t.parentId)return;let n=e.getNode(t.parentId);return n?.type===`COMPONENT_SET`?n:void 0}function ec(e,t){let n=e.closest(t.id,n=>n===t?!!$s(e,n):n.type===`INSTANCE`||!!$s(e,n));return n?.type===`INSTANCE`?tc(e,n):n}function tc(e,t){if(t.type!==`INSTANCE`)return;let n=Le(e,t);return n&&$s(e,n)?n:void 0}function nc(e,t){let n=[...t].map(([t,n])=>({id:N(t),parentPropDefId:N(n),keptBy:e.id}));e.source={...e.source,fig:{...e.source.fig,rawNodeFields:{...e.source.fig.rawNodeFields,componentPropDefs:n}}}}function rc(e,t,n){let r=new Map,i=t=>{let i=r.get(t.id);if(!i){let a=$s(e,t),o=new Set(a?.componentPropertyDefinitions.map(e=>e.id));i=new Map([...n(t)].filter(([,e])=>o.has(e))),r.set(t.id,i)}return i};for(let n of t){let t=$s(e,n)?i(n):void 0;if(t?.size&&(n.componentPropertyDefinitions=n.componentPropertyDefinitions.filter(e=>!t.has(e.id)),nc(n,t)),n.componentPropertyReferences.length>0){let t=ec(e,n),r=t?i(t):void 0;r?.size&&(n.componentPropertyReferences=n.componentPropertyReferences.map(e=>{let t=r.get(e.propertyId);return t?{...e,propertyId:t}:e}))}let r=tc(e,n),a=r?i(r):void 0;a?.size&&(n.componentPropertyAssignments=Object.fromEntries(Object.entries(n.componentPropertyAssignments).map(([e,t])=>[a.get(e)??e,t])))}}function G(e){return e.symbolData}function K(e){return G(e)?.symbolOverrides??[]}function ic(e){return e.derivedSymbolData??[]}function ac(e){return G(e)?.uniformScaleFactor??1}function oc(e,t,n){t(e,n);for(let n of K(e))oc(n,t,n)}var sc=M;function cc(e){let t=e?.slotContentIdValue?.guid;if(t)return j(t)?void 0:t}var lc={background:0,label:1},uc=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`],dc=[`textAutoResize`,`textTruncation`,`maxLines`],fc=[`fillPaints`,`strokePaints`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`effects`,`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForEffect`];function pc(e,t){if(!e)return{};let{guidPath:n,...r}=z(e);return C(So({...r,type:`RECTANGLE`},t,`occurrence`),[`fills`,`strokes`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`cornerRadius`,`effects`,`fillStyleId`,`strokeStyleId`,`effectStyleId`])}function mc(e,t,n){if(!e)return{};let{nodeType:r,name:i,...a}=So(Ds(`TEXT`,e,t),n,`occurrence`);return{...a,...st}}function hc(e,t,n,r){let{background:i,label:a}=lc,o=Ts(n);e.updateNode(t.id,{...pc(o.get(i),r),shapeUserHeight:t.shapeUserHeight>0?t.shapeUserHeight:t.height,...it(t.shapeWithTextType,t.width,t.height)});let s=Es(n).get(a);nt(e,t,mc(o.get(a),s,r))}function gc(e,t,n){let r=tt(e.graph,t);if(!r)return n;let i=C(n,uc);i.shapeWithTextType=t.shapeWithTextType,t.shapeUserHeight>0&&(i.shapeUserHeight=t.shapeUserHeight),t.shapeTruncates&&(i.shapeTruncates=!0);let a=lc,o={guidPath:W(a.background),...C(n,fc),cornerRadius:t.cornerRadius},s=ks(e,a.label,r);return i.nodeGenerationData={overrides:[o,x(s.entry,dc)],useFineGrainedSyncing:!1,diffOnlyRemovals:[]},As(r,s.derived)&&(i.derivedImmutableFrameData={overrides:[{guidPath:W(a.background),...Os({...t,x:0,y:0})},s.derived],version:1}),i}var _c={read:hc,write:gc},vc={background:0,body:1,author:2},yc=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`effects`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function bc(e,t,n){let{nodeType:r,name:i,...a}=So(Ds(`TEXT`,e,t),n,`occurrence`);return{...a,...$e}}function xc(e,t,n,r){let i=Ts(n),a=Es(n),{background:o,body:s,author:c}=vc,l=bc(i.get(s),a.get(s),r),u=bc(i.get(c),a.get(c),r),d=i.has(c)?rt({fontSize:u.fontSize??0}):1;e.updateNode(t.id,{fills:Pt(i.get(o)?.fillPaints),...et(d)}),dt(e,t,{scale:d},{body:l,author:u})}function Sc(e,t,n){let r=ct(e.graph,t);if(!r)return n;let i=C(n,yc),a=ls(e,t),o=[{guidPath:W(vc.background),fillPaints:a,cornerRadius:0}],s=[{guidPath:W(vc.background),...Os({...t,x:0,y:0})}],c=!0;for(let[t,n]of[[vc.body,r.body],[vc.author,r.author]]){let r=ks(e,t,n);o.push(r.entry),s.push(r.derived),c&&=As(n,r.derived)}return i.nodeGenerationData={overrides:o,useFineGrainedSyncing:!1,diffOnlyRemovals:[]},c&&(i.derivedImmutableFrameData={overrides:s,version:1}),i}var Cc={SHAPE_WITH_TEXT:_c,STICKY:{read:xc,write:Sc},CONNECTOR:Qs};function wc(e){return Cc[e]}var Tc={guid:{...M}},Ec={name:{scene:[`name`],kind:`scalar`},opacity:{scene:[`opacity`],kind:`scalar`},fontSize:{scene:[`fontSize`],kind:`scalar`,length:!0},visible:{scene:[`visible`],kind:`visible`},variableModeBySetMap:{scene:[`variableModes`],kind:`variable-modes`},textData:{scene:[`text`,`styleRuns`,`textParagraphs`],kind:`text`},styleIdForText:{scene:[`textStyleId`],kind:`text-style`},fillPaints:{scene:[`fills`],kind:`paint`},strokePaints:{scene:[`strokes`],kind:`paint`},size:{scene:[`width`,`height`],kind:`size`,length:!0},stackSpacing:{scene:[`itemSpacing`],kind:`layout-distance`,length:!0},stackCounterSpacing:{scene:[`counterAxisSpacing`],kind:`layout-distance`,length:!0},stackHorizontalPadding:{scene:[`paddingLeft`],kind:`layout-distance`,length:!0},stackVerticalPadding:{scene:[`paddingTop`],kind:`layout-distance`,length:!0},stackPaddingRight:{scene:[`paddingRight`],kind:`layout-distance`,length:!0},stackPaddingBottom:{scene:[`paddingBottom`],kind:`layout-distance`,length:!0},textAutoResize:{scene:[`textAutoResize`],kind:`layout-mode`},stackChildPrimaryGrow:{scene:[`layoutGrow`],kind:`layout-mode`},stackPrimarySizing:{scene:[`primaryAxisSizing`],kind:`layout-mode`},stackCounterSizing:{scene:[`counterAxisSizing`],kind:`layout-mode`},stackChildAlignSelf:{scene:[`layoutAlignSelf`],kind:`layout-mode`},cornerRadius:{scene:[`cornerRadius`],kind:`node`,length:!0,absent:0},rectangleTopLeftCornerRadius:{scene:[`topLeftRadius`],kind:`node`,length:!0,absent:0},rectangleTopRightCornerRadius:{scene:[`topRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomRightCornerRadius:{scene:[`bottomRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomLeftCornerRadius:{scene:[`bottomLeftRadius`],kind:`node`,length:!0,absent:0},rectangleCornerRadiiIndependent:{scene:[`independentCorners`],kind:`node`,absent:!1},cornerSmoothing:{scene:[`cornerSmoothing`],kind:`node`,absent:0},strokeWeight:{scene:[`strokeWeight`],kind:`node`,length:!0},strokeAlign:{scene:[`strokeAlign`],kind:`node`,absent:`CENTER`},borderTopWeight:{scene:[`borderTopWeight`],kind:`node`,length:!0},borderRightWeight:{scene:[`borderRightWeight`],kind:`node`,length:!0},borderBottomWeight:{scene:[`borderBottomWeight`],kind:`node`,length:!0},borderLeftWeight:{scene:[`borderLeftWeight`],kind:`node`,length:!0},borderStrokeWeightsIndependent:{scene:[`independentStrokeWeights`],kind:`node`,absent:!1},strokeCap:{scene:[`strokeCap`],kind:`node`,absent:`NONE`},strokeJoin:{scene:[`strokeJoin`],kind:`node`,absent:`MITER`},miterLimit:{scene:[`strokeMiterLimit`],kind:`node`},dashPattern:{scene:[`dashPattern`],kind:`node`,length:!0,absent:[]},blendMode:{scene:[`blendMode`],kind:`node`,absent:`PASS_THROUGH`},effects:{scene:[`effects`],kind:`node`,absent:[]},locked:{scene:[`locked`],kind:`node`,absent:!1},layoutGrids:{scene:[`layoutGrids`],kind:`node`,absent:[]},styleIdForFill:{scene:[`fillStyleId`],kind:`node`,absent:Tc},styleIdForStrokeFill:{scene:[`strokeStyleId`],kind:`node`,absent:Tc},styleIdForEffect:{scene:[`effectStyleId`],kind:`node`,absent:Tc},stackPrimaryAlignItems:{scene:[`primaryAxisAlign`],kind:`node`},stackCounterAlignItems:{scene:[`counterAxisAlign`],kind:`node`},stackPositioning:{scene:[`layoutPositioning`],kind:`node`},fontName:{scene:[`fontFamily`,`fontWeight`,`italic`,`fontStyle`],kind:`node`},fontVariations:{scene:[`fontVariations`],kind:`node`,absent:[]},detachOpticalSizeFromFontSize:{scene:[`opticalSizeFromFontSize`],kind:`node`,absent:!1},lineHeight:{scene:[`lineHeight`],kind:`node`,absent:{value:100,units:`PERCENT`}},letterSpacing:{scene:[`letterSpacing`],kind:`node`},paragraphSpacing:{scene:[`paragraphSpacing`],kind:`node`,length:!0,absent:0},textCase:{scene:[`textCase`],kind:`node`,absent:`ORIGINAL`},textDecoration:{scene:[`textDecoration`],kind:`node`,absent:`NONE`},textAlignHorizontal:{scene:[`textAlignHorizontal`],kind:`node`},textAlignVertical:{scene:[`textAlignVertical`],kind:`node`},textTruncation:{scene:[`textTruncation`],kind:`node`,absent:`DISABLED`},maxLines:{scene:[`maxLines`],kind:`node`}},Dc=Object.entries(Ec),Oc=new Map(Object.entries(a(Dc.flatMap(([e,t])=>t.scene.map(n=>({scene:n,raw:e,field:t}))),e=>e.scene)).map(([e,t])=>[e,t.map(({raw:e,field:t})=>({raw:e,field:t}))]));function kc(e){return Dc.flatMap(([t,n])=>n.kind===e?[t]:[])}kc(`scalar`);var Ac=Object.fromEntries(kc(`layout-distance`).map(e=>[Ec[e].scene[0],e])),jc=[`componentKey`,`sourceLibraryKey`,`publishID`,`publishedVersion`,`sharedSymbolVersion`,`isSymbolPublishable`,`variantPropSpecs`,`componentPropDefs`,`overrideKey`],Mc=[`stackChildAlignSelf`,`stackChildPrimaryGrow`,`stackPositioning`,`horizontalConstraint`,`verticalConstraint`],Nc=[...jc,...Mc],Pc={add:`ADDITION`,subtract:`SUBTRACTION`,multiply:`MULTIPLY`,divide:`DIVIDE`,negate:`NEGATE`,equal:`EQUALS`,notEqual:`NOT_EQUAL`,less:`LESS_THAN`,lessOrEqual:`LESS_THAN_OR_EQUAL`,greater:`GREATER_THAN`,greaterOrEqual:`GREATER_THAN_OR_EQUAL`,and:`AND`,or:`OR`,not:`NOT`,text:`STRINGIFY`,truthy:`IS_TRUTHY`,if:`TERNARY`},Fc=v(Pc);function Ic(e){return Pc[e]}function Lc(e){return e===void 0?void 0:Fc[e]}var{token:Rc,modeConditions:zc,modeAttribute:Bc,libraryModes:Vc}=A;function Hc(e){return xt(e,[Rc,zc,Bc,Vc])}function Uc(e){return ie(e)?void 0:e}function Wc(e,t){return t!==void 0&&Math.fround(e)===Math.fround(t)}function Gc(e,t){let n=H(e,Rc)??{},r=Object.entries(n.expressions??{}).filter(([e,n])=>{if(!Object.hasOwn(t,e))return!1;let r=t[e];return typeof r!=`number`||Wc(r,n.resolved)});return{unit:n.unit,expressions:Uc(Object.fromEntries(r))}}function Kc(e){return H(e,zc)??{}}function qc(e){return H(e,Bc)}function Jc(e){return e.modeAttribute?bt(Bc,e.modeAttribute):void 0}function Yc(e){return H(e,Vc)??{}}function Xc(e,t){let n=e.modes.flatMap(e=>e.libraryModeId?[[t(e.modeId),e.libraryModeId]]:[]);return n.length>0?bt(Vc,Object.fromEntries(n)):void 0}function Zc(e,t){let n={unit:e.unit,expressions:Uc(b(e.expressions??{},(e,n)=>t(n)))};if(!(!n.unit&&!n.expressions))return bt(Rc,n)}function Qc(e,t){let n=e.modes.flatMap(e=>e.condition?[[t(e.modeId),e.condition]]:[]);return n.length>0?bt(zc,Object.fromEntries(n)):void 0}var $c=e=>Dt.includes(e),el=e=>Et.includes(e);function tl(e){let t=(e.codeSyntax?.entries??[]).flatMap(({platform:e,value:t})=>el(e)&&t?[[e,t]]:[]);return t.length>0?Object.fromEntries(t):void 0}function nl(e){let t=e.variableScopes?.filter($c),n=Hc(ji(e)),r={description:e.description??e.symbolDescription??``,hiddenFromPublishing:e.isPublishable===!1,scopes:t?.length?t:void 0,codeSyntax:tl(e),pluginData:n.length>0?n:void 0};return typeof e.key==`string`&&(r.key=e.key),typeof e.version==`string`&&(r.version=e.version),r}function rl(e,t){let n=Object.entries(e.codeSyntax??{}).flatMap(([e,t])=>t?[{platform:e,value:t}]:[]),r=Zc(e,t),i={isPublishable:!e.hiddenFromPublishing,variableScopes:e.scopes?.length?e.scopes:[`ALL_SCOPES`],pluginData:al([...Hc(e.pluginData??[]),...r?[r]:[]])};return e.description&&(i.description=e.description,i.symbolDescription=e.description),n.length>0&&(i.codeSyntax={entries:n}),i}function il(e,t){let n=Qc(e,t),r=Jc(e),i=Xc(e,t);return al([...Hc(e.pluginData??[]),...n?[n]:[],...r?[r]:[],...i?[i]:[]])}function al(e){return e?.length?Ii(e):void 0}var ol=D({sessionID:O(T(),xe(),oe(0)),localID:O(T(),xe(),oe(0))}),sl=D({guid:E(ol),assetRef:E(D({key:w(),version:E(w())}))}),q=ue(()=>D({dataType:E(w()),resolvedDataType:E(w()),value:E(D({alias:E(sl),mapValue:E(D({values:E(ge(D({key:E(w()),guidKey:E(ol),value:E(q)})))})),colorArrayValue:E(D({colors:E(ge(q))})),fontStyleValue:E(D({asString:E(q),asFloat:E(q),asVariations:E(q)})),boolValue:E(ve()),floatValue:E(T()),textValue:E(w()),colorValue:E(D({r:T(),g:T(),b:T(),a:T()})),expressionValue:E(D({expressionFunction:w(),expressionArguments:E(ge(q))}))}))}));function cl(e,t,n=e=>e){let r=0,i=0,a=e=>{let o=e.value;if(!o)return;o.alias&&=t(o.alias,r++)??o.alias;let s=[...o.expressionValue?.expressionArguments??[],...o.colorArrayValue?.colors??[],o.fontStyleValue?.asString,o.fontStyleValue?.asFloat,o.fontStyleValue?.asVariations];for(let e of o.mapValue?.values??[])e.guidKey&&=n(e.guidKey,i++),s.push(e.value);for(let e of s)e&&a(e)};a(e)}function ll(e){let t=Ce(q,structuredClone(e));if(t.dataType!==`EXPRESSION`||!t.value?.expressionValue)throw Error(`Invalid unsupported variable expression`);return t}var ul={design:`fig-kiwi`,board:`fig-jam.`};function dl(e){let t=new TextDecoder().decode(e.slice(0,8));return t===ul.design?`design`:t===ul.board?`board`:null}function fl(){return globalThis.Bun?.zstdCompressSync}function pl(){return globalThis.Bun?.zstdDecompressSync}var ml=e=>fl()?.(e)??Gt(e),hl,gl;function _l(){return gl??=i(async()=>{let{Zstd:e}=await import(`./dist-Dqz5LkMU.js`);return{Zstd:e}},[]).then(({Zstd:e})=>e.load()).then(e=>hl=e).catch(e=>{throw gl=void 0,e}),gl}async function vl(e=3){let t=await _l();return n=>t.compress(n,e)}async function yl(e=3){let t=fl();return t?n=>t(n,{level:e}):vl(e)}async function bl(){return pl()||await _l(),wl}function xl(e){try{return Yt(e)}catch{throw Error(`Failed to decompress fig-kiwi data`)}}function Sl(e){let t=pl();if(t){let n=t(e);return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}if(!hl)throw Error(`Zstd is not loaded: await loadFigDataDecompressor() before reading`);return hl.decompress(e)}function Cl(e){if(!dl(e))return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}function wl(e){return fr(e)?Sl(e):xl(e)}async function Tl(e){return(await bl())(e)}function El(e,t,n=101,r=ml,i=`design`){let a=r(t),o=16+e.length+4+a.length,s=new Uint8Array(o),c=new DataView(s.buffer);s.set(new TextEncoder().encode(ul[i]),0),c.setUint32(8,n,!0);let l=12;return c.setUint32(l,e.length,!0),l+=4,s.set(e,l),l+=e.length,c.setUint32(l,a.length,!0),l+=4,s.set(a,l),s}function Dl(e,t){let n=[],r=t.parentId?e.getNode(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(r),r=r.parentId?e.getNode(r.parentId):void 0;return t.type===`INSTANCE`&&n.unshift(t),n}function Ol(e,t){let n=[];for(let r of Dl(e,t)){let i=We(r.instanceOverrides,r.id,t),a=i?e.getNode(i):void 0;a&&n.push(a)}return n}function kl(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of t.nodes.values()){let t=Dl(e,n),r=new Set;for(let e of t){let t=e.id===n.id?e.instanceOverrides.self:e.instanceOverrides.descendants.get(n.id);for(let e of t?.keys()??[])r.add(e)}let i={};for(let t of Ol(e,n))for(let e of Oe)!t.source.editedFields.includes(e)||r.has(e)||Object.assign(i,{[e]:structuredClone(t[e])});Object.keys(i).length&&e.updateNode(n.id,i)}})}function Al(e){return e.layoutScale??1}function jl(e){return si(e.mainComponentId===null?1:Al(e))}function Ml(e,t,n){for(let r of B(n)){if(r.variableData&&![`ALIAS`,`EXPRESSION`].includes(r.variableData.dataType??``))continue;let n=r.variableField&&Wr[r.variableField];n&&(k(e.instanceOverrides,e.id,t.id,Ue(n),t.boundVariables[n]??null),k(e.instanceOverrides,e.id,t.id,`boundVariables`))}}function Nl(e,t){Pl(e,t,ac(t))}function Pl(e,t,n=1){for(let r of B(t)){let t=r.variableField&&Wr[r.variableField];if(!t)continue;e.variableBindingScales??={};let i=Mr(r.variableData),a=i?.reference?i.multiplier:1,o=t===`opacity`?.01:1,s=r.variableData?.value?.expressionValue&&t!==`opacity`&&t!==`rotation`;e.variableBindingScales[t]=a*o/(s?n:1)}}function Fl(e){let t=new Map;for(let n of e){if(!n.guid||typeof n.key!=`string`)continue;let e=t.get(n.key)??new Map,r=typeof n.version==`string`?n.version:``,i=P(n.guid);if(e.has(r)&&e.get(r)!==i)throw Error(`Ambiguous resource ${n.key} version ${r}`);e.set(r,i),t.set(n.key,e)}return e=>{if(e?.guid)return P(e.guid);let n=e?.assetRef;if(!n)return;let r=t.get(n.key);return n.version?r?.get(n.version):r?.has(``)?r.get(``):r?.size===1?r.values().next().value:void 0}}var J=class extends Error{name=`UnsupportedExpressionError`};function Il(e,t,n=0){if(n>64)throw Error(`Variable expression is too deeply nested`);let{value:r,dataType:i,resolvedDataType:a}=e;if(!r)throw Error(`Missing variable value`);let o=i??a;if(o===`ALIAS`){let e=t(r.alias);if(!e)throw Error(`Unresolved variable alias`);return{aliasId:e}}if(o===`COLOR`&&r.colorValue)return structuredClone(r.colorValue);if(o===`BOOLEAN`&&r.boolValue!==void 0)return r.boolValue;if(o===`STRING`&&r.textValue!==void 0)return r.textValue;if(o===`FLOAT`&&r.floatValue!==void 0)return r.floatValue;if(o===`EXPRESSION`)return Ll(e,t,n);throw Error(`Unsupported variable value ${o}`)}function Ll(e,t,n){let r=e.value;if(!r)throw Error(`Missing expression`);if(r.expressionValue?.expressionFunction===`COMPOSE_COLOR`)return Bl(e,t);let i=r.expressionValue,a=Lc(i?.expressionFunction);if(!a)throw i?.expressionFunction?new J(`Unsupported variable expression ${i.expressionFunction}`):Error(`Missing variable expression function`);let o={operator:a,operands:(i?.expressionArguments??[]).map(e=>{if((e.dataType??e.resolvedDataType)===`ALIAS`&&!t(e.value?.alias))throw new J(`${a} uses a variable this document lacks`);return zl(Il(e,t,n+1))})},s=fe(de([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),e.resolvedDataType),c=fe(ln,{expression:`FORMULA`,type:s.success?s.output:Rl(o),value:o});if(!c.success)throw new J(`Invalid ${a} expression`);return c.output}function Rl(e){try{return ne(e)}catch{return}}function zl(e){if(typeof e!=`object`||!(`expression`in e))return e;if(e.expression===`FORMULA`)return e.value;throw new J(`Unsupported nested ${e.expression} expression`)}function Bl(e,t){let n=e.value?.expressionValue,r=n?.expressionArguments;if(n?.expressionFunction!==`COMPOSE_COLOR`||r?.length!==2)throw new J(`Unsupported variable expression ${n?.expressionFunction}`);if(r.some(e=>e.dataType===`EXPRESSION`))throw new J(`Unsupported nested color expression`);return Ce(ae,{expression:`COMPOSE_COLOR`,color:Il(r[0],t),opacity:Il(r[1],t)})}function Vl(e,t,n,r){let i=e.variableDataValues?.entries??[];if(!i.length)throw Error(`Missing mode values`);let a={};for(let o of i){let i=P(o.modeID);if(!t.includes(i))throw Error(`Unknown mode`);let s;try{s=Il(o.variableData,n)}catch(t){if(!(t instanceof J)||!r)throw t;let a=structuredClone(o.variableData),c=[],l=[];cl(a,e=>{c.push(n(e)??null)},e=>(l.push(P(e)),e)),s={expression:`UNSUPPORTED`,function:a.value?.expressionValue?.expressionFunction??``,value:{...a},references:c,modes:l},r({sourceId:e.guid?P(e.guid):``,modeId:i,reason:`unsupported-variable-expression`})}if(typeof s==`object`&&`expression`in s&&s.expression===`FORMULA`&&s.type!==e.variableResolvedType)throw Error(`Expression result type does not match ${e.variableResolvedType}`);a[i]=s}return a}function Hl(e){return tn(e.variableSetModes??[],[e=>!e.sortPosition,e=>e.sortPosition??``])}function Ul(e){let t=new Map;for(let n of e){if(n.type!==`VARIABLE_SET`||!n.guid)continue;let e=Hl(n).at(0);e&&t.set(P(n.guid),P(e.id))}return t}function Wl(e){return e.type===`VARIABLE`||e.type===`VARIABLE_SET`}function Gl(e,t=e=>e){let n=e.filter(Wl),r=Fl(n),i=new Map;for(let e of n)e.type===`VARIABLE`&&e.guid&&i.set(P(e.guid),e);let a=new Map,o=e=>{if(!a.has(e)){let n=i.get(e);a.set(e,n?Kl(t(n),r):void 0)}return a.get(e)},s=new Map,c;return{get defaultModes(){return c??=Ul(n.filter(e=>e.type===`VARIABLE_SET`).map(t)),c},variableIdOf:r,collectionsReachedFrom(e){let t=s.get(e);return t||(t=ql(e,o),s.set(e,t)),t}}}function Kl(e,t){let n=e.variableSetID?t(e.variableSetID):e.parentIndex?.guid&&P(e.parentIndex.guid),r=[];for(let n of e.variableDataValues?.entries??[])Fr(n.variableData,e=>{let n=t(e);n&&r.push(n)});return{collection:n||void 0,aliases:r}}function ql(e,t){let n=new Set,r=new Set,i=[e];for(let e=i.pop();e!==void 0;e=i.pop()){if(r.has(e))continue;r.add(e);let a=t(e);a?.collection&&n.add(a.collection),c(i,a?.aliases??[])}return n}function Jl(e,t,n,r){let i=(e,t)=>{if(!n)throw Error(`Unsupported document resource ${e.type}: ${t}`);n(structuredClone(e))};for(let n of t){if(n.type!==`VARIABLE_SET`)continue;let t=Hl(n);if(!n.guid||t.length===0){i(n,`missing collection identity or modes`);continue}let r=Hc(ji(n)),a=Kc(n),o=Yc(n);e.addCollection({id:P(n.guid),name:n.name??`Variables`,modes:t.map(e=>{let t=P(e.id);return{modeId:t,name:e.name,condition:a[t],libraryModeId:o[t],...e.sortPosition?{sortPosition:e.sortPosition}:{}}}),defaultModeId:P(t[0].id),variableIds:[],modeAttribute:qc(n),pluginData:r.length>0?r:void 0,key:typeof n.key==`string`?n.key:void 0,version:typeof n.version==`string`?n.version:void 0})}Yl(e,t,i,r)}function Yl(e,t,n,r){let i=Fl(t);for(let a of t){if(a.type!==`VARIABLE`)continue;let t=a.variableResolvedType,o=a.variableSetID?i(a.variableSetID):a.parentIndex?.guid&&P(a.parentIndex.guid),s=o&&e.variableCollections.get(o);if(!a.guid||!s||!o||t!==`COLOR`&&t!==`BOOLEAN`&&t!==`STRING`&&t!==`FLOAT`){n(a,`unresolved collection, identity or type`);continue}let c={};try{Object.assign(c,Vl(a,s.modes.map(e=>e.modeId),i,r))}catch(e){n(a,e instanceof Error?e.message:`Invalid mode value`);continue}let l=nl(a);e.addVariable({id:P(a.guid),name:a.name??`Variable`,type:t,collectionId:o,valuesByMode:c,...l,...Gc(a,c)})}}function Xl(e,t,n){let r=[],i=(e,a)=>{if(n(e)){r.push({match:e,top:a});return}if(!t.isInstance(e))for(let n of t.childrenOf(e))i(n,a)};for(let t of e)i(t,t);return r.length===1?{count:1,...r[0]}:{count:r.length}}function*Zl(e,t){yield e;for(let n of t(e))yield*Zl(n,t)}function Y(e){return e.guid?P(e.guid):void 0}function Ql(e){return e.phase!==`REMOVED`}function X(e){return e.parentIndex?.guid?P(e.parentIndex.guid):void 0}function $l(e,t){return je(e.parentIndex?.position??``,t.parentIndex?.position??``)}function eu(e){let t=new Map,n=new Map;for(let r of e){let e=Y(r);if(e===void 0)continue;if(t.has(e))throw Error(`Duplicate source node ${e}`);t.set(e,r);let i=X(r);if(i===void 0)continue;let a=n.get(i);a?a.push(r):n.set(i,[r])}for(let e of n.values())e.sort($l);return{sources:t,children:n}}function Z(e,t){return e?.sessionID===t.sessionID&&e.localID===t.localID}function tu(e){if(!e||typeof e!=`object`||!(`sessionID`in e)||!(`localID`in e)||typeof e.sessionID!=`number`||typeof e.localID!=`number`)return;let t={sessionID:e.sessionID,localID:e.localID};return j(t)?void 0:t}function nu(e,t){return Z(e.guid,t)||Z(tu(e.overrideKey),t)}function ru({children:e}){return{childrenOf:t=>e.get(Y(t)??``)??[],isInstance:e=>e.symbolData?.symbolID!==void 0}}function iu(e,t,n){let{count:r,match:i,top:a}=Xl(e.children.get(t)??[],ru(e),e=>nu(e,n));return{count:r,record:i,topChild:a}}function au(e,t,n){let r=P(t);for(let[t,i]of n.entries()){let a=e.sources.get(r);if(!a)return!1;if(t===0&&nu(a,i))continue;let{record:o}=iu(e,r,i);if(!o)return!1;if(t===n.length-1)return!0;if(!o.symbolData?.symbolID)return!1;r=P(o.symbolData.symbolID)}return!1}function ou(e,t){let n=t,r=new Set;for(;!r.has(n);){r.add(n);let t=e.sources.get(n);if(t?.type!==`INSTANCE`||!t.symbolData?.symbolID)return n;n=P(t.symbolData.symbolID)}return n}function su(e){let t=e.value;if(t&&(t.boolValue!==void 0||t.textValue!==void 0||t.guidValue!==void 0||t.textDataValue!==void 0))return t;let n=e.varValue?.value;if(n?.symbolIdValue?.guid)return{guidValue:n.symbolIdValue.guid};if(n?.boolValue!==void 0)return{boolValue:n.boolValue};if(n?.textValue!==void 0)return{textValue:n.textValue};if(n?.textDataValue!==void 0)return{textDataValue:n.textDataValue};if(n?.slotContentIdValue)return{slotContentIdValue:n.slotContentIdValue}}function cu(e,t,n){let r=structuredClone([...e]);for(let e of t){let t=su(e);if(!e.defID||!t)continue;let i={id:e.defID,value:structuredClone(t),origin:`assignment`,...n===void 0?{}:{rank:n}},a=r.findIndex(e=>Z(e.id,i.id));if(a===-1){r.push(i);continue}let o=r[a];r[a]={...i,superseded:[...o.superseded??[],structuredClone(o.value)]}}return r}function lu(e){return(e.componentPropDefs??[]).flatMap(e=>e.id&&e.initialValue?[{id:e.id,value:structuredClone(e.initialValue),origin:`default`}]:[])}function uu(e,t,n){let r={...e},i=e.componentPropRefs;for(let e of i??[]){if(!e.defID||e.isDeleted)continue;let i=t.find(t=>Z(t.id,e.defID));if(!i)continue;let{value:a,origin:o}=i,s=e=>{n?.({definitionId:structuredClone(i.id),field:e,origin:o},i)};if(e.componentPropNodeField===`VISIBLE`&&a.boolValue!==void 0)r.visible=a.boolValue,s(`visible`);else if(e.componentPropNodeField===`TEXT_DATA`){let e=typeof a.textValue==`string`?a.textValue:a.textValue?.characters??a.textDataValue?.characters;e!==void 0&&(e!==r.textData?.characters&&(r.derivedTextData=void 0),r.textData={...r.textData,characters:e},s(`textData`))}else e.componentPropNodeField===`OVERRIDDEN_SYMBOL_ID`&&a.guidValue?(r.symbolData={...r.symbolData,symbolID:a.guidValue},s(`symbolData`)):e.componentPropNodeField===`SLOT_CONTENT_ID`&&a.slotContentIdValue&&s(`slotContent`)}return r}function du(e,t){return e.slice(1).flatMap(e=>e.assignments).filter(t).flatMap(e=>e.defID?[P(e.defID)]:[])}function fu(e,t){let n=[],r=[];e.type===`INSTANCE`&&e.symbolData?.symbolID&&e.variableModeBySetMap&&r.push({path:[e.symbolData.symbolID],props:{variableModeBySetMap:e.variableModeBySetMap}});for(let i of K(e)){let{guidPath:e,overriddenSymbolID:a,componentPropAssignments:o,...s}=i,c=e?.guids??[];if(!c.length)continue;let l=o??[];(a||l.length)&&n.push({owner:t,declaredPath:c,path:c,swap:a,assignments:l}),Object.keys(s).length&&r.push({path:c,props:s})}return{structural:n,claims:r}}function pu(e,t){let n=e.properties;t.derivedTextData&&(n.derivedTextData=structuredClone(t.derivedTextData)),t.fontSize!==void 0&&(n.fontSize=t.fontSize),t.lineHeight!==void 0&&(n.lineHeight=structuredClone(t.lineHeight)),t.letterSpacing!==void 0&&(n.letterSpacing=structuredClone(t.letterSpacing)),t.size&&(n.size=structuredClone(t.size),e.derivedSize=structuredClone(t.size)),t.transform&&(n.transform=structuredClone(t.transform));let{fillGeometry:r,strokeGeometry:i,vectorData:a}=t;r&&(n.fillGeometry=structuredClone(r),e.inheritedOutlineScale&&(e.inheritedOutlineScale.fill={x:1,y:1})),i&&(n.strokeGeometry=structuredClone(i),e.inheritedOutlineScale&&(e.inheritedOutlineScale.stroke={x:1,y:1})),a&&(n.vectorData=structuredClone(a))}var mu={styleIdForFill:[`fillPaints`,`backgroundPaints`,`backgroundColor`],styleIdForStrokeFill:[`strokePaints`],styleIdForText:[`fontName`,`fontVersion`,`fontSize`,`semanticWeight`,`semanticItalic`,`lineHeight`,`letterSpacing`,`textTracking`,`textDecoration`,`textCase`,`fontVariantCommonLigatures`,`fontVariantContextualLigatures`,`toggledOnOTFeatures`,`toggledOffOTFeatures`,`paragraphSpacing`,`paragraphIndent`,`listSpacing`],styleIdForEffect:[`effects`],styleIdForGrid:[`layoutGrids`]};function hu(e){if(!g(e)||!g(e.guid))return!1;let{sessionID:t,localID:n}=e.guid;return t===M.sessionID&&n===M.localID}function gu(e,t){let n=e?.[t];if(n!==void 0||!(t in Ec))return n;let r=Ec[t];return`absent`in r?r.absent:void 0}function _u(e,t,n){for(let r of Object.keys(mu)){if(!hu(t[r]))continue;let i=mu[r];for(let r of i){if(r in t)continue;let i=gu(n,r);i===void 0?Reflect.deleteProperty(e.properties,r):t[r]=structuredClone(i)}}}var vu={fontSize:[`FONT_SIZE`],fontName:[`FONT_FAMILY`,`FONT_STYLE`],lineHeight:[`LINE_HEIGHT`],letterSpacing:[`LETTER_SPACING`],textDecoration:[],textCase:[],paragraphSpacing:[`PARAGRAPH_SPACING`],paragraphIndent:[`PARAGRAPH_INDENT`],listSpacing:[],leadingTrim:[]},yu={textDecoration:`NONE`,textCase:`ORIGINAL`,paragraphSpacing:0,paragraphIndent:0,listSpacing:0,leadingTrim:`NONE`},bu=[`variableConsumptionMap`,`parameterConsumptionMap`];function xu(e){return new Set(B(e).flatMap(e=>e.variableField===void 0?[]:[e.variableField]))}function Su(e,t){return vu[t].some(t=>e.has(t))}function Cu(e,t){return(e??[]).filter(e=>e.variableField===void 0||!t.has(e.variableField))}function wu(e,t){for(let n of bu){let r=e[n];if(!r)continue;let i=Cu(r.entries,t);i.length===0?Reflect.deleteProperty(e,n):e[n]={...r,entries:i}}}function Tu(e,t,n){let r=B(t).filter(e=>e.variableField!==void 0&&n.has(e.variableField));if(wu(e.properties,n),r.length===0)return;let i=structuredClone(r),a=e.properties.parameterConsumptionMap?.entries??[];e.properties.parameterConsumptionMap={entries:[...a,...i]},Pl(e,{parameterConsumptionMap:{entries:i}})}function Eu(e,t,n){if(`styleIdForText`in t)return;let r=xu(t),i=Ui.filter(e=>e in t||Su(r,e));if(i.length===0)return;let a=n(e.properties.styleIdForText);if(!a)return;let o=xu(a),s=e=>a[e]??yu[e],c=i.filter(e=>s(e)!==void 0||Su(o,e));for(let n of c){let r=s(n);Reflect.deleteProperty(t,n),r!==void 0&&Object.assign(e.properties,{[n]:structuredClone(r)})}let l=new Set(c.flatMap(e=>vu[e]));wu(t,l),Tu(e,a,l)}var Du=[`fontSize`,`fontName`,`fontVariations`,`detachOpticalSizeFromFontSize`,`letterSpacing`,`lineHeight`,`textCase`,`textAlignHorizontal`,`textAlignVertical`,`textAutoResize`,`styleIdForText`,`fontVariantCommonLigatures`,`fontVariantContextualLigatures`];function Ou(e,t){if(`derivedTextData`in t)return;let n=t.textData;(n!==void 0&&Object.entries(n).some(([t,n])=>!l(n,e.textData?.[t]))||Du.some(n=>n in t&&!l(e[n],t[n])))&&(e.derivedTextData=void 0)}var ku={childrenOf:e=>e.children,isInstance:e=>e.mainComponentId!==null};function Au(e){return Zl(e,e=>e.children)}var ju=class extends Error{diagnostic;constructor(e,t){super(t),this.diagnostic=e,this.name=`InstancePathError`}},Mu=class extends Error{count;constructor(e,t){super(`Expected one instance-path target for ${P(t)}; found ${e}`),this.count=e,this.name=`SegmentError`}};function Nu(e,t,n,r){return new ju({ownerId:e,mainComponentId:t,path:structuredClone(n),reason:r.count===0?`missing-target`:`ambiguous-target`},`Override declared by ${e}, path [${n.map(P).join(`, `)}]: ${r.message}`)}function Pu(e,t){let n=P(t),{count:r,match:i}=Xl(e.children,ku,e=>Z(e.overrideKey,t)||e.sourceId===n);if(!i)throw new Mu(r,t);return i}function Fu(e,t){return Z(e.properties.symbolData?.symbolID,t)||Z(e.mainComponentOverrideKey,t)||Z(e.sourceComponentOverrideKey,t)||Z(e.sourceComponentId,t)}function Iu(e,t){let n=e;for(let[r,i]of t.entries())r===0&&Fu(e,i)||(n=Pu(n,i));return n}function Lu(e,t){return{index:e,options:t,assignedFields:new WeakMap,replacedComponents:new WeakMap}}function Ru({index:e,assignedFields:t},n,r,i,a){let o=t.get(i),s=Object.fromEntries(Object.entries(a.props).filter(([e])=>{let t=o?.get(e);return t===void 0||t>=r}));Eu(i,s,e.textStyle),Object.keys(s).length!==0&&(_u(i,s,e.sources.get(i.sourceId)),Pl(i,s),Ou(i.properties,s),Object.assign(i.properties,z(s),Jr(i.properties,s)),`name`in s&&(i.hasOwnName=!0),n.propertyClaims.push({declaredBy:n.sourceId,path:structuredClone(a.path),properties:structuredClone(s)}))}function zu({index:e,replacedComponents:t},n,r){let i=n;for(let[n,a]of r.entries()){let o=r.slice(n);if((t.get(i)??[]).some(t=>au(e,t,o)))return!0;if(!(n===0&&Fu(i,a)))try{i=Pu(i,a)}catch(e){if(!(e instanceof Mu))throw e;return!1}}return!1}function Bu(e,t,n){try{return Iu(t,n)}catch(r){if(!(r instanceof Mu))throw r;let i=Nu(t.sourceId,t.mainComponentId,n,r);if(i.diagnostic.reason===`missing-target`&&zu(e,t,n))return;let{options:a}=e;if(!a.onUnresolvedProperty)throw i;a.onUnresolvedProperty(i.diagnostic);return}}function Vu(e,t,n,r){for(let i of r){let r=Bu(e,t,i.path);r&&Ru(e,t,n,r,i)}}function Hu(e,t,n){if(!e.options.derivedBounds)return;let r=n.derivedSymbolData;for(let n of r??[]){let r=n.guidPath?.guids;if(!r?.length)continue;let i=Bu(e,t,r);!i||i===t||pu(i,n)}}function Uu(e,t){if(!t)return[];let n=tu(e.get(P(t))?.overrideKey);return n?[t,n]:[t]}function Wu(e,t,n){let r=e.symbolData?.symbolID;return t?[...r?[r]:[],...n].filter(e=>!Z(e,t)):[]}function Gu(e,t,n,r,i,a){let o=n.symbolData?.symbolID,s=Wu(t,o,r),c=[...Uu(e,t.symbolData?.symbolID),...Uu(e,o)],l=e=>c.some(t=>Z(t,e)),u=[{assignments:n.componentPropAssignments??[],rank:a}],d=[],f=t=>{if(!o)throw Error(`Swap target is not an instance`);Z(o,t)||s.push(o),o=t;for(let t of Uu(e,o))l(t)||c.push(t)};for(let e of i){let t=e.path.length===0||l(e.path[0]);if(!t||e.path.length>1){d.push(t?{...e,path:e.path.slice(1)}:e);continue}e.swap&&f(e.swap),e.assignments.length&&u.push({assignments:e.assignments,rank:e.owner.rank})}return{effective:o,replaced:s,groups:u,descendant:d}}function Ku(e,t){let n=e.get(t.sourceId);if(n?.type===`INSTANCE`)return t.properties.name;let r=n?.parentIndex?.guid,i=r?e.get(P(r)):void 0;return i?.isStateGroup===!0?i.name:t.properties.name}function qu(e,t){let n=cc(t.varValue?.value);return!!n&&!e.has(P(n))}function Ju(e,t){return t?{mainComponentId:t.mainComponentId??t.sourceId,mainComponentOverrideKey:t.mainComponentOverrideKey??t.overrideKey,propertyClaims:structuredClone(t.propertyClaims),variableBindingScales:{...t.variableBindingScales},hasOwnName:e.get(t.sourceId)?.type===`INSTANCE`&&t.hasOwnName}:{mainComponentId:null,mainComponentOverrideKey:void 0,propertyClaims:[],variableBindingScales:{},hasOwnName:!1}}function Yu(e,t,n,r,{effective:i,replaced:a,groups:o},{base:s,children:c},l){let u=n.symbolData?.symbolID,[,d]=Uu(e,u),f=s&&i&&!Z(u,i)&&r.type===`INSTANCE`?x(r,[`fillPaints`,`styleIdForFill`]):r,p={sourceId:t,sourceComponentId:u,sourceComponentOverrideKey:d,...Ju(e,s),bindingClaims:l,overrideKey:tu(r.overrideKey),properties:{...s&&x(s.properties,Nc),...f,...i&&r.symbolData?{symbolData:{...r.symbolData,symbolID:i}}:{},...qr(s?.properties??{},r)},children:c};return r.type===`INSTANCE`&&(p.properties.componentPropAssignments=o.flatMap(e=>e.assignments).filter(t=>!qu(e,t)),p.ownerAssignedProperties=du(o,t=>!qu(e,t))),s&&a.length&&!p.hasOwnName&&(p.properties.name=s.defaultInstanceName??s.properties.name),p.defaultInstanceName=Ku(e,p),p}var Xu=new Set,Zu=new WeakMap;function Qu(e,t,n){for(let r of B(e))Fr(r.variableData,e=>{let r=t(e);r&&n.add(r)});for(let r of e.textData?.styleOverrideTable??[])Qu(r,t,n);for(let r of K(e))Qu(r,t,n)}function $u(e){let t=G(e)?.symbolID,n=K(e).flatMap(({overriddenSymbolID:e})=>e?[e]:[]);return t?[t,...n]:n}function ed({sources:e,children:t,variables:n}){let r=i=>{let a=Zu.get(i);if(a)return a;Zu.set(i,Xu);let o=new Set;Qu(i,n.variableIdOf,o);let s=new Set;for(let e of o)for(let t of n.collectionsReachedFrom(e))s.add(t);let c=e=>{for(let t of e?r(e):Xu)s.add(t)},l=Y(i),u=l?t.get(l):void 0;for(let e of u??[])c(e);for(let t of $u(i))c(e.get(P(t)));let d=s.size?s:Xu;return Zu.set(i,d),d};return r}var td=new Map,nd=[],rd=new WeakMap,id=new WeakMap;function ad(e){let t=e?.variableModeBySetMap;if(!e||typeof t!=`object`||!t)return;let n=rd.get(t);if(n)return n;let r=zr(e);return rd.set(t,r),r}function od(e,...t){let n=t.filter(e=>!!e?.size);if(n.length===0)return e;let r=new Map(e);for(let[t,i]of n.flatMap(e=>[...e])){let n=i??e.get(t);n?r.set(t,n):r.delete(t)}return r}function sd(e){let t=id.get(e);if(t)return t;let n=new Map;return id.set(e,n),n}function cd(e){return e.flatMap(({path:e,props:t})=>{let n=ad(t);return n&&e.length?[{path:e,modes:n}]:[]})}function ld(e,t){return e.flatMap(e=>{let n=t(e.path[0])?e.path.slice(1):e.path;return n.length?[{path:n,modes:e.modes}]:[]})}function ud(e){if(e.length<2)return e[0];let t=new Map;for(let[n,r]of e.flatMap(e=>[...e]))t.has(n)||t.set(n,r);return t}function dd(e,t){let n=[],r=[],i=[];for(let a of e)if(!nu(t,a.path[0]))i.push(a);else if(a.path.length===1)n.push(a.modes);else{let e={path:a.path.slice(1),modes:a.modes};r.push(e),i.push(e)}if(!(n.length===0&&r.length===0))return{ending:ud(n),continuing:r,passing:i}}function fd(e){let{sources:t,variables:n}=e,r=sd(t),i=ed(e),a=e=>e?t.get(P(e)):void 0,o=e=>{let n=r.get(e);if(n)return n;let i=t.get(e),s=i?X(i):void 0,c=s?o(s):td,l=i?.type===`INSTANCE`?a(i.symbolData?.symbolID):void 0,u=od(c,ad(i)??ad(l));return r.set(e,u),u},s=(e,t)=>e.get(t)??n.defaultModes.get(t),c=(e,t,n)=>{let r=o(n);if(e.placed===r)return!1;let a=i(t),c=e.expandedComponent?i(e.expandedComponent):a,l=t=>(a.has(t)||c.has(t))&&s(e.placed,t)!==s(r,t);return[...e.placed.keys(),...r.keys()].some(l)},l=(e,t,n)=>{if(n.length===0)return nd;let r=e.symbolData?.symbolID,i=[a(t),a(r)];return ld(n,e=>Z(e,t)||Z(r,e)||i.some(t=>t!==void 0&&nu(t,e)))};return{atParentOf(e){let n=t.get(e),r=n?X(n):void 0;return{placed:r?o(r):td,descendantClaims:nd}},enter(e,t,n,r){if(e.expandedComponent===t)return e;let i=e.descendantClaims.length?dd(e.descendantClaims,t):void 0,o=ad(t),s=i?.ending;if(!n)return!o&&!i?e:{placed:od(e.placed,o,s),descendantClaims:i?.passing??e.descendantClaims};let c=a(n),u=[...i?.continuing??nd,...cd(r)];return{placed:od(e.placed,o??ad(c),s),descendantClaims:l(t,n,u),expandedComponent:c}},applySavedSize(e,t,n){t.type!==`INSTANCE`||!t.size||(e.properties.size=structuredClone(t.size),c(n,t,e.sourceId)||(e.derivedSize=structuredClone(t.size)))}}}function pd(e,t,n){if(t===1&&n===1)return;let r=e.inheritedOutlineScale??{fill:{x:1,y:1},stroke:{x:1,y:1}};e.inheritedOutlineScale={fill:{x:r.fill.x*t,y:r.fill.y*n},stroke:{x:r.stroke.x*t,y:r.stroke.y*n}}}function md(e,t,n){if(!t?.properties.size||!n.size)return;let r=ac(n);gd(e,{x:t.properties.size.x*r,y:t.properties.size.y*r},n.size)}function hd(e,t,n,r,i){let a=r-n;if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:t*i}}return i===`MAX`?{position:e+a,size:t}:i===`CENTER`?{position:e+a/2,size:t}:i===`STRETCH`?{position:e,size:Math.max(0,t+a)}:{position:e,size:t}}function gd(e,t,n){if(t.x===n.x&&t.y===n.y)return;let r=e.properties.stackMode&&e.properties.stackMode!==`NONE`;for(let i of e.children){let e=i.properties;if(r&&e.stackPositioning!==`ABSOLUTE`||!e.size)continue;let a=e.transform??{m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},o=hd(a.m02,e.size.x,t.x,n.x,e.horizontalConstraint),s=hd(a.m12,e.size.y,t.y,n.y,e.verticalConstraint),c={x:o.size,y:s.size};gd(i,e.size,c),e.type===`VECTOR`&&e.size.x>0&&e.size.y>0&&pd(i,c.x/e.size.x,c.y/e.size.y),e.size=c,e.transform={...a,m02:o.position,m12:s.position}}}var _d=(e,t)=>({x:e.x*t,y:e.y*t});function vd(e,t){e.fontSize!==void 0&&(e.fontSize*=t);for(let n of[`lineHeight`,`letterSpacing`]){let r=e[n];r?.units===`PIXELS`&&(e[n]={...r,value:r.value*t})}if(e.textData?.styleOverrideTable){e.textData=structuredClone(e.textData);for(let n of e.textData.styleOverrideTable??[])vd(n,t)}if(!e.derivedTextData)return;let n=structuredClone(e.derivedTextData);n.layoutSize&&=_d(n.layoutSize,t),n.truncatedHeight!==void 0&&(n.truncatedHeight*=t);for(let e of n.glyphs??[])e.position=_d(e.position,t),e.fontSize*=t;for(let e of n.baselines??[])e.position=_d(e.position,t),e.width*=t,e.lineHeight*=t,e.lineAscent*=t,e.lineY!==void 0&&(e.lineY*=t);e.derivedTextData=n}var yd=[`stackPadding`,...Object.values(Ac)],bd=[`strokeWeight`,`cornerRadius`,`rectangleTopLeftCornerRadius`,`rectangleTopRightCornerRadius`,`rectangleBottomLeftCornerRadius`,`rectangleBottomRightCornerRadius`],xd=[`fontSize`,`lineHeight`,`letterSpacing`,`textData`,`derivedTextData`],Sd=[...yd,...bd,...xd,`dashPattern`,`effects`,`size`,`transform`];function Cd(e,t){for(let n of bd){let r=e[n];typeof r==`number`&&(e[n]=r*t)}e.dashPattern&&=e.dashPattern.map(e=>e*t),e.effects&&=e.effects.map(e=>({...e,offset:e.offset?{x:e.offset.x*t,y:e.offset.y*t}:e.offset,radius:typeof e.radius==`number`?e.radius*t:e.radius,spread:typeof e.spread==`number`?e.spread*t:e.spread}))}function wd(e,t){let n=ac(t);if(!Number.isFinite(n)||n<=0)throw Error(`Invalid instance uniform scale`);if(n!==1){for(let t of Au(e)){t.layoutScale=(t.layoutScale??1)*n;for(let e of Object.keys(t.variableBindingScales??{}))t.variableBindingScales&&e!==`opacity`&&e!==`rotation`&&(t.variableBindingScales[e]*=n);let e=t.properties;vd(e,n),Cd(e,n);for(let t of yd){let r=e[t];typeof r==`number`&&(e[t]=r*n)}e.type===`VECTOR`&&pd(t,n,n),e.size&&={x:e.size.x*n,y:e.size.y*n},e.transform&&={...e.transform,m02:e.transform.m02*n,m12:e.transform.m12*n},t.derivedSize&&={x:t.derivedSize.x*n,y:t.derivedSize.y*n}}for(let n of Sd){let r=t[n];r!==void 0&&Object.assign(e.properties,{[n]:structuredClone(r)})}}}function Td(e){return{instance:(t,n={})=>Ed(e,t,`INSTANCE`,n),component:(t,n={})=>Ed(e,t,`SYMBOL`,n),page:(t,n={})=>Ed(e,t,`CANVAS`,n)}}function Ed(e,t,n,r){let{sources:i,children:a}=e,o=new Set,s=fd(e),c=Lu(e,r),l=({boundary:t})=>t?.replaced.some(n=>au(e,n,t.path))??!1,u=(e,t)=>{if(t.count===0&&l(e))return;let n=Nu(e.owner.id,e.owner.mainComponentId,e.declaredPath,t);if(t.count!==0||!r.onUnresolvedAssignment)throw n;e.owner.unresolved.push({...n.diagnostic,assignments:structuredClone(e.assignments)})},d=(t,n)=>{let r=new Map;for(let i of n){let[n]=i.path,{count:a,topChild:o}=iu(e,t,n);if(!o?.guid){u(i,new Mu(a,n));continue}let s=P(o.guid),c=nu(o,n),l={...i,path:c?i.path.slice(1):i.path},d=r.get(s);d?d.push(l):r.set(s,[l])}return r},f=(e,t)=>{let n=[],a=new Map,o=[],s,c=uu(e,t,(e,t)=>{if(n.push(e),t.origin===`assignment`&&t.rank!==void 0&&a.set(e.field,t.rank),e.field===`symbolData`)for(let e of t.superseded??[])e.guidValue&&o.push(e.guidValue);if(e.field===`slotContent`){let e=cc(t.value);s=e?P(e):void 0}});if(s&&!i.has(s)){if(!r.onMissingSlotContent)throw Error(`Missing slot content ${s}`);r.onMissingSlotContent({slotId:Y(e)??``,slotContentId:s}),s=void 0}return{source:c,claims:n,bound:a,superseded:o,slotContent:s}},p=(e,t,n,a,l)=>{if(o.has(e))throw Error(`Cyclic component expansion at ${e}`);r.onProgress?.();let u=i.get(e);if(!u)throw Error(`Missing source node ${e}`);let d=f(u,t),{source:p}=d;o.add(e);try{let o={id:e,rank:a,mainComponentId:null,unresolved:[]},f=fu(p,o),_=[...f.structural,...n].sort((e,t)=>t.owner.rank-e.owner.rank),y=Gu(i,u,p,d.superseded,_,a),b=s.enter(l,u,y.effective,f.claims),x;x=y.effective?m(o,{...y,effective:y.effective},a,b):d.slotContent?g(d.slotContent,y.descendant,a,b):h(e,p,t,y.groups,y.descendant,a,b);let S=Yu(i,e,u,p,y,x,d.claims);d.slotContent&&(S.slotContentId=d.slotContent),c.assignedFields.set(S,d.bound),x.base&&y.replaced.length&&c.replacedComponents.set(S,y.replaced),Nl(S,p);let C=x.dangling?f.claims.filter(({path:e})=>e.length===1&&Fu(S,e[0])):f.claims;v(S,x.base,p,C,a,!x.dangling,b);for(let e of o.unresolved)r.onUnresolvedAssignment?.({...e,mainComponentId:S.mainComponentId});return S}finally{o.delete(e)}},m=(t,{effective:n,replaced:a,groups:o,descendant:s},c,l)=>{let u=P(n);if(!i.has(u)){if(!r.onMissingComponent)throw Error(`Missing source node ${u}`);return r.onMissingComponent({ownerId:t.id,componentId:u}),{base:null,children:[],dangling:!0}}t.mainComponentId=ou(e,u);let d=s.map(e=>a.length?{...e,boundary:{replaced:a,path:e.path}}:e),f=o.filter(e=>e.assignments.length).map(e=>({owner:{...t,rank:e.rank},declaredPath:[],path:[],assignments:e.assignments})),m=p(u,[],[...f,...d],c+1,l);return{base:m,children:m.children}},h=(e,t,n,r,i,a,o)=>{let s=t.type===`SYMBOL`?r.reduce((e,t)=>cu(e,t.assignments,t.rank),lu(t)):n;return _(e,s,i,a,o)},g=(e,t,n,r)=>_(e,[],t,n,r),_=(e,t,n,r,i)=>{let o=d(e,n);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let n=P(e.guid);return p(n,t,o.get(n)??[],r+1,i)})}},v=(e,t,n,r,i,a,o)=>{Vu(c,e,i,r),wd(e,n),md(e,t,n),s.applySavedSize(e,n,o),a&&Hu(c,e,n)};if(i.get(t)?.type!==n){let e={INSTANCE:`an instance`,SYMBOL:`a component`,CANVAS:`a page`}[n];throw Error(`Expected ${e} source`)}return p(t,[],[],0,s.atParentOf(t))}function Dd(e,t){let n=Qe();return n.orderKey=e.properties.parentIndex?.position??null,n.fig.layout=t.source?.fig.layout??null,n.fig.uniformScaleFactor=G(e.properties)?.uniformScaleFactor??null,n}var Od=new Set([`childIds`,`source`,`instanceOverrides`]);function kd(e){return e instanceof Map||e instanceof Set?!0:typeof e!=`object`||!e||ArrayBuffer.isView(e)?!1:Object.values(e).some(kd)}function Ad(e,t){for(let n of Object.keys(e)){if(Od.has(n))continue;let r=Reflect.get(e,n),i=Reflect.get(t,n);r===i||typeof r!=`object`||!r||kd(r)||!l(r,i)||Reflect.set(e,n,i)}let n=e.source.fig.layout,r=t.source.fig.layout;n&&n!==r&&l(n,r)&&(e.source.fig.layout=r)}function jd(e,t){let n=t.inheritedOutlineScale;n&&(e.fillGeometry&&=Ze(e.fillGeometry,n.fill.x,n.fill.y),e.strokeGeometry&&=Ze(e.strokeGeometry,n.stroke.x,n.stroke.y))}function Md(e){if(e===`DOCUMENT`||e===`VARIABLE`)throw Error(`Cannot materialize ${e} as an instance descendant`)}function Nd(e,t,n,r,i={}){let{blobs:a=[],sourceChildren:o=new Map,existingNodes:s=new Map,recordId:c}=i;if(!e.getNode(t))throw Error(`Missing materialization parent`);let l=new Map,u=t=>{if(l.has(t))throw Error(`Repeated or cyclic instance occurrence`);let n=So(t.properties,a,`occurrence`);jd(n,t),n.nodeType===`TEXT`&&t.derivedSize&&(n.derivedLayout={width:t.derivedSize.x,height:t.derivedSize.y}),Md(n.nodeType);let i=s.get(t);if(i&&(e.getNode(i.id)!==i||i.type!==n.nodeType))throw Error(`Invalid preallocated occurrence ${t.sourceId}`);l.set(t,n);let c=o.get(t);if(c&&e.getNode(c)?.type!==n.nodeType)throw Error(`Invalid source child for ${t.sourceId}`);if(t.mainComponentId!==null){let n=r.get(t.mainComponentId);if(!n||e.getNode(n)?.type!==`COMPONENT`)throw Error(`Missing materialized component ${t.mainComponentId}`)}for(let e of t.children)u(e)};u(n);let d=new Map(s),f=(e,t,n)=>{if(n)for(let r of e.bindingClaims)r.origin===`assignment`&&r.field===`visible`&&k(n.instanceOverrides,n.id,t.id,`visible`,t.visible)},p=(t,n,r,i,a)=>{let o=a?void 0:c?.(t);return o?e.createNodeWithId(o,n,r,i):e.createNode(n,r,i)},m=(t,i,a)=>{let c=l.get(t);if(!c)throw Error(`Missing prepared occurrence`);let{nodeType:u,...h}=c;Md(u);let g=Dd(t,c),_={...h,variableAssignmentScales:jl(t),componentScale:Al(t),variableBindingScales:ci(h.boundVariables??{},t.layoutScale??1,t.variableBindingScales),componentId:t.mainComponentId===null?o.get(t)??null:r.get(t.mainComponentId),source:g},v=s.get(t);if(v&&v.parentId!==i)throw Error(`Preallocated occurrence has wrong parent ${t.sourceId}`);let y=v??p(t,u,i,_,a);v&&e.updateNode(v.id,_);let b=e.getNode(o.get(t)??``);if(b&&Ad(y,b),d.set(t,y),v&&t!==n&&y.type===`COMPONENT`)return y;f(t,y,a),Pd(a,y,t);let x=o.get(t);return a&&t.mainComponentId!==null&&x&&(k(a.instanceOverrides,a.id,y.id,`sourceComponentId`,x),e.getNode(x)?.componentId!==y.componentId&&k(a.instanceOverrides,a.id,y.id,`componentId`,y.componentId)),y.childIds=t.children.map(e=>m(e,y.id,y.type===`INSTANCE`?y:a).id),y},h=m(n,t);return zd(d),{root:h,nodes:d}}function Pd(e,t,{ownerAssignedProperties:n=[]}){if(e)for(let r of n)Object.hasOwn(t.componentPropertyAssignments,r)&&k(e.instanceOverrides,e.id,t.id,Ye(r),t.componentPropertyAssignments[r])}function Fd(e,t,n){return e.kind===`text`?typeof t==`object`&&!!t&&`characters`in t:e.kind!==`text-style`||!!n.textStyleId||hu(t)}function Id(e,t,n,r){if(!Array.isArray(r))return;let i=!1;for(let[a,o]of r.entries()){if(!o.colorVar?.value?.alias)continue;let r=Ue(`${n}/${a}/color`);k(e.instanceOverrides,e.id,t.id,r,t.boundVariables[`${n}/${a}/color`]??null),i=!0}i&&k(e.instanceOverrides,e.id,t.id,`boundVariables`)}function Ld(e,t,n){if(n.variableModeBySetMap)for(let r of zr(n).keys()){let n=Ve(r);k(e.instanceOverrides,e.id,t.id,n)}}function Rd(e,t,n){if(!Array.isArray(n))return;let r=!1,i=Ot(n);for(let[a,o]of n.entries()){let n=i[a];if(n!==null)for(let i of Re){if(!o[V[i]]?.value?.alias)continue;let a=Fe(n,i);k(e.instanceOverrides,e.id,t.id,Ue(a),t.boundVariables[a]??null),r=!0}}r&&k(e.instanceOverrides,e.id,t.id,`boundVariables`)}function zd(e){for(let[t,n]of e)if(n.type===`INSTANCE`)for(let r of t.propertyClaims){let i=Iu(t,r.path),a=e.get(i);if(!a)throw Error(`Unmaterialized property claim target`);for(let e of Object.keys(Ec)){if(!(e in r.properties))continue;let t=Ec[e];if(Fd(t,r.properties[e],a)){for(let e of t.scene){let t=a[e];k(n.instanceOverrides,n.id,a.id,e,structuredClone(t))}t.kind===`paint`&&Id(n,a,t.scene[0],r.properties[e]),e===`effects`&&Rd(n,a,r.properties[e])}}Ml(n,a,r.properties),Ld(n,a,r.properties)}}function Bd(e,t,n){if(e.mainComponentId===null){for(let r of e.children)Bd(r,t,n);return}let r=n.get(e.mainComponentId);if(!r)throw Error(`Missing component occurrence ${e.mainComponentId}`);let i=r.materialized.nodes,a=(e,r)=>{let o=i.get(r),s=new Map((o?t.getChildren(o.id):[]).map((e,t)=>[e.id,t])),c=new Map(r.children.map(e=>[e.sourceId,e])),l=e=>{let t=c.get(e.sourceId),n=t&&i.get(t);return n&&s.get(n.id)};e.children=e.children.filter(e=>l(e)!==void 0).toSorted((e,t)=>(l(e)??0)-(l(t)??0));for(let r of e.children){let e=c.get(r.sourceId);r.mainComponentId!==null||r.slotContentId||!e?Bd(r,t,n):a(r,e)}};a(e,r.occurrence)}function*Vd(e,t){let n=new Map;for(let e of t.children){if(n.has(e.sourceId))throw Error(`Ambiguous source child ${e.sourceId}`);n.set(e.sourceId,e)}for(let t of e.children){let e=n.get(t.sourceId);if(!e)throw Error(`Missing source child ${t.sourceId}`);yield[t,e]}}function Hd(e,t){let n=new Map,r=(e,i)=>{let a=t.materialized.nodes.get(i);if(a){n.set(e,a);for(let[t,n]of Vd(e,i))r(t,n)}};return r(e,t.occurrence),n}function Ud(e,t,n){let r=[],i=(e,n,a,o)=>{for(let[s,c]of Vd(e,n)){let e=t.nodes.get(s),n=o.get(c);if(!e||!n)throw Error(`Missing materialized correspondence for ${s.sourceId}`);r.push({owner:a,target:e,source:n}),!s.slotContentId&&s.mainComponentId===c.mainComponentId&&i(s,c,a,o)}};for(let r of Au(e)){if(r.mainComponentId===null)continue;let e=n.get(r.mainComponentId),a=t.nodes.get(r);if(!e||!a)throw Error(`Missing component ${r.mainComponentId}`);i(r,e.occurrence,a,e.materialized.nodes)}for(let{owner:e,target:t,source:n}of r)k(e.instanceOverrides,e.id,t.id,`sourceComponentId`,n.id),t.type===`INSTANCE`&&t.componentId!==n.componentId&&k(e.instanceOverrides,e.id,t.id,`componentId`,t.componentId)}function Wd(e,t){let n=new Map,r=(e,t,o)=>{for(let[s,c]of Vd(e,t)){let e=o.get(c);if(!e)throw Error(`Unmaterialized source child ${c.sourceId}`);if(n.set(s,e.id),s.mainComponentId!==null)i(s);else if(s.slotContentId)for(let e of s.children)a(e);else r(s,c,o)}},i=e=>{if(e.mainComponentId===null)throw Error(`Expected instance occurrence`);let n=t.get(e.mainComponentId);if(!n)throw Error(`Missing component occurrence ${e.mainComponentId}`);r(e,n.occurrence,n.materialized.nodes)},a=e=>{if(e.mainComponentId!==null)i(e);else for(let t of e.children)a(t)};return a(e),n}function Gd(e,t){for(let n of t){let t=mt(e,n);t.effects&&e.updateNode(n.id,t)}}function Kd(e,t,n,r=new Map){let i=new Map;for(let e of n)e.type===`INSTANCE`&&qe(e.instanceOverrides,(t,n)=>{if(n!==`width`&&n!==`height`)return;let r=t||e.id,a=i.get(r)??new Set;a.add(n),i.set(r,a)});for(let a of n){let n=ci(a.boundVariables,r.get(a.id)??1,a.variableBindingScales);e.updateNode(a.id,{variableBindingScales:n});for(let r in a.boundVariables){if((r===`width`||r===`height`)&&t.has(a.id)||i.get(a.id)?.has(r))continue;let o=a.boundVariables[r],s=e.variables.get(o);if(!s)continue;let c=e.getNodeVariableModeId(a.id,s.collectionId),l=e.resolveVariable(o,c);if(typeof l!=`number`)continue;let u=li(r,r===`opacity`?l:l*(n[r]??1));u&&e.updateNode(a.id,u)}}}function qd(e,t){for(let n of t){pt(e,n,{fills:n.fills,strokes:n.strokes});for(let t of Object.keys(n.boundVariables)){let r=Pe(t);r&&gt(e,n,r.list)&&vt(e,n,t)}}}function Jd(e,t){for(let n of t){if(n.boundVariables.visible){let{visible:t}=ht(e,n);t!==void 0&&e.updateNode(n.id,{visible:t})}if(n.type!==`TEXT`)continue;let t=n.boundVariables.text;if(!t)continue;let r=ee(e.resolveVariableForNode(n.id,t));r===void 0||r===n.text||e.updateNode(n.id,{text:r})}}function Yd(e,t,n,r){let i=r??new Map;if(!r)for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)i.set(e.id,e.type);for(let e of n){let n;e.componentPropertyDefinitions.forEach((r,a)=>{if(i.set(r.id,r.type),r.type!==`INSTANCE_SWAP`)return;let o=t.get(r.defaultValue);o&&(n??=[...e.componentPropertyDefinitions],n[a]={...r,defaultValue:o})}),n&&(e.componentPropertyDefinitions=n)}for(let e of n){let n;for(let r in e.componentPropertyAssignments){if(i.get(r)!==`INSTANCE_SWAP`)continue;let a=t.get(e.componentPropertyAssignments[r]);a&&(n??={...e.componentPropertyAssignments},n[r]=a)}n&&(e.componentPropertyAssignments=n)}}function Xd(e,t){for(let n of t){if(n.type!==`COMPONENT`||!n.parentId||n.variantPropSpecs.length===0)continue;let t=e.getNode(n.parentId);if(t?.type!==`COMPONENT_SET`)continue;let r=new Map(t.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of n.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(n.id,{componentPropertyValues:i})}}function Zd(e,t){let n=e.getNode(e.rootId);if(!n||!t)return;n.source.format=`fig`,n.pluginData=t.pluginData?.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))??[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=H(t,A.enabledLibraries);for(let t of r??[])e.enabledLibraries.set(t.libraryId,t)}function Qd(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function $d(e){let t=dl(e);if(!t)return null;let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=n.getUint32(8,!0),i=12,a=[];for(;i<e.length&&!(i+4>e.length);){let t=n.getUint32(i,!0);if(i+=4,i+t>e.length)throw Error(`Corrupted .fig file: chunk at offset ${i-4} declares length ${t} but only ${e.length-i} bytes remain`);a.push(e.slice(i,i+t)),i+=t}return a.length<2?null:{schemaDeflated:a[0],dataRaw:wl(a[1]),version:r,kind:t}}function ef(e){return typeof e==`object`&&!!e&&!Array.isArray(e)&&!(e instanceof Uint8Array)}function tf(e,t,n){let r=$d(e);if(!r)throw Error(`Invalid fig-kiwi container`);let i=Nn(In(new F(Yt(r.schemaDeflated))),n);if(t)try{let e=dr(i.schema,r.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}if(!i.decodeMessage)throw Error(`The fig-kiwi schema has no Message`);let a=i.decodeMessage(r.dataRaw),o=a.nodeChanges;if(!Array.isArray(o)||o.length===0)throw Error(`No nodes found in .fig file`);let s=o;return Qd(s),{nodeChanges:s,blobs:(Array.isArray(a.blobs)?a.blobs:[]).map(e=>{let t=ef(e)?e.bytes:void 0;return t instanceof Uint8Array?t:new Uint8Array(Object.values(t??{}))}),figKiwiVersion:r.version,figSchemaDeflated:r.schemaDeflated,kind:r.kind}}var nf=101010256,rf=33639248,af=67324752,of=22,sf=46,cf=65557;function lf(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function uf(e){let t=lf(e);for(let n=e.byteLength-of;n>=0;n--)if(t.getUint32(n,!0)===nf)return{size:t.getUint32(n+12,!0),offset:t.getUint32(n+16,!0)};return null}function df(e){let t=lf(e),n=new TextDecoder,r=[];for(let i=0;i+sf<=e.byteLength;){if(t.getUint32(i,!0)!==rf)return null;let a=t.getUint16(i+28,!0),o=i+sf+a+t.getUint16(i+30,!0)+t.getUint16(i+32,!0);if(o>e.byteLength)return null;let s=i+sf;r.push({name:n.decode(e.subarray(s,s+a)),method:t.getUint16(i+10,!0),compressedSize:t.getUint32(i+20,!0),size:t.getUint32(i+24,!0),localOffset:t.getUint32(i+42,!0)}),i=o}return r}function ff(e,t){if(t.byteLength<30)return null;let n=lf(t);return n.getUint32(0,!0)===af?e.localOffset+30+n.getUint16(26,!0)+n.getUint16(28,!0):null}function pf(e){let t=Math.max(0,e.byteLength-cf),n=uf(e.subarray(t));return!n||n.offset+n.size>e.byteLength?null:df(e.subarray(n.offset,n.offset+n.size))}function mf(e,t){let n=ff(t,e.subarray(t.localOffset,t.localOffset+30));if(n===null||n+t.compressedSize>e.byteLength)throw Error(`ZIP entry ${t.name} is not where the central directory places it`);return e.subarray(n,n+t.compressedSize)}function hf(e,t){let n=mf(e,t);if(t.method===0)return n;if(t.method===8)return Yt(n,{out:new Uint8Array(t.size)});throw Error(`ZIP entry ${t.name} uses compression method ${t.method}`)}var gf=4*1024*1024,_f=8*1024*1024,vf=16*1024*1024,yf=`thumbnail.png`;function bf(e,t){return Number.isFinite(e)&&e&&e>0?e:t}function xf(e){return Wt(e)?.type===`image/png`}function Sf(e){let t=Wt(e);return t?.type===`image/png`&&t.width>1&&t.height>1}async function Cf(e,t,n){let r=ff(t,await e.read(t.localOffset,Math.min(e.size,t.localOffset+30)));if(r===null||r+t.compressedSize>e.size)return null;let i=await e.read(r,r+t.compressedSize);if(t.method===0)return i.byteLength===t.size&&Sf(i)?i:null;if(t.method!==8)return null;let a=(()=>{try{return Yt(i,{out:new Uint8Array(n+1)})}catch{return null}})();return a?.byteLength===t.size&&Sf(a)?a:null}async function wf(e,t={}){if(!Number.isSafeInteger(e.size)||e.size===0)return null;let n=bf(t.maxTailBytes,gf),r=bf(t.maxCompressedBytes,_f),i=bf(t.maxOutputBytes,vf),a=Math.max(0,e.size-cf),o=await e.read(a,e.size),s=uf(o);if(!s||s.size>n||s.offset+s.size>e.size)return null;let c=df(s.offset>=a?o.subarray(s.offset-a,s.offset-a+s.size):await e.read(s.offset,s.offset+s.size))?.find(e=>e.name===yf);return!c||c.compressedSize>r||c.size>i?null:Cf(e,c,i)}var Tf=1024*1024;function*Ef(e){let t=[],n=new Jt((e,n)=>{if(e)throw e;t.push(n)});for(let r of e){let e=r.deflate?new Xt(r.name):new Kt(r.name);n.add(e);let i=0;do{let n=Math.min(i+Tf,r.data.byteLength);e.push(r.data.subarray(i,n),n===r.data.byteLength),yield*t.splice(0),i=n}while(i<r.data.byteLength)}n.end(),yield*t.splice(0)}function Df(e){return new ReadableStream({pull(t){let n=e.next();n.done?t.close():t.enqueue(n.value)},cancel(){e.return?.()}},{highWaterMark:0})}function Of(e){return Df(Ef(e))}function*kf(e){for(let t=0;t<e.byteLength;t+=Tf)yield e.subarray(t,t+Tf)}function Af(e){return Df(kf(e))}async function jf(e){return new Uint8Array(await new Response(e).arrayBuffer())}function Mf(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function Nf(e){for(let t of[`canvas.fig`,`canvas`])if(e.some(([e])=>e===t))return t;let t=null;for(let[n,r]of e)Mf(n)||t&&t.size>=r||(t={name:n,size:r});return t?.name??null}function Pf(e){let t=Nf(Object.entries(e).flatMap(([e,t])=>t?[[e,t.byteLength]]:[]));return t===null?null:e[t]??null}function Ff(e){return e===`canvas.fig`||e===`canvas`}function If(e,t,n){let r=Cl(e);if(!r)return null;let i=tf(e,t,n),a=r.slice(2).find(xf)??null;return{...i,images:[],thumbnailPNG:a,metaJSON:null}}function Lf(e,t,n){let r=new Uint8Array(e),i=If(r,t,n);if(i)return i;let a=Pf(qt(r,{filter:({name:e})=>Ff(e)})),o,s;if(a)s=tf(a,t,n),o=qt(r,{filter:({name:e})=>!Ff(e)});else{if(o=qt(r),a=Pf(o),!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(o).join(`, `)}`);s=tf(a,t,n)}let c=o[`meta.json`];return{...s,images:Rf(o,`images/`),thumbnailPNG:o[`thumbnail.png`]??null,metaJSON:Object.hasOwn(o,`meta.json`)?new TextDecoder().decode(c):null}}function Rf(e,t){return Object.entries(e).filter(([e])=>e.startsWith(t)&&e!==t).map(([e,n])=>[e.slice(t.length),n])}function zf(e){let t=$d(e);if(!t)throw Error(`Invalid fig-kiwi container`);return{schemaDeflated:t.schemaDeflated,dataRaw:t.dataRaw,figKiwiVersion:t.version,kind:t.kind}}function Bf(e){let t=new Uint8Array(e),n=Cl(t);if(n){let e=n.slice(2).find(xf)??null;return{...zf(t),images:[],videos:[],thumbnailPNG:e,metaJSON:null}}let r=pf(t);if(!r)throw Error(`Not a .fig file: neither a ZIP archive nor a fig-kiwi container`);let i=new Map(r.map(e=>[e.name,e])),a=e=>{let n=e===null?void 0:i.get(e);return n?hf(t,n):null},o=a(Nf(r.map(e=>[e.name,e.size])));if(!o)throw Error(`No canvas data found in .fig file. Entries: ${r.map(e=>e.name).join(`, `)}`);let s=e=>r.filter(t=>t.name.startsWith(e)&&t.name!==e).map(n=>[n.name.slice(e.length),hf(t,n)]),c=a(`meta.json`);return{...zf(o),images:s(`images/`),videos:s(`videos/`),thumbnailPNG:a(`thumbnail.png`),metaJSON:c?new TextDecoder().decode(c):null}}function Vf(e){let{r:t,g:n,b:r,a:i}=e.backgroundColor,{x:a,y:o,width:s,height:c}=e.renderCoordinates,l={client_meta:{background_color:{r:Math.fround(t),g:Math.fround(n),b:Math.fround(r),a:Math.fround(i)},thumbnail_size:{width:e.thumbnailSize.width,height:e.thumbnailSize.height},render_coordinates:{x:a,y:o,width:s,height:c}},file_name:e.fileName,developer_related_links:[],exported_at:e.exportedAt.toISOString()};return JSON.stringify(l)}var Hf=O(w(),se(),_e(w(),ye()));function Uf(e,t){let n=pf(e),r=n?.find(e=>e.name===`meta.json`);if(!n||!r)return null;let i=fe(Hf,new TextDecoder().decode(hf(e,r)));if(!i.success||typeof i.output.file_name!=`string`)return null;if(i.output.file_name===t)return Af(e);let a=new TextEncoder().encode(JSON.stringify({...i.output,file_name:t}));return Of(n.map(t=>t===r?{name:t.name,data:a,deflate:!0}:{name:t.name,data:hf(e,t),deflate:t.method!==0}))}function Wf(e){return[{name:`canvas.fig`,data:e.canvasFig},{name:`thumbnail.png`,data:e.thumbnailPNG},{name:`meta.json`,data:new TextEncoder().encode(e.metaJSON),deflate:!0},...(e.images??[]).map(e=>({name:e.name,data:e.data}))]}function Gf(e){return Of(Wf(e))}var Kf=new Set([`VISIBLE`,`TEXT_DATA`,`OVERRIDDEN_SYMBOL_ID`,`SLOT_CONTENT_ID`]);function qf(e){for(let t of e.componentPropDefs??[]){let e=t.varValue?.value;t.initialValue||!e||(t.initialValue=e.symbolIdValue?.guid?{guidValue:structuredClone(e.symbolIdValue.guid)}:structuredClone(e))}}function Jf(e){qf(e);let t=[];for(let n of e.parameterConsumptionMap?.entries??[]){let e=n.variableData?.value?.propRefValue?.defId;n.variableData?.dataType!==`PROP_REF`||!e||!n.variableField||Kf.has(n.variableField)&&t.push({defID:structuredClone(e),componentPropNodeField:n.variableField})}t.length?e.componentPropRefs=t:Reflect.deleteProperty(e,`componentPropRefs`)}var Yf=[`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForText`,`styleIdForEffect`,`styleIdForGrid`];function Xf(e){return e.vectorData?.styleOverrideTable??[]}function Zf(e,t,n){let r=new Set;return oc(e,e=>{for(let i of[e,...e.textData?.styleOverrideTable??[],...Xf(e)])for(let e of Yf){let a=i[e];if(!a)continue;let o=a.guid?P(a.guid):t(a);o&&n.has(o)&&r.add(o)}}),r}function Qf(e,t,n){for(let r of K(e))n(r,[...t,...r.guidPath?.guids??[]]);for(let r of e.derivedSymbolData??[])n(r,[...t,...r.guidPath?.guids??[]])}function $f(e){return(t,n,r)=>{let i=(t,i,a)=>{if(!t?.assetRef||t.guid)return;let o=e(t);if(!o){r?.({sourceId:n,field:i,key:t.assetRef.key,path:structuredClone(a)});return}t.guid=N(o)},a=(e,t)=>{Jf(e);for(let n of B(e))Fr(n.variableData,e=>i(e,n.variableField??`unknown`,t));for(let[n,r]of[[`fillPaints`,e.fillPaints],[`strokePaints`,e.strokePaints]])for(let e of r??[])i(e.colorVar?.value?.alias,n,t);for(let n of e.effects??[])for(let e of ui(n))i(e,`effects`,t);let n=e.variableModeBySetMap;for(let e of n?.entries??[])i(e.variableSetID,`variableModeBySetMap`,t);for(let n of Yf)i(e[n],n,t);for(let n of e.textData?.styleOverrideTable??[])a(n,t);for(let n of Xf(e))a(n,t);Qf(e,t,a)};a(t,[])}}function ep(e){let t=$f(Fl(e));return(e,n)=>t(e,e.guid?P(e.guid):`unknown`,n)}function tp(e,t){let n=ep(e);return e.map(e=>{let r=structuredClone(e);return n(r,t),r})}function np(e,t){let n=new Map;for(let[r,i]of e.children){let a=i.flatMap(e=>{let t=Y(e);return e.type===`SYMBOL`&&t?[t]:[]}),o=e.sources.get(r);a.length>0&&o&&t(o)&&n.set(r,a)}return n}function rp(e){let t=t=>{let n=e.header(t);return{id:t,name:n?.name??``,specs:n?Ao(n):[],layerId:e.isBuilt(t)?e.layerOf().get(t):void 0}},n=n=>{let r=e.sets().get(n)??[];return r.every(e.isBuilt)?[]:r.map(t)};return{ofSetLayer(t){let r=e.layerOf();for(let i of e.sets().keys())if(r.get(i)===t)return n(i);return[]},bySetLayer(){let t=e.layerOf();return[...e.sets().keys()].flatMap(e=>{let r=t.get(e),i=r?n(e):[];return r&&i.length>0?[[r,i]]:[]})}}}function ip(e,t,n,r=()=>!1,i=()=>!0){let a=n,o=new Map,s=e=>{if(e.mainComponentId===null){e.properties.type===`SYMBOL`&&o.set(e.sourceId,e);for(let t of e.children)s(t)}};for(let t of e)s(t);let c=[],l=new Set,u=new Set,d=e=>{let t=new Set,n=e;for(;n;){if(t.has(n))throw Error(`Cyclic source hierarchy at ${n}`);t.add(n);let e=a.get(n);if(!e)throw Error(`Missing source ancestor ${n}`);if(e.type===`CANVAS`)return n;n=X(e)}throw Error(`Component ${e} has no source page`)},f=e=>{for(let t of Au(e))t.mainComponentId!==null&&p(t.mainComponentId),t.properties.type===`SYMBOL`&&i(t.sourceId)&&p(t.sourceId)},p=e=>{if(l.has(e))return;if(r(e)){l.add(e);return}if(u.has(e))throw Error(`Cyclic component dependency ${e}`);u.add(e);let n=a.get(e);if(!n?.parentIndex?.guid)throw Error(`Missing component parent ${e}`);let i=d(e),s=o.get(e)??t(e);for(let e of s.children)f(e);c.push({sourceId:e,parentSourceId:P(n.parentIndex.guid),pageSourceId:i,occurrence:s}),l.add(e),u.delete(e)};for(let t of e)f(t);return c}var ap=class{source;decode;constructor(e,t){this.source=e,this.decode=t}get size(){return this.source.size}get(e){let t=this.source.get(e);return t===void 0?void 0:this.decode(t)}has(e){return this.source.has(e)}keys(){return this.source.keys()}*values(){for(let e of this.source.values())yield this.decode(e)}*entries(){for(let[e,t]of this.source)yield[e,this.decode(t)]}forEach(e){for(let[t,n]of this.entries())e(n,t,this)}[Symbol.iterator](){return this.entries()}};function op(e,t,n){let r=new Set,i=e=>{e&&r.add(P(e))},a=e=>{i(e.value?.guidValue),i(e.varValue?.value?.symbolIdValue?.guid)};return oc(e,(e,o)=>{i(G(e)?.symbolID),i(o?.overriddenSymbolID);for(let i of e.componentPropDefs??[])if(i.type===`INSTANCE_SWAP`&&a({value:i.initialValue,varValue:i.varValue}),i.type===`INSTANCE_SWAP`||i.type===`SLOT`)for(let e of i.preferredValues?.instanceSwapValues??[]){if(!e.key)continue;let i=t?.({assetRef:{key:e.key,version:e.version}});if(!i){if(!n)throw Error(`Unresolved preferred component ${e.key}`);n(e.key);continue}r.add(i)}for(let t of e.componentPropAssignments??[])a(t)}),r}function sp(e){let t=new Set;return oc(e,e=>{for(let n of e.componentPropAssignments??[]){let e=cc(n.varValue?.value);e&&t.add(P(e))}}),t}function cp(e,t){if(t){for(let n of t)if(e.get(n)?.type!==`CANVAS`)throw Error(`Unknown page ${n}`)}}function lp(e,t,n,r){for(let i of t){let t=new Set([i]),a=e.get(i),o=a?X(a):void 0;for(;o!==void 0;){if(t.has(o))throw Error(`Cyclic source hierarchy at ${o}`);if(t.add(o),n.has(o))break;if(n.add(o),a=e.get(o),!a){r.add(o);break}o=X(a)}}}function up(e,t,n,r=e=>e,i=[]){let a=Fl(e),{sources:o,children:s}=n,l=new Set(o.keys()),u=new Set,d=new Set,f=new Set,p=new Set,m=new Set,h=new Set,g=new Set,_=new Set;cp(o,t);let v=new Set,y=e=>{let t=e,n=new Set;for(;t&&t.type!==`CANVAS`;){let e=X(t);if(e===void 0||n.has(e))return!1;n.add(e),t=o.get(e)}return t?.internalOnly===!0},b=e=>{let t=e.type===`SYMBOL`?X(e):void 0;if(t===void 0||v.has(t))return[];v.add(t);let n=o.get(t);return!n||y(n)||!Lo(r(n))?[]:(s.get(t)??[]).flatMap(e=>e.type===`SYMBOL`?Y(e)??[]:[])},x=e.filter(e=>e.type===`CANVAS`&&(t?t.has(Y(e)??``):e.internalOnly!==!0)).flatMap(e=>Y(e)??[]);for(c(x,i);x.length;){let e=x.pop();if(!e||u.has(e))continue;let t=o.get(e);if(!t){h.has(e)?m.add(e):g.has(e)?_.add(e):p.add(e);continue}u.add(e);let n=r(t),i=op(n,a,e=>f.add(e));for(let e of i)h.add(e);let c=sp(n);for(let e of c)g.add(e);for(let t of s.get(e)??[]){let e=Y(t);e!==void 0&&x.push(e)}for(let e of[b(t),Zf(n,a,l),i,c])for(let t of e)x.push(t)}return lp(o,u,d,p),{contentIds:u,ancestorIds:d,missingIds:p,missingComponentIds:m,missingSlotContentIds:_,externalPreferredKeys:f}}function dp(e,t){let n=e.componentPropDefs;n&&(e.componentPropDefs=n.map(e=>{if(!e.parentPropDefId)return e;let n=P(e.parentPropDefId);for(let r of t){let t=(r.componentPropDefs??[]).filter(e=>e.id&&P(e.id)===n);if(t.length>1)throw Error(`Ambiguous parent property ${n}`);if(t.length===1)return{...structuredClone(t[0]),...e}}throw Error(`Missing parent property ${n}`)}))}function fp(e){let t=new Map;for(let n of e.componentPropDefs??[])n.id&&n.parentPropDefId&&t.set(P(n.id),P(n.parentPropDefId));return t}function pp(e,t){let n=t,r=new Set,i=new Set,a=e=>{if(i.has(e))return;if(r.has(e))throw Error(`Cyclic component-property ancestry`);r.add(e);let t=[],o=n.get(X(e)??``),s=new Set([e]);for(;o;){if(s.has(o))throw Error(`Cyclic component-property ancestry`);s.add(o),a(o),t.push(o),o=n.get(X(o)??``)}dp(e,t),r.delete(e),i.add(e)};for(let t of e)a(t)}function mp(e,t){return Tp(bp(e),t)}var hp=[`guid`,`parentIndex`,`type`,`phase`,`name`,`internalOnly`,`key`,`version`,`styleType`,`overrideKey`,`componentPropDefs`,`variantPropSpecs`];function gp(e,t){let n=Lf(e,void 0,{NodeChange:hp});return{figKiwiVersion:n.figKiwiVersion,figSchemaDeflated:n.figSchemaDeflated,kind:n.kind,reader:Tp(Sp(n.nodeChanges),t),blobs:n.blobs,images:n.images,records:n.nodeChanges}}function _p(e,t,n){Qi(e,t,n),vp(e,t,n);for(let r of Xf(t))Qi(e,r,n);for(let r of K(t))_p(e,r,n)}function vp(e,t,n){for(let r of t.textData?.styleOverrideTable??[])Ji(e,r,n)}function yp(e){return e.type===`VARIABLE`||e.type===`VARIABLE_SET`}function bp(e){let t=[],n=tp(e.filter(Ql),e=>t.push(e)),r=eu(n);pp(n,r.sources);let i=Gi(n);for(let e of n)_p(r.sources,e,i);let a=e=>e,o=Gl(n),s=Ki(r.sources,i);return{records:n,index:r,bindingDiagnostics:t,scope:()=>a,shared:a,interpreterIndex:()=>({...eu(n.filter(e=>!yp(e))),variables:o,textStyle:s}),variables:o,textStyle:s}}function xp(e){let t=Dn(e);if(!t)throw Error(`Record header has no archive bytes to read it whole`);return Qd([t]),t}function Sp(e){let t=e.filter(Ql),n=eu(t),r=ep(t),i=Gi(t),a=[];for(let e of t)r(xp(e),e=>a.push(e));let o=new Map,s=new ap(n.sources,e=>e.styleType?u(e):e),c=new Set,l=(e,t)=>{if(c.has(e))throw Error(`Cyclic component-property ancestry`);c.add(e);try{let a=xp(e);r(a);let o=[];for(let r=n.sources.get(X(e)??``);r;r=n.sources.get(X(r)??``))o.push(t(r));return dp(a,o),_p(s,a,i),a}finally{c.delete(e)}},u=e=>{let t=o.get(e);return t||(t=l(e,u),o.set(e,t)),t},d=Gl(t,xp),f=Ki(s,i);return{records:t,index:n,bindingDiagnostics:a,scope:()=>{let e=new Map,t=n=>{let r=o.get(n)??e.get(n);if(r)return r;let i=l(n,t);return e.set(n,i),i};return t},shared:u,interpreterIndex:()=>{let{sources:e,children:n}=eu(t.filter(e=>!yp(e))),r=new WeakMap;return{variables:d,textStyle:f,sources:new ap(e,u),children:new ap(n,e=>{let t=r.get(e);return t||(t=e.map(u),r.set(e,t)),t})}},variables:d,textStyle:f}}function Cp(e){let t=e.scope();return np(e.index,e=>Lo(e)||Lo(t(e)))}function wp(e){let t,n;return{records:e,get sourceInterpreter(){return t??=Td(e.interpreterIndex()),t},get componentSetVariants(){return n??=Cp(e),n}}}function Tp(e,t,n=[]){let r=`sourceInterpreter`in e?e:wp(e),{records:i,index:a,bindingDiagnostics:o}=r.records,s=i,c=r.records.scope(),l=s.filter(yp),u=up(s,t,a,c,n);if(u.missingIds.size)throw Error(`Missing reachable sources: ${[...u.missingIds].join(`, `)}`);let d=s.filter(e=>!yp(e)&&(e.type===`CANVAS`||e.guid&&(u.contentIds.has(P(e.guid))||u.ancestorIds.has(P(e.guid))))).map(c),f=r.sourceInterpreter,p=Td({...eu(d),variables:r.records.variables,textStyle:r.records.textStyle}),m=s.filter(e=>e.type===`CANVAS`).toSorted($l).map(e=>{if(!e.guid)throw Error(`Page has no GUID`);return{id:P(e.guid),name:e.name??``,position:e.parentIndex?.position??null,internalOnly:e.internalOnly===!0}}),h=new Set(m.map(e=>e.id)),g;return{selectPages(e){return Tp(r,e)},selectComponents(e){return Tp(r,new Set,e)},get componentSetVariants(){return r.componentSetVariants},recordHeader(e){return a.sources.get(e)},savedChildIds(e){return(a.children.get(e)??[]).flatMap(e=>Y(e)??[])},get sourceRecords(){return structuredClone(s.map(c))},get recordIds(){return g??=new Set(s.flatMap(e=>e.guid?[P(e.guid)]:[])),g},get documentRecord(){let e=s.find(e=>e.type===`DOCUMENT`);return structuredClone(e&&c(e))},dependencyClosure:u,pages:m,get resources(){return structuredClone(l.map(c))},bindingDiagnostics:o,propertyCopies(e){let t=a.sources.get(e);return t?fp(t):new Map},readPage(e,t={}){if(!h.has(e))throw Error(`Unknown page ${e}`);let n=p.page(e,t);return n.children=n.children.filter(e=>e.properties.isSlotContent!==!0),n},planComponents(e,t={},n){return ip(e,e=>f.component(e,t),a.sources,n,e=>u.contentIds.has(e))},readComponent:f.component}}function Ep(e,t,n){let r=e.get(t);r?r.push(n):e.set(t,[n])}function Dp(e,t,n,r){let i=new Set(n),a=t.filter(e=>r.has(e));if(a.length===0)return[...i,...t.filter(e=>!i.has(e))];let o=t=>e.getNode(t)?.source.orderKey??null,s=new Set(a),l=a.flatMap(e=>{let t=o(e);return t===null?[]:[{id:e,key:t}]}).sort((e,t)=>je(e.key,t.key)),u=new Map,d=new Map,f=[],p=[...i].filter(e=>!s.has(e));for(let e of p){let t=o(e);if(t===null||l.length===0){f.push(e);continue}let n=0,r=l.length;for(;n<r;){let e=n+r>>1;je(l[e].key,t)<0?n=e+1:r=e}n===0?Ep(u,l[0].id,e):Ep(d,l[n-1].id,e)}let m=e=>e.sort((e,t)=>je(o(e)??``,o(t)??``)),h=[];for(let e of a)c(h,m(u.get(e)??[])),h.push(e),c(h,m(d.get(e)??[]));c(h,f);for(let e of t)!s.has(e)&&!i.has(e)&&h.push(e);return h}function Op(e,t=[],n={}){return Ip(mp(e,n.pageIds),t,n)}function kp(e,t){return e.images?e:{...e,archiveImages:t}}function Ap(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.set(e.id,e.type);return t}function jp(e){let t;do t=`0:${e.nextImportedId++}`;while(e.recordIds.has(t));return t}function Mp(e,t){let n=!0,r=e,i={nextImportedId:1,recordIds:t},a=new Me(()=>{if(!n)return De();let e=r??jp(i);return r=void 0,e});return n=!1,{graph:a,nextImportedId:i.nextImportedId}}function Np(e,t){let n=H(e,A.documentId);return n&&!t.has(n)?n:e.guid&&P(e.guid)}function Pp(e,t){let n=e.documentRecord,{recordIds:r}=e,i=Mp(n&&Np(n,r),r),{graph:a}=i,o={graph:a,nextImportedId:i.nextImportedId,recordIds:r,sources:new Map,components:new Map,componentIds:new Map,savedSizeNodes:new Set,propertyCopies:t=>e.propertyCopies(t)};Zd(a,n);for(let[e,n]of t.images??[])a.images.set(e,n.slice());for(let[e,n]of t.archiveImages??[])a.images.set(e,n);a.applyImportedStateDuring(()=>Jl(a,e.resources,t.onUnsupportedResource,t.onUnsupportedVariableExpression),()=>jp(o));for(let e of a.getPages())a.deleteNode(e.id);return o}function Fp(e,t){e.preserveSourceMetadataDuring(()=>{for(let[n,r]of t){let t=e.getNode(n);if(!t)continue;let i=new Set(Ol(e,t).flatMap(e=>e.source.editedFields)),a={};t.width!==r.width&&!i.has(`width`)&&(a.width=r.width),t.height!==r.height&&!i.has(`height`)&&(a.height=r.height),Object.keys(a).length>0&&e.updateNode(n,a)}})}function Ip(e,t,n,r,i={edited:!1}){for(let t of e.bindingDiagnostics){if(!n.onUnresolvedBinding)throw Error(`Unresolved binding ${t.sourceId}: ${t.field}`);n.onUnresolvedBinding(t)}let a=i.onProgress?{...n,onProgress:i.onProgress}:n,o=e.pages.map(t=>e.readPage(t.id,a)),s=r??Pp(e,n),c=e.planComponents(o,a,e=>s.components.has(e));return s.graph.applyImportedStateDuring(()=>Rp(o,c,t,s,i),()=>jp(s))}function Lp(e,t){return e.children.flatMap(e=>e.properties.type===`SYMBOL`?[]:e.mainComponentId===null?Lp(e,t):t.get(e)?.id??[])}function Rp(e,t,n,r,{edited:i,onProgress:a}){let{graph:o,sources:s,components:c,savedSizeNodes:l,componentIds:u}=r,d=new Set(o.nodes.keys()),f=new Map,p=new Map,m=e=>{for(let[t,n]of e)t.derivedSize&&(l.add(n.id),p.set(n.id,{width:n.width,height:n.height})),t.layoutScale!==void 0&&f.set(n.id,t.layoutScale)},h=({sourceId:e})=>o.isEntityIdTaken(e)?void 0:e,g=[],_=(e,t)=>{if(e.mainComponentId!==null)return;let r=s.get(e.sourceId);if(r){for(let t of e.children)_(t,r);return}let{nodeType:i,...a}=So(e.properties,n);if(i===`DOCUMENT`||i===`VARIABLE`)throw Error(`Unsupported scene type ${i}`);let c=h(e),l=c?o.createNodeWithId(c,i,t,a):o.createNode(i,t,a);s.set(e.sourceId,l.id),l.type===`COMPONENT`&&u.set(e.sourceId,l.id);let d=wc(l.type);d?.read(o,l,e.properties,n),d?.link&&g.push({node:l,record:e.properties});for(let t of e.children)_(t,l.id)};for(let t of e)_(t,o.rootId);let v=new Set,y=e=>{i&&Bd(e.occurrence,o,c);let t=s.get(e.parentSourceId);if(!t)throw Error(`Unmaterialized component parent ${e.parentSourceId}`);let r=new Map,a=[],l=e=>{let t=s.get(e.sourceId),n=t?o.getNode(t):void 0;n&&r.set(e,n);let i=n&&e.properties.type===`SYMBOL`?c.get(e.sourceId):void 0;i?a.push([e,i]):e.mainComponentId===null&&e.children.forEach(l)};l(e.occurrence);let d=Nd(o,t,e.occurrence,u,{blobs:n,sourceChildren:Wd(e.occurrence,c),existingNodes:r,recordId:h});if(m(d.nodes),i){kl(o,d);for(let t of Lp(e.occurrence,d.nodes))v.add(t)}let f=new Map(d.nodes);for(let[e,t]of a)for(let[n,r]of Hd(e,t))f.set(n,r);let p={root:d.root,nodes:f};Ud(e.occurrence,p,c),c.set(e.sourceId,{occurrence:e.occurrence,materialized:p}),u.set(e.sourceId,p.root.id),s.set(e.sourceId,p.root.id)};for(let e of t)a?.(),c.has(e.sourceId)||y(e);let b=e=>{if(e.properties.type===`SYMBOL`)return;let t=s.get(e.sourceId);if(!t)throw Error(`Missing source container ${e.sourceId}`);let r=[];for(let l of e.children){if(i&&Bd(l,o,c),l.mainComponentId!==null&&!s.has(l.sourceId)){a?.();let e=Nd(o,t,l,u,{blobs:n,sourceChildren:Wd(l,c),recordId:h});m(e.nodes),Ud(l,e,c),i&&(kl(o,e),e.root.componentId&&v.add(e.root.id)),s.set(l.sourceId,e.root.id)}else l.mainComponentId===null&&l.properties.type!==`SYMBOL`&&b(l);let e=s.get(l.sourceId);if(!e)throw Error(`Missing assembled child ${l.sourceId}`);o.getNode(e)?.parentId===t&&r.push(e)}let l=o.getNode(t);l&&(l.childIds=Dp(o,l.childIds,r,d))};for(let t of e)b(t);let x=new Map([...u].map(([e,t])=>[t,e]));rc(o,[...o.nodes.values()].filter(e=>!d.has(e.id)),e=>r.propertyCopies(x.get(e.id)??e.id));for(let e of v)o.syncInstance(e);v.size>0&&Fp(o,p);let S=e=>s.get(e);for(let{node:e,record:t}of g)wc(e.type)?.link?.(o,e,t,S);for(let e of o.getAllNodes())d.has(e.id)||e.styleRuns.length===0||(e.styleRuns=Ee(e.styleRuns,{variable:e=>e,style:e=>e,node:e=>s.get(e)??e}));let C=[...o.nodes.values()].filter(e=>!d.has(e.id));return r.definitionTypes??=Ap(o),Yd(o,s,C,r.definitionTypes),o.preserveSourceMetadataDuring(()=>{Xd(o,C),Kd(o,l,C,f),qd(o,C),Gd(o,C),Jd(o,C)}),r}var zp=new Set([`VARIABLE`,`VARIABLE_SET`]);function Q(e){return e?P(e):void 0}function Bp(e){return{id:Q(e.guid),parent:Q(e.parentIndex?.guid),type:e.type,parentIndex:e.parentIndex,value:e}}var Vp=e=>!!e.type&&zp.has(e.type);function Hp(e){return(e??[]).map(P).join(`/`)}function Up(e,t){let n=new Set(t.removed.map(Hp)),r=e.filter(e=>!n.has(Hp(e.guidPath?.guids))),i=new Map(r.map((e,t)=>[Hp(e.guidPath?.guids),t]));for(let e of t.entries){let t=Hp(e.path),n=i.get(t),a={...n===void 0?{guidPath:{guids:e.path}}:r[n],...structuredClone(e.set)};for(let t of e.unset)Reflect.deleteProperty(a,t);n===void 0?(i.set(t,r.length),r.push(a)):r[n]=a}return r}function Wp(e,t){let n={...e,...structuredClone(t.set)};for(let e of t.unset)Reflect.deleteProperty(n,e);let r=G(n);return t.symbolOverrides&&r&&(n.symbolData={...r,symbolOverrides:Up(r.symbolOverrides??[],t.symbolOverrides)}),t.derivedSymbolData&&(n.derivedSymbolData=Up(ic(n),t.derivedSymbolData)),n}function Gp(e,t,n){let r=new Map;for(let t of e){if(!t.id||!t.parent)continue;let e=r.get(t.parent)??[];e.push(t.id),r.set(t.parent,e)}let i=new Set,a=t.map(P);for(let e=a.pop();e!==void 0;e=a.pop())if(!(i.has(e)||n.has(e))){i.add(e);for(let t of r.get(e)??[])a.push(t)}return i}function Kp(e,t){let n=[],r=new Set,i=new Map,a=n=>!!n&&!r.has(n)&&e.has(n)&&!t.has(n),o=e=>{if(a(e.parent)){i.set(e.parent,[...i.get(e.parent)??[],e]);return}if(n.push(e),!e.id)return;r.add(e.id);let t=i.get(e.id)??[];i.delete(e.id);for(let e of t)o(e)};return{emit:o,emitted:e=>r.has(e),finish(){for(let e of i.values())for(let t of e)n.push(t);return n}}}function qp(e,t){let n=new Map;for(let r of e){let e=r.parentIndex?.position,i=Vp(r)&&!(r.id&&t.has(r.id));!r.parent||!e||i||e>(n.get(r.parent)??``)&&n.set(r.parent,e)}return n}function Jp(e,t){let n=qp(e,t);for(let r of e){if(!Vp(r)||r.value instanceof Uint8Array)continue;let e=r.value,i=r.id?t.get(r.id):void 0;if(i)e.parentIndex=structuredClone(i);else if(r.parent&&e.parentIndex){let t=Ae(n.get(r.parent)??null,null);e.parentIndex={...e.parentIndex,position:t},n.set(r.parent,t)}}}function Yp(e,t,n,r){let i=new Map((t.fields??[]).map(e=>[P(e.guid),e])),a=[...i].flatMap(([e,t])=>`parentIndex`in t.set?[e]:[]),o=Gp(e,t.removed,new Set([...n.keys(),...a]));for(let t of e){if(!t.id||n.has(t.id)||o.has(t.id))continue;let e=i.get(t.id);e&&n.set(t.id,Bp(Wp(r(t.value),e)))}return o}function Xp(e,t,n){let r=new Map;for(let e of t.records){let t=Bp(e);t.id&&r.set(t.id,t)}let i=Yp(e,t,r,n),a=new Set(e.flatMap(e=>e.id??[])),o=new Map,s=Kp(r,a);for(let n of e){if(n.id&&i.has(n.id))continue;let e=n.id?r.get(n.id):void 0;if(t.replaceVariables&&Vp(n)){n.id&&o.set(n.id,n.parentIndex),e&&s.emit(e);continue}s.emit(e??n)}for(let e of r.values())e.id&&!s.emitted(e.id)&&!a.has(e.id)&&s.emit(e);let c=s.finish();return t.replaceVariables&&Jp(c,o),c}function Zp(e,t,n,r){let{schema:i}=e,a={id:void 0,parent:void 0,type:void 0,parentIndex:void 0};for(let e=n.readVarUint();e!==0;e=n.readVarUint()){let o=t.byId[e];if(!o)throw Error(`Attempted to parse invalid message`);let s=o.isArray?``:o.name;if(s===`guid`)a.guid=i.read(o,n),a.id=Q(a.guid);else if(s===`parentIndex`){let e=i.read(o,n);a.parentIndex=e,a.parent=Q(e?.guid)}else s===`type`?a.type=o.definition?.names[n.readVarUint()]:s===`symbolData`&&r?a.symbolData=i.read(o,n):i.skip(o,n)}return a}function Qp(e,t,n=!1){let{schema:r}=e,i=r.definition(`Message`).byId,a=new F(t),o={parts:[],records:[],blobs:[],hasBlobs:!1};for(;;){let s=a.offset,c=a.readVarUint();if(c===0)break;let l=i[c];if(!l)throw Error(`Attempted to parse invalid message`);let u=l.name===`nodeChanges`&&l.isArray,d=l.name===`blobs`&&l.isArray;if(!u&&!d){r.skip(l,a),o.parts.push({kind:`bytes`,bytes:t.subarray(s,a.offset)});continue}let f=l.definition;if(!f)throw Error(`Kiwi ${l.name} holds no messages`);let p=f.name,m={...l,isArray:!1};for(let i=a.readVarUint();i>0;i--){let i=a.offset;if(u){let r=Zp(e,f,a,n);o.records.push({...r,value:t.subarray(i,a.offset)})}else r.skip(m,a),o.blobs.push(t.subarray(i,a.offset))}o.hasBlobs||=d,o.parts.push({kind:u?`records`:`blobs`,fieldId:c,type:p})}if(o.records.length===0)throw Error(`No nodes found in .fig file`);return o}function $p(e){return Nn(In(new F(Yt(e))))}function em(e){let t=Bf(e);return Qp($p(t.schemaDeflated),t.dataRaw,!0).records.map(e=>({guid:e.guid,parentIndex:e.parentIndex,type:e.type,symbolData:e.symbolData}))}function tm(e,t,n){let r=new Set;for(let i=e.get(t);i;){let t=Q(i.guid);if(!t||r.has(t))return;if(r.add(t),i.type===n)return t;let a=Q(i.parentIndex?.guid);i=a?e.get(a):void 0}}function nm(e){let t=new Map;for(let n of e){let e=Q(n.guid);e&&t.set(e,n)}return t}function rm(e,t){let n=nm(e),r=new Map,i=(e,t)=>{if(!e)return;let n=r.get(e)??[];n.push(t),r.set(e,n)};for(let t of e){let e=Q(t.guid);if(!(!e||t.type!==`INSTANCE`)){i(Q(G(t)?.symbolID),e);for(let n of K(t))i(Q(n.overriddenSymbolID),e)}}let a=(e,t)=>tm(n,e,t),o=new Set,s=new Set,c=[...t];for(let e=c.pop();e!==void 0;e=c.pop())if(!s.has(e)){s.add(e);for(let t of r.get(e)??[]){let e=a(t,`CANVAS`);e&&o.add(e);let n=a(t,`SYMBOL`);n&&c.push(n)}}return[...o]}function im(e,t){return rm(em(e),t)}var am=new WeakMap;function om(e,t){let n=am.get(e);n||(n=nm(em(e)),am.set(e,n));let r=n;return t.map(e=>tm(r,e,`CANVAS`))}function sm(e){return`sessionID`in e&&`localID`in e&&typeof e.sessionID==`number`&&typeof e.localID==`number`}function cm(e){let t=0,n=e=>{if(!(!e||typeof e!=`object`||ArrayBuffer.isView(e))){if(Array.isArray(e)){for(let t of e)n(t);return}sm(e)&&(e.sessionID===0||e.sessionID===1)&&(t=Math.max(t,e.localID));for(let t of Object.values(e))n(t)}};return n(e),t}function lm(e){return{recordIds:e.records.flatMap(e=>e.guid?[P(e.guid)]:[]),blobCount:e.blobCount,nextLocalId:cm(e.records)+1,imageHashes:[...e.imageHashes],documentId:Q(e.records.find(e=>e.type===`DOCUMENT`)?.guid)??null}}function um(e){let t=new F;return t.writeVarUint(e),t.toUint8Array().slice()}function dm(e,t,n){let r=new F;return e.schema.encode(e.schema.definition(t),n,r),r.toUint8Array().slice()}function fm(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}function pm(e,t,n){let r=$p(e),{schema:i}=r,a=Qp(r,t),o=a.parts.find(e=>e.kind===`records`),s=Xp(a.records,n,e=>{if(o?.kind!==`records`)throw Error(`The archive has no records`);return i.decode(i.definition(o.type),new F(e))}),c=e=>[...a.blobs,...n.blobs.map(t=>dm(r,e,{bytes:t}))],l=[],u=(e,t)=>{l.push(um(e),um(t.length));for(let e of t)l.push(e)};for(let e of a.parts)e.kind===`bytes`?l.push(e.bytes):e.kind===`blobs`?u(e.fieldId,c(e.type)):u(e.fieldId,s.map(t=>t.value instanceof Uint8Array?t.value:dm(r,e.type,t.value)));if(!a.hasBlobs&&n.blobs.length>0){let e=i.definition(`Message`).fields.find(e=>e.name===`blobs`);if(!e?.definition)throw Error(`The archive schema has no blobs`);u(e.id,c(e.definition.name))}return l.push(um(0)),fm(l)}function mm(e,t,n,r){let i=Bf(e),a=pm(i.schemaDeflated,i.dataRaw,t),o=new Set(i.images.map(([e])=>e));return Gf({canvasFig:El(i.schemaDeflated,a,i.figKiwiVersion,r,n.kind??i.kind),thumbnailPNG:n.thumbnailPNG,metaJSON:n.metaJSON,images:[...i.images.map(([e,t])=>({name:`images/${e}`,data:t})),...i.videos.map(([e,t])=>({name:`videos/${e}`,data:t})),...n.images.filter(e=>!o.has(e.name.replace(/^images\//,``)))]})}function hm(e){let t=[],n=(r,i)=>{let a=e.materialized.nodes.get(r);if(!a&&i.length>0)return;if(!a)throw Error(`Missing checkpoint occurrence`);t.push({path:i,nodeId:a.id,mainComponentId:r.mainComponentId});let o=new Set;for(let e of r.children){if(o.has(e.sourceId))throw Error(`Ambiguous checkpoint child ${e.sourceId}`);o.add(e.sourceId),n(e,[...i,e.sourceId])}};return n(e.occurrence,[]),{rootId:e.materialized.root.id,nodes:t}}function gm(e,t,n){let r=e.getNode(n.rootId);if(!r)throw Error(`Missing resumed component ${n.rootId}`);let i=new Map,a=(t,n)=>{i.set(n.join(`/`),t);for(let r of e.getChildren(t.id)){let e=r.source.id;e&&a(r,[...n,e])}};a(r,[]);let o=new Map;for(let r of n.nodes){let n=t;for(let e of r.path){let t=n.children.filter(t=>t.sourceId===e);if(t.length!==1)throw Error(`Invalid checkpoint source path ${e}`);n=t[0]}let a=e.getNode(r.nodeId)??i.get(r.path.join(`/`));if(a){if(o.has(n)||n.mainComponentId!==r.mainComponentId)throw Error(`Invalid checkpoint occurrence ${r.nodeId}`);o.set(n,a)}}let s=e=>{if(o.has(e))for(let t of e.children)s(t)};if(s(t),o.get(t)!==r)throw Error(`Invalid checkpoint root`);return{occurrence:t,materialized:{root:r,nodes:o}}}function _m(e,t,n){let{graph:r}=e,i=new Set(r.nodes.keys()),a=new Map,o=new Set([r.rootId,...r.getPages(!0).map(e=>e.id)]);for(let n of[...t.contentIds,...t.ancestorIds]){let t=e.sources.get(n);t&&o.add(t)}for(let e of o){let t=r.getNode(e);t&&a.set(t,structuredClone(t))}let s=new Map(e.sources),c=new Map(e.components),l=new Map(e.componentIds),u=new Set(e.savedSizeNodes),d=e.nextImportedId;r.withBufferedEvents(()=>{try{n()}catch(t){for(let[e,t]of r.nodes)i.has(e)||(t.componentId&&r.instanceIndex.get(t.componentId)?.delete(e),r.nodes.delete(e));for(let[e,t]of a)if(e.componentId&&r.instanceIndex.get(e.componentId)?.delete(e.id),Object.assign(e,t),e.type===`INSTANCE`&&e.componentId){let t=r.instanceIndex.get(e.componentId)??new Set;t.add(e.id),r.instanceIndex.set(e.componentId,t)}e.sources=s,e.components=c,e.componentIds=l,e.savedSizeNodes=u,e.nextImportedId=d;for(let[e,t]of r.instanceIndex)t.size||r.instanceIndex.delete(e);throw r.clearAbsPosCache(),t}})}function vm(e,t,n){let r=new Map(n.map((e,t)=>[e,t])),i=new Set(t),a=new Set(e),o=e.filter(e=>i.has(e));for(let e of t){if(a.has(e))continue;let t=r.get(e)??1/0,n=o.findIndex(e=>(r.get(e)??-1)>t);o.splice(n===-1?o.length:n,0,e)}return o}function ym(e,t,n,r){let i=[...new Set(n)].flatMap(t=>{let n=e.graph.getNode(e.sources.get(t)??``);return n&&n.childIds.length>0?[{sourceId:t,layer:n,previous:[...n.childIds]}]:[]});r();for(let{sourceId:n,layer:r,previous:a}of i){let i=t.savedChildIds(n).flatMap(t=>e.sources.get(t)??[]);i.length>0&&(r.childIds=vm(a,r.childIds,i))}}function bm(e){let t=new Map(e.sources);for(let[n,r]of e.components){t.set(n,r.rootId);let e=[];for(let n of r.nodes){let r=n.path.at(-1);r&&(e.some(e=>e.length<n.path.length&&e.every((e,t)=>n.path[t]===e))||(t.set(r,n.nodeId),n.mainComponentId!==null&&e.push(n.path)))}}return t}function xm(e,t,n){let{graph:r,checkpoint:i}=e,a=new Map;for(let[e,o]of i.components)a.set(e,gm(r,t.readComponent(e,n),o));return{graph:r,nextImportedId:i.nextImportedId??wm(r),recordIds:t.recordIds,components:a,sources:new Map(i.sources),componentIds:new Map(i.componentIds),savedSizeNodes:new Set(i.savedSizeNodeIds),propertyCopies:e=>t.propertyCopies(e)}}function Sm(e,t={},n){let r=gp(e,new Set),i=kp(t,r.images),a=n?xm(n,r.reader,i):Ip(r.reader,r.blobs,i);a.graph.figKiwiVersion=r.figKiwiVersion,n||(a.graph.documentKind=r.kind),a.graph.figSchemaDeflated=r.figSchemaDeflated;let o=new Set(n?.checkpoint.loadedPageIds),s=Cm(a.graph,n!==void 0),c,l=rp({sets:()=>r.reader.componentSetVariants,layerOf:()=>a.sources,isBuilt:e=>a.components.has(e),header:e=>r.reader.recordHeader(e)}),u=e=>e!==void 0&&!a.graph.getNode(e),d=({contentIds:e,ancestorIds:t})=>[...e].some(e=>u(a.componentIds.get(e)))||[...t].some(e=>u(a.sources.get(e)));return{checkpoint(){return structuredClone({nextImportedId:a.nextImportedId,sources:[...a.sources],componentIds:[...a.componentIds],savedSizeNodeIds:[...a.savedSizeNodes],loadedPageIds:[...o],components:[...a.components].map(([e,t])=>[e,hm(t)]),savedVariants:l.bySetLayer()})},savedVariants(e){return l.ofSetLayer(e)},layerOf(e){return a.sources.get(e)},loadComponents:(e,t=()=>void 0,n)=>{let o=e.filter(e=>!a.components.has(e));if(o.length===0)return!0;let c=r.reader.selectComponents(o);return d(c.dependencyClosure)?!1:(_m(a,c.dependencyClosure,()=>{ym(a,c,c.dependencyClosure.ancestorIds,()=>Ip(c,r.blobs,i,a,{edited:s.edited,onProgress:n})),t()}),!0)},graph:a.graph,graphPageId(e){return r.reader.pages.some(t=>t.id===e)?a.sources.get(e):void 0},pages:r.reader.pages,archiveRecordInfo(){return c??=lm({records:r.records,blobCount:r.blobs.length,imageHashes:r.images.map(([e])=>e)}),c},loadPage(e,t){if(o.has(e))return;let n=r.reader.selectPages(new Set([e])),{contentIds:c,ancestorIds:l}=n.dependencyClosure,u=r.reader.pages.find(t=>t.id===e)?.internalOnly;if(u&&d(n.dependencyClosure))throw Error(`Page ${e} nests a component that was deleted after the file opened`);let f=u?[...c,...l]:[];_m(a,n.dependencyClosure,()=>ym(a,n,f,()=>{Ip(n,r.blobs,i,a,{edited:s.edited,onProgress:t}),o.add(e)}))},get loadedPageIds(){return new Set(o)}}}function Cm(e,t){let n=t;if(n)return{edited:n};let r=()=>!e.isApplyingImportedState&&!e.isApplyingDerivedLayout,i=()=>{r()&&(n=!0,a())},a=e.observeNodeChanges({before:i,created:i});return{get edited(){return n}}}function wm(e){let t=3,n=[...e.nodes.keys(),...e.variables.keys(),...e.variableCollections.keys(),...[...e.variableCollections.values()].flatMap(e=>e.modes.map(e=>e.modeId))];for(let e of n)/^0:\d+$/.test(e)&&(t=Math.max(t,Number(e.slice(2))+1));return t}function Tm(e,{signal:t,onClose:n}={}){let r=!0,i=()=>{e.close(),r&&n?.(),r=!1};return new ReadableStream({pull:n=>new Promise(r=>{let a=()=>{i(),n.error(t?.reason),r()};if(t?.aborted){a();return}t?.addEventListener(`abort`,a,{once:!0}),e.onmessage=e=>{t?.removeEventListener(`abort`,a);let o=e.data;o.type===`chunk`?n.enqueue(o.bytes):(i(),o.type===`done`?n.close():n.error(Error(o.message))),r()},e.postMessage({type:`pull`})}),cancel:()=>{e.postMessage({type:`cancel`}),i()}},{highWaterMark:0})}var Em=new WeakMap;function Dm(e,t){Em.set(e,t)}function Om(e){return Em.get(e)}function km(e){Em.get(e)?.close(),Em.delete(e)}function Am(e,t){return{original:()=>new Uint8Array(e.slice(0)),info:t,componentPages:t=>im(e,t),recordPages:t=>om(e,t).map(e=>e??null),patch:async(t,n)=>mm(e,t,n,await yl(n.compressionLevel))}}function jm(e,t){let n=Am(e,t);return{original:async()=>n.original(),info:async()=>n.info(),componentPages:async e=>n.componentPages(e),recordPages:async e=>n.recordPages(e),patch:(e,t)=>n.patch(e,t),close:()=>void 0}}var Mm=new Set([`original-archive-result`,`archive-info-result`,`component-pages-result`,`record-pages-result`,`patch-archive-result`,`archive-error`]);function Nm(e,t,n){let r=new Map,i=new AbortController,a=0,o=!1,s,c=!1,l=e=>{o=!1,t.terminate(),i.abort(Error(e))},u=e=>{if(e||a===0?l(`The archive worker stopped`):o=!0,s)return s;let t=n();s=t;for(let e of r.values())e.retry(t);return r.clear(),t},d=()=>{a--,o&&a===0&&l(`The archive worker stopped`)};t.addEventListener(`error`,()=>u(!0)),e.addEventListener(`message`,e=>{if(!Mm.has(e.data.type))return;let t=e.data,n=r.get(t.requestId);n&&(r.delete(t.requestId),t.type===`archive-error`?n.reject(Error(t.error)):n.resolve(t))});let f=(t,n,i,a,o=[])=>c?Promise.reject(Error(`The document closed`)):s?a(s):new Promise((s,c)=>{let l=ft();r.set(l,{retry:e=>void a(e).then(s,c),resolve:e=>{e.type===n?s(i(e)):c(Error(`Unexpected ${e.type} for ${t.type}`))},reject:c}),e.postMessage({...t,requestId:l},o)});return{original:()=>f({type:`original-archive`},`original-archive-result`,e=>e.bytes,e=>e.original()),info:()=>f({type:`archive-info`},`archive-info-result`,e=>e.info,e=>e.info()),componentPages:e=>f({type:`component-pages`,componentIds:e},`component-pages-result`,e=>e.pageIds,t=>t.componentPages(e)),recordPages:e=>f({type:`record-pages`,recordIds:e},`record-pages-result`,e=>e.pageIds,t=>t.recordPages(e)),patch:(e,t)=>{let n=new MessageChannel;return f({type:`patch-archive`,patch:e,input:t,port:n.port2},`patch-archive-result`,()=>(a++,Tm(n.port1,{signal:i.signal,onClose:d})),n=>n.patch(e,t),[n.port2])},dropWorker:()=>void u(!1),close(){if(!c){c=!0;for(let e of r.values())e.reject(Error(`The document closed`));if(r.clear(),s){o&&l(`The document closed`);return}i.abort(Error(`The document closed`)),e.postMessage({type:`dispose`}),e.close(),t.terminate()}}}}var Pm=new WeakMap;function Fm(e,t){let n=Pm.get(e);n||(n=new Set(e.map(e=>JSON.stringify(e))),Pm.set(e,n));let r=JSON.stringify(t);n.has(r)||(n.add(r),e.push(t))}function Im(e){return{derivedBounds:!0,onUnresolvedProperty:t=>Fm(e,{kind:`property`,diagnostic:t}),onUnresolvedAssignment:t=>Fm(e,{kind:`assignment`,diagnostic:t}),onUnresolvedBinding:t=>Fm(e,{kind:`binding`,diagnostic:t}),onUnsupportedVariableExpression:t=>Fm(e,{kind:`variable-expression`,diagnostic:t}),onMissingComponent:t=>Fm(e,{kind:`component`,diagnostic:t}),onMissingSlotContent:t=>Fm(e,{kind:`slot-content`,diagnostic:t})}}var $=new WeakMap;function Lm(e,t,n){$.set(e,{bytes:t,checkpoint:n,diagnostics:[]})}function Rm(e,t,n=[]){$.set(t.graph,{bytes:e,session:t,diagnostics:n})}function zm(e,t){let n=$.get(e);if(!n||n.complete)return!1;let r=n.session?.checkpoint()??n.checkpoint,i=r?.sources.find(([,e])=>e===t)?.[0];if(!i)return!1;let a=n.session;return a?a.pages.some(e=>e.id===i)&&!a.loadedPageIds.has(i):!r.loadedPageIds.includes(i)}async function Bm(e,t){let n=Om(e),r=Vm(e);if(!n||!r||$.get(e)?.complete)return null;let[i]=await n.recordPages([t]),a=i?bm(r).get(i):void 0;return a&&zm(e,a)?a:null}function Vm(e){let t=$.get(e);return t?.session?.checkpoint()??t?.checkpoint}function Hm(e,t){return zm(e,t)?Xm(e,t):!1}function Um(e){let t=e.session;t?.pages.every(e=>t.loadedPageIds.has(e.id))&&(e.checkpoint=t.checkpoint(),e.session=void 0,e.bytes=void 0,e.complete=!0)}function Wm(e){let t=$.get(e),n=t?.session;if(!t||!n)return!1;let r=!1;for(let t of n.pages)!t.internalOnly||n.loadedPageIds.has(t.id)||(e.applyImportedStateDuring(()=>n.loadPage(t.id)),r=!0);return Um(t),r}function Gm(e){let t=$.get(e);if(!t||t.complete)return!1;let n=t.session;return!n||!n.pages.every(e=>n.loadedPageIds.has(e.id))}function Km(e,t){let n=$.get(e);if(!n||n.complete)return!1;let r=n.session;if(r?.pages.every(e=>r.loadedPageIds.has(e.id)))return!1;let i=r?.checkpoint()??n.checkpoint;if(!i||!n.bytes)throw Error(`Missing reader checkpoint`);let a=Sm(n.bytes,Im(n.diagnostics),{graph:t,checkpoint:i});for(let e of a.pages)a.loadPage(e.id);return!0}function qm(e,t){let n=$.get(e);n&&!n.session&&(n.checkpoint=t)}function Jm(e){$.delete(e)}function Ym(e,t){if(!t.session){if(!t.checkpoint||!t.bytes)throw Error(`Missing reader checkpoint`);t.session=Sm(t.bytes,Im(t.diagnostics),{graph:e,checkpoint:t.checkpoint})}return t.session}function Xm(e,t){let n=$.get(e);if(!n)throw Error(`No reader recovery state`);if(n.complete)return!1;let r=Ym(e,n),i=r.pages.find(e=>r.graphPageId(e.id)===t);if(!i)throw Error(`Unknown graph page ${t}`);let a=!r.loadedPageIds.has(i.id);return e.applyImportedStateDuring(()=>r.loadPage(i.id)),Um(n),a}function Zm(e,t){let n=$.get(e);return!n||n.complete?[]:n.session?n.session.savedVariants(t):n.checkpoint?.savedVariants?.find(([e])=>e===t)?.[1]??[]}function Qm(e,t,n){let r=$.get(e);if(!r||r.complete)return!1;let i=Ym(e,r);return e.applyImportedStateDuring(()=>i.loadComponents(t,n))}function $m(e,t){if(e.runOutsideEdits(()=>Qm(e,[t])))return $.get(e)?.session?.layerOf(t)}export{cs as $,jf as A,ei as At,rl as B,mn as Bt,bm as C,Pi as Ct,Uf as D,ii as Dt,Vf as E,Li as Et,bl as F,Ln as Ft,sc as G,en as Gt,Tc as H,fn as Ht,Cl as I,Nn as It,ec as J,ic as K,cl as L,F as Lt,El as M,xr as Mt,Tl as N,cr as Nt,Gf as O,qr as Ot,yl as P,In as Pt,xs as Q,ll as R,_n as Rt,Sm as S,yi as St,Op as T,Ii as Tt,Oc as U,ln as Ut,Ic as V,pn as Vt,wc as W,tn as Wt,$s as X,tc as Y,Xs as Z,Om as _,la as _t,Bm as a,as as at,km as b,$i as bt,Km as c,ss as ct,Lm as d,Zo as dt,ds as et,Rm as f,Qo as ft,Im as g,Oa as gt,qm as h,Da as ht,Qm as i,ts as it,wf as j,Vr as jt,Af as k,ri as kt,Vm as l,rs as lt,Zm as m,ja as mt,zm as n,ls as nt,Wm as o,os as ot,Jm as p,Ko as pt,G as q,$m as r,us as rt,Hm as s,vs as st,Gm as t,fs as tt,Xm as u,is as ut,jm as v,ca as vt,Hp as w,bi as wt,Nm as x,Hi as xt,Dm as y,ta as yt,il as z,hn as zt};