import{V as is,W as Zt,X as pr,S as Gt,i as Ht,s as Wt,k as $,l as ee,m as he,h as ie,n as te,b as St,Y as ku,L as Re,g as Ue,v as mr,d as Ge,f as _r,Z as Xs,I as Bt,o as Gu,_ as Vs,C as Cn,D as Pn,E as Ln,F as Dn,w as ii,$ as rs,t as Gs,a0 as bo,Q as Ti,y as _t,a as pe,z as gt,c as me,A as vt,R as yi,B as Mt,a1 as ot,q as be,r as Te,a2 as _i,G as C,a3 as gi,M as Hu,a4 as Je,u as Pt,a5 as Lt,H as Wu}from"../chunks/index.e9210eac.js";import{d as Xu,w as an,r as ju}from"../chunks/index.db4b0d72.js";import{N as qu}from"../chunks/nav.a3f62089.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="153",Yu=0,hl=1,Ku=2,Zc=1,Jc=2,Jn=3,xi=0,en=1,Qn=2,Si=0,vr=1,dl=2,pl=3,ml=4,Zu=5,dr=100,Ju=101,Qu=102,_l=103,gl=104,$u=200,ef=201,tf=202,nf=203,Qc=204,$c=205,rf=206,sf=207,af=208,of=209,lf=210,cf=0,uf=1,ff=2,ho=3,hf=4,df=5,pf=6,mf=7,eu=0,_f=1,gf=2,wn=0,vf=1,Mf=2,Sf=3,tu=4,Ef=5,nu=300,Sr=301,Er=302,po=303,mo=304,js=306,_o=1e3,Sn=1001,go=1002,Kt=1003,vl=1004,Da=1005,ln=1006,xf=1007,ts=1008,Ei=1009,bf=1010,Tf=1011,yo=1012,iu=1013,vi=1014,Mi=1015,xr=1016,ru=1017,su=1018,Ni=1020,yf=1021,En=1023,wf=1024,Af=1025,Fi=1026,br=1027,Rf=1028,au=1029,Cf=1030,ou=1031,lu=1033,Ua=33776,Ia=33777,Na=33778,Fa=33779,Ml=35840,Sl=35841,El=35842,xl=35843,Pf=36196,bl=37492,Tl=37496,yl=37808,wl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Dl=37815,Ul=37816,Il=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,Oa=36492,Lf=36283,zl=36284,Vl=36285,kl=36286,wo=3e3,ei=3001,Df=3200,Uf=3201,cu=0,If=1,Oi="",Ye="srgb",Rn="srgb-linear",uu="display-p3",Ba=7680,Nf=519,Ff=512,Of=513,Bf=514,zf=515,Vf=516,kf=517,Gf=518,Hf=519,Gl=35044,Hl="300 es",vo=1035,$n=2e3,Hs=2001;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,Ws=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Wf(n,e){return(n%e+e)%e}function Va(n,e,t){return(1-t)*n+t*e}function Wl(n){return(n&n-1)===0&&n!==0}function Mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],_=i[5],v=i[8],g=r[0],p=r[3],h=r[6],S=r[1],m=r[4],T=r[7],y=r[2],E=r[5],L=r[8];return s[0]=a*g+o*S+l*y,s[3]=a*p+o*m+l*E,s[6]=a*h+o*T+l*L,s[1]=c*g+u*S+d*y,s[4]=c*p+u*m+d*E,s[7]=c*h+u*T+d*L,s[2]=f*g+_*S+v*y,s[5]=f*p+_*m+v*E,s[8]=f*h+_*T+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,_=c*s-a*l,v=t*d+i*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=_*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Qe;function fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Xl={};function es(n){n in Xl||(Xl[n]=!0,console.warn(n))}function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Xf=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jf=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qf(n){return n.convertSRGBToLinear().applyMatrix3(jf)}function Yf(n){return n.applyMatrix3(Xf).convertLinearToSRGB()}const Kf={[Rn]:n=>n,[Ye]:n=>n.convertSRGBToLinear(),[uu]:qf},Zf={[Rn]:n=>n,[Ye]:n=>n.convertLinearToSRGB(),[uu]:Yf},mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Rn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kf[e],r=Zf[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ji;class hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=ns("canvas")),Ji.width=e.width,Ji.height=e.height;const i=Ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ss(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ha(r[a].image)):s.push(Ha(r[a]))}else s=Ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;class zt extends yr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Sn,r=Sn,s=ln,a=ts,o=En,l=Ei,c=zt.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ss(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ei?Ye:Oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ye?ei:wo}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?Ye:Oi}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=nu;zt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],_=l[5],v=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,T=(_+1)/2,y=(h+1)/2,E=(u+f)/4,L=(d+g)/4,P=(v+p)/4;return m>T&&m>y?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=E/i,s=L/i):T>y?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=P/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=L/s,r=P/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-v)*(p-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-v)/S,this.y=(d-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+_+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bi extends yr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ei?Ye:Oi),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pu extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $f extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],_=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==_||u!==v){let p=1-o;const h=l*f+c*_+u*v+d*g,S=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const y=Math.sqrt(m),E=Math.atan2(y,h*S);p=Math.sin(p*E)/y,o=Math.sin(o*E)/y}const T=o*S;if(l=l*p+f*T,c=c*p+_*T,u=u*p+v*T,d=d*p+g*T,p===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*_-c*f,e[t+1]=l*v+u*f+c*d-o*_,e[t+2]=c*v+u*_+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d-f*_*v;break;case"YXZ":this._x=f*u*d+c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d+f*_*v;break;case"ZXY":this._x=f*u*d-c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d-f*_*v;break;case"ZYX":this._x=f*u*d-c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d+f*_*v;break;case"YZX":this._x=f*u*d+c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d-f*_*v;break;case"XZY":this._x=f*u*d-c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>d){const _=2*Math.sqrt(1+i-o-d);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-i-d);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,f=-s*t-a*i-o*r;return this.x=c*l+f*-s+u*-o-d*-a,this.y=u*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new W,jl=new as;class os{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else r.boundingBox===null&&r.computeBoundingBox(),Qi.copy(r.boundingBox),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),vs.subVectors(this.max,Kr),$i.subVectors(e.a,Kr),er.subVectors(e.b,Kr),tr.subVectors(e.c,Kr),hi.subVectors(er,$i),di.subVectors(tr,er),Ri.subVectors($i,tr);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!Xa(t,$i,er,tr,vs)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,$i,er,tr,vs))?!1:(Ms.crossVectors(hi,di),t=[Ms.x,Ms.y,Ms.z],Xa(t,$i,er,tr,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new W,new W,new W,new W,new W,new W,new W,new W],jn=new W,Qi=new os,$i=new W,er=new W,tr=new W,hi=new W,di=new W,Ri=new W,Kr=new W,vs=new W,Ms=new W,Ci=new W;function Xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const eh=new os,Zr=new W,ja=new W;class Ao{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(ja)),this.expandByPoint(Zr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new W,qa=new W,Ss=new W,pi=new W,Ya=new W,Es=new W,Ka=new W;class mu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qa.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=pi.dot(this.direction),l=-pi.dot(Ss),c=pi.lengthSq(),u=Math.abs(1-a*a);let d,f,_,v;if(u>0)if(d=a*l-o,f=a*o-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,_=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qa).addScaledVector(Ss,f),_}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Ya.subVectors(t,e),Es.subVectors(i,e),Ka.crossVectors(Ya,Es);let a=this.direction.dot(Ka),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(Es.crossVectors(pi,Es));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(pi));if(c<0||l+c>a)return null;const u=-o*pi.dot(Ka);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p)}set(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=_,h[7]=v,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,_=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+_*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,_=l*d,v=c*u,g=c*d;t[0]=f+g*o,t[4]=v*o-_,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=_*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,_=l*d,v=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,_=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=v*c-_,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=_*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+_,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=_*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,_=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(th,e,nh)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(i,rn),mi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(i,rn)),mi.normalize(),xs.crossVectors(rn,mi),r[0]=mi.x,r[4]=xs.x,r[8]=rn.x,r[1]=mi.y,r[5]=xs.y,r[9]=rn.y,r[2]=mi.z,r[6]=xs.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],_=i[13],v=i[2],g=i[6],p=i[10],h=i[14],S=i[3],m=i[7],T=i[11],y=i[15],E=r[0],L=r[4],P=r[8],M=r[12],A=r[1],I=r[5],J=r[9],D=r[13],G=r[2],B=r[6],Q=r[10],z=r[14],H=r[3],R=r[7],k=r[11],re=r[15];return s[0]=a*E+o*A+l*G+c*H,s[4]=a*L+o*I+l*B+c*R,s[8]=a*P+o*J+l*Q+c*k,s[12]=a*M+o*D+l*z+c*re,s[1]=u*E+d*A+f*G+_*H,s[5]=u*L+d*I+f*B+_*R,s[9]=u*P+d*J+f*Q+_*k,s[13]=u*M+d*D+f*z+_*re,s[2]=v*E+g*A+p*G+h*H,s[6]=v*L+g*I+p*B+h*R,s[10]=v*P+g*J+p*Q+h*k,s[14]=v*M+g*D+p*z+h*re,s[3]=S*E+m*A+T*G+y*H,s[7]=S*L+m*I+T*B+y*R,s[11]=S*P+m*J+T*Q+y*k,s[15]=S*M+m*D+T*z+y*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],_=e[14],v=e[3],g=e[7],p=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*_-i*l*_)+g*(+t*l*_-t*c*f+s*a*f-r*a*_+r*c*u-s*l*u)+p*(+t*c*d-t*o*_-s*a*d+i*a*_+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],_=e[11],v=e[12],g=e[13],p=e[14],h=e[15],S=d*p*c-g*f*c+g*l*_-o*p*_-d*l*h+o*f*h,m=v*f*c-u*p*c-v*l*_+a*p*_+u*l*h-a*f*h,T=u*g*c-v*d*c+v*o*_-a*g*_-u*o*h+a*d*h,y=v*d*l-u*g*l-v*o*f+a*g*f+u*o*p-a*d*p,E=t*S+i*m+r*T+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=S*L,e[1]=(g*f*s-d*p*s-g*r*_+i*p*_+d*r*h-i*f*h)*L,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*L,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*_-i*l*_)*L,e[4]=m*L,e[5]=(u*p*s-v*f*s+v*r*_-t*p*_-u*r*h+t*f*h)*L,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*h-t*l*h)*L,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*_+t*l*_)*L,e[8]=T*L,e[9]=(v*d*s-u*g*s-v*i*_+t*g*_+u*i*h-t*d*h)*L,e[10]=(a*g*s-v*o*s+v*i*c-t*g*c-a*i*h+t*o*h)*L,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*_-t*o*_)*L,e[12]=y*L,e[13]=(u*g*r-v*d*r+v*i*f-t*g*f-u*i*p+t*d*p)*L,e[14]=(v*o*r-a*g*r-v*i*l+t*g*l+a*i*p-t*o*p)*L,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,_=s*u,v=s*d,g=a*u,p=a*d,h=o*d,S=l*c,m=l*u,T=l*d,y=i.x,E=i.y,L=i.z;return r[0]=(1-(g+h))*y,r[1]=(_+T)*y,r[2]=(v-m)*y,r[3]=0,r[4]=(_-T)*E,r[5]=(1-(f+h))*E,r[6]=(p+S)*E,r[7]=0,r[8]=(v+m)*L,r[9]=(p-S)*L,r[10]=(1-(f+g))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=nr.set(r[0],r[1],r[2]).length();const a=nr.set(r[4],r[5],r[6]).length(),o=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/a,d=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=$n){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let _,v;if(o===$n)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Hs)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=$n){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),f=(t+e)*c,_=(i+r)*u;let v,g;if(o===$n)v=(a+s)*d,g=-2*d;else if(o===Hs)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const nr=new W,_n=new yt,th=new W(0,0,0),nh=new W(1,1,1),mi=new W,xs=new W,rn=new W,ql=new yt,Yl=new as;class qs{constructor(e=0,t=0,i=0,r=qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qs.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ih=0;const Kl=new W,ir=new as,Yn=new yt,bs=new W,Jr=new W,rh=new W,sh=new as,Zl=new W(1,0,0),Jl=new W(0,1,0),Ql=new W(0,0,1),ah={type:"added"},$l={type:"removed"};class xt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new W,t=new qs,i=new as,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Jr,bs,this.up):Yn.lookAt(bs,Jr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Yn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new W(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new W,Kn=new W,Za=new W,Zn=new W,rr=new W,sr=new W,ec=new W,Ja=new W,Qa=new W,$a=new W;let Ts=!1;class Mn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),Kn.subVectors(i,t),Za.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(Kn),l=gn.dot(Za),c=Kn.dot(Kn),u=Kn.dot(Za),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,_=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Zn),l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Kn.subVectors(e,t),gn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;rr.subVectors(r,i),sr.subVectors(s,i),Ja.subVectors(e,i);const l=rr.dot(Ja),c=sr.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,r);const u=rr.dot(Qa),d=sr.dot(Qa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(rr,a);$a.subVectors(e,s);const _=rr.dot($a),v=sr.dot($a);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(sr,o);const p=u*v-_*d;if(p<=0&&d-u>=0&&_-v>=0)return ec.subVectors(s,r),o=(d-u)/(d-u+(_-v)),t.copy(r).addScaledVector(ec,o);const h=1/(p+g+f);return a=g*h,o=f*h,t.copy(i).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let oh=0;class ls extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=vr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qc,this.blendDst=$c,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=mn.workingColorSpace){return this.r=e,this.g=t,this.b=i,mn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=mn.workingColorSpace){if(e=Wf(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return mn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){const i=_u[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return mn.fromWorkingColorSpace(kt.copy(this),e),Math.round(Qt(kt.r*255,0,255))*65536+Math.round(Qt(kt.g*255,0,255))*256+Math.round(Qt(kt.b*255,0,255))}getHexString(e=Ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mn.workingColorSpace){mn.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mn.workingColorSpace){return mn.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ye){mn.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==Ye?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=i,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(ys);const i=Va(vn.h,ys.h,t),r=Va(vn.s,ys.s,t),s=Va(vn.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new tt;tt.NAMES=_u;class gu extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new W,ws=new nt;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this.updateRange={offset:0,count:-1},this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vu extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mu extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ti extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lh=0;const on=new yt,to=new xt,ar=new W,sn=new os,Qr=new os,It=new W;class wi extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?Mu:vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(sn.min,Qr.min),sn.expandByPoint(It),It.addVectors(sn.max,Qr.max),sn.expandByPoint(It)):(sn.expandByPoint(Qr.min),sn.expandByPoint(Qr.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),It.add(ar)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new W,u[A]=new W;const d=new W,f=new W,_=new W,v=new nt,g=new nt,p=new nt,h=new W,S=new W;function m(A,I,J){d.fromArray(r,A*3),f.fromArray(r,I*3),_.fromArray(r,J*3),v.fromArray(a,A*2),g.fromArray(a,I*2),p.fromArray(a,J*2),f.sub(d),_.sub(d),g.sub(v),p.sub(v);const D=1/(g.x*p.y-p.x*g.y);isFinite(D)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(_,-g.y).multiplyScalar(D),S.copy(_).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(D),c[A].add(h),c[I].add(h),c[J].add(h),u[A].add(S),u[I].add(S),u[J].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,I=T.length;A<I;++A){const J=T[A],D=J.start,G=J.count;for(let B=D,Q=D+G;B<Q;B+=3)m(i[B+0],i[B+1],i[B+2])}const y=new W,E=new W,L=new W,P=new W;function M(A){L.fromArray(s,A*3),P.copy(L);const I=c[A];y.copy(I),y.sub(L.multiplyScalar(L.dot(I))).normalize(),E.crossVectors(P,I);const D=E.dot(u[A])<0?-1:1;l[A*4]=y.x,l[A*4+1]=y.y,l[A*4+2]=y.z,l[A*4+3]=D}for(let A=0,I=T.length;A<I;++A){const J=T[A],D=J.start,G=J.count;for(let B=D,Q=D+G;B<Q;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?_=l[g]*o.data.stride+o.offset:_=l[g]*u;for(let h=0;h<u;h++)f[v++]=c[_++]}return new An(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],_=e(f,i);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,_=d.length;f<_;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new yt,Pi=new mu,As=new Ao,nc=new W,or=new W,lr=new W,cr=new W,no=new W,Rs=new W,Cs=new nt,Ps=new nt,Ls=new nt,ic=new W,rc=new W,sc=new W,Ds=new W,Us=new W;let Tn=class extends xt{constructor(e=new wi,t=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(no.fromBufferAttribute(d,e),a?Rs.addScaledVector(no,u):Rs.addScaledVector(no.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(As.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(As,nc)===null||Pi.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(tc),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const p=f[v],h=a[p.materialIndex],S=Math.max(p.start,_.start),m=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let T=S,y=m;T<y;T+=3){const E=o.getX(T),L=o.getX(T+1),P=o.getX(T+2);r=Is(this,h,e,i,c,u,d,E,L,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);for(let p=v,h=g;p<h;p+=3){const S=o.getX(p),m=o.getX(p+1),T=o.getX(p+2);r=Is(this,a,e,i,c,u,d,S,m,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const p=f[v],h=a[p.materialIndex],S=Math.max(p.start,_.start),m=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let T=S,y=m;T<y;T+=3){const E=T,L=T+1,P=T+2;r=Is(this,h,e,i,c,u,d,E,L,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let p=v,h=g;p<h;p+=3){const S=p,m=p+1,T=p+2;r=Is(this,a,e,i,c,u,d,S,m,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function ch(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===xi,o),l===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Is(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,or),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);const u=ch(n,e,t,i,or,lr,cr,Ds);if(u){r&&(Cs.fromBufferAttribute(r,o),Ps.fromBufferAttribute(r,l),Ls.fromBufferAttribute(r,c),u.uv=Mn.getInterpolation(Ds,or,lr,cr,Cs,Ps,Ls,new nt)),s&&(Cs.fromBufferAttribute(s,o),Ps.fromBufferAttribute(s,l),Ls.fromBufferAttribute(s,c),u.uv1=Mn.getInterpolation(Ds,or,lr,cr,Cs,Ps,Ls,new nt),u.uv2=u.uv1),a&&(ic.fromBufferAttribute(a,o),rc.fromBufferAttribute(a,l),sc.fromBufferAttribute(a,c),u.normal=Mn.getInterpolation(Ds,or,lr,cr,ic,rc,sc,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Mn.getNormal(or,lr,cr,d.normal),u.face=d}return u}class wr extends wi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(u,3)),this.setAttribute("uv",new ti(d,2));function v(g,p,h,S,m,T,y,E,L,P,M){const A=T/L,I=y/P,J=T/2,D=y/2,G=E/2,B=L+1,Q=P+1;let z=0,H=0;const R=new W;for(let k=0;k<Q;k++){const re=k*I-D;for(let N=0;N<B;N++){const K=N*A-J;R[g]=K*S,R[p]=re*m,R[h]=G,c.push(R.x,R.y,R.z),R[g]=0,R[p]=0,R[h]=E>0?1:-1,u.push(R.x,R.y,R.z),d.push(N/L),d.push(1-k/P),z+=1}}for(let k=0;k<P;k++)for(let re=0;re<L;re++){const N=f+re+B*k,K=f+re+B*(k+1),ne=f+(re+1)+B*(k+1),ge=f+(re+1)+B*k;l.push(N,K,ge),l.push(K,ne,ge),H+=6}o.addGroup(_,H,M),_+=H,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function uh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Su(n){return n.getRenderTarget()===null?n.outputColorSpace:Rn}const Eu={clone:Tr,merge:Yt};var fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let $t=class extends xu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const ur=-90,fr=1;class dh extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new $t(ur,fr,e,t);r.layers=this.layers,this.add(r);const s=new $t(ur,fr,e,t);s.layers=this.layers,this.add(s);const a=new $t(ur,fr,e,t);a.layers=this.layers,this.add(a);const o=new $t(ur,fr,e,t);o.layers=this.layers,this.add(o);const l=new $t(ur,fr,e,t);l.layers=this.layers,this.add(l);const c=new $t(ur,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class bu extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?Ye:Oi),this.texture=new bu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wr(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Si});s.uniforms.tEquirect.value=t;const a=new Tn(r,s),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=ln),new dh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const io=new W,mh=new W,_h=new Qe;class Di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=io.subVectors(i,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_h.getNormalMatrix(e),r=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Ao,Ns=new W;class Ys{constructor(e=new Di,t=new Di,i=new Di,r=new Di,s=new Di,a=new Di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],_=r[8],v=r[9],g=r[10],p=r[11],h=r[12],S=r[13],m=r[14],T=r[15];if(i[0].setComponents(l-s,f-c,p-_,T-h).normalize(),i[1].setComponents(l+s,f+c,p+_,T+h).normalize(),i[2].setComponents(l+a,f+u,p+v,T+S).normalize(),i[3].setComponents(l-a,f-u,p-v,T-S).normalize(),i[4].setComponents(l-o,f-d,p-g,T-m).normalize(),t===$n)i[5].setComponents(l+o,f+d,p+g,T+m).normalize();else if(t===Hs)i[5].setComponents(o,d,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,_=u.updateRange;n.bindBuffer(d,c),_.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Co extends wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,_=[],v=[],g=[],p=[];for(let h=0;h<u;h++){const S=h*f-a;for(let m=0;m<c;m++){const T=m*d-s;v.push(T,-S,0),g.push(0,0,1),p.push(m/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const m=S+c*h,T=S+c*(h+1),y=S+1+c*(h+1),E=S+1+c*h;_.push(m,T,E),_.push(T,y,E)}this.setIndex(_),this.setAttribute("position",new ti(v,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th="vec3 transformed = vec3( position );",yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ed=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:vh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:Eh,aomap_fragment:xh,aomap_pars_fragment:bh,begin_vertex:Th,beginnormal_vertex:yh,bsdfs:wh,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Dh,color_fragment:Uh,color_pars_fragment:Ih,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Vh,displacementmap_vertex:kh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Hh,encodings_fragment:Wh,encodings_pars_fragment:Xh,envmap_fragment:jh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:od,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:Qh,fog_fragment:$h,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:hd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:_d,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:Ed,map_pars_fragment:xd,map_particle_fragment:bd,map_particle_pars_fragment:Td,metalnessmap_fragment:yd,metalnessmap_pars_fragment:wd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Dd,normal_pars_fragment:Ud,normal_pars_vertex:Id,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Vd,output_fragment:kd,packing:Gd,premultiplied_alpha_fragment:Hd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:jd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:$d,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:fp,worldpos_vertex:hp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:_p,cube_vert:gp,cube_frag:vp,depth_vert:Mp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:xp,equirect_vert:bp,equirect_frag:Tp,linedashed_vert:yp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Up,meshnormal_frag:Ip,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Vp,points_vert:kp,points_frag:Gp,shadow_vert:Hp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:jp},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},bn={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};bn.physical={uniforms:Yt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Fs={r:0,b:0,g:0};function qp(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,d=null,f=0,_=null;function v(p,h){let S=!1,m=h.isScene===!0?h.background:null;switch(m&&m.isTexture&&(m=(h.backgroundBlurriness>0?t:e).get(m)),m===null?g(o,l):m&&m.isColor&&(g(m,1),S=!0),n.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),S=!0;break}(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===js)?(u===void 0&&(u=new Tn(new wr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Tr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=m.colorSpace!==Ye,(d!==m||f!==m.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=m,f=m.version,_=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Tn(new Co(2,2),new ni({name:"BackgroundMaterial",uniforms:Tr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=m.colorSpace!==Ye,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||f!==m.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=m,f=m.version,_=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(Fs,Su(n)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:v}}function Yp(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(G,B,Q,z,H){let R=!1;if(a){const k=g(z,Q,B);c!==k&&(c=k,_(c.object)),R=h(G,z,Q,H),R&&S(G,z,Q,H)}else{const k=B.wireframe===!0;(c.geometry!==z.id||c.program!==Q.id||c.wireframe!==k)&&(c.geometry=z.id,c.program=Q.id,c.wireframe=k,R=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(R||u)&&(u=!1,P(G,B,Q,z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function _(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function v(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function g(G,B,Q){const z=Q.wireframe===!0;let H=o[G.id];H===void 0&&(H={},o[G.id]=H);let R=H[B.id];R===void 0&&(R={},H[B.id]=R);let k=R[z];return k===void 0&&(k=p(f()),R[z]=k),k}function p(G){const B=[],Q=[],z=[];for(let H=0;H<r;H++)B[H]=0,Q[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:z,object:G,attributes:{},index:null}}function h(G,B,Q,z){const H=c.attributes,R=B.attributes;let k=0;const re=Q.getAttributes();for(const N in re)if(re[N].location>=0){const ne=H[N];let ge=R[N];if(ge===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;k++}return c.attributesNum!==k||c.index!==z}function S(G,B,Q,z){const H={},R=B.attributes;let k=0;const re=Q.getAttributes();for(const N in re)if(re[N].location>=0){let ne=R[N];ne===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),H[N]=ge,k++}c.attributes=H,c.attributesNum=k,c.index=z}function m(){const G=c.newAttributes;for(let B=0,Q=G.length;B<Q;B++)G[B]=0}function T(G){y(G,0)}function y(G,B){const Q=c.newAttributes,z=c.enabledAttributes,H=c.attributeDivisors;Q[G]=1,z[G]===0&&(n.enableVertexAttribArray(G),z[G]=1),H[G]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,B),H[G]=B)}function E(){const G=c.newAttributes,B=c.enabledAttributes;for(let Q=0,z=B.length;Q<z;Q++)B[Q]!==G[Q]&&(n.disableVertexAttribArray(Q),B[Q]=0)}function L(G,B,Q,z,H,R,k){k===!0?n.vertexAttribIPointer(G,B,Q,H,R):n.vertexAttribPointer(G,B,Q,z,H,R)}function P(G,B,Q,z){if(i.isWebGL2===!1&&(G.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const H=z.attributes,R=Q.getAttributes(),k=B.defaultAttributeValues;for(const re in R){const N=R[re];if(N.location>=0){let K=H[re];if(K===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),K!==void 0){const ne=K.normalized,ge=K.itemSize,Me=t.get(K);if(Me===void 0)continue;const we=Me.buffer,ue=Me.type,Le=Me.bytesPerElement,ut=i.isWebGL2===!0&&(ue===n.INT||ue===n.UNSIGNED_INT||K.gpuType===iu);if(K.isInterleavedBufferAttribute){const We=K.data,O=We.stride,Et=K.offset;if(We.isInstancedInterleavedBuffer){for(let Pe=0;Pe<N.locationSize;Pe++)y(N.location+Pe,We.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Pe=0;Pe<N.locationSize;Pe++)T(N.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Pe=0;Pe<N.locationSize;Pe++)L(N.location+Pe,ge/N.locationSize,ue,ne,O*Le,(Et+ge/N.locationSize*Pe)*Le,ut)}else{if(K.isInstancedBufferAttribute){for(let We=0;We<N.locationSize;We++)y(N.location+We,K.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let We=0;We<N.locationSize;We++)T(N.location+We);n.bindBuffer(n.ARRAY_BUFFER,we);for(let We=0;We<N.locationSize;We++)L(N.location+We,ge/N.locationSize,ue,ne,ge*Le,ge/N.locationSize*We*Le,ut)}}else if(k!==void 0){const ne=k[re];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(N.location,ne);break;case 3:n.vertexAttrib3fv(N.location,ne);break;case 4:n.vertexAttrib4fv(N.location,ne);break;default:n.vertexAttrib1fv(N.location,ne)}}}}E()}function M(){J();for(const G in o){const B=o[G];for(const Q in B){const z=B[Q];for(const H in z)v(z[H].object),delete z[H];delete B[Q]}delete o[G]}}function A(G){if(o[G.id]===void 0)return;const B=o[G.id];for(const Q in B){const z=B[Q];for(const H in z)v(z[H].object),delete z[H];delete B[Q]}delete o[G.id]}function I(G){for(const B in o){const Q=o[B];if(Q[G.id]===void 0)continue;const z=Q[G.id];for(const H in z)v(z[H].object),delete z[H];delete Q[G.id]}}function J(){D(),u=!0,c!==l&&(c=l,_(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:m,enableAttribute:T,disableUnusedAttributes:E}}function Kp(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,_;if(r)f=n,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Zp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,T=a||e.has("OES_texture_float"),y=m&&T,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:m,floatFragmentTextures:T,floatVertexTextures:y,maxSamples:E}}function Jp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Di,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||i!==0||r;return r=f,i=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,m=S*4;let T=h.clippingState||null;l.value=T,T=u(v,f,m,_);for(let y=0;y!==m;++y)T[y]=t[y];h.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,_,v){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const h=_+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let m=0,T=_;m!==g;++m,T+=4)a.copy(d[m]).applyMatrix4(S,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Qp(n){let e=new WeakMap;function t(a,o){return o===po?a.mapping=Sr:o===mo&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===po||o===mo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ph(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yu extends xu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,ac=[.125,.215,.35,.446,.526,.582],Ii=20,ro=new yu,oc=new tt;let so=null;const Ui=(1+Math.sqrt(5))/2,hr=1/Ui,lc=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ui,hr),new W(0,Ui,-hr),new W(hr,0,Ui),new W(-hr,0,Ui),new W(Ui,hr,0),new W(-Ui,hr,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){so=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so),e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:xr,format:En,colorSpace:Rn,depthBuffer:!1},r=uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(s)),this._blurMaterial=em(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(oc),u.toneMapping=wn,u.autoClear=!1;const _=new gu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Tn(new wr,_);let g=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,g=!0):(_.color.copy(oc),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const m=this._cubeSize;Os(r,S*m,h>2?m:0,m,m),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lc[(r-1)%lc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Tn(this._lodPlanes[r],c),f=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ii-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):Ii;p>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const h=[];let S=0;for(let L=0;L<Ii;++L){const P=L/g,M=Math.exp(-P*P/2);h.push(M),L===0?S+=M:L<p&&(S+=2*M)}for(let L=0;L<h.length;L++)h[L]=h[L]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:m}=this;f.dTheta.value=v,f.mipInt.value=m-i;const T=this._sizeLods[r],y=3*T*(r>m-gr?r-m+gr:0),E=4*(this._cubeSize-T);Os(t,y,E,3*T,2*T),l.setRenderTarget(t),l.render(d,ro)}}function $p(n){const e=[],t=[],i=[];let r=n;const s=n-gr+1+ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-gr?l=ac[a-n+gr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,g=3,p=2,h=1,S=new Float32Array(g*v*_),m=new Float32Array(p*v*_),T=new Float32Array(h*v*_);for(let E=0;E<_;E++){const L=E%3*2/3-1,P=E>2?0:-1,M=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];S.set(M,g*v*E),m.set(f,p*v*E);const A=[E,E,E,E,E,E];T.set(A,h*v*E)}const y=new wi;y.setAttribute("position",new An(S,g)),y.setAttribute("uv",new An(m,p)),y.setAttribute("faceIndex",new An(T,h)),e.push(y),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uc(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function em(n,e,t){const i=new Float32Array(Ii),r=new W(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function fc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function hc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===po||l===mo,u=l===Sr||l===Er;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new cc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new cc(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function nm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function im(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const g=_[v];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const f=[],_=d.index,v=d.attributes.position;let g=0;if(_!==null){const S=_.array;g=_.version;for(let m=0,T=S.length;m<T;m+=3){const y=S[m+0],E=S[m+1],L=S[m+2];f.push(y,E,E,L,L,y)}}else{const S=v.array;g=v.version;for(let m=0,T=S.length/3-1;m<T;m+=3){const y=m+0,E=m+1,L=m+2;f.push(y,E,E,L,L,y)}}const p=new(fu(f)?Mu:vu)(f,1);p.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function rm(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,_){n.drawElements(s,_,o,f*l),t.update(_,s,1)}function d(f,_,v){if(v===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,_,o,f*l,v),t.update(_,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function am(n,e){return n[0]-e[0]}function om(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lm(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==v){let G=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",G)};g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let P=0;S===!0&&(P=1),m===!0&&(P=2),T===!0&&(P=3);let M=u.attributes.position.count*P,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*A*4*v),J=new pu(I,M,A,v);J.type=Mi,J.needsUpdate=!0;const D=P*4;for(let B=0;B<v;B++){const Q=y[B],z=E[B],H=L[B],R=M*A*4*B;for(let k=0;k<Q.count;k++){const re=k*D;S===!0&&(a.fromBufferAttribute(Q,k),I[R+re+0]=a.x,I[R+re+1]=a.y,I[R+re+2]=a.z,I[R+re+3]=0),m===!0&&(a.fromBufferAttribute(z,k),I[R+re+4]=a.x,I[R+re+5]=a.y,I[R+re+6]=a.z,I[R+re+7]=0),T===!0&&(a.fromBufferAttribute(H,k),I[R+re+8]=a.x,I[R+re+9]=a.y,I[R+re+10]=a.z,I[R+re+11]=H.itemSize===4?a.w:1)}}g={count:v,texture:J,size:new nt(M,A)},s.set(u,g),u.addEventListener("dispose",G)}let p=0;for(let S=0;S<f.length;S++)p+=f[S];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let m=0;m<_;m++)v[m]=[m,0];i[u.id]=v}for(let m=0;m<_;m++){const T=v[m];T[0]=m,T[1]=f[m]}v.sort(om);for(let m=0;m<8;m++)m<_&&v[m][1]?(o[m][0]=v[m][0],o[m][1]=v[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(am);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const T=o[m],y=T[0],E=T[1];y!==Number.MAX_SAFE_INTEGER&&E?(g&&u.getAttribute("morphTarget"+m)!==g[y]&&u.setAttribute("morphTarget"+m,g[y]),p&&u.getAttribute("morphNormal"+m)!==p[y]&&u.setAttribute("morphNormal"+m,p[y]),r[m]=E,h+=E):(g&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),p&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const S=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const wu=new zt,Au=new pu,Ru=new $f,Cu=new bu,dc=[],pc=[],mc=new Float32Array(16),_c=new Float32Array(9),gc=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dc[r];if(s===void 0&&(s=new Float32Array(r),dc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ks(n,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function um(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;gc.set(i),n.uniformMatrix2fv(this.addr,!1,gc),Ut(t,i)}}function mm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;_c.set(i),n.uniformMatrix3fv(this.addr,!1,_c),Ut(t,i)}}function _m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;mc.set(i),n.uniformMatrix4fv(this.addr,!1,mc),Ut(t,i)}}function gm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function ym(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||wu,r)}function wm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ru,r)}function Am(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cu,r)}function Rm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Au,r)}function Cm(n){switch(n){case 5126:return um;case 35664:return fm;case 35665:return hm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return _m;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return xm;case 36295:return bm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(n,e){n.uniform1fv(this.addr,e)}function Lm(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Dm(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function Um(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function Im(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nm(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fm(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Om(n,e){n.uniform1iv(this.addr,e)}function Bm(n,e){n.uniform2iv(this.addr,e)}function zm(n,e){n.uniform3iv(this.addr,e)}function Vm(n,e){n.uniform4iv(this.addr,e)}function km(n,e){n.uniform1uiv(this.addr,e)}function Gm(n,e){n.uniform2uiv(this.addr,e)}function Hm(n,e){n.uniform3uiv(this.addr,e)}function Wm(n,e){n.uniform4uiv(this.addr,e)}function Xm(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wu,s[a])}function jm(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ru,s[a])}function qm(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cu,s[a])}function Ym(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Au,s[a])}function Km(n){switch(n){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Um;case 35674:return Im;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return Vm;case 5125:return km;case 36294:return Gm;case 36295:return Hm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Zm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Cm(t.type)}}class Jm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Km(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function vc(n,e){n.seq.push(e),n.map[e.id]=e}function $m(n,e,t){const i=n.name,r=i.length;for(ao.lastIndex=0;;){const s=ao.exec(i),a=ao.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vc(t,c===void 0?new Zm(o,n,e):new Jm(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Qm(o),vc(t,d)),t=d}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$m(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Mc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let e_=0;function t_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function n_(n){switch(n){case Rn:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+t_(n.getShaderSource(e),a)}else return r}function i_(n,e){const t=n_(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function r_(n,e){let t;switch(e){case vf:t="Linear";break;case Mf:t="Reinhard";break;case Sf:t="OptimizedCineon";break;case tu:t="ACESFilmic";break;case Ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function a_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $r(n){return n!==""}function Ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(n){return n.replace(l_,c_)}function c_(n,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return So(t)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(n){return n.replace(u_,f_)}function f_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function m_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function __(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function g_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=h_(t),c=d_(t),u=p_(t),d=m_(t),f=__(t),_=t.isWebGL2?"":s_(t),v=a_(s),g=r.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),p.length>0&&(p+=`
`),h=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),h.length>0&&(h+=`
`)):(p=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),h=[_,Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==wn?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=So(a),a=Ec(a,t),a=xc(a,t),o=So(o),o=Ec(o,t),o=xc(o,t),a=bc(a),o=bc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=S+p+a,T=S+h+o,y=Mc(r,r.VERTEX_SHADER,m),E=Mc(r,r.FRAGMENT_SHADER,T);if(r.attachShader(g,y),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(y).trim(),I=r.getShaderInfoLog(E).trim();let J=!0,D=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,y,E);else{const G=Sc(r,y,"vertex"),B=Sc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+B)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:A,prefix:p},fragmentShader:{log:I,prefix:h}})}r.deleteShader(y),r.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new ks(r,g)),L};let P;return this.getAttributes=function(){return P===void 0&&(P=o_(r,g)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let v_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S_(e),t.set(e,i)),i}}class S_{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}}function E_(n,e,t,i,r,s,a){const o=new Ro,l=new M_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,A,I,J,D){const G=J.fog,B=D.geometry,Q=M.isMeshStandardMaterial?J.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),H=z&&z.mapping===js?z.image.height:null,R=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=k!==void 0?k.length:0;let N=0;B.morphAttributes.position!==void 0&&(N=1),B.morphAttributes.normal!==void 0&&(N=2),B.morphAttributes.color!==void 0&&(N=3);let K,ne,ge,Me;if(R){const at=bn[R];K=at.vertexShader,ne=at.fragmentShader}else K=M.vertexShader,ne=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const we=n.getRenderTarget(),ue=D.isInstancedMesh===!0,Le=!!M.map,ut=!!M.matcap,We=!!z,O=!!M.aoMap,Et=!!M.lightMap,Pe=!!M.bumpMap,Xe=!!M.normalMap,Fe=!!M.displacementMap,rt=!!M.emissiveMap,Ve=!!M.metalnessMap,ze=!!M.roughnessMap,et=M.anisotropy>0,ft=M.clearcoat>0,bt=M.iridescence>0,w=M.sheen>0,x=M.transmission>0,j=et&&!!M.anisotropyMap,se=ft&&!!M.clearcoatMap,ae=ft&&!!M.clearcoatNormalMap,le=ft&&!!M.clearcoatRoughnessMap,Ae=bt&&!!M.iridescenceMap,de=bt&&!!M.iridescenceThicknessMap,Z=w&&!!M.sheenColorMap,ye=w&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,De=!!M.specularColorMap,Ee=!!M.specularIntensityMap,Se=x&&!!M.transmissionMap,je=x&&!!M.thicknessMap,st=!!M.gradientMap,U=!!M.alphaMap,fe=M.alphaTest>0,X=!!M.extensions,oe=!!B.attributes.uv1,ve=!!B.attributes.uv2,$e=!!B.attributes.uv3;return{isWebGL2:u,shaderID:R,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:ne,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:ue,instancingColor:ue&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Rn,map:Le,matcap:ut,envMap:We,envMapMode:We&&z.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Et,bumpMap:Pe,normalMap:Xe,displacementMap:f&&Fe,emissiveMap:rt,normalMapObjectSpace:Xe&&M.normalMapType===If,normalMapTangentSpace:Xe&&M.normalMapType===cu,metalnessMap:Ve,roughnessMap:ze,anisotropy:et,anisotropyMap:j,clearcoat:ft,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:le,iridescence:bt,iridescenceMap:Ae,iridescenceThicknessMap:de,sheen:w,sheenColorMap:Z,sheenRoughnessMap:ye,specularMap:Ce,specularColorMap:De,specularIntensityMap:Ee,transmission:x,transmissionMap:Se,thicknessMap:je,gradientMap:st,opaque:M.transparent===!1&&M.blending===vr,alphaMap:U,alphaTest:fe,combine:M.combine,mapUv:Le&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:Et&&g(M.lightMap.channel),bumpMapUv:Pe&&g(M.bumpMap.channel),normalMapUv:Xe&&g(M.normalMap.channel),displacementMapUv:Fe&&g(M.displacementMap.channel),emissiveMapUv:rt&&g(M.emissiveMap.channel),metalnessMapUv:Ve&&g(M.metalnessMap.channel),roughnessMapUv:ze&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:se&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:De&&g(M.specularColorMap.channel),specularIntensityMapUv:Ee&&g(M.specularIntensityMap.channel),transmissionMapUv:Se&&g(M.transmissionMap.channel),thicknessMapUv:je&&g(M.thicknessMap.channel),alphaMapUv:U&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Xe||et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:ve,vertexUv3s:$e,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Le||U),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:wn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qn,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:X&&M.extensions.derivatives===!0,extensionFragDepth:X&&M.extensions.fragDepth===!0,extensionDrawBuffers:X&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(A,M),m(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function S(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function m(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),M.push(o.mask)}function T(M){const A=v[M.type];let I;if(A){const J=bn[A];I=Eu.clone(J.uniforms)}else I=M.uniforms;return I}function y(M,A){let I;for(let J=0,D=c.length;J<D;J++){const G=c[J];if(G.cacheKey===A){I=G,++I.usedTimes;break}}return I===void 0&&(I=new g_(n,A,M,s),c.push(I)),I}function E(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:y,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:P}}function x_(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function b_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,_,v,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=_,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function o(d,f,_,v,g,p){const h=a(d,f,_,v,g,p);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):t.push(h)}function l(d,f,_,v,g,p){const h=a(d,f,_,v,g,p);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||b_),i.length>1&&i.sort(f||yc),r.length>1&&r.sort(f||yc)}function u(){for(let d=e,f=n.length;d<f;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function T_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wc,n.set(i,[a])):r>=s.length?(a=new wc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function y_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function w_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A_=0;function R_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C_(n,e){const t=new y_,i=w_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new yt,o=new yt;function l(u,d){let f=0,_=0,v=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,p=0,h=0,S=0,m=0,T=0,y=0,E=0,L=0,P=0;u.sort(R_);const M=d===!0?Math.PI:1;for(let I=0,J=u.length;I<J;I++){const D=u[I],G=D.color,B=D.intensity,Q=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*B*M,_+=G.g*B*M,v+=G.b*B*M;else if(D.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],B);else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const R=D.shadow,k=i.get(D);k.shadowBias=R.bias,k.shadowNormalBias=R.normalBias,k.shadowRadius=R.radius,k.shadowMapSize=R.mapSize,r.directionalShadow[g]=k,r.directionalShadowMap[g]=z,r.directionalShadowMatrix[g]=D.shadow.matrix,T++}r.directional[g]=H,g++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(G).multiplyScalar(B*M),H.distance=Q,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[h]=H;const R=D.shadow;if(D.map&&(r.spotLightMap[L]=D.map,L++,R.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[h]=R.matrix,D.castShadow){const k=i.get(D);k.shadowBias=R.bias,k.shadowNormalBias=R.normalBias,k.shadowRadius=R.radius,k.shadowMapSize=R.mapSize,r.spotShadow[h]=k,r.spotShadowMap[h]=z,E++}h++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(G).multiplyScalar(B),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=H,S++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),H.distance=D.distance,H.decay=D.decay,D.castShadow){const R=D.shadow,k=i.get(D);k.shadowBias=R.bias,k.shadowNormalBias=R.normalBias,k.shadowRadius=R.radius,k.shadowMapSize=R.mapSize,k.shadowCameraNear=R.camera.near,k.shadowCameraFar=R.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=D.shadow.matrix,y++}r.point[p]=H,p++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(B*M),H.groundColor.copy(D.groundColor).multiplyScalar(B*M),r.hemi[m]=H,m++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==g||A.pointLength!==p||A.spotLength!==h||A.rectAreaLength!==S||A.hemiLength!==m||A.numDirectionalShadows!==T||A.numPointShadows!==y||A.numSpotShadows!==E||A.numSpotMaps!==L)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=S,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=E+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,A.directionalLength=g,A.pointLength=p,A.spotLength=h,A.rectAreaLength=S,A.hemiLength=m,A.numDirectionalShadows=T,A.numPointShadows=y,A.numSpotShadows=E,A.numSpotMaps=L,r.version=A_++)}function c(u,d){let f=0,_=0,v=0,g=0,p=0;const h=d.matrixWorldInverse;for(let S=0,m=u.length;S<m;S++){const T=u[S];if(T.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),f++}else if(T.isSpotLight){const y=r.spot[v];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),v++}else if(T.isRectAreaLight){const y=r.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=r.point[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(h),_++}else if(T.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Ac(n,e){const t=new C_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function P_(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Ac(n,e),t.set(s,[l])):a>=o.length?(l=new Ac(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class L_ extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D_ extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N_(n,e,t){let i=new Ys;const r=new nt,s=new nt,a=new Nt,o=new L_({depthPacking:Uf}),l=new D_,c={},u=t.maxTextureSize,d={[xi]:en,[en]:xi,[Qn]:Qn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:U_,fragmentShader:I_}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let h=this.type;this.render=function(y,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const J=h!==Jn&&this.type===Jn,D=h===Jn&&this.type!==Jn;for(let G=0,B=y.length;G<B;G++){const Q=y[G],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();if(r.multiply(H),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,z.mapSize.y=s.y)),z.map===null||J===!0||D===!0){const k=this.type!==Jn?{minFilter:Kt,magFilter:Kt}:{};z.map!==null&&z.map.dispose(),z.map=new bi(r.x,r.y,k),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const R=z.getViewportCount();for(let k=0;k<R;k++){const re=z.getViewport(k);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),I.viewport(a),z.updateMatrices(Q,k),i=z.getFrustum(),T(E,L,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Jn&&S(z,L),z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(P,M,A)};function S(y,E){const L=e.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,_.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,L,f,g,null),_.uniforms.shadow_pass.value=y.mapPass.texture,_.uniforms.resolution.value=y.mapSize,_.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,L,_,g,null)}function m(y,E,L,P){let M=null;const A=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)M=A;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,J=E.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let G=D[J];G===void 0&&(G=M.clone(),D[J]=G),M=G}if(M.visible=E.visible,M.wireframe=E.wireframe,P===Jn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=L}return M}function T(y,E,L,P,M){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===Jn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const J=e.update(y),D=y.material;if(Array.isArray(D)){const G=J.groups;for(let B=0,Q=G.length;B<Q;B++){const z=G[B],H=D[z.materialIndex];if(H&&H.visible){const R=m(y,H,P,M);n.renderBufferDirect(L,null,J,R,y,z)}}}else if(D.visible){const G=m(y,D,P,M);n.renderBufferDirect(L,null,J,G,y,null)}}const I=y.children;for(let J=0,D=I.length;J<D;J++)T(I[J],E,L,P,M)}}function F_(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const fe=new Nt;let X=null;const oe=new Nt(0,0,0,0);return{setMask:function(ve){X!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){U=ve},setClear:function(ve,$e,pt,at,Jt){Jt===!0&&(ve*=at,$e*=at,pt*=at),fe.set(ve,$e,pt,at),oe.equals(fe)===!1&&(n.clearColor(ve,$e,pt,at),oe.copy(fe))},reset:function(){U=!1,X=null,oe.set(-1,0,0,0)}}}function s(){let U=!1,fe=null,X=null,oe=null;return{setTest:function(ve){ve?we(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ve){fe!==ve&&!U&&(n.depthMask(ve),fe=ve)},setFunc:function(ve){if(X!==ve){switch(ve){case cf:n.depthFunc(n.NEVER);break;case uf:n.depthFunc(n.ALWAYS);break;case ff:n.depthFunc(n.LESS);break;case ho:n.depthFunc(n.LEQUAL);break;case hf:n.depthFunc(n.EQUAL);break;case df:n.depthFunc(n.GEQUAL);break;case pf:n.depthFunc(n.GREATER);break;case mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ve}},setLocked:function(ve){U=ve},setClear:function(ve){oe!==ve&&(n.clearDepth(ve),oe=ve)},reset:function(){U=!1,fe=null,X=null,oe=null}}}function a(){let U=!1,fe=null,X=null,oe=null,ve=null,$e=null,pt=null,at=null,Jt=null;return{setTest:function(mt){U||(mt?we(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(mt){fe!==mt&&!U&&(n.stencilMask(mt),fe=mt)},setFunc:function(mt,At,Rt){(X!==mt||oe!==At||ve!==Rt)&&(n.stencilFunc(mt,At,Rt),X=mt,oe=At,ve=Rt)},setOp:function(mt,At,Rt){($e!==mt||pt!==At||at!==Rt)&&(n.stencilOp(mt,At,Rt),$e=mt,pt=At,at=Rt)},setLocked:function(mt){U=mt},setClear:function(mt){Jt!==mt&&(n.clearStencil(mt),Jt=mt)},reset:function(){U=!1,fe=null,X=null,oe=null,ve=null,$e=null,pt=null,at=null,Jt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,g=[],p=null,h=!1,S=null,m=null,T=null,y=null,E=null,L=null,P=null,M=!1,A=null,I=null,J=null,D=null,G=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,z=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=z>=2);let R=null,k={};const re=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),K=new Nt().fromArray(re),ne=new Nt().fromArray(N);function ge(U,fe,X,oe){const ve=new Uint8Array(4),$e=n.createTexture();n.bindTexture(U,$e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<X;pt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(fe+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return $e}const Me={};Me[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(n.DEPTH_TEST),l.setFunc(ho),Fe(!1),rt(hl),we(n.CULL_FACE),Pe(Si);function we(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function ue(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Le(U,fe){return _[U]!==fe?(n.bindFramebuffer(U,fe),_[U]=fe,i&&(U===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function ut(U,fe){let X=g,oe=!1;if(U)if(X=v.get(fe),X===void 0&&(X=[],v.set(fe,X)),U.isWebGLMultipleRenderTargets){const ve=U.texture;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,pt=ve.length;$e<pt;$e++)X[$e]=n.COLOR_ATTACHMENT0+$e;X.length=ve.length,oe=!0}}else X[0]!==n.COLOR_ATTACHMENT0&&(X[0]=n.COLOR_ATTACHMENT0,oe=!0);else X[0]!==n.BACK&&(X[0]=n.BACK,oe=!0);oe&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function We(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const O={[dr]:n.FUNC_ADD,[Ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};if(i)O[_l]=n.MIN,O[gl]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(O[_l]=U.MIN_EXT,O[gl]=U.MAX_EXT)}const Et={[$u]:n.ZERO,[ef]:n.ONE,[tf]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[af]:n.DST_COLOR,[rf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[sf]:n.ONE_MINUS_DST_ALPHA};function Pe(U,fe,X,oe,ve,$e,pt,at){if(U===Si){h===!0&&(ue(n.BLEND),h=!1);return}if(h===!1&&(we(n.BLEND),h=!0),U!==Zu){if(U!==S||at!==M){if((m!==dr||E!==dr)&&(n.blendEquation(n.FUNC_ADD),m=dr,E=dr),at)switch(U){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dl:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,y=null,L=null,P=null,S=U,M=at}return}ve=ve||fe,$e=$e||X,pt=pt||oe,(fe!==m||ve!==E)&&(n.blendEquationSeparate(O[fe],O[ve]),m=fe,E=ve),(X!==T||oe!==y||$e!==L||pt!==P)&&(n.blendFuncSeparate(Et[X],Et[oe],Et[$e],Et[pt]),T=X,y=oe,L=$e,P=pt),S=U,M=!1}function Xe(U,fe){U.side===Qn?ue(n.CULL_FACE):we(n.CULL_FACE);let X=U.side===en;fe&&(X=!X),Fe(X),U.blending===vr&&U.transparent===!1?Pe(Si):Pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const oe=U.stencilWrite;c.setTest(oe),oe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){A!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),A=U)}function rt(U){U!==Yu?(we(n.CULL_FACE),U!==I&&(U===hl?n.cullFace(n.BACK):U===Ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),I=U}function Ve(U){U!==J&&(Q&&n.lineWidth(U),J=U)}function ze(U,fe,X){U?(we(n.POLYGON_OFFSET_FILL),(D!==fe||G!==X)&&(n.polygonOffset(fe,X),D=fe,G=X)):ue(n.POLYGON_OFFSET_FILL)}function et(U){U?we(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function ft(U){U===void 0&&(U=n.TEXTURE0+B-1),R!==U&&(n.activeTexture(U),R=U)}function bt(U,fe,X){X===void 0&&(R===null?X=n.TEXTURE0+B-1:X=R);let oe=k[X];oe===void 0&&(oe={type:void 0,texture:void 0},k[X]=oe),(oe.type!==U||oe.texture!==fe)&&(R!==X&&(n.activeTexture(X),R=X),n.bindTexture(U,fe||Me[U]),oe.type=U,oe.texture=fe)}function w(){const U=k[R];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){K.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function Ee(U){ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function Se(U,fe){let X=d.get(fe);X===void 0&&(X=new WeakMap,d.set(fe,X));let oe=X.get(U);oe===void 0&&(oe=n.getUniformBlockIndex(fe,U.name),X.set(U,oe))}function je(U,fe){const oe=d.get(fe).get(U);u.get(fe)!==oe&&(n.uniformBlockBinding(fe,oe,U.__bindingPointIndex),u.set(fe,oe))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},R=null,k={},_={},v=new WeakMap,g=[],p=null,h=!1,S=null,m=null,T=null,y=null,E=null,L=null,P=null,M=!1,A=null,I=null,J=null,D=null,G=null,K.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:we,disable:ue,bindFramebuffer:Le,drawBuffers:ut,useProgram:We,setBlending:Pe,setMaterial:Xe,setFlipSided:Fe,setCullFace:rt,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:et,activeTexture:ft,bindTexture:bt,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:j,texImage2D:ye,texImage3D:Ce,updateUBOMapping:Se,uniformBlockBinding:je,texStorage2D:de,texStorage3D:Z,texSubImage2D:se,texSubImage3D:ae,compressedTexSubImage2D:le,compressedTexSubImage3D:Ae,scissor:De,viewport:Ee,reset:st}}function O_(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return h?new OffscreenCanvas(w,x):ns("canvas")}function m(w,x,j,se){let ae=1;if((w.width>se||w.height>se)&&(ae=se/Math.max(w.width,w.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const le=x?Mo:Math.floor,Ae=le(ae*w.width),de=le(ae*w.height);g===void 0&&(g=S(Ae,de));const Z=j?S(Ae,de):g;return Z.width=Ae,Z.height=de,Z.getContext("2d").drawImage(w,0,0,Ae,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ae+"x"+de+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Wl(w.width)&&Wl(w.height)}function y(w){return o?!1:w.wrapS!==Sn||w.wrapT!==Sn||w.minFilter!==Kt&&w.minFilter!==ln}function E(w,x){return w.generateMipmaps&&x&&w.minFilter!==Kt&&w.minFilter!==ln}function L(w){n.generateMipmap(w)}function P(w,x,j,se,ae=!1){if(o===!1)return x;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le=x;return x===n.RED&&(j===n.FLOAT&&(le=n.R32F),j===n.HALF_FLOAT&&(le=n.R16F),j===n.UNSIGNED_BYTE&&(le=n.R8)),x===n.RG&&(j===n.FLOAT&&(le=n.RG32F),j===n.HALF_FLOAT&&(le=n.RG16F),j===n.UNSIGNED_BYTE&&(le=n.RG8)),x===n.RGBA&&(j===n.FLOAT&&(le=n.RGBA32F),j===n.HALF_FLOAT&&(le=n.RGBA16F),j===n.UNSIGNED_BYTE&&(le=se===Ye&&ae===!1?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(w,x,j){return E(w,j)===!0||w.isFramebufferTexture&&w.minFilter!==Kt&&w.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){return w===Kt||w===vl||w===Da?n.NEAREST:n.LINEAR}function I(w){const x=w.target;x.removeEventListener("dispose",I),D(x),x.isVideoTexture&&v.delete(x)}function J(w){const x=w.target;x.removeEventListener("dispose",J),B(x)}function D(w){const x=i.get(w);if(x.__webglInit===void 0)return;const j=w.source,se=p.get(j);if(se){const ae=se[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(w),Object.keys(se).length===0&&p.delete(j)}i.remove(w)}function G(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const j=w.source,se=p.get(j);delete se[x.__cacheKey],a.memory.textures--}function B(w){const x=w.texture,j=i.get(w),se=i.get(x);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,le=x.length;ae<le;ae++){const Ae=i.get(x[ae]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(x[ae])}i.remove(x),i.remove(w)}let Q=0;function z(){Q=0}function H(){const w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function R(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){const j=i.get(w);if(w.isVideoTexture&&ft(w),w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){const se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(j,w,x);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+x)}function re(w,x){const j=i.get(w);if(w.version>0&&j.__version!==w.version){Le(j,w,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+x)}function N(w,x){const j=i.get(w);if(w.version>0&&j.__version!==w.version){Le(j,w,x);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+x)}function K(w,x){const j=i.get(w);if(w.version>0&&j.__version!==w.version){ut(j,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+x)}const ne={[_o]:n.REPEAT,[Sn]:n.CLAMP_TO_EDGE,[go]:n.MIRRORED_REPEAT},ge={[Kt]:n.NEAREST,[vl]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[xf]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},Me={[Ff]:n.NEVER,[Hf]:n.ALWAYS,[Of]:n.LESS,[zf]:n.LEQUAL,[Bf]:n.EQUAL,[Gf]:n.GEQUAL,[Vf]:n.GREATER,[kf]:n.NOTEQUAL};function we(w,x,j){if(j?(n.texParameteri(w,n.TEXTURE_WRAP_S,ne[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ne[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ne[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ge[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ge[x.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Sn||x.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(x.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Kt&&x.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Kt||x.minFilter!==Da&&x.minFilter!==ts||x.type===Mi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ue(w,x){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I));const se=x.source;let ae=p.get(se);ae===void 0&&(ae={},p.set(se,ae));const le=R(x);if(le!==w.__cacheKey){ae[le]===void 0&&(ae[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ae[le].usedTimes++;const Ae=ae[w.__cacheKey];Ae!==void 0&&(ae[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&G(x)),w.__cacheKey=le,w.__webglTexture=ae[le].texture}return j}function Le(w,x,j){let se=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=n.TEXTURE_3D);const ae=ue(w,x),le=x.source;t.bindTexture(se,w.__webglTexture,n.TEXTURE0+j);const Ae=i.get(le);if(le.version!==Ae.__version||ae===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=y(x)&&T(x.image)===!1;let Z=m(x.image,de,!1,u);Z=bt(x,Z);const ye=T(Z)||o,Ce=s.convert(x.format,x.colorSpace);let De=s.convert(x.type),Ee=P(x.internalFormat,Ce,De,x.colorSpace);we(se,x,ye);let Se;const je=x.mipmaps,st=o&&x.isVideoTexture!==!0,U=Ae.__version===void 0||ae===!0,fe=M(x,Z,ye);if(x.isDepthTexture)Ee=n.DEPTH_COMPONENT,o?x.type===Mi?Ee=n.DEPTH_COMPONENT32F:x.type===vi?Ee=n.DEPTH_COMPONENT24:x.type===Ni?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:x.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Fi&&Ee===n.DEPTH_COMPONENT&&x.type!==yo&&x.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=vi,De=s.convert(x.type)),x.format===br&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,x.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ni,De=s.convert(x.type))),U&&(st?t.texStorage2D(n.TEXTURE_2D,1,Ee,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Ee,Z.width,Z.height,0,Ce,De,null));else if(x.isDataTexture)if(je.length>0&&ye){st&&U&&t.texStorage2D(n.TEXTURE_2D,fe,Ee,je[0].width,je[0].height);for(let X=0,oe=je.length;X<oe;X++)Se=je[X],st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,De,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ee,Se.width,Se.height,0,Ce,De,Se.data);x.generateMipmaps=!1}else st?(U&&t.texStorage2D(n.TEXTURE_2D,fe,Ee,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Ce,De,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,Z.width,Z.height,0,Ce,De,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ee,je[0].width,je[0].height,Z.depth);for(let X=0,oe=je.length;X<oe;X++)Se=je[X],x.format!==En?Ce!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,Z.depth,Ce,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ee,Se.width,Se.height,Z.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,Z.depth,Ce,De,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ee,Se.width,Se.height,Z.depth,0,Ce,De,Se.data)}else{st&&U&&t.texStorage2D(n.TEXTURE_2D,fe,Ee,je[0].width,je[0].height);for(let X=0,oe=je.length;X<oe;X++)Se=je[X],x.format!==En?Ce!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,De,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ee,Se.width,Se.height,0,Ce,De,Se.data)}else if(x.isDataArrayTexture)st?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ee,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ce,De,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,Z.width,Z.height,Z.depth,0,Ce,De,Z.data);else if(x.isData3DTexture)st?(U&&t.texStorage3D(n.TEXTURE_3D,fe,Ee,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ce,De,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,Z.width,Z.height,Z.depth,0,Ce,De,Z.data);else if(x.isFramebufferTexture){if(U)if(st)t.texStorage2D(n.TEXTURE_2D,fe,Ee,Z.width,Z.height);else{let X=Z.width,oe=Z.height;for(let ve=0;ve<fe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Ee,X,oe,0,Ce,De,null),X>>=1,oe>>=1}}else if(je.length>0&&ye){st&&U&&t.texStorage2D(n.TEXTURE_2D,fe,Ee,je[0].width,je[0].height);for(let X=0,oe=je.length;X<oe;X++)Se=je[X],st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ce,De,Se):t.texImage2D(n.TEXTURE_2D,X,Ee,Ce,De,Se);x.generateMipmaps=!1}else st?(U&&t.texStorage2D(n.TEXTURE_2D,fe,Ee,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,De,Z)):t.texImage2D(n.TEXTURE_2D,0,Ee,Ce,De,Z);E(x,ye)&&L(se),Ae.__version=le.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ut(w,x,j){if(x.image.length!==6)return;const se=ue(w,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+j);const le=i.get(ae);if(ae.version!==le.__version||se===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!Ae&&!de?Z[X]=m(x.image[X],!1,!0,c):Z[X]=de?x.image[X].image:x.image[X],Z[X]=bt(x,Z[X]);const ye=Z[0],Ce=T(ye)||o,De=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),Se=P(x.internalFormat,De,Ee,x.colorSpace),je=o&&x.isVideoTexture!==!0,st=le.__version===void 0||se===!0;let U=M(x,ye,Ce);we(n.TEXTURE_CUBE_MAP,x,Ce);let fe;if(Ae){je&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Se,ye.width,ye.height);for(let X=0;X<6;X++){fe=Z[X].mipmaps;for(let oe=0;oe<fe.length;oe++){const ve=fe[oe];x.format!==En?De!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ve.width,ve.height,De,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ve.width,ve.height,De,Ee,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Se,ve.width,ve.height,0,De,Ee,ve.data)}}}else{fe=x.mipmaps,je&&st&&(fe.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Se,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(de){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Z[X].width,Z[X].height,De,Ee,Z[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,Z[X].width,Z[X].height,0,De,Ee,Z[X].data);for(let oe=0;oe<fe.length;oe++){const $e=fe[oe].image[X].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,$e.width,$e.height,De,Ee,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Se,$e.width,$e.height,0,De,Ee,$e.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,De,Ee,Z[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,De,Ee,Z[X]);for(let oe=0;oe<fe.length;oe++){const ve=fe[oe];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,De,Ee,ve.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Se,De,Ee,ve.image[X])}}}E(x,Ce)&&L(n.TEXTURE_CUBE_MAP),le.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function We(w,x,j,se,ae){const le=s.convert(j.format,j.colorSpace),Ae=s.convert(j.type),de=P(j.internalFormat,le,Ae,j.colorSpace);i.get(x).__hasExternalTextures||(ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,de,x.width,x.height,x.depth,0,le,Ae,null):t.texImage2D(ae,0,de,x.width,x.height,0,le,Ae,null)),t.bindFramebuffer(n.FRAMEBUFFER,w),et(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ae,i.get(j).__webglTexture,0,ze(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ae,i.get(j).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(w,x,j){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let se=n.DEPTH_COMPONENT16;if(j||et(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Mi?se=n.DEPTH_COMPONENT32F:ae.type===vi&&(se=n.DEPTH_COMPONENT24));const le=ze(x);et(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,se,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,se,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){const se=ze(x);j&&et(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,x.width,x.height):et(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const se=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<se.length;ae++){const le=se[ae],Ae=s.convert(le.format,le.colorSpace),de=s.convert(le.type),Z=P(le.internalFormat,Ae,de,le.colorSpace),ye=ze(x);j&&et(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Z,x.width,x.height):et(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const se=i.get(x.depthTexture).__webglTexture,ae=ze(x);if(x.depthTexture.format===Fi)et(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(x.depthTexture.format===br)et(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Pe(w){const x=i.get(w),j=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,w)}else if(j){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]=n.createRenderbuffer(),O(x.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),O(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(w,x,j){const se=i.get(w);x!==void 0&&We(se.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),j!==void 0&&Pe(w)}function Fe(w){const x=w.texture,j=i.get(w),se=i.get(x);w.addEventListener("dispose",J),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=x.version,a.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,Ae=T(w)||o;if(ae){j.__webglFramebuffer=[];for(let de=0;de<6;de++)j.__webglFramebuffer[de]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const de=w.texture;for(let Z=0,ye=de.length;Z<ye;Z++){const Ce=i.get(de[Z]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&et(w)===!1){const de=le?x:[x];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Z=0;Z<de.length;Z++){const ye=de[Z];j.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Z]);const Ce=s.convert(ye.format,ye.colorSpace),De=s.convert(ye.type),Ee=P(ye.internalFormat,Ce,De,ye.colorSpace,w.isXRRenderTarget===!0),Se=ze(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,j.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),O(j.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),we(n.TEXTURE_CUBE_MAP,x,Ae);for(let de=0;de<6;de++)We(j.__webglFramebuffer[de],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de);E(x,Ae)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=w.texture;for(let Z=0,ye=de.length;Z<ye;Z++){const Ce=de[Z],De=i.get(Ce);t.bindTexture(n.TEXTURE_2D,De.__webglTexture),we(n.TEXTURE_2D,Ce,Ae),We(j.__webglFramebuffer,w,Ce,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D),E(Ce,Ae)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,se.__webglTexture),we(de,x,Ae),We(j.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,de),E(x,Ae)&&L(de),t.unbindTexture()}w.depthBuffer&&Pe(w)}function rt(w){const x=T(w)||o,j=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,ae=j.length;se<ae;se++){const le=j[se];if(E(le,x)){const Ae=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(Ae,de),L(Ae),t.unbindTexture()}}}function Ve(w){if(o&&w.samples>0&&et(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],j=w.width,se=w.height;let ae=n.COLOR_BUFFER_BIT;const le=[],Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){le.push(n.COLOR_ATTACHMENT0+ye),w.depthBuffer&&le.push(Ae);const Ce=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ce===!1&&(w.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ye]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),Z){const De=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ae,n.NEAREST),_&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,de.__webglColorRenderbuffer[ye]);const Ce=i.get(x[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ze(w){return Math.min(d,w.samples)}function et(w){const x=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ft(w){const x=a.render.frame;v.get(w)!==x&&(v.set(w,x),w.update())}function bt(w,x){const j=w.colorSpace,se=w.format,ae=w.type;return w.isCompressedTexture===!0||w.format===vo||j!==Rn&&j!==Oi&&(j===Ye?o===!1?e.has("EXT_sRGB")===!0&&se===En?(w.format=vo,w.minFilter=ln,w.generateMipmaps=!1):x=hu.sRGBToLinear(x):(se!==En||ae!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),x}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=re,this.setTexture3D=N,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=We,this.useMultisampledRTT=et}function B_(n,e,t){const i=t.isWebGL2;function r(s,a=Oi){let o;if(s===Ei)return n.UNSIGNED_BYTE;if(s===ru)return n.UNSIGNED_SHORT_4_4_4_4;if(s===su)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bf)return n.BYTE;if(s===Tf)return n.SHORT;if(s===yo)return n.UNSIGNED_SHORT;if(s===iu)return n.INT;if(s===vi)return n.UNSIGNED_INT;if(s===Mi)return n.FLOAT;if(s===xr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yf)return n.ALPHA;if(s===En)return n.RGBA;if(s===wf)return n.LUMINANCE;if(s===Af)return n.LUMINANCE_ALPHA;if(s===Fi)return n.DEPTH_COMPONENT;if(s===br)return n.DEPTH_STENCIL;if(s===vo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Rf)return n.RED;if(s===au)return n.RED_INTEGER;if(s===Cf)return n.RG;if(s===ou)return n.RG_INTEGER;if(s===lu)return n.RGBA_INTEGER;if(s===Ua||s===Ia||s===Na||s===Fa)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ml||s===Sl||s===El||s===xl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===El)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bl||s===Tl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===bl)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Tl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yl||s===wl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Dl||s===Ul||s===Il||s===Nl||s===Fl||s===Ol||s===Bl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===yl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Al)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ll)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ul)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Il)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Oa)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Lf||s===zl||s===Vl||s===kl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Oa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class z_ extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class k_ extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Fi,u!==Fi&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fi&&(i=vi),i===void 0&&u===br&&(i=Ni),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class G_ extends yr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,_=null,v=null;const g=t.getContextAttributes();let p=null,h=null;const S=[],m=[];let T=null;const y=new $t;y.layers.enable(1),y.viewport=new Nt;const E=new $t;E.layers.enable(2),E.viewport=new Nt;const L=[y,E],P=new z_;P.layers.enable(1),P.layers.enable(2);let M=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){T=N},this.getController=function(N){let K=S[N];return K===void 0&&(K=new oo,S[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=S[N];return K===void 0&&(K=new oo,S[N]=K),K.getGripSpace()},this.getHand=function(N){let K=S[N];return K===void 0&&(K=new oo,S[N]=K),K.getHandSpace()};function I(N){const K=m.indexOf(N.inputSource);if(K===-1)return;const ne=S[K];ne!==void 0&&(ne.update(N.inputSource,N.frame,c||a),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function J(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",D);for(let N=0;N<S.length;N++){const K=m[N];K!==null&&(m[N]=null,S[N].disconnect(K))}M=null,A=null,e.setRenderTarget(p),_=null,f=null,d=null,r=null,h=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",J),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:_}),h=new bi(_.framebufferWidth,_.framebufferHeight,{format:En,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ne=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?br:Fi,ne=g.stencil?Ni:vi);const Me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),h=new bi(f.textureWidth,f.textureHeight,{format:En,type:Ei,depthTexture:new k_(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(h);we.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(N){for(let K=0;K<N.removed.length;K++){const ne=N.removed[K],ge=m.indexOf(ne);ge>=0&&(m[ge]=null,S[ge].disconnect(ne))}for(let K=0;K<N.added.length;K++){const ne=N.added[K];let ge=m.indexOf(ne);if(ge===-1){for(let we=0;we<S.length;we++)if(we>=m.length){m.push(ne),ge=we;break}else if(m[we]===null){m[we]=ne,ge=we;break}if(ge===-1)break}const Me=S[ge];Me&&Me.connect(ne)}}const G=new W,B=new W;function Q(N,K,ne){G.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const ge=G.distanceTo(B),Me=K.projectionMatrix.elements,we=ne.projectionMatrix.elements,ue=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),ut=(Me[9]+1)/Me[5],We=(Me[9]-1)/Me[5],O=(Me[8]-1)/Me[0],Et=(we[8]+1)/we[0],Pe=ue*O,Xe=ue*Et,Fe=ge/(-O+Et),rt=Fe*-O;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(rt),N.translateZ(Fe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ve=ue+Fe,ze=Le+Fe,et=Pe-rt,ft=Xe+(ge-rt),bt=ut*Le/ze*Ve,w=We*Le/ze*Ve;N.projectionMatrix.makePerspective(et,ft,bt,w,Ve,ze),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function z(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(r===null)return N;T&&(N=T),P.near=E.near=y.near=N.near,P.far=E.far=y.far=N.far,(M!==P.near||A!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),M=P.near,A=P.far);const K=N.parent,ne=P.cameras;z(P,K);for(let ge=0;ge<ne.length;ge++)z(ne[ge],K);return ne.length===2?Q(P,y,E):P.projectionMatrix.copy(y.projectionMatrix),T&&H(P,K),P};function H(N,K){const ne=T;K===null?ne.matrix.copy(N.matrixWorld):(ne.matrix.copy(K.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(N.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0);const ge=ne.children;for(let Me=0,we=ge.length;Me<we;Me++)ge[Me].updateMatrixWorld(!0);ne.projectionMatrix.copy(N.projectionMatrix),ne.projectionMatrixInverse.copy(N.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ws*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=N)};let R=null;function k(N,K){if(u=K.getViewerPose(c||a),v=K,u!==null){const ne=u.views;_!==null&&(e.setRenderTargetFramebuffer(h,_.framebuffer),e.setRenderTarget(h));let ge=!1;ne.length!==P.cameras.length&&(P.cameras.length=0,ge=!0);for(let Me=0;Me<ne.length;Me++){const we=ne[Me];let ue=null;if(_!==null)ue=_.getViewport(we);else{const ut=d.getViewSubImage(f,we);ue=ut.viewport,Me===0&&(e.setRenderTargetTextures(h,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(h))}let Le=L[Me];Le===void 0&&(Le=new $t,Le.layers.enable(Me),Le.viewport=new Nt,L[Me]=Le),Le.matrix.fromArray(we.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(we.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ue.x,ue.y,ue.width,ue.height),Me===0&&(P.matrix.copy(Le.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ge===!0&&P.cameras.push(Le)}}for(let ne=0;ne<S.length;ne++){const ge=m[ne],Me=S[ne];ge!==null&&Me!==void 0&&Me.update(ge,K,c||a)}R&&R(N,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const re=new Tu;re.setAnimationLoop(k),this.setAnimationLoop=function(N){R=N},this.dispose=function(){}}}function H_(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Su(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,m,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&_(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,m):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===en&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===en&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const m=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*m,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,m){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=m*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function _(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W_(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,m){const T=m.program;i.uniformBlockBinding(S,T)}function c(S,m){let T=r[S.id];T===void 0&&(v(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",p));const y=m.program;i.updateUBOMapping(S,y);const E=e.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const m=d();S.__bindingPointIndex=m;const T=n.createBuffer(),y=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,y,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const m=r[S.id],T=S.uniforms,y=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let E=0,L=T.length;E<L;E++){const P=T[E];if(_(P,E,y)===!0){const M=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let J=0;J<A.length;J++){const D=A[J],G=g(D);typeof D=="number"?(P.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,M+I,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,I),I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,m,T){const y=S.value;if(T[m]===void 0){if(typeof y=="number")T[m]=y;else{const E=Array.isArray(y)?y:[y],L=[];for(let P=0;P<E.length;P++)L.push(E[P].clone());T[m]=L}return!0}else if(typeof y=="number"){if(T[m]!==y)return T[m]=y,!0}else{const E=Array.isArray(T[m])?T[m]:[T[m]],L=Array.isArray(y)?y:[y];for(let P=0;P<E.length;P++){const M=E[P];if(M.equals(L[P])===!1)return M.copy(L[P]),!0}}return!1}function v(S){const m=S.uniforms;let T=0;const y=16;let E=0;for(let L=0,P=m.length;L<P;L++){const M=m[L],A={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let J=0,D=I.length;J<D;J++){const G=I[J],B=g(G);A.boundary+=B.boundary,A.storage+=B.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=T,L>0){E=T%y;const J=y-E;E!==0&&J-A.boundary<0&&(T+=y-E,M.__offset=T)}T+=A.storage}return E=T%y,E>0&&(T+=y-E),S.__size=T,S.__cache={},this}function g(S){const m={boundary:0,storage:0};return typeof S=="number"?(m.boundary=4,m.storage=4):S.isVector2?(m.boundary=8,m.storage=8):S.isVector3||S.isColor?(m.boundary=16,m.storage=12):S.isVector4?(m.boundary=16,m.storage=16):S.isMatrix3?(m.boundary=48,m.storage=48):S.isMatrix4?(m.boundary=64,m.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),m}function p(S){const m=S.target;m.removeEventListener("dispose",p);const T=a.indexOf(m.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function X_(){const n=ns("canvas");return n.style.display="block",n}class Pu{constructor(e={}){const{canvas:t=X_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ye,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const m=this;let T=!1,y=0,E=0,L=null,P=-1,M=null;const A=new Nt,I=new Nt;let J=null;const D=new tt(0);let G=0,B=t.width,Q=t.height,z=1,H=null,R=null;const k=new Nt(0,0,B,Q),re=new Nt(0,0,B,Q);let N=!1;const K=new Ys;let ne=!1,ge=!1,Me=null;const we=new yt,ue=new nt,Le=new W,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return L===null?z:1}let O=i;function Et(b,V){for(let q=0;q<b.length;q++){const F=b[q],Y=t.getContext(F,V);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),O=Et(V,b),O===null)throw Et(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,Xe,Fe,rt,Ve,ze,et,ft,bt,w,x,j,se,ae,le,Ae,de,Z,ye,Ce,De,Ee,Se,je;function st(){Pe=new nm(O),Xe=new Zp(O,Pe,e),Pe.init(Xe),Ee=new B_(O,Pe,Xe),Fe=new F_(O,Pe,Xe),rt=new sm(O),Ve=new x_,ze=new O_(O,Pe,Fe,Ve,Xe,Ee,rt),et=new Qp(m),ft=new tm(m),bt=new gh(O,Xe),Se=new Yp(O,Pe,bt,Xe),w=new im(O,bt,rt,Se),x=new cm(O,w,bt,rt),ye=new lm(O,Xe,ze),Ae=new Jp(Ve),j=new E_(m,et,ft,Pe,Xe,Se,Ae),se=new H_(m,Ve),ae=new T_,le=new P_(Pe,Xe),Z=new qp(m,et,ft,Fe,x,f,l),de=new N_(m,x,Xe),je=new W_(O,rt,Xe,Fe),Ce=new Kp(O,Pe,rt,Xe),De=new rm(O,Pe,rt,Xe),rt.programs=j.programs,m.capabilities=Xe,m.extensions=Pe,m.properties=Ve,m.renderLists=ae,m.shadowMap=de,m.state=Fe,m.info=rt}st();const U=new G_(m,O);this.xr=U,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(B,Q,!1))},this.getSize=function(b){return b.set(B,Q)},this.setSize=function(b,V,q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,Q=V,t.width=Math.floor(b*z),t.height=Math.floor(V*z),q===!0&&(t.style.width=b+"px",t.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(B*z,Q*z).floor()},this.setDrawingBufferSize=function(b,V,q){B=b,Q=V,z=q,t.width=Math.floor(b*q),t.height=Math.floor(V*q),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,V,q,F){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,V,q,F),Fe.viewport(A.copy(k).multiplyScalar(z).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,V,q,F){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,V,q,F),Fe.scissor(I.copy(re).multiplyScalar(z).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(b){Fe.setScissorTest(N=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){R=b},this.getClearColor=function(b){return b.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(b=!0,V=!0,q=!0){let F=0;if(b){let Y=!1;if(L!==null){const xe=L.texture.format;Y=xe===lu||xe===ou||xe===au}if(Y){const xe=L.texture.type,ce=xe===Ei||xe===vi||xe===yo||xe===Ni||xe===ru||xe===su,Ie=Z.getClearColor(),ke=Z.getClearAlpha(),qe=Ie.r,Be=Ie.g,He=Ie.b,lt=Ve.get(L).__webglFramebuffer;ce?(_[0]=qe,_[1]=Be,_[2]=He,_[3]=ke,O.clearBufferuiv(O.COLOR,lt,_)):(v[0]=qe,v[1]=Be,v[2]=He,v[3]=ke,O.clearBufferiv(O.COLOR,lt,v))}else F|=O.COLOR_BUFFER_BIT}V&&(F|=O.DEPTH_BUFFER_BIT),q&&(F|=O.STENCIL_BUFFER_BIT),O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ae.dispose(),le.dispose(),Ve.dispose(),et.dispose(),ft.dispose(),x.dispose(),Se.dispose(),je.dispose(),j.dispose(),U.dispose(),U.removeEventListener("sessionstart",mt),U.removeEventListener("sessionend",At),Me&&(Me.dispose(),Me=null),Rt.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=rt.autoReset,V=de.enabled,q=de.autoUpdate,F=de.needsUpdate,Y=de.type;st(),rt.autoReset=b,de.enabled=V,de.autoUpdate=q,de.needsUpdate=F,de.type=Y}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){const V=b.target;V.removeEventListener("dispose",ve),$e(V)}function $e(b){pt(b),Ve.remove(b)}function pt(b){const V=Ve.get(b).programs;V!==void 0&&(V.forEach(function(q){j.releaseProgram(q)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,q,F,Y,xe){V===null&&(V=ut);const ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=Gi(b,V,q,F,Y);Fe.setMaterial(F,ce);let ke=q.index,qe=1;F.wireframe===!0&&(ke=w.getWireframeAttribute(q),qe=2);const Be=q.drawRange,He=q.attributes.position;let lt=Be.start*qe,ct=(Be.start+Be.count)*qe;xe!==null&&(lt=Math.max(lt,xe.start*qe),ct=Math.min(ct,(xe.start+xe.count)*qe)),ke!==null?(lt=Math.max(lt,0),ct=Math.min(ct,ke.count)):He!=null&&(lt=Math.max(lt,0),ct=Math.min(ct,He.count));const Xt=ct-lt;if(Xt<0||Xt===1/0)return;Se.setup(Y,F,Ie,q,ke);let Ft,dt=Ce;if(ke!==null&&(Ft=bt.get(ke),dt=De,dt.setIndex(Ft)),Y.isMesh)F.wireframe===!0?(Fe.setLineWidth(F.wireframeLinewidth*We()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(Y.isLine){let Ze=F.linewidth;Ze===void 0&&(Ze=1),Fe.setLineWidth(Ze*We()),Y.isLineSegments?dt.setMode(O.LINES):Y.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else Y.isPoints?dt.setMode(O.POINTS):Y.isSprite&&dt.setMode(O.TRIANGLES);if(Y.isInstancedMesh)dt.renderInstances(lt,Xt,Y.count);else if(q.isInstancedBufferGeometry){const Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hn=Math.min(q.instanceCount,Ze);dt.renderInstances(lt,Xt,hn)}else dt.render(lt,Xt)},this.compile=function(b,V){function q(F,Y,xe){F.transparent===!0&&F.side===Qn&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,tn(F,Y,xe),F.side=xi,F.needsUpdate=!0,tn(F,Y,xe),F.side=Qn):tn(F,Y,xe)}p=le.get(b),p.init(),S.push(p),b.traverseVisible(function(F){F.isLight&&F.layers.test(V.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(m.useLegacyLights),b.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let xe=0;xe<Y.length;xe++){const ce=Y[xe];q(ce,b,F)}else q(Y,b,F)}),S.pop(),p=null};let at=null;function Jt(b){at&&at(b)}function mt(){Rt.stop()}function At(){Rt.start()}const Rt=new Tu;Rt.setAnimationLoop(Jt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(b){at=b,U.setAnimationLoop(b),b===null?Rt.stop():Rt.start()},U.addEventListener("sessionstart",mt),U.addEventListener("sessionend",At),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(V=U.updateCameraXR(V)),b.isScene===!0&&b.onBeforeRender(m,b,V,L),p=le.get(b,S.length),p.init(),S.push(p),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ne=Ae.init(this.clippingPlanes,ge),g=ae.get(b,h.length),g.init(),h.push(g),Ai(b,V,0,m.sortObjects),g.finish(),m.sortObjects===!0&&g.sort(H,R),ne===!0&&Ae.beginShadows();const q=p.state.shadowsArray;if(de.render(q,b,V),ne===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Z.render(g,b),p.setupLights(m.useLegacyLights),V.isArrayCamera){const F=V.cameras;for(let Y=0,xe=F.length;Y<xe;Y++){const ce=F[Y];zi(g,b,ce,ce.viewport)}}else zi(g,b,V);L!==null&&(ze.updateMultisampleRenderTarget(L),ze.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(m,b,V),Se.resetDefaultState(),P=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Ai(b,V,q,F){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){F&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(we);const ce=x.update(b),Ie=b.material;Ie.visible&&g.push(b,ce,Ie,q,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==rt.render.frame&&(b.skeleton.update(),b.skeleton.frame=rt.render.frame);const ce=x.update(b),Ie=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const ke=ce.groups;for(let qe=0,Be=ke.length;qe<Be;qe++){const He=ke[qe],lt=Ie[He.materialIndex];lt&&lt.visible&&g.push(b,ce,lt,q,Le.z,He)}}else Ie.visible&&g.push(b,ce,Ie,q,Le.z,null)}}const xe=b.children;for(let ce=0,Ie=xe.length;ce<Ie;ce++)Ai(xe[ce],V,q,F)}function zi(b,V,q,F){const Y=b.opaque,xe=b.transmissive,ce=b.transparent;p.setupLightsView(q),ne===!0&&Ae.setGlobalState(m.clippingPlanes,q),xe.length>0&&cn(Y,xe,V,q),F&&Fe.viewport(A.copy(F)),Y.length>0&&un(Y,V,q),xe.length>0&&un(xe,V,q),ce.length>0&&un(ce,V,q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function cn(b,V,q,F){const Y=Xe.isWebGL2;Me===null&&(Me=new bi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?xr:Ei,minFilter:ts,samples:Y&&o===!0?4:0})),m.getDrawingBufferSize(ue),Y?Me.setSize(ue.x,ue.y):Me.setSize(Mo(ue.x),Mo(ue.y));const xe=m.getRenderTarget();m.setRenderTarget(Me),m.getClearColor(D),G=m.getClearAlpha(),G<1&&m.setClearColor(16777215,.5),m.clear();const ce=m.toneMapping;m.toneMapping=wn,un(b,q,F),ze.updateMultisampleRenderTarget(Me),ze.updateRenderTargetMipmap(Me);let Ie=!1;for(let ke=0,qe=V.length;ke<qe;ke++){const Be=V[ke],He=Be.object,lt=Be.geometry,ct=Be.material,Xt=Be.group;if(ct.side===Qn&&He.layers.test(F.layers)){const Ft=ct.side;ct.side=en,ct.needsUpdate=!0,Vi(He,q,F,lt,ct,Xt),ct.side=Ft,ct.needsUpdate=!0,Ie=!0}}Ie===!0&&(ze.updateMultisampleRenderTarget(Me),ze.updateRenderTargetMipmap(Me)),m.setRenderTarget(xe),m.setClearColor(D,G),m.toneMapping=ce}function un(b,V,q){const F=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,xe=b.length;Y<xe;Y++){const ce=b[Y],Ie=ce.object,ke=ce.geometry,qe=F===null?ce.material:F,Be=ce.group;Ie.layers.test(q.layers)&&Vi(Ie,V,q,ke,qe,Be)}}function Vi(b,V,q,F,Y,xe){b.onBeforeRender(m,V,q,F,Y,xe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(m,V,q,F,b,xe),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,m.renderBufferDirect(q,V,F,Y,b,xe),Y.side=xi,Y.needsUpdate=!0,m.renderBufferDirect(q,V,F,Y,b,xe),Y.side=Qn):m.renderBufferDirect(q,V,F,Y,b,xe),b.onAfterRender(m,V,q,F,Y,xe)}function tn(b,V,q){V.isScene!==!0&&(V=ut);const F=Ve.get(b),Y=p.state.lights,xe=p.state.shadowsArray,ce=Y.state.version,Ie=j.getParameters(b,Y.state,xe,V,q),ke=j.getProgramCacheKey(Ie);let qe=F.programs;F.environment=b.isMeshStandardMaterial?V.environment:null,F.fog=V.fog,F.envMap=(b.isMeshStandardMaterial?ft:et).get(b.envMap||F.environment),qe===void 0&&(b.addEventListener("dispose",ve),qe=new Map,F.programs=qe);let Be=qe.get(ke);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===ce)return ki(b,Ie),Be}else Ie.uniforms=j.getUniforms(b),b.onBuild(q,Ie,m),b.onBeforeCompile(Ie,m),Be=j.acquireProgram(Ie,ke),qe.set(ke,Be),F.uniforms=Ie.uniforms;const He=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Ae.uniform),ki(b,Ie),F.needsLights=fn(b),F.lightsStateVersion=ce,F.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix);const lt=Be.getUniforms(),ct=ks.seqWithValue(lt.seq,He);return F.currentProgram=Be,F.uniformsList=ct,Be}function ki(b,V){const q=Ve.get(b);q.outputColorSpace=V.outputColorSpace,q.instancing=V.instancing,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Gi(b,V,q,F,Y){V.isScene!==!0&&(V=ut),ze.resetTextureUnits();const xe=V.fog,ce=F.isMeshStandardMaterial?V.environment:null,Ie=L===null?m.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Rn,ke=(F.isMeshStandardMaterial?ft:et).get(F.envMap||ce),qe=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),He=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color,Xt=F.toneMapped?m.toneMapping:wn,Ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=Ft!==void 0?Ft.length:0,Ze=Ve.get(F),hn=p.state.lights;if(ne===!0&&(ge===!0||b!==M)){const Ot=b===M&&F.id===P;Ae.setState(F,b,Ot)}let Tt=!1;F.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==hn.state.version||Ze.outputColorSpace!==Ie||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==ke||F.fog===!0&&Ze.fog!==xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ae.numPlanes||Ze.numIntersection!==Ae.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Be||Ze.morphTargets!==He||Ze.morphNormals!==lt||Ze.morphColors!==ct||Ze.toneMapping!==Xt||Xe.isWebGL2===!0&&Ze.morphTargetsCount!==dt)&&(Tt=!0):(Tt=!0,Ze.__version=F.version);let jt=Ze.currentProgram;Tt===!0&&(jt=tn(F,V,Y));let In=!1,Nn=!1,dn=!1;const Ct=jt.getUniforms(),qt=Ze.uniforms;if(Fe.useProgram(jt.program)&&(In=!0,Nn=!0,dn=!0),F.id!==P&&(P=F.id,Nn=!0),In||M!==b){if(Ct.setValue(O,"projectionMatrix",b.projectionMatrix),Xe.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,Nn=!0,dn=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Ot=Ct.map.cameraPosition;Ot!==void 0&&Ot.setValue(O,Le.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&Ct.setValue(O,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){Ct.setOptional(O,Y,"bindMatrix"),Ct.setOptional(O,Y,"bindMatrixInverse");const Ot=Y.skeleton;Ot&&(Xe.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ct.setValue(O,"boneTexture",Ot.boneTexture,ze),Ct.setValue(O,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xn=q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0&&Xe.isWebGL2===!0)&&ye.update(Y,q,jt),(Nn||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,Ct.setValue(O,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(qt.envMap.value=ke,qt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Nn&&(Ct.setValue(O,"toneMappingExposure",m.toneMappingExposure),Ze.needsLights&&Rr(qt,dn),xe&&F.fog===!0&&se.refreshFogUniforms(qt,xe),se.refreshMaterialUniforms(qt,F,z,Q,Me),ks.upload(O,Ze.uniformsList,qt,ze)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ks.upload(O,Ze.uniformsList,qt,ze),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ct.setValue(O,"center",Y.center),Ct.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Ct.setValue(O,"normalMatrix",Y.normalMatrix),Ct.setValue(O,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ot=F.uniformsGroups;for(let pn=0,Cr=Ot.length;pn<Cr;pn++)if(Xe.isWebGL2){const Fn=Ot[pn];je.update(Fn,jt),je.bind(Fn,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function Rr(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function fn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,V,q){Ve.get(b.texture).__webglTexture=V,Ve.get(b.depthTexture).__webglTexture=q;const F=Ve.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,V){const q=Ve.get(b);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,q=0){L=b,y=V,E=q;let F=!0,Y=null,xe=!1,ce=!1;if(b){const ke=Ve.get(b);ke.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(O.FRAMEBUFFER,null),F=!1):ke.__webglFramebuffer===void 0?ze.setupRenderTarget(b):ke.__hasExternalTextures&&ze.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ce=!0);const Be=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Be[V],xe=!0):Xe.isWebGL2&&b.samples>0&&ze.useMultisampledRTT(b)===!1?Y=Ve.get(b).__webglMultisampledFramebuffer:Y=Be,A.copy(b.viewport),I.copy(b.scissor),J=b.scissorTest}else A.copy(k).multiplyScalar(z).floor(),I.copy(re).multiplyScalar(z).floor(),J=N;if(Fe.bindFramebuffer(O.FRAMEBUFFER,Y)&&Xe.drawBuffers&&F&&Fe.drawBuffers(b,Y),Fe.viewport(A),Fe.scissor(I),Fe.setScissorTest(J),xe){const ke=Ve.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,q)}else if(ce){const ke=Ve.get(b.texture),qe=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,qe)}P=-1},this.readRenderTargetPixels=function(b,V,q,F,Y,xe,ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(Ie=Ie[ce]),Ie){Fe.bindFramebuffer(O.FRAMEBUFFER,Ie);try{const ke=b.texture,qe=ke.format,Be=ke.type;if(qe!==En&&Ee.convert(qe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===xr&&(Pe.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Be!==Ei&&Ee.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Mi&&(Xe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-F&&q>=0&&q<=b.height-Y&&O.readPixels(V,q,F,Y,Ee.convert(qe),Ee.convert(Be),xe)}finally{const ke=L!==null?Ve.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(b,V,q=0){const F=Math.pow(2,-q),Y=Math.floor(V.image.width*F),xe=Math.floor(V.image.height*F);ze.setTexture2D(V,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,b.x,b.y,Y,xe),Fe.unbindTexture()},this.copyTextureToTexture=function(b,V,q,F=0){const Y=V.image.width,xe=V.image.height,ce=Ee.convert(q.format),Ie=Ee.convert(q.type);ze.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,b.x,b.y,Y,xe,ce,Ie,V.image.data):V.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,b.x,b.y,V.mipmaps[0].width,V.mipmaps[0].height,ce,V.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,F,b.x,b.y,ce,Ie,V.image),F===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(b,V,q,F,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=b.max.x-b.min.x+1,ce=b.max.y-b.min.y+1,Ie=b.max.z-b.min.z+1,ke=Ee.convert(F.format),qe=Ee.convert(F.type);let Be;if(F.isData3DTexture)ze.setTexture3D(F,0),Be=O.TEXTURE_3D;else if(F.isDataArrayTexture)ze.setTexture2DArray(F,0),Be=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const He=O.getParameter(O.UNPACK_ROW_LENGTH),lt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ct=O.getParameter(O.UNPACK_SKIP_PIXELS),Xt=O.getParameter(O.UNPACK_SKIP_ROWS),Ft=O.getParameter(O.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[0]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(Be,Y,V.x,V.y,V.z,xe,ce,Ie,ke,qe,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Be,Y,V.x,V.y,V.z,xe,ce,Ie,ke,dt.data)):O.texSubImage3D(Be,Y,V.x,V.y,V.z,xe,ce,Ie,ke,qe,dt),O.pixelStorei(O.UNPACK_ROW_LENGTH,He),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft),Y===0&&F.generateMipmaps&&O.generateMipmap(Be),Fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ze.setTextureCube(b,0):b.isData3DTexture?ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ze.setTexture2DArray(b,0):ze.setTexture2D(b,0),Fe.unbindTexture()},this.resetState=function(){y=0,E=0,L=null,Fe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ye?ei:wo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?Ye:Rn}}class j_ extends Pu{}j_.prototype.isWebGL1Renderer=!0;class q_ extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zs extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Y_{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const _=c[d],v=c[d+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const K_=new Y_;class Lu{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Z_ extends Lu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Rc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ns("img");function l(){u(),Rc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Cc extends Lu{constructor(e){super(e)}load(e,t,i,r){const s=new zt,a=new Z_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Du extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lo=new yt,Pc=new W,Lc=new W;class J_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends J_{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}let $_=class extends Du{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},eg=class extends Du{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class Uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dc(){return(typeof performance>"u"?Date:performance).now()}class tg{constructor(e,t,i=0,r=1/0){this.ray=new mu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Eo(e,this,i,t),i.sort(Uc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eo(e[r],this,i,t);return i.sort(Uc),i}}function Uc(n,e){return n.distance-e.distance}function Eo(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Eo(r[s],e,t,!0)}}class co extends wr{constructor(e,t,i,r,s,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,i,r,s,a)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);const ng={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ig=new yu(-1,1,1,-1,0,1),Lo=new wi;Lo.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3));Lo.setAttribute("uv",new ti([0,2,0,0,2,0],2));class rg{constructor(e){this._mesh=new Tn(Lo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ig)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sg extends Zs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ni?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eu.clone(e.uniforms),this.material=new ni({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rg(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ic extends Zs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ag extends Zs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class og{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new nt);this._width=i.width,this._height=i.height,t=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sg(ng),this.clock=new Uu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ic!==void 0&&(a instanceof Ic?i=!0:a instanceof ag&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iu extends Zs{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const lg=(n,e,t)=>{n.renderer=new Pu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),n.composer=new og(n.renderer),n.composer.addPass(new Iu(n.scene,is(n.camera)))},Nc=(n,e,t)=>{n.renderer&&(e?n.renderer.outputEncoding=wo:n.renderer.outputEncoding=ei,t?n.renderer.toneMapping=wn:n.renderer.toneMapping=tu)},Fc=(n,e,t)=>{!n.renderer||!n.composer||(n.renderer.setSize(e.width,e.height),n.renderer.setPixelRatio(t),n.composer.setSize(e.width,e.height),n.composer.setPixelRatio(t))},Oc=(n,e,t)=>{n.renderer&&(n.renderer.shadowMap.enabled=e,n.renderer.shadowMap.type=t)},yn=n=>n.userData,cg=(n,e)=>{n.pointer.update(t=>n.renderer?t.set(e.offsetX/n.renderer.domElement.clientWidth*2-1,-(e.offsetY/n.renderer.domElement.clientHeight)*2+1):t)},Nu=(n,e,t,i)=>(n.raycaster.setFromCamera(e,t),n.raycaster.intersectObjects(i,!1)),ug=(n,e)=>n.object.uuid!==e.object.uuid||n.instanceId!==e.instanceId,fg=(n,e,t)=>{let i;const r=n.camera.subscribe(l=>i=l);Zt(r);let s;const a=n.pointer.subscribe(l=>s=l);Zt(a);const o=l=>{var u,d;if(l.preventDefault(),n.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,cg(n,l),e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=Nu(e,s,i,Array.from(e.raycastableObjects));c.length>0&&e.interactiveObjects.has(c[0].object)&&((d=(u=yn(c[0].object)).eventDispatcher)==null||d.call(u,l.type,{...c[0],event:l}))};return{onClick:o,onContextMenu:o,onPointerUp:o,onPointerDown:o,onPointerMove:o}},hg=(n,e)=>{let t=is(n.pointerOverCanvas);const i=n.pointerOverCanvas.subscribe(c=>t=c);Zt(i);let r;const s=n.camera.subscribe(c=>r=c);Zt(s);let a;const o=n.pointer.subscribe(c=>a=c);return Zt(o),{raycast:()=>{var d,f,_,v,g,p,h,S;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Nu(e,a,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&ug(e.lastIntersection,u)&&((p=(g=yn(e.lastIntersection.object)).eventDispatcher)==null||p.call(g,"pointerleave",e.lastIntersection),(S=(h=yn(u.object)).eventDispatcher)==null||S.call(h,"pointerenter",u)):(v=(_=yn(u.object)).eventDispatcher)==null||v.call(_,"pointerenter",u):e.lastIntersection&&((f=(d=yn(e.lastIntersection.object)).eventDispatcher)==null||f.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Bi=typeof window<"u",dg=n=>{if(!Bi)return;let e;const t=()=>{n(),e=requestAnimationFrame(t)};t(),Zt(()=>{e&&cancelAnimationFrame(e)})},pg=(n,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),i=n.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>(r.order??0)>(s.order??0)?1:-1).forEach(r=>r.fn(n,i)):e.frameHandlers.forEach(r=>r.fn(n,i))},mg=n=>{n.debugFrameloop&&(n.frame+=1,console.log(`frame: ${n.frame}${Object.keys(n.invalidations).length>0?", requested by ↴":""}`),Object.keys(n.invalidations).length>0&&console.table(n.invalidations),n.invalidations={})},_g=(n,e,t)=>{let i=is(n.camera);const r=n.camera.subscribe(a=>i=a);Zt(r);const{raycast:s}=hg(n,e);dg(()=>{const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(s(),t.pointerInvalidated=!1),a&&(!i||!n.composer||!n.renderer||(pg(n,t),n.composer.passes.length>1?n.composer.render():n.renderer.render(n.scene,i),mg(t),t.frameInvalidated=!1,t.advance=!1))})},gg=()=>{const n=new $t(75,0,.1,1e3);return yn(n).threlteDefaultCamera=!0,n.position.z=5,n.lookAt(0,0,0),n},vg=n=>{const e=n.size.subscribe(t=>{yn(is(n.camera)).threlteDefaultCamera&&n.camera.update(i=>{const r=i;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),n.invalidate("Default camera: aspect ratio changed"),r})});Zt(e)},Mg=(n,e,t,i,r,s,a)=>{const o={audioListeners:new Map,addAudioListener:(g,p)=>{if(p=p??"default",o.audioListeners.has(p)){console.warn(`An AudioListener with the id "${p}" has already been added, aborting.`);return}o.audioListeners.set(p,g)},removeAudioListener:g=>{if(g=g??"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}o.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return o.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Xu([i,r],([g,p])=>g||p),pointer:an(new nt),pointerOverCanvas:an(!1),clock:new Uu,camera:an(gg()),scene:new q_,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:an(e),linear:an(n),dpr:an(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(p=>{p instanceof Iu&&(p.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new tg,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{c.composer&&(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{c.composer&&(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}};return pr("threlte",c),pr("threlte-root",u),pr("threlte-render-context",l),pr("threlte-audio-context",o),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o}},Sg=()=>{const n=an({width:0,height:0});let e={width:0,height:0};const t=n.subscribe(a=>e=a);Zt(t);let i;const r=()=>{const a=e;if(!i||!i.parentElement)return;const{clientWidth:o,clientHeight:l}=i.parentElement;(o!==a.width||l!==a.height)&&n.set({width:o,height:l})},s=a=>{i=a,r(),window.addEventListener("resize",r)};return Bi?(Zt(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:n}):{parentSize:n,parentSizeAction:s}};function Bc(n){let e;const t=n[30].default,i=Cn(t,n,n[29],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&536870912)&&Pn(i,t,r,r[29],e?Dn(t,r[29],s,null):Ln(r[29]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Eg(n){let e,t,i,r,s=n[1]&&Bc(n);return{c(){e=$("canvas"),s&&s.c(),this.h()},l(a){e=ee(a,"CANVAS",{class:!0});var o=he(e);s&&s.l(o),o.forEach(ie),this.h()},h(){te(e,"class","svelte-15bl8wt")},m(a,o){St(a,e,o),s&&s.m(e,null),n[31](e),t=!0,i||(r=[ku(n[2].call(null,e)),Re(e,"click",n[8]),Re(e,"contextmenu",n[9]),Re(e,"pointerup",n[12]),Re(e,"pointerdown",n[10]),Re(e,"pointermove",n[11]),Re(e,"pointerenter",n[32]),Re(e,"pointerleave",n[33])],i=!0)},p(a,o){a[1]?s?(s.p(a,o),o[0]&2&&Ue(s,1)):(s=Bc(a),s.c(),Ue(s,1),s.m(e,null)):s&&(mr(),Ge(s,1,1,()=>{s=null}),_r())},i(a){t||(Ue(s),t=!0)},o(a){Ge(s),t=!1},d(a){a&&ie(e),s&&s.d(),n[31](null),i=!1,Xs(r)}}}const xo=new Set,xg=n=>{xo.forEach(e=>e(n))};function bg(n,e,t){let i,r,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Bi?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:d=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:_=!1}=e,{shadows:v=!0}=e,{shadowMapType:g=Jc}=e,{size:p=void 0}=e,{rendererParameters:h=void 0}=e,S,m=!1;const T=an(p),{parentSize:y,parentSizeAction:E}=Sg(),L=Mg(d,u,c,T,y,_,f),{getCtx:P,getRootCtx:M,getRenderCtx:A,renderCtx:I}=L,{ctx:J,rootCtx:D,audioCtx:G}=L;vg(J),xo.add(J.invalidate),Zt(()=>{xo.delete(J.invalidate)});const{size:B,scene:Q}=J;Bt(n,B,ue=>t(26,r=ue));const{flat:z,linear:H,dpr:R}=D;Bt(n,z,ue=>t(27,s=ue)),Bt(n,H,ue=>t(28,a=ue)),Bt(n,R,ue=>t(25,i=ue)),pr("threlte-parent",an(Q)),Gu(()=>{S&&(lg(J,S,h),Nc(J,a,s),Fc(J,r,i),Oc(J,v,g),t(1,m=!0))}),_g(J,D,I);const{onClick:k,onContextMenu:re,onPointerDown:N,onPointerMove:K,onPointerUp:ne}=fg(J,D,I);function ge(ue){ii[ue?"unshift":"push"](()=>{S=ue,t(0,S)})}const Me=()=>P().pointerOverCanvas.set(!0),we=()=>P().pointerOverCanvas.set(!1);return n.$$set=ue=>{"dpr"in ue&&t(13,c=ue.dpr),"flat"in ue&&t(14,u=ue.flat),"linear"in ue&&t(15,d=ue.linear),"frameloop"in ue&&t(16,f=ue.frameloop),"debugFrameloop"in ue&&t(17,_=ue.debugFrameloop),"shadows"in ue&&t(18,v=ue.shadows),"shadowMapType"in ue&&t(19,g=ue.shadowMapType),"size"in ue&&t(20,p=ue.size),"rendererParameters"in ue&&t(21,h=ue.rendererParameters),"$$scope"in ue&&t(29,l=ue.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&1048576&&T.set(p),n.$$.dirty[0]&32768&&Vs(H,a=d,a),n.$$.dirty[0]&16384&&Vs(z,s=u,s),n.$$.dirty[0]&8192&&Vs(R,i=c,i),n.$$.dirty[0]&402653184&&Nc(P(),a,s),n.$$.dirty[0]&100663296&&Fc(P(),r,i),n.$$.dirty[0]&786432&&Oc(P(),v,g)},[S,m,E,P,B,z,H,R,k,re,N,K,ne,c,u,d,f,_,v,g,p,h,J,D,G,i,r,s,a,l,o,ge,Me,we]}class Tg extends Gt{constructor(e){super(),Ht(this,e,bg,Eg,Wt,{dpr:13,flat:14,linear:15,frameloop:16,debugFrameloop:17,shadows:18,shadowMapType:19,size:20,rendererParameters:21,ctx:22,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[22]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Un=()=>rs("threlte"),Js=()=>rs("threlte-root"),Do=n=>{const e=an(n);let t=n;const i=e.subscribe(s=>t=s);return Zt(i),{...e,set:s=>{s.uuid!==t.uuid&&e.set(s)}}};function yg(n){let e;const t=n[8].default,i=Cn(t,n,n[7],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&128)&&Pn(i,t,r,r[7],e?Dn(t,r[7],s,null):Ln(r[7]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}const wg=n=>{pr("threlte-parent",n)},Ag=()=>rs("threlte-parent");function Rg(n,e,t){let i,r,{$$slots:s={},$$scope:a}=e;const o=Ag();Bt(n,o,_=>t(6,r=_));let l=r,{object:c}=e;const u=an(c);Bt(n,u,_=>t(5,i=_));let d=c;wg(u);const{invalidate:f}=Un();return r.add(i),f("HierarchicalObject: object added"),Zt(()=>{r.remove(i),f("HierarchicalObject: object removed")}),n.$$set=_=>{"object"in _&&t(2,c=_.object),"$$scope"in _&&t(7,a=_.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&Vs(u,i=c,i),n.$$.dirty&112&&i!==d&&(d&&r.remove(d),r.add(i),f("HierarchicalObject: object changed"),t(4,d=i)),n.$$.dirty&104&&r!==l&&(l.remove(i),r.add(i),f("HierarchicalObject: parent changed"),t(3,l=r))},[o,u,c,l,d,i,r,a,s]}class Fu extends Gt{constructor(e){super(),Ht(this,e,Rg,yg,Wt,{object:2})}}function Cg(n,e,t){let i,r,{object:s}=e;const a=Do(s);Bt(n,a,c=>t(4,r=c));const o=rs("threlte-layers");Bt(n,o,c=>t(3,i=c));const{invalidate:l}=Un();return n.$$set=c=>{"object"in c&&t(2,s=c.object)},n.$$.update=()=>{if(n.$$.dirty&4&&a.set(s),n.$$.dirty&24){if(i==="all")r.layers.enableAll();else if(i==="none")r.layers.disableAll();else if(Array.isArray(i))for(let c=0;c<32;c+=1){const u=c;i.includes(u)?r.layers.enable(c):r.layers.disable(c)}else i!==void 0&&r.layers.set(i);l("LayerableObject")}},[a,o,s,i,r]}class Pg extends Gt{constructor(e){super(),Ht(this,e,Cg,null,Wt,{object:2})}}const Uo=(n,e)=>{if(!Bi)return{start:()=>{},stop:()=>{},started:ju(!1)};const t=rs("threlte-render-context"),i={fn:n,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=an(!1),s=()=>{t.frameHandlers.delete(i),r.set(!1)},a=()=>{t.frameHandlers.add(i),r.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),Zt(()=>{s()}),{start:a,stop:s,started:{subscribe:r.subscribe}}},Ou=()=>{const n=an(!1);return(async()=>{await Gs(),n.set(!0)})(),n};function Lg(n,e,t){let i,r,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new W,d=bo(),{invalidate:f}=Un(),_=Ou();Bt(n,_,m=>t(8,r=m));const v=async()=>{r||await Gs(),d("transform")},g=async()=>{f("TransformableObject: transformed"),await v()};yn(s).onTransform=g;const{start:p,stop:h}=Uo(async()=>{c&&!l&&c instanceof xt&&(c.getWorldPosition(u),s.lookAt(u),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),S=Do(s);return Bt(n,S,m=>t(7,i=m)),n.$$set=m=>{"object"in m&&t(2,s=m.object),"position"in m&&t(3,a=m.position),"scale"in m&&t(4,o=m.scale),"rotation"in m&&t(5,l=m.rotation),"lookAt"in m&&t(6,c=m.lookAt)},n.$$.update=()=>{n.$$.dirty&4&&S.set(s),n.$$.dirty&232&&(a&&(i.position.set(a.x??0,a.y??0,a.z??0),g()),c&&!l&&(c instanceof xt?p():(h(),i.lookAt(c.x??0,c.y??0,c.z??0),g())),c||h()),n.$$.dirty&144&&o&&(typeof o=="number"?i.scale.set(o,o,o):i.scale.set(o.x??1,o.y??1,o.z??1),g()),n.$$.dirty&160&&l&&(i.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),g())},[_,S,s,a,o,l,c,i]}class Bu extends Gt{constructor(e){super(),Ht(this,e,Lg,null,Wt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Dg(n,e,t){let i,r,s,{object:a}=e,{viewportAware:o=!1}=e;const l=bo(),{camera:c,invalidate:u}=Un();Bt(n,c,E=>t(8,s=E));const d=new Ys,f=new yt,_=E=>E.type==="Mesh",v=new W,g=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(f),_(a)?d.intersectsObject(a):(a.getWorldPosition(v),d.containsPoint(v))):!0,p=Ou();Bt(n,p,E=>t(7,r=E));let{inViewport:h=g()}=e;const S=async E=>{E?(r||await Gs(),l("viewportenter",a)):(r||await Gs(),l("viewportleave",a))},{start:m,stop:T,started:y}=Uo(()=>{const E=g();h===void 0?(t(3,h=g()),S(h)):E!==h&&(S(E),t(3,h=E))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Bt(n,y,E=>t(6,i=E)),u("ViewportAwareObject"),n.$$set=E=>{"object"in E&&t(4,a=E.object),"viewportAware"in E&&t(5,o=E.viewportAware),"inViewport"in E&&t(3,h=E.inViewport)},n.$$.update=()=>{n.$$.dirty&96&&(o&&!i?m():!o&&i&&T())},[c,p,y,h,a,o,i]}class Ug extends Gt{constructor(e){super(),Ht(this,e,Dg,null,Wt,{object:4,viewportAware:5,inViewport:3})}}function Ig(n){let e;const t=n[12].default,i=Cn(t,n,n[16],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&65536)&&Pn(i,t,r,r[16],e?Dn(t,r[16],s,null):Ln(r[16]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Ng(n){let e,t,i,r,s,a,o,l,c;e=new Pg({props:{object:n[1]}}),i=new Bu({props:{object:n[1],position:n[2],rotation:n[4],scale:n[3],lookAt:n[5]}}),s=new Fu({props:{object:n[1],$$slots:{default:[Ig]},$$scope:{ctx:n}}});function u(f){n[13](f)}let d={object:n[1],viewportAware:n[6]};return n[0]!==void 0&&(d.inViewport=n[0]),o=new Ug({props:d}),ii.push(()=>Ti(o,"inViewport",u)),o.$on("viewportenter",n[14]),o.$on("viewportleave",n[15]),{c(){_t(e.$$.fragment),t=pe(),_t(i.$$.fragment),r=pe(),_t(s.$$.fragment),a=pe(),_t(o.$$.fragment)},l(f){gt(e.$$.fragment,f),t=me(f),gt(i.$$.fragment,f),r=me(f),gt(s.$$.fragment,f),a=me(f),gt(o.$$.fragment,f)},m(f,_){vt(e,f,_),St(f,t,_),vt(i,f,_),St(f,r,_),vt(s,f,_),St(f,a,_),vt(o,f,_),c=!0},p(f,[_]){const v={};_&2&&(v.object=f[1]),e.$set(v);const g={};_&2&&(g.object=f[1]),_&4&&(g.position=f[2]),_&16&&(g.rotation=f[4]),_&8&&(g.scale=f[3]),_&32&&(g.lookAt=f[5]),i.$set(g);const p={};_&2&&(p.object=f[1]),_&65536&&(p.$$scope={dirty:_,ctx:f}),s.$set(p);const h={};_&2&&(h.object=f[1]),_&64&&(h.viewportAware=f[6]),!l&&_&1&&(l=!0,h.inViewport=f[0],yi(()=>l=!1)),o.$set(h)},i(f){c||(Ue(e.$$.fragment,f),Ue(i.$$.fragment,f),Ue(s.$$.fragment,f),Ue(o.$$.fragment,f),c=!0)},o(f){Ge(e.$$.fragment,f),Ge(i.$$.fragment,f),Ge(s.$$.fragment,f),Ge(o.$$.fragment,f),c=!1},d(f){Mt(e,f),f&&ie(t),Mt(i,f),f&&ie(r),Mt(s,f),f&&ie(a),Mt(o,f)}}}function Fg(n,e,t){let{$$slots:i={},$$scope:r}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:d=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:p=void 0}=e;const{invalidate:h}=Un(),S=()=>s;function m(E){d=E,t(0,d)}function T(E){ot.call(this,n,E)}function y(E){ot.call(this,n,E)}return n.$$set=E=>{"object"in E&&t(1,s=E.object),"position"in E&&t(2,a=E.position),"scale"in E&&t(3,o=E.scale),"rotation"in E&&t(4,l=E.rotation),"lookAt"in E&&t(5,c=E.lookAt),"viewportAware"in E&&t(6,u=E.viewportAware),"inViewport"in E&&t(0,d=E.inViewport),"castShadow"in E&&t(7,f=E.castShadow),"receiveShadow"in E&&t(8,_=E.receiveShadow),"frustumCulled"in E&&t(9,v=E.frustumCulled),"renderOrder"in E&&t(10,g=E.renderOrder),"visible"in E&&t(11,p=E.visible),"$$scope"in E&&t(16,r=E.$$scope)},n.$$.update=()=>{n.$$.dirty&3968&&(p!==void 0&&(S().visible=p),f!==void 0&&(S().castShadow=f),_!==void 0&&(S().receiveShadow=_),v!==void 0&&(S().frustumCulled=v),g!==void 0&&(S().renderOrder=g),h("Object3DInstance: props changed"))},[d,s,a,o,l,c,u,f,_,v,g,p,i,m,T,y,r]}class Io extends Gt{constructor(e){super(),Ht(this,e,Fg,Ng,Wt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11})}}function Og(n){let e;const t=n[15].default,i=Cn(t,n,n[19],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&524288)&&Pn(i,t,r,r[19],e?Dn(t,r[19],s,null):Ln(r[19]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Bg(n){let e,t,i;function r(a){n[16](a)}let s={object:n[1],lookAt:n[5],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],position:n[2],scale:n[3],rotation:n[4],viewportAware:n[6],visible:n[11],$$slots:{default:[Og]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new Io({props:s}),ii.push(()=>Ti(e,"inViewport",r)),e.$on("viewportenter",n[17]),e.$on("viewportleave",n[18]),{c(){_t(e.$$.fragment)},l(a){gt(e.$$.fragment,a)},m(a,o){vt(e,a,o),i=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&524288&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],yi(()=>t=!1)),e.$set(l)},i(a){i||(Ue(e.$$.fragment,a),i=!0)},o(a){Ge(e.$$.fragment,a),i=!1},d(a){Mt(e,a)}}}function zg(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:d=!1}=e,{inViewport:f=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{useCamera:S=!1}=e;const m=Do(a);Bt(n,m,P=>t(14,i=P));const{setCamera:T}=Js();function y(P){f=P,t(0,f)}function E(P){ot.call(this,n,P)}function L(P){ot.call(this,n,P)}return n.$$set=P=>{"camera"in P&&t(1,a=P.camera),"position"in P&&t(2,o=P.position),"scale"in P&&t(3,l=P.scale),"rotation"in P&&t(4,c=P.rotation),"lookAt"in P&&t(5,u=P.lookAt),"viewportAware"in P&&t(6,d=P.viewportAware),"inViewport"in P&&t(0,f=P.inViewport),"castShadow"in P&&t(7,_=P.castShadow),"receiveShadow"in P&&t(8,v=P.receiveShadow),"frustumCulled"in P&&t(9,g=P.frustumCulled),"renderOrder"in P&&t(10,p=P.renderOrder),"visible"in P&&t(11,h=P.visible),"useCamera"in P&&t(13,S=P.useCamera),"$$scope"in P&&t(19,s=P.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&m.set(a),n.$$.dirty&24576&&S&&T(i)},[f,a,o,l,c,u,d,_,v,g,p,h,m,S,i,r,y,E,L,s]}class Vg extends Gt{constructor(e){super(),Ht(this,e,zg,Bg,Wt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:13})}}function kg(n){let e;const t=n[18].default,i=Cn(t,n,n[22],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4194304)&&Pn(i,t,r,r[22],e?Dn(t,r[22],s,null):Ln(r[22]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Gg(n){let e,t,i;function r(a){n[19](a)}let s={camera:n[0],position:n[2],scale:n[3],rotation:n[4],castShadow:n[6],receiveShadow:n[7],frustumCulled:n[8],renderOrder:n[9],visible:n[10],viewportAware:n[11],lookAt:n[5],useCamera:n[12],$$slots:{default:[kg]},$$scope:{ctx:n}};return n[1]!==void 0&&(s.inViewport=n[1]),e=new Vg({props:s}),ii.push(()=>Ti(e,"inViewport",r)),e.$on("viewportenter",n[20]),e.$on("viewportleave",n[21]),{c(){_t(e.$$.fragment)},l(a){gt(e.$$.fragment,a)},m(a,o){vt(e,a,o),i=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.viewportAware=a[11]),o&32&&(l.lookAt=a[5]),o&4096&&(l.useCamera=a[12]),o&4194304&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],yi(()=>t=!1)),e.$set(l)},i(a){i||(Ue(e.$$.fragment,a),i=!0)},o(a){Ge(e.$$.fragment,a),i=!1},d(a){Mt(e,a)}}}function Hg(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{viewportAware:g=!1}=e,{inViewport:p=!1}=e,{useCamera:h=!0}=e,{near:S=void 0}=e,{far:m=void 0}=e,{fov:T=void 0}=e;const{size:y,invalidate:E}=Un();Bt(n,y,I=>t(17,i=I));const L=new $t(T,i.width/i.height,S,m);function P(I){p=I,t(1,p)}function M(I){ot.call(this,n,I)}function A(I){ot.call(this,n,I)}return n.$$set=I=>{"position"in I&&t(2,a=I.position),"scale"in I&&t(3,o=I.scale),"rotation"in I&&t(4,l=I.rotation),"lookAt"in I&&t(5,c=I.lookAt),"castShadow"in I&&t(6,u=I.castShadow),"receiveShadow"in I&&t(7,d=I.receiveShadow),"frustumCulled"in I&&t(8,f=I.frustumCulled),"renderOrder"in I&&t(9,_=I.renderOrder),"visible"in I&&t(10,v=I.visible),"viewportAware"in I&&t(11,g=I.viewportAware),"inViewport"in I&&t(1,p=I.inViewport),"useCamera"in I&&t(12,h=I.useCamera),"near"in I&&t(14,S=I.near),"far"in I&&t(15,m=I.far),"fov"in I&&t(16,T=I.fov),"$$scope"in I&&t(22,s=I.$$scope)},n.$$.update=()=>{n.$$.dirty&131073&&(t(0,L.aspect=i.width/i.height,L),L.updateProjectionMatrix(),E("PerspectiveCamera: aspect changed")),n.$$.dirty&114689&&(S!==void 0&&t(0,L.near=S,L),m!==void 0&&t(0,L.far=m,L),T!==void 0&&t(0,L.fov=T,L),L.updateProjectionMatrix(),E("PerspectiveCamera: props changed"))},[L,p,a,o,l,c,u,d,f,_,v,g,h,y,S,m,T,i,r,P,M,A,s]}class Wg extends Gt{constructor(e){super(),Ht(this,e,Hg,Gg,Wt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,viewportAware:11,inViewport:1,useCamera:12,near:14,far:15,fov:16,camera:0})}get camera(){return this.$$.ctx[0]}}const zc=[],Xg=(n,e)=>{const t=zc.find(r=>r instanceof n);if(t)return t;const i=e();return zc.push(i),i},jg=(n,e)=>e?new tt(n):new tt().setHex(new tt(n).getHex()).convertSRGBToLinear();function qg(n){let e;const t=n[16].default,i=Cn(t,n,n[20],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&1048576)&&Pn(i,t,r,r[20],e?Dn(t,r[20],s,null):Ln(r[20]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Yg(n){let e,t,i;function r(a){n[17](a)}let s={object:n[0],lookAt:n[5],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],position:n[2],scale:n[3],rotation:n[4],viewportAware:n[6],visible:n[11],$$slots:{default:[qg]},$$scope:{ctx:n}};return n[1]!==void 0&&(s.inViewport=n[1]),e=new Io({props:s}),ii.push(()=>Ti(e,"inViewport",r)),e.$on("viewportenter",n[18]),e.$on("viewportleave",n[19]),{c(){_t(e.$$.fragment)},l(a){gt(e.$$.fragment,a)},m(a,o){vt(e,a,o),i=!0},p(a,[o]){const l={};o&1&&(l.object=a[0]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&1048576&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],yi(()=>t=!1)),e.$set(l)},i(a){i||(Ue(e.$$.fragment,a),i=!0)},o(a){Ge(e.$$.fragment,a),i=!1},d(a){Mt(e,a)}}}function Kg(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{light:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:d=!1}=e,{inViewport:f=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{color:S=void 0}=e,{intensity:m=void 0}=e;const{invalidate:T}=Un(),{linear:y}=Js();Bt(n,y,M=>t(15,i=M));function E(M){f=M,t(1,f)}function L(M){ot.call(this,n,M)}function P(M){ot.call(this,n,M)}return n.$$set=M=>{"light"in M&&t(0,a=M.light),"position"in M&&t(2,o=M.position),"scale"in M&&t(3,l=M.scale),"rotation"in M&&t(4,c=M.rotation),"lookAt"in M&&t(5,u=M.lookAt),"viewportAware"in M&&t(6,d=M.viewportAware),"inViewport"in M&&t(1,f=M.inViewport),"castShadow"in M&&t(7,_=M.castShadow),"receiveShadow"in M&&t(8,v=M.receiveShadow),"frustumCulled"in M&&t(9,g=M.frustumCulled),"renderOrder"in M&&t(10,p=M.renderOrder),"visible"in M&&t(11,h=M.visible),"color"in M&&t(13,S=M.color),"intensity"in M&&t(14,m=M.intensity),"$$scope"in M&&t(20,s=M.$$scope)},n.$$.update=()=>{n.$$.dirty&57344&&(m!==void 0&&t(0,a.intensity=m,a),S!==void 0&&t(0,a.color=jg(S,i),a),T("LightInstance: props changed"))},[a,f,o,l,c,u,d,_,v,g,p,h,y,S,m,i,r,E,L,P,s]}class zu extends Gt{constructor(e){super(),Ht(this,e,Kg,Yg,Wt,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,color:13,intensity:14})}}function Zg(n){let e;const t=n[14].default,i=Cn(t,n,n[18],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&262144)&&Pn(i,t,r,r[18],e?Dn(t,r[18],s,null):Ln(r[18]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function Jg(n){let e,t,i;function r(a){n[15](a)}let s={light:n[13],lookAt:n[4],position:n[1],scale:n[2],rotation:n[3],castShadow:n[5],receiveShadow:n[6],frustumCulled:n[7],renderOrder:n[8],visible:n[9],viewportAware:n[10],color:n[11],intensity:n[12],$$slots:{default:[Zg]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new zu({props:s}),ii.push(()=>Ti(e,"inViewport",r)),e.$on("viewportenter",n[16]),e.$on("viewportleave",n[17]),{c(){_t(e.$$.fragment)},l(a){gt(e.$$.fragment,a)},m(a,o){vt(e,a,o),i=!0},p(a,[o]){const l={};o&16&&(l.lookAt=a[4]),o&2&&(l.position=a[1]),o&4&&(l.scale=a[2]),o&8&&(l.rotation=a[3]),o&32&&(l.castShadow=a[5]),o&64&&(l.receiveShadow=a[6]),o&128&&(l.frustumCulled=a[7]),o&256&&(l.renderOrder=a[8]),o&512&&(l.visible=a[9]),o&1024&&(l.viewportAware=a[10]),o&2048&&(l.color=a[11]),o&4096&&(l.intensity=a[12]),o&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],yi(()=>t=!1)),e.$set(l)},i(a){i||(Ue(e.$$.fragment,a),i=!0)},o(a){Ge(e.$$.fragment,a),i=!1},d(a){Mt(e,a)}}}function Qg(n,e,t){let{$$slots:i={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:f=void 0}=e,{visible:_=void 0}=e,{viewportAware:v=!1}=e,{inViewport:g=!1}=e,{color:p=void 0}=e,{intensity:h=void 0}=e;const S=new eg(p,h);function m(E){g=E,t(0,g)}function T(E){ot.call(this,n,E)}function y(E){ot.call(this,n,E)}return n.$$set=E=>{"position"in E&&t(1,s=E.position),"scale"in E&&t(2,a=E.scale),"rotation"in E&&t(3,o=E.rotation),"lookAt"in E&&t(4,l=E.lookAt),"castShadow"in E&&t(5,c=E.castShadow),"receiveShadow"in E&&t(6,u=E.receiveShadow),"frustumCulled"in E&&t(7,d=E.frustumCulled),"renderOrder"in E&&t(8,f=E.renderOrder),"visible"in E&&t(9,_=E.visible),"viewportAware"in E&&t(10,v=E.viewportAware),"inViewport"in E&&t(0,g=E.inViewport),"color"in E&&t(11,p=E.color),"intensity"in E&&t(12,h=E.intensity),"$$scope"in E&&t(18,r=E.$$scope)},[g,s,a,o,l,c,u,d,f,_,v,p,h,S,i,m,T,y,r]}class $g extends Gt{constructor(e){super(),Ht(this,e,Qg,Jg,Wt,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,viewportAware:10,inViewport:0,color:11,intensity:12,light:13})}get light(){return this.$$.ctx[13]}}function Vc(n){let e,t,i,r;return e=new Fu({props:{object:n[14]}}),i=new Bu({props:{object:n[14],position:n[12]}}),{c(){_t(e.$$.fragment),t=pe(),_t(i.$$.fragment)},l(s){gt(e.$$.fragment,s),t=me(s),gt(i.$$.fragment,s)},m(s,a){vt(e,s,a),St(s,t,a),vt(i,s,a),r=!0},p(s,a){const o={};a[0]&4096&&(o.position=s[12]),i.$set(o)},i(s){r||(Ue(e.$$.fragment,s),Ue(i.$$.fragment,s),r=!0)},o(s){Ge(e.$$.fragment,s),Ge(i.$$.fragment,s),r=!1},d(s){Mt(e,s),s&&ie(t),Mt(i,s)}}}function ev(n){let e;const t=n[21].default,i=Cn(t,n,n[25],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&33554432)&&Pn(i,t,r,r[25],e?Dn(t,r[25],s,null):Ln(r[25]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function tv(n){let e,t,i,r,s=n[12]&&!(n[12]instanceof xt)&&Vc(n);function a(l){n[22](l)}let o={light:n[1],position:n[2],scale:n[3],rotation:n[4],castShadow:!!n[13],receiveShadow:n[7],frustumCulled:n[6],renderOrder:n[8],visible:n[9],viewportAware:n[5],color:n[10],intensity:n[11],$$slots:{default:[ev]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.inViewport=n[0]),t=new zu({props:o}),ii.push(()=>Ti(t,"inViewport",a)),t.$on("viewportenter",n[23]),t.$on("viewportleave",n[24]),{c(){s&&s.c(),e=pe(),_t(t.$$.fragment)},l(l){s&&s.l(l),e=me(l),gt(t.$$.fragment,l)},m(l,c){s&&s.m(l,c),St(l,e,c),vt(t,l,c),r=!0},p(l,c){l[12]&&!(l[12]instanceof xt)?s?(s.p(l,c),c[0]&4096&&Ue(s,1)):(s=Vc(l),s.c(),Ue(s,1),s.m(e.parentNode,e)):s&&(mr(),Ge(s,1,1,()=>{s=null}),_r());const u={};c[0]&2&&(u.light=l[1]),c[0]&4&&(u.position=l[2]),c[0]&8&&(u.scale=l[3]),c[0]&16&&(u.rotation=l[4]),c[0]&8192&&(u.castShadow=!!l[13]),c[0]&128&&(u.receiveShadow=l[7]),c[0]&64&&(u.frustumCulled=l[6]),c[0]&256&&(u.renderOrder=l[8]),c[0]&512&&(u.visible=l[9]),c[0]&32&&(u.viewportAware=l[5]),c[0]&1024&&(u.color=l[10]),c[0]&2048&&(u.intensity=l[11]),c[0]&33554432&&(u.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,u.inViewport=l[0],yi(()=>i=!1)),t.$set(u)},i(l){r||(Ue(s),Ue(t.$$.fragment,l),r=!0)},o(l){Ge(s),Ge(t.$$.fragment,l),r=!1},d(l){s&&s.d(l),l&&ie(e),Mt(t,l)}}}function nv(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{frustumCulled:d=void 0}=e,{receiveShadow:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{color:g=void 0}=e,{intensity:p=void 0}=e,{angle:h=void 0}=e,{decay:S=void 0}=e,{distance:m=void 0}=e,{penumbra:T=void 0}=e,{power:y=void 0}=e,{target:E=void 0}=e,{shadow:L=void 0}=e;const{invalidate:P}=Un(),M=new $_(g,p),A=M.target,{start:I,stop:J,started:D}=Uo(()=>{},{autostart:!1,debugFrameloopMessage:"SpotLight: tracking target"});Bt(n,D,R=>t(26,i=R));const G=R=>{R&&R instanceof xt&&!i?(t(1,M.target=R,M),I(),P("SpotLight: target changed")):(!R||!(R instanceof xt))&&i&&(t(1,M.target=A,M),J(),P("SpotLight: target changed"))},B=R=>{if(R){const{mapSize:k=[512,512],camera:{near:re=.5,far:N=500}={},bias:K=0,radius:ne=1}=R===!0?{}:R;M.shadow.mapSize.set(k[0],k[1]),t(1,M.shadow.camera.near=re,M),t(1,M.shadow.camera.far=N,M),t(1,M.shadow.bias=K,M),t(1,M.shadow.radius=ne,M)}P("SpotLight: shadow changed")};function Q(R){u=R,t(0,u)}function z(R){ot.call(this,n,R)}function H(R){ot.call(this,n,R)}return n.$$set=R=>{"position"in R&&t(2,a=R.position),"scale"in R&&t(3,o=R.scale),"rotation"in R&&t(4,l=R.rotation),"viewportAware"in R&&t(5,c=R.viewportAware),"inViewport"in R&&t(0,u=R.inViewport),"frustumCulled"in R&&t(6,d=R.frustumCulled),"receiveShadow"in R&&t(7,f=R.receiveShadow),"renderOrder"in R&&t(8,_=R.renderOrder),"visible"in R&&t(9,v=R.visible),"color"in R&&t(10,g=R.color),"intensity"in R&&t(11,p=R.intensity),"angle"in R&&t(16,h=R.angle),"decay"in R&&t(17,S=R.decay),"distance"in R&&t(18,m=R.distance),"penumbra"in R&&t(19,T=R.penumbra),"power"in R&&t(20,y=R.power),"target"in R&&t(12,E=R.target),"shadow"in R&&t(13,L=R.shadow),"$$scope"in R&&t(25,s=R.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&4096&&G(E),n.$$.dirty[0]&8192&&B(L),n.$$.dirty[0]&2031616&&(m!==void 0&&t(1,M.distance=m,M),S!==void 0&&t(1,M.decay=S,M),h!==void 0&&t(1,M.angle=h,M),T!==void 0&&t(1,M.penumbra=T,M),y!==void 0&&t(1,M.power=y,M),P("SpotLight: props changed"))},[u,M,a,o,l,c,d,f,_,v,g,p,E,L,A,D,h,S,m,T,y,r,Q,z,H,s]}class Qs extends Gt{constructor(e){super(),Ht(this,e,nv,tv,Wt,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:0,frustumCulled:6,receiveShadow:7,renderOrder:8,visible:9,color:10,intensity:11,angle:16,decay:17,distance:18,penumbra:19,power:20,target:12,shadow:13,light:1},null,[-1,-1])}get light(){return this.$$.ctx[1]}}function iv(n,e,t){let{object:i}=e,r=i,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=bo(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:d}=Js(),{invalidate:f}=Un(),_=g=>{d(g),c(g),delete yn(g).eventDispatcher},v=(g,p,h)=>{yn(g).eventDispatcher=o,p?(d(g),c(g)):(u(g),h?l(g):c(g))};return Zt(()=>{_(i),f("InteractiveObject: object removed")}),n.$$set=g=>{"object"in g&&t(0,i=g.object),"interactive"in g&&t(1,s=g.interactive),"ignorePointer"in g&&t(2,a=g.ignorePointer)},n.$$.update=()=>{n.$$.dirty&15&&(i!==r?(_(r),v(i,a,s),f("InteractiveObject: object changed"),t(3,r=i)):i===r&&(v(i,a,s),f("InteractiveObject: props changed")))},[i,s,a,r]}class rv extends Gt{constructor(e){super(),Ht(this,e,iv,null,Wt,{object:0,interactive:1,ignorePointer:2})}}function sv(n){let e;const t=n[14].default,i=Cn(t,n,n[25],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&33554432)&&Pn(i,t,r,r[25],e?Dn(t,r[25],s,null):Ln(r[25]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function av(n){let e,t,i,r,s;function a(l){n[15](l)}let o={object:n[1],lookAt:n[5],position:n[2],scale:n[3],rotation:n[4],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],visible:n[11],viewportAware:n[6],$$slots:{default:[sv]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.inViewport=n[0]),e=new Io({props:o}),ii.push(()=>Ti(e,"inViewport",a)),e.$on("viewportenter",n[16]),e.$on("viewportleave",n[17]),r=new rv({props:{object:n[1],interactive:n[12],ignorePointer:n[13]}}),r.$on("click",n[18]),r.$on("contextmenu",n[19]),r.$on("pointerup",n[20]),r.$on("pointerdown",n[21]),r.$on("pointerenter",n[22]),r.$on("pointerleave",n[23]),r.$on("pointermove",n[24]),{c(){_t(e.$$.fragment),i=pe(),_t(r.$$.fragment)},l(l){gt(e.$$.fragment,l),i=me(l),gt(r.$$.fragment,l)},m(l,c){vt(e,l,c),St(l,i,c),vt(r,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&64&&(u.viewportAware=l[6]),c&33554432&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],yi(()=>t=!1)),e.$set(u);const d={};c&2&&(d.object=l[1]),c&4096&&(d.interactive=l[12]),c&8192&&(d.ignorePointer=l[13]),r.$set(d)},i(l){s||(Ue(e.$$.fragment,l),Ue(r.$$.fragment,l),s=!0)},o(l){Ge(e.$$.fragment,l),Ge(r.$$.fragment,l),s=!1},d(l){Mt(e,l),l&&ie(i),Mt(r,l)}}}function ov(n,e,t){let{$$slots:i={},$$scope:r}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:d=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:p=void 0}=e,{interactive:h=!1}=e,{ignorePointer:S=!1}=e;function m(D){d=D,t(0,d)}function T(D){ot.call(this,n,D)}function y(D){ot.call(this,n,D)}function E(D){ot.call(this,n,D)}function L(D){ot.call(this,n,D)}function P(D){ot.call(this,n,D)}function M(D){ot.call(this,n,D)}function A(D){ot.call(this,n,D)}function I(D){ot.call(this,n,D)}function J(D){ot.call(this,n,D)}return n.$$set=D=>{"mesh"in D&&t(1,s=D.mesh),"position"in D&&t(2,a=D.position),"scale"in D&&t(3,o=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,d=D.inViewport),"castShadow"in D&&t(7,f=D.castShadow),"receiveShadow"in D&&t(8,_=D.receiveShadow),"frustumCulled"in D&&t(9,v=D.frustumCulled),"renderOrder"in D&&t(10,g=D.renderOrder),"visible"in D&&t(11,p=D.visible),"interactive"in D&&t(12,h=D.interactive),"ignorePointer"in D&&t(13,S=D.ignorePointer),"$$scope"in D&&t(25,r=D.$$scope)},[d,s,a,o,l,c,u,f,_,v,g,p,h,S,i,m,T,y,E,L,P,M,A,I,J,r]}class lv extends Gt{constructor(e){super(),Ht(this,e,ov,av,Wt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,interactive:12,ignorePointer:13})}}function cv(n){let e;const t=n[18].default,i=Cn(t,n,n[29],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&536870912)&&Pn(i,t,r,r[29],e?Dn(t,r[29],s,null):Ln(r[29]),null)},i(r){e||(Ue(i,r),e=!0)},o(r){Ge(i,r),e=!1},d(r){i&&i.d(r)}}}function uv(n){let e,t,i;function r(a){n[19](a)}let s={mesh:n[13],position:n[1],scale:n[2],rotation:n[3],lookAt:n[12],castShadow:n[5],receiveShadow:n[6],frustumCulled:n[7],renderOrder:n[8],visible:n[9],interactive:n[10],ignorePointer:n[11],viewportAware:n[4],$$slots:{default:[cv]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new lv({props:s}),ii.push(()=>Ti(e,"inViewport",r)),e.$on("click",n[20]),e.$on("contextmenu",n[21]),e.$on("pointerup",n[22]),e.$on("pointerdown",n[23]),e.$on("pointerenter",n[24]),e.$on("pointerleave",n[25]),e.$on("pointermove",n[26]),e.$on("viewportenter",n[27]),e.$on("viewportleave",n[28]),{c(){_t(e.$$.fragment)},l(a){gt(e.$$.fragment,a)},m(a,o){vt(e,a,o),i=!0},p(a,o){const l={};o[0]&2&&(l.position=a[1]),o[0]&4&&(l.scale=a[2]),o[0]&8&&(l.rotation=a[3]),o[0]&4096&&(l.lookAt=a[12]),o[0]&32&&(l.castShadow=a[5]),o[0]&64&&(l.receiveShadow=a[6]),o[0]&128&&(l.frustumCulled=a[7]),o[0]&256&&(l.renderOrder=a[8]),o[0]&512&&(l.visible=a[9]),o[0]&1024&&(l.interactive=a[10]),o[0]&2048&&(l.ignorePointer=a[11]),o[0]&16&&(l.viewportAware=a[4]),o[0]&536870912&&(l.$$scope={dirty:o,ctx:a}),!t&&o[0]&1&&(t=!0,l.inViewport=a[0],yi(()=>t=!1)),e.$set(l)},i(a){i||(Ue(e.$$.fragment,a),i=!0)},o(a){Ge(e.$$.fragment,a),i=!1},d(a){Mt(e,a)}}}function fv(n,e,t){let{$$slots:i={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{interactive:g=!1}=e,{ignorePointer:p=!1}=e,{lookAt:h=void 0}=e,{geometry:S}=e,{material:m}=e,T=m,y=S;const{invalidate:E}=Un(),L=new Tn(S,m),P=()=>L;function M(R){c=R,t(0,c)}function A(R){ot.call(this,n,R)}function I(R){ot.call(this,n,R)}function J(R){ot.call(this,n,R)}function D(R){ot.call(this,n,R)}function G(R){ot.call(this,n,R)}function B(R){ot.call(this,n,R)}function Q(R){ot.call(this,n,R)}function z(R){ot.call(this,n,R)}function H(R){ot.call(this,n,R)}return n.$$set=R=>{"position"in R&&t(1,s=R.position),"scale"in R&&t(2,a=R.scale),"rotation"in R&&t(3,o=R.rotation),"viewportAware"in R&&t(4,l=R.viewportAware),"inViewport"in R&&t(0,c=R.inViewport),"castShadow"in R&&t(5,u=R.castShadow),"receiveShadow"in R&&t(6,d=R.receiveShadow),"frustumCulled"in R&&t(7,f=R.frustumCulled),"renderOrder"in R&&t(8,_=R.renderOrder),"visible"in R&&t(9,v=R.visible),"interactive"in R&&t(10,g=R.interactive),"ignorePointer"in R&&t(11,p=R.ignorePointer),"lookAt"in R&&t(12,h=R.lookAt),"geometry"in R&&t(14,S=R.geometry),"material"in R&&t(15,m=R.material),"$$scope"in R&&t(29,r=R.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&98304&&(m!==T?(P().material=m,E("Mesh: material changed")):E("Mesh: material props changed"),t(16,T=m)),n.$$.dirty[0]&147456&&(S!==y?(P().geometry=S,E("Mesh: geometry changed")):E("Mesh: geometry props changed"),t(17,y=S))},[c,s,a,o,l,u,d,f,_,v,g,p,h,L,S,m,T,y,i,M,A,I,J,D,G,B,Q,z,H,r]}class uo extends Gt{constructor(e){super(),Ht(this,e,fv,uv,Wt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,geometry:14,material:15,mesh:13},null,[-1,-1])}get mesh(){return this.$$.ctx[13]}}const Vu=new xt;Vu.scale.set(0,0,0);Vu.matrix;new yt().fromArray(new Array(16).fill(0));new tt(16777215);const hv=Xg(Cc,()=>new Cc),fo=(n,e)=>hv.load(n,t=>{var i;xg("useTexture"),(i=e==null?void 0:e.onLoad)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onProgress)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onError)==null||i.call(e,t)}),dv=n=>typeof n=="string",pv=n=>Array.isArray(n),kc=n=>{try{const e=Js();if(!e)return n;is(e.linear)||(n.encoding=ei)}catch{console.warn("Calling useTexture outside component initialization does not support color correction.")}return n};function mv(n,e){return dv(n)?Bi?kc(fo(n,e)):new zt:pv(n)?Bi?n.map(t=>kc(fo(t,e))):n.map(()=>new zt):Object.entries(n).reduce((r,[s,a])=>(r[s]=Bi?fo(a,e):new zt,r),{})}function Gc(n,e,t){const i=n.slice();return i[70]=e[t],i[72]=t,i}function _v(n){let e;return{c(){e=be("↧")},l(t){e=Te(t,"↧")},m(t,i){St(t,e,i)},d(t){t&&ie(e)}}}function gv(n){let e;return{c(){e=be("↥")},l(t){e=Te(t,"↥")},m(t,i){St(t,e,i)},d(t){t&&ie(e)}}}function Hc(n){let e,t,i,r=n[72]+1+"",s,a,o,l,c,u;function d(){return n[38](n[72])}function f(){return n[39](n[72])}return{c(){e=$("div"),t=$("a"),i=be("Fav "),s=be(r),a=$("a"),o=be("⨯"),l=pe(),this.h()},l(_){e=ee(_,"DIV",{class:!0});var v=he(e);t=ee(v,"A",{href:!0,class:!0});var g=he(t);i=Te(g,"Fav "),s=Te(g,r),g.forEach(ie),a=ee(v,"A",{href:!0,class:!0});var p=he(a);o=Te(p,"⨯"),p.forEach(ie),l=me(v),v.forEach(ie),this.h()},h(){te(t,"href","/"),te(t,"class","svelte-ek39oa"),te(a,"href","/"),te(a,"class","svelte-ek39oa"),te(e,"class","btn fav svelte-ek39oa")},m(_,v){St(_,e,v),C(e,t),C(t,i),C(t,s),C(e,a),C(a,o),C(e,l),c||(u=[Re(t,"click",gi(d)),Re(a,"click",gi(f))],c=!0)},p(_,v){n=_},d(_){_&&ie(e),c=!1,Xs(u)}}}function Wc(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h,S,m,T,y,E,L,P,M,A,I,J,D,G,B,Q,z=n[6]/100+"",H,R,k,re,N,K,ne,ge=n[7]/100+"",Me,we,ue,Le,ut,We,O,Et,Pe,Xe,Fe,rt,Ve,ze,et,ft,bt,w,x,j,se,ae,le,Ae,de,Z,ye,Ce,De,Ee,Se,je,st,U,fe,X,oe,ve,$e,pt,at,Jt,mt,At,Rt,Ai,zi,cn,un,Vi,tn,ki,Gi,Rr,fn,b,V,q,F,Y,xe,ce,Ie,ke,qe,Be,He,lt,ct,Xt,Ft,dt,Ze,hn,Tt,jt,In,Nn,dn,Ct,qt,xn,Ot,pn,Cr,Fn,$s,ea,On,Hi,ta,ri,na,cs,ia,Bn,Wi,ra,si,sa,us,aa,zn,Xi,oa,ai,la,fs,ca,Vn,ji,ua,oi,fa,hs,ha,kn,qi,da,li,pa,ds,ma,Gn,Yi,_a,ci,ga,ps,va,Hn,Ki,Ma,ui,Sa,ms,Ea,Wn,Zi,xa,fi,ba,_s,Ta,No;return{c(){e=$("div"),t=$("div"),i=$("div"),r=be("Misc"),s=pe(),a=$("div"),o=$("div"),l=be("Toggle floor"),c=$("input"),u=pe(),d=$("div"),f=$("div"),_=be("Toggle html"),v=$("input"),g=pe(),p=$("div"),h=$("div"),S=be("Animate"),m=$("input"),T=pe(),y=$("div"),E=$("div"),L=be("Camera FOV"),P=$("input"),M=pe(),A=be(n[5]),I=pe(),J=$("div"),D=$("div"),G=be("Ambient intensity"),B=$("input"),Q=pe(),H=be(z),R=pe(),k=$("div"),re=$("div"),N=be("Spot intensity"),K=$("input"),ne=pe(),Me=be(ge),we=pe(),ue=$("div"),Le=be("Cube 1"),ut=pe(),We=$("div"),O=$("div"),Et=be("Animation"),Pe=$("input"),Xe=pe(),Fe=be(n[12]),rt=pe(),Ve=$("div"),ze=$("div"),et=be("X rotation"),ft=$("input"),bt=pe(),w=be(n[13]),x=pe(),j=$("div"),se=$("div"),ae=be("Y rotation"),le=$("input"),Ae=pe(),de=be(n[14]),Z=pe(),ye=$("div"),Ce=$("div"),De=be("Z rotation"),Ee=$("input"),Se=pe(),je=be(n[15]),st=pe(),U=$("div"),fe=$("div"),X=be("X move"),oe=$("input"),ve=pe(),$e=be(n[16]),pt=pe(),at=$("div"),Jt=$("div"),mt=be("Y move"),At=$("input"),Rt=pe(),Ai=be(n[17]),zi=pe(),cn=$("div"),un=$("div"),Vi=be("Z move"),tn=$("input"),ki=pe(),Gi=be(n[18]),Rr=pe(),fn=$("div"),b=$("div"),V=be("Scale"),q=$("input"),F=pe(),Y=be(n[19]),xe=pe(),ce=$("div"),Ie=$("div"),ke=be("Spots"),qe=pe(),Be=$("div"),He=$("div"),lt=be("Spot 1"),ct=$("input"),Xt=pe(),Ft=$("div"),dt=$("div"),Ze=be("Spot 2"),hn=$("input"),Tt=pe(),jt=$("div"),In=$("div"),Nn=be("Spot 3"),dn=$("input"),Ct=pe(),qt=$("div"),xn=$("div"),Ot=be("Spot 4"),pn=$("input"),Cr=pe(),Fn=$("div"),$s=be("Cube 2"),ea=pe(),On=$("div"),Hi=$("div"),ta=be("Animation"),ri=$("input"),na=pe(),cs=be(n[20]),ia=pe(),Bn=$("div"),Wi=$("div"),ra=be("X rotation"),si=$("input"),sa=pe(),us=be(n[21]),aa=pe(),zn=$("div"),Xi=$("div"),oa=be("Y rotation"),ai=$("input"),la=pe(),fs=be(n[22]),ca=pe(),Vn=$("div"),ji=$("div"),ua=be("Z rotation"),oi=$("input"),fa=pe(),hs=be(n[23]),ha=pe(),kn=$("div"),qi=$("div"),da=be("X move"),li=$("input"),pa=pe(),ds=be(n[24]),ma=pe(),Gn=$("div"),Yi=$("div"),_a=be("Y move"),ci=$("input"),ga=pe(),ps=be(n[25]),va=pe(),Hn=$("div"),Ki=$("div"),Ma=be("Z move"),ui=$("input"),Sa=pe(),ms=be(n[26]),Ea=pe(),Wn=$("div"),Zi=$("div"),xa=be("Scale"),fi=$("input"),ba=pe(),_s=be(n[27]),this.h()},l(Oe){e=ee(Oe,"DIV",{class:!0});var Ne=he(e);t=ee(Ne,"DIV",{class:!0});var it=he(t);i=ee(it,"DIV",{class:!0});var Fo=he(i);r=Te(Fo,"Misc"),Fo.forEach(ie),s=me(it),a=ee(it,"DIV",{class:!0});var ya=he(a);o=ee(ya,"DIV",{class:!0});var Oo=he(o);l=Te(Oo,"Toggle floor"),Oo.forEach(ie),c=ee(ya,"INPUT",{type:!0}),ya.forEach(ie),u=me(it),d=ee(it,"DIV",{class:!0});var wa=he(d);f=ee(wa,"DIV",{class:!0});var Bo=he(f);_=Te(Bo,"Toggle html"),Bo.forEach(ie),v=ee(wa,"INPUT",{type:!0}),wa.forEach(ie),g=me(it),p=ee(it,"DIV",{class:!0});var Aa=he(p);h=ee(Aa,"DIV",{class:!0});var zo=he(h);S=Te(zo,"Animate"),zo.forEach(ie),m=ee(Aa,"INPUT",{type:!0}),Aa.forEach(ie),T=me(it),y=ee(it,"DIV",{class:!0});var Pr=he(y);E=ee(Pr,"DIV",{class:!0});var Vo=he(E);L=Te(Vo,"Camera FOV"),Vo.forEach(ie),P=ee(Pr,"INPUT",{type:!0}),M=me(Pr),A=Te(Pr,n[5]),Pr.forEach(ie),I=me(it),J=ee(it,"DIV",{class:!0});var Lr=he(J);D=ee(Lr,"DIV",{class:!0});var ko=he(D);G=Te(ko,"Ambient intensity"),ko.forEach(ie),B=ee(Lr,"INPUT",{type:!0}),Q=me(Lr),H=Te(Lr,z),Lr.forEach(ie),R=me(it),k=ee(it,"DIV",{class:!0});var Dr=he(k);re=ee(Dr,"DIV",{class:!0});var Go=he(re);N=Te(Go,"Spot intensity"),Go.forEach(ie),K=ee(Dr,"INPUT",{type:!0}),ne=me(Dr),Me=Te(Dr,ge),Dr.forEach(ie),we=me(it),ue=ee(it,"DIV",{class:!0});var Ho=he(ue);Le=Te(Ho,"Cube 1"),Ho.forEach(ie),ut=me(it),We=ee(it,"DIV",{class:!0});var Ur=he(We);O=ee(Ur,"DIV",{class:!0});var Wo=he(O);Et=Te(Wo,"Animation"),Wo.forEach(ie),Pe=ee(Ur,"INPUT",{type:!0}),Xe=me(Ur),Fe=Te(Ur,n[12]),Ur.forEach(ie),rt=me(it),Ve=ee(it,"DIV",{class:!0});var Ir=he(Ve);ze=ee(Ir,"DIV",{class:!0});var Xo=he(ze);et=Te(Xo,"X rotation"),Xo.forEach(ie),ft=ee(Ir,"INPUT",{type:!0}),bt=me(Ir),w=Te(Ir,n[13]),Ir.forEach(ie),x=me(it),j=ee(it,"DIV",{class:!0});var Nr=he(j);se=ee(Nr,"DIV",{class:!0});var jo=he(se);ae=Te(jo,"Y rotation"),jo.forEach(ie),le=ee(Nr,"INPUT",{type:!0}),Ae=me(Nr),de=Te(Nr,n[14]),Nr.forEach(ie),Z=me(it),ye=ee(it,"DIV",{class:!0});var Fr=he(ye);Ce=ee(Fr,"DIV",{class:!0});var qo=he(Ce);De=Te(qo,"Z rotation"),qo.forEach(ie),Ee=ee(Fr,"INPUT",{type:!0}),Se=me(Fr),je=Te(Fr,n[15]),Fr.forEach(ie),st=me(it),U=ee(it,"DIV",{class:!0});var Or=he(U);fe=ee(Or,"DIV",{class:!0});var Yo=he(fe);X=Te(Yo,"X move"),Yo.forEach(ie),oe=ee(Or,"INPUT",{type:!0}),ve=me(Or),$e=Te(Or,n[16]),Or.forEach(ie),pt=me(it),at=ee(it,"DIV",{class:!0});var Br=he(at);Jt=ee(Br,"DIV",{class:!0});var Ko=he(Jt);mt=Te(Ko,"Y move"),Ko.forEach(ie),At=ee(Br,"INPUT",{type:!0}),Rt=me(Br),Ai=Te(Br,n[17]),Br.forEach(ie),zi=me(it),cn=ee(it,"DIV",{class:!0});var zr=he(cn);un=ee(zr,"DIV",{class:!0});var Zo=he(un);Vi=Te(Zo,"Z move"),Zo.forEach(ie),tn=ee(zr,"INPUT",{type:!0}),ki=me(zr),Gi=Te(zr,n[18]),zr.forEach(ie),Rr=me(it),fn=ee(it,"DIV",{class:!0});var Vr=he(fn);b=ee(Vr,"DIV",{class:!0});var Jo=he(b);V=Te(Jo,"Scale"),Jo.forEach(ie),q=ee(Vr,"INPUT",{type:!0}),F=me(Vr),Y=Te(Vr,n[19]),Vr.forEach(ie),it.forEach(ie),xe=me(Ne),ce=ee(Ne,"DIV",{class:!0});var ht=he(ce);Ie=ee(ht,"DIV",{class:!0});var Qo=he(Ie);ke=Te(Qo,"Spots"),Qo.forEach(ie),qe=me(ht),Be=ee(ht,"DIV",{class:!0});var Ra=he(Be);He=ee(Ra,"DIV",{class:!0});var $o=he(He);lt=Te($o,"Spot 1"),$o.forEach(ie),ct=ee(Ra,"INPUT",{type:!0}),Ra.forEach(ie),Xt=me(ht),Ft=ee(ht,"DIV",{class:!0});var Ca=he(Ft);dt=ee(Ca,"DIV",{class:!0});var el=he(dt);Ze=Te(el,"Spot 2"),el.forEach(ie),hn=ee(Ca,"INPUT",{type:!0}),Ca.forEach(ie),Tt=me(ht),jt=ee(ht,"DIV",{class:!0});var Pa=he(jt);In=ee(Pa,"DIV",{class:!0});var tl=he(In);Nn=Te(tl,"Spot 3"),tl.forEach(ie),dn=ee(Pa,"INPUT",{type:!0}),Pa.forEach(ie),Ct=me(ht),qt=ee(ht,"DIV",{class:!0});var La=he(qt);xn=ee(La,"DIV",{class:!0});var nl=he(xn);Ot=Te(nl,"Spot 4"),nl.forEach(ie),pn=ee(La,"INPUT",{type:!0}),La.forEach(ie),Cr=me(ht),Fn=ee(ht,"DIV",{class:!0});var il=he(Fn);$s=Te(il,"Cube 2"),il.forEach(ie),ea=me(ht),On=ee(ht,"DIV",{class:!0});var kr=he(On);Hi=ee(kr,"DIV",{class:!0});var rl=he(Hi);ta=Te(rl,"Animation"),rl.forEach(ie),ri=ee(kr,"INPUT",{type:!0}),na=me(kr),cs=Te(kr,n[20]),kr.forEach(ie),ia=me(ht),Bn=ee(ht,"DIV",{class:!0});var Gr=he(Bn);Wi=ee(Gr,"DIV",{class:!0});var sl=he(Wi);ra=Te(sl,"X rotation"),sl.forEach(ie),si=ee(Gr,"INPUT",{type:!0}),sa=me(Gr),us=Te(Gr,n[21]),Gr.forEach(ie),aa=me(ht),zn=ee(ht,"DIV",{class:!0});var Hr=he(zn);Xi=ee(Hr,"DIV",{class:!0});var al=he(Xi);oa=Te(al,"Y rotation"),al.forEach(ie),ai=ee(Hr,"INPUT",{type:!0}),la=me(Hr),fs=Te(Hr,n[22]),Hr.forEach(ie),ca=me(ht),Vn=ee(ht,"DIV",{class:!0});var Wr=he(Vn);ji=ee(Wr,"DIV",{class:!0});var ol=he(ji);ua=Te(ol,"Z rotation"),ol.forEach(ie),oi=ee(Wr,"INPUT",{type:!0}),fa=me(Wr),hs=Te(Wr,n[23]),Wr.forEach(ie),ha=me(ht),kn=ee(ht,"DIV",{class:!0});var Xr=he(kn);qi=ee(Xr,"DIV",{class:!0});var ll=he(qi);da=Te(ll,"X move"),ll.forEach(ie),li=ee(Xr,"INPUT",{type:!0}),pa=me(Xr),ds=Te(Xr,n[24]),Xr.forEach(ie),ma=me(ht),Gn=ee(ht,"DIV",{class:!0});var jr=he(Gn);Yi=ee(jr,"DIV",{class:!0});var cl=he(Yi);_a=Te(cl,"Y move"),cl.forEach(ie),ci=ee(jr,"INPUT",{type:!0}),ga=me(jr),ps=Te(jr,n[25]),jr.forEach(ie),va=me(ht),Hn=ee(ht,"DIV",{class:!0});var qr=he(Hn);Ki=ee(qr,"DIV",{class:!0});var ul=he(Ki);Ma=Te(ul,"Z move"),ul.forEach(ie),ui=ee(qr,"INPUT",{type:!0}),Sa=me(qr),ms=Te(qr,n[26]),qr.forEach(ie),Ea=me(ht),Wn=ee(ht,"DIV",{class:!0});var Yr=he(Wn);Zi=ee(Yr,"DIV",{class:!0});var fl=he(Zi);xa=Te(fl,"Scale"),fl.forEach(ie),fi=ee(Yr,"INPUT",{type:!0}),ba=me(Yr),_s=Te(Yr,n[27]),Yr.forEach(ie),ht.forEach(ie),Ne.forEach(ie),this.h()},h(){te(i,"class","header svelte-ek39oa"),te(o,"class","label svelte-ek39oa"),te(c,"type","checkbox"),te(a,"class","control svelte-ek39oa"),te(f,"class","label svelte-ek39oa"),te(v,"type","checkbox"),te(d,"class","control svelte-ek39oa"),te(h,"class","label svelte-ek39oa"),te(m,"type","checkbox"),te(p,"class","control svelte-ek39oa"),te(E,"class","label svelte-ek39oa"),te(P,"type","range"),te(y,"class","control svelte-ek39oa"),te(D,"class","label svelte-ek39oa"),te(B,"type","range"),te(J,"class","control svelte-ek39oa"),te(re,"class","label svelte-ek39oa"),te(K,"type","range"),te(k,"class","control svelte-ek39oa"),te(ue,"class","header svelte-ek39oa"),te(O,"class","label svelte-ek39oa"),te(Pe,"type","range"),te(We,"class","control svelte-ek39oa"),te(ze,"class","label svelte-ek39oa"),te(ft,"type","range"),te(Ve,"class","control svelte-ek39oa"),te(se,"class","label svelte-ek39oa"),te(le,"type","range"),te(j,"class","control svelte-ek39oa"),te(Ce,"class","label svelte-ek39oa"),te(Ee,"type","range"),te(ye,"class","control svelte-ek39oa"),te(fe,"class","label svelte-ek39oa"),te(oe,"type","range"),te(U,"class","control svelte-ek39oa"),te(Jt,"class","label svelte-ek39oa"),te(At,"type","range"),te(at,"class","control svelte-ek39oa"),te(un,"class","label svelte-ek39oa"),te(tn,"type","range"),te(cn,"class","control svelte-ek39oa"),te(b,"class","label svelte-ek39oa"),te(q,"type","range"),te(fn,"class","control svelte-ek39oa"),te(t,"class","control-wrapper svelte-ek39oa"),te(Ie,"class","header svelte-ek39oa"),te(He,"class","label svelte-ek39oa"),te(ct,"type","checkbox"),te(Be,"class","control svelte-ek39oa"),te(dt,"class","label svelte-ek39oa"),te(hn,"type","checkbox"),te(Ft,"class","control svelte-ek39oa"),te(In,"class","label svelte-ek39oa"),te(dn,"type","checkbox"),te(jt,"class","control svelte-ek39oa"),te(xn,"class","label svelte-ek39oa"),te(pn,"type","checkbox"),te(qt,"class","control svelte-ek39oa"),te(Fn,"class","header svelte-ek39oa"),te(Hi,"class","label svelte-ek39oa"),te(ri,"type","range"),te(On,"class","control svelte-ek39oa"),te(Wi,"class","label svelte-ek39oa"),te(si,"type","range"),te(Bn,"class","control svelte-ek39oa"),te(Xi,"class","label svelte-ek39oa"),te(ai,"type","range"),te(zn,"class","control svelte-ek39oa"),te(ji,"class","label svelte-ek39oa"),te(oi,"type","range"),te(Vn,"class","control svelte-ek39oa"),te(qi,"class","label svelte-ek39oa"),te(li,"type","range"),te(kn,"class","control svelte-ek39oa"),te(Yi,"class","label svelte-ek39oa"),te(ci,"type","range"),te(Gn,"class","control svelte-ek39oa"),te(Ki,"class","label svelte-ek39oa"),te(ui,"type","range"),te(Hn,"class","control svelte-ek39oa"),te(Zi,"class","label svelte-ek39oa"),te(fi,"type","range"),te(Wn,"class","control svelte-ek39oa"),te(ce,"class","control-wrapper svelte-ek39oa"),te(e,"class","settings-wrapper svelte-ek39oa")},m(Oe,Ne){St(Oe,e,Ne),C(e,t),C(t,i),C(i,r),C(t,s),C(t,a),C(a,o),C(o,l),C(a,c),c.checked=n[1],C(t,u),C(t,d),C(d,f),C(f,_),C(d,v),v.checked=n[3],C(t,g),C(t,p),C(p,h),C(h,S),C(p,m),m.checked=n[0],C(t,T),C(t,y),C(y,E),C(E,L),C(y,P),Je(P,n[5]),C(y,M),C(y,A),C(t,I),C(t,J),C(J,D),C(D,G),C(J,B),Je(B,n[6]),C(J,Q),C(J,H),C(t,R),C(t,k),C(k,re),C(re,N),C(k,K),Je(K,n[7]),C(k,ne),C(k,Me),C(t,we),C(t,ue),C(ue,Le),C(t,ut),C(t,We),C(We,O),C(O,Et),C(We,Pe),Je(Pe,n[12]),C(We,Xe),C(We,Fe),C(t,rt),C(t,Ve),C(Ve,ze),C(ze,et),C(Ve,ft),Je(ft,n[13]),C(Ve,bt),C(Ve,w),C(t,x),C(t,j),C(j,se),C(se,ae),C(j,le),Je(le,n[14]),C(j,Ae),C(j,de),C(t,Z),C(t,ye),C(ye,Ce),C(Ce,De),C(ye,Ee),Je(Ee,n[15]),C(ye,Se),C(ye,je),C(t,st),C(t,U),C(U,fe),C(fe,X),C(U,oe),Je(oe,n[16]),C(U,ve),C(U,$e),C(t,pt),C(t,at),C(at,Jt),C(Jt,mt),C(at,At),Je(At,n[17]),C(at,Rt),C(at,Ai),C(t,zi),C(t,cn),C(cn,un),C(un,Vi),C(cn,tn),Je(tn,n[18]),C(cn,ki),C(cn,Gi),C(t,Rr),C(t,fn),C(fn,b),C(b,V),C(fn,q),Je(q,n[19]),C(fn,F),C(fn,Y),C(e,xe),C(e,ce),C(ce,Ie),C(Ie,ke),C(ce,qe),C(ce,Be),C(Be,He),C(He,lt),C(Be,ct),ct.checked=n[8],C(ce,Xt),C(ce,Ft),C(Ft,dt),C(dt,Ze),C(Ft,hn),hn.checked=n[9],C(ce,Tt),C(ce,jt),C(jt,In),C(In,Nn),C(jt,dn),dn.checked=n[10],C(ce,Ct),C(ce,qt),C(qt,xn),C(xn,Ot),C(qt,pn),pn.checked=n[11],C(ce,Cr),C(ce,Fn),C(Fn,$s),C(ce,ea),C(ce,On),C(On,Hi),C(Hi,ta),C(On,ri),Je(ri,n[20]),C(On,na),C(On,cs),C(ce,ia),C(ce,Bn),C(Bn,Wi),C(Wi,ra),C(Bn,si),Je(si,n[21]),C(Bn,sa),C(Bn,us),C(ce,aa),C(ce,zn),C(zn,Xi),C(Xi,oa),C(zn,ai),Je(ai,n[22]),C(zn,la),C(zn,fs),C(ce,ca),C(ce,Vn),C(Vn,ji),C(ji,ua),C(Vn,oi),Je(oi,n[23]),C(Vn,fa),C(Vn,hs),C(ce,ha),C(ce,kn),C(kn,qi),C(qi,da),C(kn,li),Je(li,n[24]),C(kn,pa),C(kn,ds),C(ce,ma),C(ce,Gn),C(Gn,Yi),C(Yi,_a),C(Gn,ci),Je(ci,n[25]),C(Gn,ga),C(Gn,ps),C(ce,va),C(ce,Hn),C(Hn,Ki),C(Ki,Ma),C(Hn,ui),Je(ui,n[26]),C(Hn,Sa),C(Hn,ms),C(ce,Ea),C(ce,Wn),C(Wn,Zi),C(Zi,xa),C(Wn,fi),Je(fi,n[27]),C(Wn,ba),C(Wn,_s),Ta||(No=[Re(c,"change",n[40]),Re(v,"change",n[41]),Re(m,"change",n[42]),Re(P,"change",n[43]),Re(P,"input",n[43]),Re(B,"change",n[44]),Re(B,"input",n[44]),Re(K,"change",n[45]),Re(K,"input",n[45]),Re(Pe,"change",n[46]),Re(Pe,"input",n[46]),Re(ft,"change",n[47]),Re(ft,"input",n[47]),Re(le,"change",n[48]),Re(le,"input",n[48]),Re(Ee,"change",n[49]),Re(Ee,"input",n[49]),Re(oe,"change",n[50]),Re(oe,"input",n[50]),Re(At,"change",n[51]),Re(At,"input",n[51]),Re(tn,"change",n[52]),Re(tn,"input",n[52]),Re(q,"change",n[53]),Re(q,"input",n[53]),Re(ct,"change",n[54]),Re(hn,"change",n[55]),Re(dn,"change",n[56]),Re(pn,"change",n[57]),Re(ri,"change",n[58]),Re(ri,"input",n[58]),Re(si,"change",n[59]),Re(si,"input",n[59]),Re(ai,"change",n[60]),Re(ai,"input",n[60]),Re(oi,"change",n[61]),Re(oi,"input",n[61]),Re(li,"change",n[62]),Re(li,"input",n[62]),Re(ci,"change",n[63]),Re(ci,"input",n[63]),Re(ui,"change",n[64]),Re(ui,"input",n[64]),Re(fi,"change",n[65]),Re(fi,"input",n[65])],Ta=!0)},p(Oe,Ne){Ne[0]&2&&(c.checked=Oe[1]),Ne[0]&8&&(v.checked=Oe[3]),Ne[0]&1&&(m.checked=Oe[0]),Ne[0]&32&&Je(P,Oe[5]),Ne[0]&32&&Pt(A,Oe[5]),Ne[0]&64&&Je(B,Oe[6]),Ne[0]&64&&z!==(z=Oe[6]/100+"")&&Pt(H,z),Ne[0]&128&&Je(K,Oe[7]),Ne[0]&128&&ge!==(ge=Oe[7]/100+"")&&Pt(Me,ge),Ne[0]&4096&&Je(Pe,Oe[12]),Ne[0]&4096&&Pt(Fe,Oe[12]),Ne[0]&8192&&Je(ft,Oe[13]),Ne[0]&8192&&Pt(w,Oe[13]),Ne[0]&16384&&Je(le,Oe[14]),Ne[0]&16384&&Pt(de,Oe[14]),Ne[0]&32768&&Je(Ee,Oe[15]),Ne[0]&32768&&Pt(je,Oe[15]),Ne[0]&65536&&Je(oe,Oe[16]),Ne[0]&65536&&Pt($e,Oe[16]),Ne[0]&131072&&Je(At,Oe[17]),Ne[0]&131072&&Pt(Ai,Oe[17]),Ne[0]&262144&&Je(tn,Oe[18]),Ne[0]&262144&&Pt(Gi,Oe[18]),Ne[0]&524288&&Je(q,Oe[19]),Ne[0]&524288&&Pt(Y,Oe[19]),Ne[0]&256&&(ct.checked=Oe[8]),Ne[0]&512&&(hn.checked=Oe[9]),Ne[0]&1024&&(dn.checked=Oe[10]),Ne[0]&2048&&(pn.checked=Oe[11]),Ne[0]&1048576&&Je(ri,Oe[20]),Ne[0]&1048576&&Pt(cs,Oe[20]),Ne[0]&2097152&&Je(si,Oe[21]),Ne[0]&2097152&&Pt(us,Oe[21]),Ne[0]&4194304&&Je(ai,Oe[22]),Ne[0]&4194304&&Pt(fs,Oe[22]),Ne[0]&8388608&&Je(oi,Oe[23]),Ne[0]&8388608&&Pt(hs,Oe[23]),Ne[0]&16777216&&Je(li,Oe[24]),Ne[0]&16777216&&Pt(ds,Oe[24]),Ne[0]&33554432&&Je(ci,Oe[25]),Ne[0]&33554432&&Pt(ps,Oe[25]),Ne[0]&67108864&&Je(ui,Oe[26]),Ne[0]&67108864&&Pt(ms,Oe[26]),Ne[0]&134217728&&Je(fi,Oe[27]),Ne[0]&134217728&&Pt(_s,Oe[27])},d(Oe){Oe&&ie(e),Ta=!1,Xs(No)}}}function Xc(n){let e,t;return e=new Qs({props:{shadow:!0,position:{x:-5,y:20,z:-10},intensity:n[7]/50}}),{c(){_t(e.$$.fragment)},l(i){gt(e.$$.fragment,i)},m(i,r){vt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Ge(e.$$.fragment,i),t=!1},d(i){Mt(e,i)}}}function jc(n){let e,t;return e=new Qs({props:{shadow:!0,position:{x:-10,y:20,z:-5},intensity:n[7]/50}}),{c(){_t(e.$$.fragment)},l(i){gt(e.$$.fragment,i)},m(i,r){vt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Ge(e.$$.fragment,i),t=!1},d(i){Mt(e,i)}}}function qc(n){let e,t;return e=new Qs({props:{shadow:!0,position:{x:-10,y:20,z:5},intensity:n[7]/50}}),{c(){_t(e.$$.fragment)},l(i){gt(e.$$.fragment,i)},m(i,r){vt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Ge(e.$$.fragment,i),t=!1},d(i){Mt(e,i)}}}function Yc(n){let e,t;return e=new Qs({props:{target:{x:13,y:5,z:8.5},shadow:!0,position:{x:-15,y:25,z:-10},intensity:2}}),{c(){_t(e.$$.fragment)},l(i){gt(e.$$.fragment,i)},m(i,r){vt(e,i,r),t=!0},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Ge(e.$$.fragment,i),t=!1},d(i){Mt(e,i)}}}function vv(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v;e=new Wg({props:{position:{x:0,y:20,z:0},lookAt:{x:0,y:0,z:0},fov:n[5]}});let g=n[8]&&Xc(n),p=n[9]&&jc(n),h=n[10]&&qc(n),S=n[11]&&Yc();return o=new $g({props:{intensity:n[6]/100}}),c=new uo({props:{scale:n[19]/20,position:{x:n[16]/2.5-20,y:n[17]/10-10,z:n[18]/5-10},rotation:{x:n[13]*3.6*(Math.PI/180),y:n[14]*3.6*(Math.PI/180),z:n[15]*3.6*(Math.PI/180)},castShadow:!0,receiveShadow:!0,geometry:new co(5,3,5),material:n[4]}}),d=new uo({props:{scale:n[27]/20,position:{x:n[24]/2.5-20,y:n[25]/10-10,z:n[26]/5-10},rotation:{x:n[21]*3.6*(Math.PI/180),y:n[22]*3.6*(Math.PI/180),z:n[23]*3.6*(Math.PI/180)},castShadow:!0,receiveShadow:!0,geometry:new co(5,3,5),material:n[4]}}),_=new uo({props:{receiveShadow:!0,rotation:{x:-90*(Math.PI/180)},geometry:new co(300,300,.01),material:n[1]?n[4]:n[30]}}),{c(){_t(e.$$.fragment),t=pe(),g&&g.c(),i=pe(),p&&p.c(),r=pe(),h&&h.c(),s=pe(),S&&S.c(),a=pe(),_t(o.$$.fragment),l=pe(),_t(c.$$.fragment),u=pe(),_t(d.$$.fragment),f=pe(),_t(_.$$.fragment)},l(m){gt(e.$$.fragment,m),t=me(m),g&&g.l(m),i=me(m),p&&p.l(m),r=me(m),h&&h.l(m),s=me(m),S&&S.l(m),a=me(m),gt(o.$$.fragment,m),l=me(m),gt(c.$$.fragment,m),u=me(m),gt(d.$$.fragment,m),f=me(m),gt(_.$$.fragment,m)},m(m,T){vt(e,m,T),St(m,t,T),g&&g.m(m,T),St(m,i,T),p&&p.m(m,T),St(m,r,T),h&&h.m(m,T),St(m,s,T),S&&S.m(m,T),St(m,a,T),vt(o,m,T),St(m,l,T),vt(c,m,T),St(m,u,T),vt(d,m,T),St(m,f,T),vt(_,m,T),v=!0},p(m,T){const y={};T[0]&32&&(y.fov=m[5]),e.$set(y),m[8]?g?(g.p(m,T),T[0]&256&&Ue(g,1)):(g=Xc(m),g.c(),Ue(g,1),g.m(i.parentNode,i)):g&&(mr(),Ge(g,1,1,()=>{g=null}),_r()),m[9]?p?(p.p(m,T),T[0]&512&&Ue(p,1)):(p=jc(m),p.c(),Ue(p,1),p.m(r.parentNode,r)):p&&(mr(),Ge(p,1,1,()=>{p=null}),_r()),m[10]?h?(h.p(m,T),T[0]&1024&&Ue(h,1)):(h=qc(m),h.c(),Ue(h,1),h.m(s.parentNode,s)):h&&(mr(),Ge(h,1,1,()=>{h=null}),_r()),m[11]?S?T[0]&2048&&Ue(S,1):(S=Yc(),S.c(),Ue(S,1),S.m(a.parentNode,a)):S&&(mr(),Ge(S,1,1,()=>{S=null}),_r());const E={};T[0]&64&&(E.intensity=m[6]/100),o.$set(E);const L={};T[0]&524288&&(L.scale=m[19]/20),T[0]&458752&&(L.position={x:m[16]/2.5-20,y:m[17]/10-10,z:m[18]/5-10}),T[0]&57344&&(L.rotation={x:m[13]*3.6*(Math.PI/180),y:m[14]*3.6*(Math.PI/180),z:m[15]*3.6*(Math.PI/180)}),T[0]&16&&(L.material=m[4]),c.$set(L);const P={};T[0]&134217728&&(P.scale=m[27]/20),T[0]&117440512&&(P.position={x:m[24]/2.5-20,y:m[25]/10-10,z:m[26]/5-10}),T[0]&14680064&&(P.rotation={x:m[21]*3.6*(Math.PI/180),y:m[22]*3.6*(Math.PI/180),z:m[23]*3.6*(Math.PI/180)}),T[0]&16&&(P.material=m[4]),d.$set(P);const M={};T[0]&18&&(M.material=m[1]?m[4]:m[30]),_.$set(M)},i(m){v||(Ue(e.$$.fragment,m),Ue(g),Ue(p),Ue(h),Ue(S),Ue(o.$$.fragment,m),Ue(c.$$.fragment,m),Ue(d.$$.fragment,m),Ue(_.$$.fragment,m),v=!0)},o(m){Ge(e.$$.fragment,m),Ge(g),Ge(p),Ge(h),Ge(S),Ge(o.$$.fragment,m),Ge(c.$$.fragment,m),Ge(d.$$.fragment,m),Ge(_.$$.fragment,m),v=!1},d(m){Mt(e,m),m&&ie(t),g&&g.d(m),m&&ie(i),p&&p.d(m),m&&ie(r),h&&h.d(m),m&&ie(s),S&&S.d(m),m&&ie(a),Mt(o,m),m&&ie(l),Mt(c,m),m&&ie(u),Mt(d,m),m&&ie(f),Mt(_,m)}}}function Kc(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h;return{c(){e=$("div"),t=$("div"),i=pe(),r=$("div"),s=be("Careers"),a=pe(),o=$("h1"),l=$("b"),c=be("Passionate about open source?"),u=$("br"),d=be(`
      So are we. Be where the cutting edge is established.`),f=pe(),_=$("div"),v=$("input"),g=pe(),p=$("div"),h=be("Search roles"),this.h()},l(S){e=ee(S,"DIV",{class:!0});var m=he(e);t=ee(m,"DIV",{class:!0}),he(t).forEach(ie),i=me(m),r=ee(m,"DIV",{class:!0});var T=he(r);s=Te(T,"Careers"),T.forEach(ie),a=me(m),o=ee(m,"H1",{class:!0});var y=he(o);l=ee(y,"B",{});var E=he(l);c=Te(E,"Passionate about open source?"),E.forEach(ie),u=ee(y,"BR",{}),d=Te(y,`
      So are we. Be where the cutting edge is established.`),y.forEach(ie),f=me(m),_=ee(m,"DIV",{class:!0});var L=he(_);v=ee(L,"INPUT",{type:!0,placeholder:!0,class:!0}),g=me(L),p=ee(L,"DIV",{class:!0});var P=he(p);h=Te(P,"Search roles"),P.forEach(ie),L.forEach(ie),m.forEach(ie),this.h()},h(){te(t,"class","fake-header svelte-ek39oa"),te(r,"class","page-header svelte-ek39oa"),te(o,"class","svelte-ek39oa"),te(v,"type","text"),te(v,"placeholder","Search by keyword"),te(v,"class","svelte-ek39oa"),te(p,"class","btn svelte-ek39oa"),te(_,"class","search svelte-ek39oa"),te(e,"class","html-overlay svelte-ek39oa"),_i(e,"dark",n[4]==n[29][1])},m(S,m){St(S,e,m),C(e,t),C(e,i),C(e,r),C(r,s),C(e,a),C(e,o),C(o,l),C(l,c),C(o,u),C(o,d),C(e,f),C(e,_),C(_,v),C(_,g),C(_,p),C(p,h)},p(S,m){m[0]&536870928&&_i(e,"dark",S[4]==S[29][1])},d(S){S&&ie(e)}}}function Mv(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h,S,m,T,y,E,L,P,M,A,I,J;function D(k,re){return k[2]?gv:_v}let G=D(n),B=G(n),Q=n[28],z=[];for(let k=0;k<Q.length;k+=1)z[k]=Hc(Gc(n,Q,k));let H=n[2]&&Wc(n);P=new Tg({props:{$$slots:{default:[vv]},$$scope:{ctx:n}}});let R=n[3]&&Kc(n);return{c(){e=$("div"),t=$("div"),i=$("div"),r=be("Settings "),B.c(),s=pe(),a=$("div"),o=be("Material 1"),l=pe(),c=$("div"),u=be("Material 2"),d=pe(),f=$("div"),_=be("."),v=pe(),g=$("div"),p=be("Randomize"),h=pe(),S=$("div"),m=be("+"),T=pe();for(let k=0;k<z.length;k+=1)z[k].c();y=pe(),H&&H.c(),E=pe(),L=$("div"),_t(P.$$.fragment),M=pe(),R&&R.c(),this.h()},l(k){e=ee(k,"DIV",{class:!0});var re=he(e);t=ee(re,"DIV",{});var N=he(t);i=ee(N,"DIV",{class:!0});var K=he(i);r=Te(K,"Settings "),B.l(K),K.forEach(ie),s=me(N),a=ee(N,"DIV",{class:!0});var ne=he(a);o=Te(ne,"Material 1"),ne.forEach(ie),l=me(N),c=ee(N,"DIV",{class:!0});var ge=he(c);u=Te(ge,"Material 2"),ge.forEach(ie),d=me(N),f=ee(N,"DIV",{class:!0});var Me=he(f);_=Te(Me,"."),Me.forEach(ie),v=me(N),g=ee(N,"DIV",{class:!0});var we=he(g);p=Te(we,"Randomize"),we.forEach(ie),h=me(N),S=ee(N,"DIV",{class:!0});var ue=he(S);m=Te(ue,"+"),ue.forEach(ie),T=me(N);for(let ut=0;ut<z.length;ut+=1)z[ut].l(N);N.forEach(ie),y=me(re),H&&H.l(re),E=me(re),L=ee(re,"DIV",{class:!0});var Le=he(L);gt(P.$$.fragment,Le),M=me(Le),R&&R.l(Le),Le.forEach(ie),re.forEach(ie),this.h()},h(){te(i,"class","settings-toggle svelte-ek39oa"),te(a,"class","btn svelte-ek39oa"),_i(a,"selected",n[4]==n[29][0]),te(c,"class","btn svelte-ek39oa"),_i(c,"selected",n[4]==n[29][1]),te(f,"class","btn svelte-ek39oa"),_i(f,"selected",n[4]==n[29][2]),te(g,"class","btn svelte-ek39oa"),te(S,"class","btn svelte-ek39oa"),te(L,"class","canvas-wrapper svelte-ek39oa"),te(e,"class","suru_wrapper svelte-ek39oa")},m(k,re){St(k,e,re),C(e,t),C(t,i),C(i,r),B.m(i,null),C(t,s),C(t,a),C(a,o),C(t,l),C(t,c),C(c,u),C(t,d),C(t,f),C(f,_),C(t,v),C(t,g),C(g,p),C(t,h),C(t,S),C(S,m),C(t,T);for(let N=0;N<z.length;N+=1)z[N]&&z[N].m(t,null);C(e,y),H&&H.m(e,null),C(e,E),C(e,L),vt(P,L,null),C(L,M),R&&R.m(L,null),A=!0,I||(J=[Re(i,"click",gi(n[34])),Re(a,"click",gi(n[35])),Re(c,"click",gi(n[36])),Re(f,"click",gi(n[37])),Re(g,"click",gi(n[31])),Re(S,"click",gi(n[32]))],I=!0)},p(k,re){if(G!==(G=D(k))&&(B.d(1),B=G(k),B&&(B.c(),B.m(i,null))),(!A||re[0]&536870928)&&_i(a,"selected",k[4]==k[29][0]),(!A||re[0]&536870928)&&_i(c,"selected",k[4]==k[29][1]),(!A||re[0]&536870928)&&_i(f,"selected",k[4]==k[29][2]),re[0]&268435456|re[1]&4){Q=k[28];let K;for(K=0;K<Q.length;K+=1){const ne=Gc(k,Q,K);z[K]?z[K].p(ne,re):(z[K]=Hc(ne),z[K].c(),z[K].m(t,null))}for(;K<z.length;K+=1)z[K].d(1);z.length=Q.length}k[2]?H?H.p(k,re):(H=Wc(k),H.c(),H.m(e,E)):H&&(H.d(1),H=null);const N={};re[0]&267382770|re[2]&2048&&(N.$$scope={dirty:re,ctx:k}),P.$set(N),k[3]?R?R.p(k,re):(R=Kc(k),R.c(),R.m(L,null)):R&&(R.d(1),R=null)},i(k){A||(Ue(P.$$.fragment,k),A=!0)},o(k){Ge(P.$$.fragment,k),A=!1},d(k){k&&ie(e),B.d(),Hu(z,k),H&&H.d(),Mt(P),R&&R.d(),I=!1,Xs(J)}}}function Sv(n,e,t){let i=!1,r=!1,s=!1;const a=mv("https://unco.github.io/docs/paper.png",{onError:Se=>{console.warn(`An error occured loading the texture: ${Se.message}`)}});let o=[new zs({map:a}),new zs({color:"#000000"}),new zs({color:"#E95420"})],l=o[0],c=new zs({color:"#ff3300"}),u=50,d=100,f=100,_=!0,v=!0,g=!0,p=!0,h=!0,S=5,m=34,T=16,y=5,E=69,L=49,P=51,M=34,A=10,I=60,J=5,D=5,G=80,B=50,Q=79,z=45,H=[[86,4,44,24,69,72,34,65,22,20,61,0,68,78,1],[69,19,83,13,47,32,91,51,64,96,64,73,68,53,0]],R;async function k(){R&&clearInterval(R),r&&(R=setInterval(()=>{t(15,y+=S/200),t(13,m+=S/200),t(23,D+=A/200),t(21,I+=A/200),y>100&&t(15,y=0),D>100&&t(23,D=0),m>100&&t(13,m=0),I>100&&t(21,I=0)},100))}function re(){t(13,m=Math.round(Math.random()*100)),t(14,T=Math.round(Math.random()*100)),t(15,y=Math.round(Math.random()*100)),t(16,E=Math.round(Math.random()*100)),t(17,L=Math.round(Math.random()*100)),t(18,P=Math.round(Math.random()*100)),t(19,M=Math.round(Math.random()*100)),t(21,I=Math.round(Math.random()*100)),t(22,J=Math.round(Math.random()*100)),t(23,D=Math.round(Math.random()*100)),t(24,G=Math.round(Math.random()*100)),t(25,B=Math.round(Math.random()*100)),t(26,Q=Math.round(Math.random()*100)),t(27,z=Math.round(Math.random()*100))}function N(){H.push([m,T,y,E,L,P,M,I,J,D,G,B,Q,z]),t(28,H)}function K(Se){t(13,[m,T,y,E,L,P,M,I,J,D,G,B,Q,z]=H[Se],m,t(14,T),t(15,y),t(16,E),t(17,L),t(18,P),t(19,M),t(21,I),t(22,J),t(23,D),t(24,G),t(25,B),t(26,Q),t(27,z)),console.log("m?",H[Se][14]),t(4,l=o[H[Se][14]])}const ne=()=>{t(2,i=!i)},ge=()=>{t(4,l=o[0])},Me=()=>{t(4,l=o[1])},we=()=>{t(4,l=o[2])},ue=Se=>{K(Se)},Le=Se=>{};function ut(){_=this.checked,t(1,_)}function We(){s=this.checked,t(3,s)}function O(){r=this.checked,t(0,r)}function Et(){u=Lt(this.value),t(5,u)}function Pe(){d=Lt(this.value),t(6,d)}function Xe(){f=Lt(this.value),t(7,f)}function Fe(){S=Lt(this.value),t(12,S)}function rt(){m=Lt(this.value),t(13,m)}function Ve(){T=Lt(this.value),t(14,T)}function ze(){y=Lt(this.value),t(15,y)}function et(){E=Lt(this.value),t(16,E)}function ft(){L=Lt(this.value),t(17,L)}function bt(){P=Lt(this.value),t(18,P)}function w(){M=Lt(this.value),t(19,M)}function x(){v=this.checked,t(8,v)}function j(){g=this.checked,t(9,g)}function se(){p=this.checked,t(10,p)}function ae(){h=this.checked,t(11,h)}function le(){A=Lt(this.value),t(20,A)}function Ae(){I=Lt(this.value),t(21,I)}function de(){J=Lt(this.value),t(22,J)}function Z(){D=Lt(this.value),t(23,D)}function ye(){G=Lt(this.value),t(24,G)}function Ce(){B=Lt(this.value),t(25,B)}function De(){Q=Lt(this.value),t(26,Q)}function Ee(){z=Lt(this.value),t(27,z)}return n.$$.update=()=>{n.$$.dirty[0]&1&&k(),n.$$.dirty[0]&2},[r,_,i,s,l,u,d,f,v,g,p,h,S,m,T,y,E,L,P,M,A,I,J,D,G,B,Q,z,H,o,c,re,N,K,ne,ge,Me,we,ue,Le,ut,We,O,Et,Pe,Xe,Fe,rt,Ve,ze,et,ft,bt,w,x,j,se,ae,le,Ae,de,Z,ye,Ce,De,Ee]}class Ev extends Gt{constructor(e){super(),Ht(this,e,Sv,Mv,Wt,{},null,[-1,-1,-1])}}function xv(n){let e,t,i,r,s,a,o;return e=new qu({}),a=new Ev({}),{c(){_t(e.$$.fragment),t=pe(),i=$("h1"),r=be("Suru Toy"),s=pe(),_t(a.$$.fragment)},l(l){gt(e.$$.fragment,l),t=me(l),i=ee(l,"H1",{});var c=he(i);r=Te(c,"Suru Toy"),c.forEach(ie),s=me(l),gt(a.$$.fragment,l)},m(l,c){vt(e,l,c),St(l,t,c),St(l,i,c),C(i,r),St(l,s,c),vt(a,l,c),o=!0},p:Wu,i(l){o||(Ue(e.$$.fragment,l),Ue(a.$$.fragment,l),o=!0)},o(l){Ge(e.$$.fragment,l),Ge(a.$$.fragment,l),o=!1},d(l){Mt(e,l),l&&ie(t),l&&ie(i),l&&ie(s),Mt(a,l)}}}class Pv extends Gt{constructor(e){super(),Ht(this,e,null,xv,Wt,{})}}export{Pv as component};
