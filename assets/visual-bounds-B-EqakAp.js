import{c as e}from"./constants-ZM8gixXD.js";import{n as t}from"./mapValues-CeJbJzQp.js";import{i as n,r}from"./arrays-BCOu-Xh9.js";import{y as i}from"./paragraphs-PUgiadhN.js";import{s as a}from"./color-BYvyypcm.js";import{J as o,q as s}from"./shared-styles-bgqwmPWB.js";import{at as c}from"./graph-CnBLdmSI.js";import{A as l,M as u,S as d,T as f,Z as p,_ as m,f as h,h as ee,i as te,k as ne,p as g,r as re,t as _,u as ie,w as ae,x as oe}from"./geometry-D03E49cB.js";import{y as v}from"./copy-Dhna4kRn.js";import{ct as se,dt as ce,ht as y,lt as le,mt as ue,ut as b}from"./pieces-1PamNx4I.js";import{F as de,t as fe}from"./fields-D9I9p9cr.js";import{a as pe}from"./emoji-Bzt9JZqY.js";var me=1e4,he=2147483647;function ge(e){return e===null||e===1/0||(e??0)>=2147483647}function x(e){let t=e.count===void 0?e.numSections:e.count;return ge(t)?he:t??1}var _e=Object.freeze({r:1,g:0,b:0,a:.1});function S(e){return e.pattern===`GRID`||e.pattern===`ROWS`||e.pattern===`COLUMNS`?e.pattern:e.axis===`Y`?`ROWS`:`COLUMNS`}function C(e){return e.alignment??e.type??`STRETCH`}function ve(e){return e.type!==void 0||e.alignment!==void 0}function ye(e){return{...e.color??_e}}var w=S,T=C;function be(e,t){let n=x(t);if(n===2147483647){let n=t.sectionSize??0;if(T(t)===`STRETCH`||n<=0)return 0;let r=t.gutterSize??0,i=T(t)===`CENTER`?0:t.offset??0;return Math.min(me,Math.max(0,Math.floor((e-i+r)/(n+r))))}return Number.isFinite(n)?Math.min(me,Math.max(0,Math.floor(n))):0}function xe(e,t,n){let r=t.sectionSize??0;if(T(t)!==`STRETCH`)return r;let i=t.gutterSize??0;return(e-(t.offset??0)*2-Math.max(0,n-1)*i)/n}function Se(e,t,n,r){let i=t.gutterSize??0,a=t.offset??0,o=r*n+Math.max(0,r-1)*i;return T(t)===`CENTER`?(e-o)/2+a:T(t)===`MAX`?e-o-a:a}function Ce(e,t){if(t.visible===!1||w(t)===`GRID`)return[];let n=w(t)===`ROWS`?`y`:`x`,r=n===`x`?e.width:e.height,i=be(r,t),a=xe(r,t,i);if(i<=0||a<=0)return[];let o=Se(r,t,a,i),s=a+(t.gutterSize??0);return Array.from({length:i},(e,t)=>{let r=o+t*s;return{axis:n,start:r,end:r+a}})}function we(e,t){if(t.visible===!1)return[];let n=w(t),r=[];if(n===`GRID`){let n=t.sectionSize??0;if(n<=0)return r;for(let i=0,a=t.offset??0;a<=e.width&&i<1e4;i++,a+=n)r.push({axis:`x`,position:a});for(let i=0,a=t.offset??0;a<=e.height&&i<1e4;i++,a+=n)r.push({axis:`y`,position:a});return r}let i=Ce(e,t);for(let e of i)r.push({axis:e.axis,position:e.start},{axis:e.axis,position:e.end});return r}function Te(e,t){let n=e.height-t;return e.textAlignVertical===`CENTER`?n/2:e.textAlignVertical===`BOTTOM`?n:0}function Ee(e){if(e.type!==`TEXT`||!e.derivedTextHeight)return{minY:0,maxY:e.height};let t=Te(e,e.derivedTextHeight);return{minY:Math.min(0,t),maxY:Math.max(e.height,t+e.derivedTextHeight)}}var De=new Set([`width`,`height`]),Oe=new Set([`x`,`y`,`rotation`,`flipX`,`flipY`]),E=[`textData`,`derivedTextData`,`textUserLayoutVersion`,`textExplicitLayoutVersion`],D=[`strokeGeometry`,`vectorData`],ke={fillStyleId:[`styleIdForFill`],strokeStyleId:[`styleIdForStrokeFill`],textStyleId:[`styleIdForText`],effectStyleId:[`styleIdForEffect`],gridStyleId:[`styleIdForGrid`],fills:[`fillPaints`,`backgroundPaints`,`backgroundColor`],strokes:[`strokePaints`],effects:[`effects`],blendMode:[`blendMode`],layoutGrids:[`layoutGrids`],guides:[`guides`],exportSettings:[`exportSettings`],status:[`sectionStatusInfo`],cornerRadius:[`cornerRadius`],independentCorners:[`rectangleCornerRadiiIndependent`],topLeftRadius:[`rectangleTopLeftCornerRadius`,`rectangleCornerRadiiIndependent`],topRightRadius:[`rectangleTopRightCornerRadius`,`rectangleCornerRadiiIndependent`],bottomLeftRadius:[`rectangleBottomLeftCornerRadius`,`rectangleCornerRadiiIndependent`],bottomRightRadius:[`rectangleBottomRightCornerRadius`,`rectangleCornerRadiiIndependent`],cornerSmoothing:[`cornerSmoothing`],borderTopWeight:[`borderTopWeight`,...D],borderRightWeight:[`borderRightWeight`,...D],borderBottomWeight:[`borderBottomWeight`,...D],borderLeftWeight:[`borderLeftWeight`,...D],independentStrokeWeights:[`borderStrokeWeightsIndependent`,`borderTopWeight`,`borderRightWeight`,`borderBottomWeight`,`borderLeftWeight`,...D],strokeWeight:[`strokeWeight`,...D],strokeAlign:[`strokeAlign`,...D],strokeJoin:[`strokeJoin`,...D],strokeMiterLimit:[`miterLimit`,...D],strokeCap:[...D],dashPattern:[...D],text:[...E],styleRuns:[...E],fontSize:[`fontSize`,...E],fontFamily:[`fontName`,`fontVersion`,...E],fontWeight:[`semanticWeight`,...E],italic:[`semanticItalic`,...E],fontStyle:[`fontName`,`fontVersion`,...E],textAlignHorizontal:[`textAlignHorizontal`,...E],textAlignVertical:[`textAlignVertical`,...E],lineHeight:[`lineHeight`,...E],letterSpacing:[`letterSpacing`,`textTracking`,...E],textAutoResize:[`textAutoResize`,...E],textDecorationStyle:[`textDecorationStyle`,...E],textDecorationThickness:[`textDecorationThickness`,...E],textDecorationFills:[`textDecorationFillPaints`,...E],textUnderlineOffset:[`textUnderlineOffset`,...E],leadingTrim:[`leadingTrim`,...E],maxLines:[`maxLines`,...E],textParagraphs:[...E],listSpacing:[`listSpacing`,...E],paragraphSpacing:[`paragraphSpacing`,...E],paragraphIndent:[`paragraphIndent`,...E],hangingList:[`hangingList`,...E],fontVariations:[`fontVariations`,...E],opticalSizeFromFontSize:[`detachOpticalSizeFromFontSize`,...E],fontFeatures:[`fontVariantCommonLigatures`,`fontVariantContextualLigatures`,`toggledOnOTFeatures`,`toggledOffOTFeatures`,...E],minWidth:[`minSize`],minHeight:[`minSize`],maxWidth:[`maxSize`],maxHeight:[`maxSize`],vectorNetwork:[`vectorData`,`fillGeometry`,`strokeGeometry`],fillGeometry:[`fillGeometry`,`vectorData`],strokeGeometry:[`strokeGeometry`,`vectorData`],isMask:[`mask`],maskType:[`maskType`],maskIsOutline:[`maskIsOutline`],componentPropertyDefinitions:[`componentPropDefs`,`stateGroupPropertyValueOrders`],componentPropertyReferences:[`componentPropRefs`],componentPropertyAssignments:[`componentPropAssignments`],componentPropertyValues:[`variantPropSpecs`],variantPropSpecs:[`variantPropSpecs`]},Ae=new Set;function je(e=[]){return e.length===0?Ae:new Set(e.flatMap(e=>ke[e]??[]))}function O(e){let t=je(e.source.editedFields??[]);return t.size===0?e.source.fig.rawNodeFields:Object.fromEntries(Object.entries(e.source.fig.rawNodeFields).filter(([e])=>!t.has(e)))}function Me(e){let t=e.source.editedFields??[];return{...e.source.fig,rawNodeFields:O(e),rawSize:t.some(e=>De.has(e))?null:e.source.fig.rawSize,rawTransform:t.some(e=>Oe.has(e))?null:e.source.fig.rawTransform}}function Ne(e,t){if(!je(e.source.editedFields??[]).has(t))return e.source.fig.rawNodeFields[t]}var k=new Set([`SECTION`,`FRAME`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),Pe=new Set([`CANVAS`,`SECTION`]);function A(e,t){let n=t.parentId?e.getNode(t.parentId):void 0;return k.has(t.type)&&n!==void 0&&Pe.has(n.type)}function Fe(e,t){let n=[];return e.closest(t.id,t=>t.type===`CANVAS`||t.id===e.rootId?!0:(n.push(t),!1)),n.reverse()}function j(e,t){return Fe(e,t).find(t=>t.status!==null&&A(e,t))}function Ie(e,t){if(!k.has(t.type))return`type`;if(!A(e,t))return`parent`;let n=j(e,t);return n&&n.id!==t.id?`ancestor`:`ok`}function M(e,t){return t.status&&j(e,t)?.id===t.id?t.status:null}var{statuses:Le}=fe,N={READY_FOR_DEV:`ready-for-dev`,COMPLETED:`completed`},P={id:N.READY_FOR_DEV,name:`Ready for dev`,color:a(`#14ae5c`)},F={id:N.COMPLETED,name:`Completed`,color:a(`#8a8a8a`)},I={handoff:{preset:`handoff`,states:[P,F]},simple:{preset:`simple`,states:[{id:`draft`,name:`Draft`,color:a(`#b3b3b3`)},{id:`in-progress`,name:`In progress`,color:a(`#0d99ff`)},{...F,name:`Done`,color:a(`#14ae5c`)}]},review:{preset:`review`,states:[{id:`draft`,name:`Draft`,color:a(`#b3b3b3`)},{id:`in-review`,name:`In review`,color:a(`#9747ff`)},{id:`changes-requested`,name:`Changes requested`,color:a(`#f24822`)},{id:`approved`,name:`Approved`,color:a(`#0d99ff`)},P,{...F,name:`Shipped`}]}};function Re(e){return de(e.getNode(e.rootId)?.pluginData,Le)??I.handoff}function L(e,t){return e.states.find(e=>e.id===t)??I.handoff.states.find(e=>e.id===t)}function ze(e){return e===N.READY_FOR_DEV?`READY_FOR_DEV`:e===N.COMPLETED?`COMPLETED`:null}var R=new WeakMap;function z(e){let t=e.getNode(e.rootId)?.pluginData,n=R.get(e);if(n&&n.entries===t)return n.workflow;let r=Re(e);return R.set(e,{entries:t,workflow:r}),r}function Be(e,t){let n=M(e,t);return n===null?null:L(z(e),n)??null}var Ve=[];function He(e,t,n){let r={name:e,kind:t,source:`${n.map(e=>e.trim()).join(`

`)}\n`};return Ve.push(r),r}function B(e,...t){return He(e,`shader`,t)}function Ue(e,...t){return He(e,`blender`,t)}var We=24,Ge=class{top;bottom;left=1/0;right=-1/0;x=0;y=0;constructor(e,t){this.top=e,this.bottom=t}moveTo(e,t){this.x=e,this.y=t}lineTo(e,t){let{x:n,y:r,top:i,bottom:a}=this;r>=i&&r<=a&&this.include(n),t>=i&&t<=a&&this.include(e);for(let o of[i,a])(r-o)*(t-o)<0&&this.include(n+(o-r)/(t-r)*(e-n));this.x=e,this.y=t}quadTo(e,t,n,r){let{x:i,y:a}=this;this.cubicTo(i+2/3*(e-i),a+2/3*(t-a),n+2/3*(e-n),r+2/3*(t-r),n,r)}cubicTo(e,t,n,r,i,a){let o={x:this.x,y:this.y},s={x:e,y:t},c={x:n,y:r},l={x:i,y:a};for(let e=1;e<=We;e++){let t=p(o,s,c,l,e/We);this.lineTo(t.x,t.y)}}span(){return this.left<=this.right?[this.left,this.right]:null}include(e){this.left=Math.min(this.left,e),this.right=Math.max(this.right,e)}};function Ke(e,t,n,r,i){let a=new Ge(r,i),o=0,s=0;for(let r of e){let e=t+(r.x??0),i=n+(r.y??0);r.type===`M`?(a.moveTo(e,i),o=e,s=i):r.type===`L`?a.lineTo(e,i):r.type===`Q`?a.quadTo(t+(r.x1??0),n+(r.y1??0),e,i):r.type===`C`?a.cubicTo(t+(r.x1??0),n+(r.y1??0),t+(r.x2??0),n+(r.y2??0),e,i):r.type===`Z`&&a.lineTo(o,s)}return a.span()}function qe(e,t,n,r){let i=new Ge(n,r),a=t.fontSize*(t.scaleX??1),o=t.fontSize*(t.scaleY??1),s=[],c=0,l=0;return m(e,(e,n)=>{s.length=0;for(let e=0;e<n.length;e+=2)s.push(t.x+n[e]*a,t.y-n[e+1]*o);e===_.CLOSE?i.lineTo(c,l):e===_.MOVE?(i.moveTo(s[0],s[1]),c=s[0],l=s[1]):e===_.LINE?i.lineTo(s[0],s[1]):e===_.QUAD?i.quadTo(s[0],s[1],s[2],s[3]):i.cubicTo(s[0],s[1],s[2],s[3],s[4],s[5])}),i.span()}var V=[];function Je(e){return V.push(e),()=>{let t=V.lastIndexOf(e);t!==-1&&V.splice(t,1)}}function Ye(e,t){let n=Je(e);try{return t()}finally{n()}}function Xe(e){if(e.type===`TEXT`)return V.at(-1)?.(e)}function H(e,t){return e.id===t?.nodeId?{...e,rotation:t.angle}:e}function Ze(e,t){return b(H(e,t),{x:0,y:0})}function Qe(e){return i.multiply(i.translated(e.panX,e.panY),i.scaled(e.zoom,e.zoom))}function $e(e,t){let n=e=>H(e,t),r={rootId:e.rootId,getNode(t){let r=e.getNode(t);return r?n(r):void 0}},a=new Map,o=e=>{let t=a.get(e.id);if(t)return t;let i=y(n(e),r);return a.set(e.id,i),i},s=(e,t)=>i.multiply(Qe(t),o(e));function c(e,t){let n=i.invert(o(e));return n?i.mapPoint(n,t):null}function l(e,t,n){let r=i.invert(s(e,n));return r?i.mapPoint(r,t):null}function u(e){let t=n(e),i=1,a=1;for(;t;)t.flipX&&(i*=-1),t.flipY&&(a*=-1),t=t.parentId?r.getNode(t.parentId):void 0;return{x:i,y:a}}return{node:n,reflections:u,worldMatrix:o,screenMatrix:s,toLocal:c,screenToLocal:l,localMatrix:e=>b(n(e)),toWorld:(e,t)=>i.mapPoint(o(e),t),toScreen:(e,t,n)=>i.mapPoint(s(e,n),t),bounds:e=>le(n(e),r),boundsInParent:(e,t)=>se([n(e)],t,r),handles:(e,t)=>ue(n(e),r,t),direction(e,t){let n=o(e);return{x:n[0]*t.x+n[1]*t.y,y:n[3]*t.x+n[4]*t.y}},unreflectedWorldMatrix(e){let t=[...o(e)],{x:n,y:r}=u(e),a=i.mapPoint(t,{x:n<0?e.width:0,y:r<0?e.height:0});return t[0]*=n,t[3]*=n,t[1]*=r,t[4]*=r,t[2]=a.x,t[5]=a.y,t},rotationOrigin(e){return i.mapPoint(o(e),ce(n(e)))},rotationDirection(e){let t=o(e);return t[0]*t[4]-t[1]*t[3]<0?-1:1},rotation(e){let t=o(e);return Math.atan2(t[3],t[0])*180/Math.PI}}}var U=`// The outline both glass shaders read: a box, an ellipse filling the box, or up to SEGMENTS
// segments grouped CHUNK to a bounding circle, so a pixel can skip a chunk whose circle it is
// outside of.
const int SEGMENTS = 128;
const int CHUNK = 8;
const int CHUNKS = SEGMENTS / CHUNK;

uniform float2 origin;
uniform float2 size;
uniform float4 radii;
uniform float isBox;
uniform float isEllipse;
uniform float depth;
uniform float segmentCount;
uniform float4 segments[SEGMENTS];
uniform float4 chunks[CHUNKS];

float boxDistance(float2 q, float2 h, float r) {
  float2 k = abs(q) - h + r;
  return length(max(k, 0.0)) + min(max(k.x, k.y), 0.0) - r;
}

// The point of the ellipse with semi-axes ab, centred on the origin, nearest to p, by four
// fixed-point steps against the ellipse's evolute from the quadrant's middle; within about a
// thousandth of a unit of the exact distance, measured up to a 40:1 ellipse.
float2 nearestOnEllipse(float2 p, float2 ab) {
  // Off the exact centre, where a circle's every direction is nearest and none can be chosen.
  float2 q = max(abs(p), float2(1e-4));
  float2 t = float2(0.70710678);
  float2 stretch = float2(ab.x * ab.x - ab.y * ab.y, ab.y * ab.y - ab.x * ab.x) / ab;
  for (int i = 0; i < 4; i++) {
    float2 evolute = stretch * t * t * t;
    float2 toCurve = ab * t - evolute;
    float2 toPoint = q - evolute;
    t = clamp((toPoint * length(toCurve) / max(length(toPoint), 1e-6) + evolute) / ab, 0.0, 1.0);
    t /= max(length(t), 1e-6);
  }
  return ab * t * float2(p.x < 0.0 ? -1.0 : 1.0, p.y < 0.0 ? -1.0 : 1.0);
}

// (distance in from the outline, inward direction), negative distance outside a box or an
// ellipse. A box's direction bends around corners rounded by at least bend; an ellipse's is its
// inward normal at the nearest point.
float3 geometry(float2 p, float bend) {
  if (isEllipse > 0.5) {
    float2 ab = max(size * 0.5, float2(1e-3));
    float2 q = p - origin - size * 0.5;
    float2 nearest = nearestOnEllipse(q, ab);
    float2 k = q / ab;
    float s = (dot(k, k) < 1.0 ? 1.0 : -1.0) * length(q - nearest);
    return float3(s, -normalize(nearest / (ab * ab)));
  }
  if (isBox > 0.5) {
    float2 h = size * 0.5;
    float2 q = p - origin - h;
    float r = q.x < 0.0 ? (q.y < 0.0 ? radii.x : radii.w) : (q.y < 0.0 ? radii.y : radii.z);
    float s = -boxDistance(q, h, r);
    float b = min(max(r, bend), min(h.x, h.y));
    float2 k = abs(q) - (h - b);
    float2 sq = float2(q.x < 0.0 ? -1.0 : 1.0, q.y < 0.0 ? -1.0 : 1.0);
    float2 dir = (k.x > 0.0 && k.y > 0.0)
      ? -normalize(k) * sq
      : (k.x > k.y ? float2(-sq.x, 0.0) : float2(0.0, -sq.y));
    return float3(s, dir);
  }
  // Each chunk of segments lies in a circle (centre, radius). Beyond depth + 8 nothing refracts
  // or lights, so a pixel that far from every circle skips the outline, and otherwise it walks
  // only the chunks that may hold the nearest segment.
  float nearest = 1e9;
  float farthest = 1e9;
  for (int c = 0; c < CHUNKS; c++) {
    if (chunks[c].z < 0.0) break;
    float centre = length(p - chunks[c].xy);
    nearest = min(nearest, centre - chunks[c].z);
    farthest = min(farthest, centre + chunks[c].z);
  }
  if (nearest >= depth + 8.0) return float3(nearest, 0.0, 0.0);
  float best = 1e9;
  float2 closest = p;
  for (int c = 0; c < CHUNKS; c++) {
    if (chunks[c].z < 0.0) break;
    if (length(p - chunks[c].xy) - chunks[c].z <= farthest) {
      for (int k = 0; k < CHUNK; k++) {
        if (float(c * CHUNK + k) >= segmentCount) break;
        float2 a = segments[c * CHUNK + k].xy;
        float2 b = segments[c * CHUNK + k].zw;
        float2 ab = b - a;
        float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
        float2 point = a + ab * t;
        float dist = length(p - point);
        if (dist < best) { best = dist; closest = point; }
      }
    }
  }
  float2 away = p - closest;
  float len = length(away);
  return float3(best, len > 1e-4 ? away / len : float2(0.0));
}
`,et=`uniform float2 axis;
uniform float intensity;

float light(float3 g) {
  float facing = dot(-g.yz, axis);
  float spread = clamp(2.2 * (abs(facing) - 0.44), 0.0, 1.0);
  float rim = intensity * (facing < 0.0 ? 1.08 : 0.71) * spread * max(0.0, 1.0 - g.x);
  float band = 12.0 / 255.0 * intensity * facing * max(0.0, 1.0 - g.x / (0.65 * depth));
  return rim + band;
}

half4 main(float2 p) {
  half4 color = backdrop.eval(p);
  float3 g = shape(p, 0.0);
  if (g.x >= 1.5) return half4(clamp(color.rgb + light(g) * color.a, 0.0, color.a), color.a);
  half3 sum = half3(0.0);
  float count = 0.0;
  for (int i = 0; i < 8; i++) {
    float s = g.x + (float(i) + 0.5) / 16.0 - 0.25;
    if (s < 0.0) continue;
    sum += clamp(color.rgb + light(float3(s, g.yz)) * color.a, 0.0, color.a);
    count += 1.0;
  }
  return half4(count > 0.0 ? sum / count : color.rgb, color.a);
}
`,tt=`// The map shape() reads: geometry() at each pixel's centre, a pixel being 1 / mapScale layer
// units from mapOrigin, stored signed so it blends smoothly across the outline: the distance
// negative outside and the direction always pointing in, in a half-float image.
uniform float2 mapOrigin;
uniform float mapScale;

// 1 inside the outline by the nonzero rule, -1 outside.
float side(float2 p) {
  int winding = 0;
  for (int i = 0; i < SEGMENTS; i++) {
    if (float(i) >= segmentCount) break;
    float2 a = segments[i].xy;
    float2 b = segments[i].zw;
    if ((a.y <= p.y) != (b.y <= p.y)) {
      float cross = (b.x - a.x) * (p.y - a.y) - (p.x - a.x) * (b.y - a.y);
      if (b.y > a.y && cross > 0.0) winding += 1;
      if (b.y < a.y && cross < 0.0) winding -= 1;
    }
  }
  return winding != 0 ? 1.0 : -1.0;
}

half4 main(float2 position) {
  float2 p = mapOrigin + position / mapScale;
  float3 g = geometry(p, 0.0);
  float sign = side(p);
  return half4(sign * g.x, sign * g.yz, 1.0);
}
`,nt=`uniform float refraction;
uniform float dispersion;

float edgeRamp(float s) { return max(0.19, clamp(1.12 * (s - 0.12), 0.0, 1.0)); }

float roundedProfile(float s) {
  float u = max(0.0, 1.0 - 2.0 * (abs(s) + 0.5) / depth);
  return depth * pow(u, 1.4);
}

float displacement(float s) {
  if (isBox > 0.5) {
    float t = clamp(1.0 - (s - 1.0) / depth, 0.0, 1.0);
    return depth * pow(t, 3.5) * edgeRamp(s);
  }
  float sum = 0.0;
  float weights = 0.0;
  for (int k = -4; k <= 4; k++) {
    float t = float(k) * 1.75;
    float w = exp(-t * t / 24.5);
    sum += w * roundedProfile(s + t);
    weights += w;
  }
  return sum / weights * edgeRamp(s);
}

half4 refracted(float2 p, float2 dir, float d) {
  if (dispersion <= 0.0) return backdrop.eval(p + d * dir);
  half4 red = backdrop.eval(p + d * (1.0 + 0.1 * dispersion) * dir);
  half4 green = backdrop.eval(p + d * dir);
  half4 blue = backdrop.eval(p + d * (1.0 - 0.1 * dispersion) * dir);
  return half4(red.r, green.g, blue.b, green.a);
}

// Near the outline the displacement ramps steeply, so a pixel there averages eight points
// spread over half a layer pixel along the normal: one device pixel at 2×, which is how
// exports and high-density screens draw. Points outside the outline are left to the clip's
// antialiasing.
half4 main(float2 p) {
  float3 g = shape(p, depth);
  float2 dir = g.yz;
  if (g.x >= 1.5) return refracted(p, dir, refraction * displacement(g.x));
  half4 sum = half4(0.0);
  float count = 0.0;
  for (int i = 0; i < 8; i++) {
    float t = (float(i) + 0.5) / 16.0 - 0.25;
    float s = g.x + t;
    if (s < 0.0) continue;
    sum += refracted(p + t * dir, dir, refraction * displacement(s));
    count += 1.0;
  }
  return count > 0.0 ? sum / count : refracted(p, dir, refraction * displacement(g.x));
}
`,rt=`// Where a pixel sits against the outline, as geometry() gives it: a box or an ellipse exactly,
// segments read from a map of geometry() the renderer draws once per outline and scale, when it
// has one.
uniform shader backdrop;
uniform shader geometryMap;
uniform float useMap;
uniform float2 mapOrigin;
uniform float mapScale;

float3 shape(float2 p, float bend) {
  if (isBox > 0.5 || isEllipse > 0.5 || useMap < 0.5) return geometry(p, bend);
  // Back from the map's signed form to geometry()'s: the distance to the outline, and the
  // direction away from its nearest point, which outside the outline points out.
  float3 m = geometryMap.eval((p - mapOrigin) * mapScale).rgb;
  float len = length(m.yz);
  float2 inward = len > 1e-4 ? m.yz / len : float2(0.0);
  return float3(abs(m.x), m.x >= 0.0 ? inward : -inward);
}
`,W=8,it=128/W,at=B(`glass refraction`,U,rt,nt),ot=B(`glass light`,U,rt,et),st=B(`glass geometry map`,U,tt);function ct(e,t){let n=new Float32Array(512);return n.set(e.segments.subarray(0,n.length)),{origin:e.origin,size:e.size,radii:e.radii,isBox:+(e.kind===`box`),isEllipse:+(e.kind===`ellipse`),depth:t,segmentCount:Math.min(128,e.segments.length/4),segments:n,chunks:lt(e.segments)}}function lt(e){let t=[];for(let n=0;n<it;n++){let r=n*W*4,i=Math.min(e.length,r+W*4);if(r>=i){t.push(0,0,-1,0);continue}let[a,o,s,c]=[1/0,1/0,-1/0,-1/0];for(let t=r;t<i;t+=2)a=Math.min(a,e[t]),s=Math.max(s,e[t]),o=Math.min(o,e[t+1]),c=Math.max(c,e[t+1]);let l=(a+s)/2,u=(o+c)/2,d=0;for(let t=r;t<i;t+=2)d=Math.max(d,Math.hypot(e[t]-l,e[t+1]-u));t.push(l,u,d,0)}return t}function ut(e){let t=e*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function dt(e,t,n){return Math.max(.001,Math.min(e,Math.min(t,n)/2))}function ft(t){return t.glass??e}var pt=.6;function mt(e){return Math.hypot(pt,te(e.radius))}function ht(e,t){return dt(ft(t).depth,e.width,e.height)*1.1+ee(mt(t))}var gt=new Set([`FRAME`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`,`SECTION`]);function G(e,t){let a=i.mapPoints(e,[t.minX,t.minY,t.maxX,t.minY,t.maxX,t.maxY,t.minX,t.maxY]),o=[a[0],a[2],a[4],a[6]],s=[a[1],a[3],a[5],a[7]];return{minX:n(o),minY:n(s),maxX:r(o),maxY:r(s)}}function _t(e,t){return{minX:e.minX-t,minY:e.minY-t,maxX:e.maxX+t,maxY:e.maxY+t}}function vt(e,[t,n,r,i]){return{minX:e.minX-i,minY:e.minY-t,maxX:e.maxX+n,maxY:e.maxY+r}}function yt(e){if(e.type===`GROUP`)return!1;let t=e.fills.some(c)||e.strokes.some(c);return e.type===`TEXT`?e.text.length>0&&(t||pe(e.text)):e.type===`VECTOR`&&!e.vectorNetwork?.vertices.length&&e.fillGeometry.length===0&&e.strokeGeometry.length===0?!1:t||e.fillGeometry.length>0||e.strokeGeometry.length>0}function bt(e){let t=Xe(e);if(t!==void 0)return t;let n=Ee(e);return{minX:0,minY:n.minY,maxX:e.width,maxY:n.maxY+ne(e)}}function K(e,t){if(t===`figma`&&!yt(e))return null;let n=bt(e);if(!n)return null;let r=ae(e.strokes,e.strokeCap,e.vectorNetwork,e),i=ie(e)?vt(n,f(e)):_t(n,r),a=e.strokes.some(e=>e.visible&&e.align!==`INSIDE`),o=h([...e.fillGeometry,...a?e.strokeGeometry:[]]);return o?l(i,xt(e,{minX:o.x,minY:o.y,maxX:o.x+o.width,maxY:o.y+o.height},r,t))??i:i}function xt(e,t,n,r){return r===`drawn`&&e.strokeGeometry.length===0?_t(t,n):t}function q(e,t,n){let r=G([t[0],t[1],0,t[3],t[4],0,0,0,1],n);return{minX:e.minX+r.minX,minY:e.minY+r.minY,maxX:e.maxX+r.maxX,maxY:e.maxY+r.maxY}}function St(e,t,n,r){return q(e,t,{minX:n.x-r,minY:n.y-r,maxX:n.x+r,maxY:n.y+r})}function J(e,t,n,r){if(r===`drawn`)return wt(e,t,n);let i=t;for(let r of e.effects)if(r.visible){if(r.type===`DROP_SHADOW`){let a=r.radius+d(e,r),o=St(t,n,r.offset,a);i=l(i,o)??i}else if(r.type===`LAYER_BLUR`||r.type===`FOREGROUND_BLUR`){let e=u(r);i=q(i,n,{minX:-e,minY:-e,maxX:e,maxY:e})}}let a=Ct(e);return a>0?q(i,n,{minX:-a,minY:-a,maxX:a,maxY:a}):i}function Ct(e){let t=0;for(let n of e.effects)n.visible&&n.type===`TEXTURE`&&n.texture?.clipToShape===!1&&(t=Math.max(t,n.radius));return t}function wt(e,t,n){let r=Et(e)+Ct(e);return q(Tt(e,t,n),n,{minX:-r,minY:-r,maxX:r,maxY:r})}function Tt(e,t,n){let r=t;for(let i of e.effects)if(i.visible&&i.type===`DROP_SHADOW`){let a=oe(i.radius,i.color.a)+d(e,i);r=l(r,St(t,n,i.offset,a))??r}return r}function Et(e){let t=0;for(let n of e.effects)n.visible&&(n.type===`LAYER_BLUR`||n.type===`FOREGROUND_BLUR`)&&(t=Math.max(t,re(u(n))));return t}function Dt(e,t){let n=K(e,`drawn`);return n&&(t?Tt(e,n,i.identity()):n)}function Ot(e,t){let n=K(e,t);return n&&J(e,n,i.identity(),t)}function kt(e,t){return e.visible&&(t===`drawn`||e.opacity>0)}var At={minX:0,minY:0,maxX:0,maxY:0};function jt(e,t,n,r){let i=J(e,At,n,r);return{minX:t.minX-i.maxX,minY:t.minY-i.maxY,maxX:t.maxX-i.minX,maxY:t.maxY-i.minY}}function Mt(e,t){return e&&t?g(e,t):e}function Nt(e,t){return t!==`drawn`&&e.effects.some(e=>e.visible)}function Pt(e,t){return t===`drawn`||!e.masks||!e.extent?e.masks:g(e.masks,e.extent)}function Ft(e,n,r,a,c){let u=t(n.childIds.map(t=>e.getNode(t))),d=e=>i.multiply(r,b(H(e,c.preview))),f=t=>It(e,t,d(t),a,c),p=(e,t,n)=>{let r=n;for(let n=e;n<t;n++){let e=u[n];kt(e,c.reach)&&(r=l(r,f(e)))}return r},m=null,h=0;for(let t of o(u,s)){m=p(h,t.start,m),h=t.end;let n={masks:null,extent:null};for(let r of u.slice(t.start,t.maskedStart)){let t=f(r);n.masks=l(n.masks,t),n.extent=l(n.extent,Nt(r,c.reach)?Y(e,{...r,effects:[]},d(r),a,c):t)}n.extent=p(t.maskedStart,t.end,n.extent),m=l(m,Pt(n,c.reach))}return p(h,u.length,m)}function Y(e,t,n,r,i){let{reach:a}=i,o=K(t,a),s=o&&G(n,o);if(!(a===`drawn`&&v(t))){let o=v(t)?G(n,{minX:0,minY:0,maxX:t.width,maxY:t.height}):null,c=r&&t.effects.length>0?jt(t,r,n,a):r,u=o&&c?g(o,c):o??c;o&&!u||(s=l(s,Ft(e,t,n,u,i)))}return Mt(Rt(t,s&&J(t,s,n,a),n,a),r)}function It(e,t,n,r,i){return i.measured&&i.reach===`drawn`&&!r?Lt(e,t,n,i.measured,i):Y(e,t,n,r,i)}function Lt(e,t,n,r,a){let o=r.get(t);return o===void 0&&(o=Y(e,t,i.identity(),null,a),r.set(t,o)),o&&G(n,o)}function Rt(e,t,n,r){return r===`drawn`||!gt.has(e.type)?t:l(t,G(n,{minX:0,minY:0,maxX:e.width,maxY:e.height}))}function X(e,t,n,r){return Y(e,t,n,null,r)}function zt(e,t){let n;for(let r=t;;){if(!kt(r,`figma`))return null;let t=r.parentId?e.getNode(r.parentId):void 0;if(!t)return n;if(v(t)){let r=G(y(t,e),{minX:0,minY:0,maxX:t.width,maxY:t.height});if(n=n?g(n,r):r,!n)return null}r=t}}function Bt(e,t){let n=zt(e,t);if(n===null)return null;let r=Y(e,t,y(t,e),n??null,{reach:`figma`});return r&&r.maxX>r.minX&&r.maxY>r.minY?r:null}function Vt(e){return G(e,{minX:0,minY:0,maxX:0,maxY:0})}function Ht(e,t){let n=y(t,e),r=Ot(t,`drawn`);return r?G(n,r):Vt(n)}function Z(e,t,n,r){return X(e,t,n,{reach:`drawn`,preview:r})??Vt(n)}function Ut(e,t){let n=null;for(let r of t){let t=e.getNode(r);t?.visible&&(n=l(n,Z(e,t,y(t,e))))}return n}function Wt(e){return e[6]===0&&e[7]===0&&e[8]===1}function Gt(e,t){if(!Wt(e))return G(e,t);let n=(t.minX+t.maxX)/2,r=(t.minY+t.maxY)/2,i=(t.maxX-t.minX)/2,a=(t.maxY-t.minY)/2,o=e[0]*n+e[1]*r+e[2],s=e[3]*n+e[4]*r+e[5],c=Math.abs(e[0])*i+Math.abs(e[1])*a,l=Math.abs(e[3])*i+Math.abs(e[4])*a;return{minX:o-c,minY:s-l,maxX:o+c,maxY:s+l}}function Kt(e){return e.effects.find(e=>e.visible&&(e.type===`LAYER_BLUR`||e.type===`FOREGROUND_BLUR`))}function qt(e,t){let n=new Set,r=e.getNode(t)?.parentId;for(;r&&!n.has(r);)n.add(r),r=e.getNode(r)?.parentId;return n}function Q(e,t){for(let n of[t,...qt(e.graph,t)])e.byNode.delete(n),e.previewed?.byNode.delete(n)}var Jt={minX:0,minY:0,maxX:0,maxY:0},Yt=class{graphs=new WeakMap;observed=new Set;generation=0;ownAxes(e,t,n){if(e.getNode(t.id)!==t)return Z(e,t,i.identity(),n);if(!n){let n=this.entryOf(e).byNode.get(t.id);if(n!==void 0)return n??Jt}let r=this.measuredIn(e,n),a=r.get(t);return a===void 0&&(a=X(e,t,i.identity(),{reach:`drawn`,preview:n,measured:r}),r.set(t,a)),a??Jt}clear(){this.generation++}forget(e){for(let t of this.observed){let n=t.deref();n&&Q(n,e)}}dispose(){for(let e of this.observed)e.deref()?.unobserve();this.observed.clear(),this.generation++}measuredIn(e,t){let n=this.entryOf(e),r=t?this.previewedOf(e,n,t):null,i=e=>r?.ancestorIds.has(e.id)?r.byNode:n.byNode;return{get:e=>i(e).get(e.id),set:(e,t)=>{i(e).set(e.id,t)}}}previewedOf(e,t,n){let r=t.previewed;if(r&&r.nodeId===n.nodeId&&r.angle===n.angle)return r;let i={nodeId:n.nodeId,angle:n.angle,ancestorIds:qt(e,n.nodeId),byNode:new Map};return t.previewed=i,i}entryOf(e){let t=this.graphs.get(e)??this.watch(e);return t.generation!==this.generation&&(t.byNode.clear(),t.previewed=null,t.generation=this.generation),t}watch(e){let t={graph:e,generation:this.generation,byNode:new Map,previewed:null,unobserve:()=>void 0},n=e=>{Q(t,e.id),t.previewed=null},r=e.observeNodeChanges({before:n,created:n,previewed:e=>{Q(t,e.id)}});return t.unobserve=()=>{r()},this.graphs.set(e,t),this.forgetCollectedGraphs(),this.observed.add(new WeakRef(t)),t}forgetCollectedGraphs(){for(let e of this.observed)e.deref()||this.observed.delete(e)}};function Xt(e,t){return b(H(e,t))}function Zt(e,t,n,r){let i=Gt(Xt(n,r),e.ownAxes(t,n,r));return{x:i.minX,y:i.minY,width:i.maxX-i.minX,height:i.maxY-i.minY}}function $(e,t){let n=0;for(let e of t.effects)e.visible&&(e.type===`GLASS`&&(n=Math.max(n,ht(t,e))),e.type===`BACKGROUND_BLUR`&&(n=Math.max(n,re(u(e)))));if(n===0)return 0;let r=y(t,e);return n*Math.max(Math.hypot(r[0],r[3]),Math.hypot(r[1],r[4]))}function Qt(e,t,n){if(!n)return $(e,t);let r=0,i=[t];for(;i.length>0;){let t=i.pop();if(t?.visible){r=Math.max(r,$(e,t));for(let n of t.childIds){let t=e.getNode(n);t&&i.push(t)}}}return r}export{S as $,Ye as A,M as B,$e as C,Je as D,Qe as E,z as F,Ee as G,O as H,ze as I,ve as J,Te as K,L,B as M,N,Ke as O,I as P,x as Q,Be as R,ht as S,H as T,Me as U,Ie as V,Ne as W,C as X,ge as Y,ye as Z,mt as _,Z as a,ut as b,Ht as c,Dt as d,we as et,G as f,at as g,ot as h,Gt as i,Ue as j,qe as k,Bt as l,st as m,Qt as n,Zt as o,X as p,he as q,Ut as r,Kt as s,Yt as t,Ce as tt,Et as u,dt as v,Ze as w,ft as x,ct as y,k as z};