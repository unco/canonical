import { o as onDestroy, g as get_store_value, s as setContext, c as create_ssr_component, a as subscribe, f as set_store_value, d as add_attribute, h as getContext, t as tick, i as createEventDispatcher, v as validate_component, b as each, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { d as derived, w as writable, r as readable } from "../../../../chunks/index.js";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = "153";
const PCFSoftShadowMap = 2;
const FrontSide = 0;
const BackSide = 1;
const NormalBlending = 1;
const AddEquation = 100;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const LessEqualDepth = 3;
const MultiplyOperation = 0;
const NoToneMapping = 0;
const ACESFilmicToneMapping = 4;
const UVMapping = 300;
const RepeatWrapping = 1e3;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const LinearFilter = 1006;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const FloatType = 1015;
const RGBAFormat = 1023;
const LinearEncoding = 3e3;
const sRGBEncoding = 3001;
const TangentSpaceNormalMap = 0;
const NoColorSpace = "";
const SRGBColorSpace = "srgb";
const LinearSRGBColorSpace = "srgb-linear";
const DisplayP3ColorSpace = "display-p3";
const KeepStencilOp = 7680;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const WebGLCoordinateSystem = 2e3;
const WebGPUCoordinateSystem = 2001;
class EventDispatcher {
  addEventListener(type, listener) {
    if (this._listeners === void 0)
      this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  hasEventListener(type, listener) {
    if (this._listeners === void 0)
      return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  removeEventListener(type, listener) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  dispatchEvent(event) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
}
const _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toLowerCase();
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function euclideanModulo(n, m) {
  return (n % m + m) % m;
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function denormalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return value / 4294967295;
    case Uint16Array:
      return value / 65535;
    case Uint8Array:
      return value / 255;
    case Int32Array:
      return Math.max(value / 2147483647, -1);
    case Int16Array:
      return Math.max(value / 32767, -1);
    case Int8Array:
      return Math.max(value / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return Math.round(value * 4294967295);
    case Uint16Array:
      return Math.round(value * 65535);
    case Uint8Array:
      return Math.round(value * 255);
    case Int32Array:
      return Math.round(value * 2147483647);
    case Int16Array:
      return Math.round(value * 32767);
    case Int8Array:
      return Math.round(value * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Vector2 {
  constructor(x = 0, y = 0) {
    Vector2.prototype.isVector2 = true;
    this.x = x;
    this.y = y;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0)
      return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
}
class Matrix3 {
  constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    Matrix3.prototype.isMatrix3 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
    }
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    );
    return this;
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[4],
      me[8],
      me[1],
      me[5],
      me[9],
      me[2],
      me[6],
      me[10]
    );
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  transpose() {
    let tmp;
    const m = this.elements;
    tmp = m[1];
    m[1] = m[3];
    m[3] = tmp;
    tmp = m[2];
    m[2] = m[6];
    m[6] = tmp;
    tmp = m[5];
    m[5] = m[7];
    m[7] = tmp;
    return this;
  }
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  transposeIntoArray(r) {
    const m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  }
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    this.set(
      sx * c,
      sx * s,
      -sx * (c * cx + s * cy) + cx + tx,
      -sy * s,
      sy * c,
      -sy * (-s * cx + c * cy) + cy + ty,
      0,
      0,
      1
    );
    return this;
  }
  //
  scale(sx, sy) {
    this.premultiply(_m3.makeScale(sx, sy));
    return this;
  }
  rotate(theta) {
    this.premultiply(_m3.makeRotation(-theta));
    return this;
  }
  translate(tx, ty) {
    this.premultiply(_m3.makeTranslation(tx, ty));
    return this;
  }
  // for 2D Transforms
  makeTranslation(x, y) {
    if (x.isVector2) {
      this.set(
        1,
        0,
        x.x,
        0,
        1,
        x.y,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        x,
        0,
        1,
        y,
        0,
        0,
        1
      );
    }
    return this;
  }
  makeRotation(theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      s,
      c,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeScale(x, y) {
    this.set(
      x,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      1
    );
    return this;
  }
  //
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i])
        return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const _m3 = /* @__PURE__ */ new Matrix3();
function arrayNeedsUint32(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] >= 65535)
      return true;
  }
  return false;
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
const _cache = {};
function warnOnce(message) {
  if (message in _cache)
    return;
  _cache[message] = true;
  console.warn(message);
}
function SRGBToLinear(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /* @__PURE__ */ new Matrix3().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]);
const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /* @__PURE__ */ new Matrix3().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function DisplayP3ToLinearSRGB(color) {
  return color.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB);
}
function LinearSRGBToDisplayP3(color) {
  return color.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB();
}
const TO_LINEAR = {
  [LinearSRGBColorSpace]: (color) => color,
  [SRGBColorSpace]: (color) => color.convertSRGBToLinear(),
  [DisplayP3ColorSpace]: DisplayP3ToLinearSRGB
};
const FROM_LINEAR = {
  [LinearSRGBColorSpace]: (color) => color,
  [SRGBColorSpace]: (color) => color.convertLinearToSRGB(),
  [DisplayP3ColorSpace]: LinearSRGBToDisplayP3
};
const ColorManagement = {
  enabled: true,
  get legacyMode() {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.");
    return !this.enabled;
  },
  set legacyMode(legacyMode) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.");
    this.enabled = !legacyMode;
  },
  get workingColorSpace() {
    return LinearSRGBColorSpace;
  },
  set workingColorSpace(colorSpace) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(color, sourceColorSpace, targetColorSpace) {
    if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
      return color;
    }
    const sourceToLinear = TO_LINEAR[sourceColorSpace];
    const targetFromLinear = FROM_LINEAR[targetColorSpace];
    if (sourceToLinear === void 0 || targetFromLinear === void 0) {
      throw new Error(`Unsupported color space conversion, "${sourceColorSpace}" to "${targetColorSpace}".`);
    }
    return targetFromLinear(sourceToLinear(color));
  },
  fromWorkingColorSpace: function(color, targetColorSpace) {
    return this.convert(color, this.workingColorSpace, targetColorSpace);
  },
  toWorkingColorSpace: function(color, sourceColorSpace) {
    return this.convert(color, sourceColorSpace, this.workingColorSpace);
  }
};
let _canvas;
class ImageUtils {
  static getDataURL(image) {
    if (/^data:/i.test(image.src)) {
      return image.src;
    }
    if (typeof HTMLCanvasElement === "undefined") {
      return image.src;
    }
    let canvas;
    if (image instanceof HTMLCanvasElement) {
      canvas = image;
    } else {
      if (_canvas === void 0)
        _canvas = createElementNS("canvas");
      _canvas.width = image.width;
      _canvas.height = image.height;
      const context = _canvas.getContext("2d");
      if (image instanceof ImageData) {
        context.putImageData(image, 0, 0);
      } else {
        context.drawImage(image, 0, 0, image.width, image.height);
      }
      canvas = _canvas;
    }
    if (canvas.width > 2048 || canvas.height > 2048) {
      console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
      return canvas.toDataURL("image/jpeg", 0.6);
    } else {
      return canvas.toDataURL("image/png");
    }
  }
  static sRGBToLinear(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      const canvas = createElementNS("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i++) {
        data[i] = SRGBToLinear(data[i] / 255) * 255;
      }
      context.putImageData(imageData, 0, 0);
      return canvas;
    } else if (image.data) {
      const data = image.data.slice(0);
      for (let i = 0; i < data.length; i++) {
        if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
          data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
        } else {
          data[i] = SRGBToLinear(data[i]);
        }
      }
      return {
        data,
        width: image.width,
        height: image.height
      };
    } else {
      console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return image;
    }
  }
}
let sourceId = 0;
class Source {
  constructor(data = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", { value: sourceId++ });
    this.uuid = generateUUID();
    this.data = data;
    this.version = 0;
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.images[this.uuid] !== void 0) {
      return meta.images[this.uuid];
    }
    const output = {
      uuid: this.uuid,
      url: ""
    };
    const data = this.data;
    if (data !== null) {
      let url;
      if (Array.isArray(data)) {
        url = [];
        for (let i = 0, l = data.length; i < l; i++) {
          if (data[i].isDataTexture) {
            url.push(serializeImage(data[i].image));
          } else {
            url.push(serializeImage(data[i]));
          }
        }
      } else {
        url = serializeImage(data);
      }
      output.url = url;
    }
    if (!isRootObject) {
      meta.images[this.uuid] = output;
    }
    return output;
  }
}
function serializeImage(image) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return ImageUtils.getDataURL(image);
  } else {
    if (image.data) {
      return {
        data: Array.from(image.data),
        width: image.width,
        height: image.height,
        type: image.data.constructor.name
      };
    } else {
      console.warn("THREE.Texture: Unable to serialize Texture.");
      return {};
    }
  }
}
let textureId = 0;
class Texture extends EventDispatcher {
  constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", { value: textureId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.source = new Source(image);
    this.mipmaps = [];
    this.mapping = mapping;
    this.channel = 0;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.magFilter = magFilter;
    this.minFilter = minFilter;
    this.anisotropy = anisotropy;
    this.format = format;
    this.internalFormat = null;
    this.type = type;
    this.offset = new Vector2(0, 0);
    this.repeat = new Vector2(1, 1);
    this.center = new Vector2(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Matrix3();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    if (typeof colorSpace === "string") {
      this.colorSpace = colorSpace;
    } else {
      warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
      this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
    }
    this.userData = {};
    this.version = 0;
    this.onUpdate = null;
    this.isRenderTargetTexture = false;
    this.needsPMREMUpdate = false;
  }
  get image() {
    return this.source.data;
  }
  set image(value = null) {
    this.source.data = value;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.source = source.source;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.channel = source.channel;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.internalFormat = source.internalFormat;
    this.type = source.type;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.center.copy(source.center);
    this.rotation = source.rotation;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrix.copy(source.matrix);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.colorSpace = source.colorSpace;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    this.needsUpdate = true;
    return this;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.textures[this.uuid] !== void 0) {
      return meta.textures[this.uuid];
    }
    const output = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(meta).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0)
      output.userData = this.userData;
    if (!isRootObject) {
      meta.textures[this.uuid] = output;
    }
    return output;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(uv) {
    if (this.mapping !== UVMapping)
      return uv;
    uv.applyMatrix3(this.matrix);
    if (uv.x < 0 || uv.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          uv.x = uv.x - Math.floor(uv.x);
          break;
        case ClampToEdgeWrapping:
          uv.x = uv.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.x) % 2) === 1) {
            uv.x = Math.ceil(uv.x) - uv.x;
          } else {
            uv.x = uv.x - Math.floor(uv.x);
          }
          break;
      }
    }
    if (uv.y < 0 || uv.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          uv.y = uv.y - Math.floor(uv.y);
          break;
        case ClampToEdgeWrapping:
          uv.y = uv.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.y) % 2) === 1) {
            uv.y = Math.ceil(uv.y) - uv.y;
          } else {
            uv.y = uv.y - Math.floor(uv.y);
          }
          break;
      }
    }
    if (this.flipY) {
      uv.y = 1 - uv.y;
    }
    return uv;
  }
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  get encoding() {
    warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
    return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;
  }
  set encoding(encoding) {
    warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
    this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
  }
}
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
class Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    Vector4.prototype.isVector4 = true;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setW(w) {
    this.w = w;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== void 0 ? v.w : 1;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z, w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  setAxisAngleFromQuaternion(q) {
    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(m) {
    let angle, x, y, z;
    const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this;
    }
    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s) < 1e-3)
      s = 1;
    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    this.w = Math.max(min.w, Math.min(max.w, this.w));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    this.w = Math.max(minVal, Math.min(maxVal, this.w));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
}
class Quaternion {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.isQuaternion = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
    if (t === 0) {
      dst[dstOffset + 0] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
      return;
    }
    if (t === 1) {
      dst[dstOffset + 0] = x1;
      dst[dstOffset + 1] = y1;
      dst[dstOffset + 2] = z1;
      dst[dstOffset + 3] = w1;
      return;
    }
    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let s = 1 - t;
      const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
      if (sqrSin > Number.EPSILON) {
        const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
        s = Math.sin(s * len) / sin;
        t = Math.sin(t * len) / sin;
      }
      const tDir = t * dir;
      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w0 = w0 * s + w1 * tDir;
      if (s === 1 - t) {
        const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w1 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  set(x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(euler, update) {
    const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
    const cos = Math.cos;
    const sin = Math.sin;
    const c1 = cos(x / 2);
    const c2 = cos(y / 2);
    const c3 = cos(z / 2);
    const s1 = sin(x / 2);
    const s2 = sin(y / 2);
    const s3 = sin(z / 2);
    switch (order) {
      case "XYZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "YXZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "ZXY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "ZYX":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "YZX":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "XZY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
    }
    if (update !== false)
      this._onChangeCallback();
    return this;
  }
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle / 2, s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m) {
    const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(vFrom, vTo) {
    let r = vFrom.dot(vTo) + 1;
    if (r < Number.EPSILON) {
      r = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r;
      }
    } else {
      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r;
    }
    return this.normalize();
  }
  angleTo(q) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
  }
  rotateTowards(q, step) {
    const angle = this.angleTo(q);
    if (angle === 0)
      return this;
    const t = Math.min(1, step / angle);
    this.slerp(q, t);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let l = this.length();
    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(q) {
    return this.multiplyQuaternions(this, q);
  }
  premultiply(q) {
    return this.multiplyQuaternions(q, this);
  }
  multiplyQuaternions(a, b) {
    const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
    const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  slerp(qb, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(qb);
    const x = this._x, y = this._y, z = this._z, w = this._w;
    let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
    if (cosHalfTheta < 0) {
      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(qb);
    }
    if (cosHalfTheta >= 1) {
      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;
      return this;
    }
    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      this._w = s * w + t * this._w;
      this._x = s * x + t * this._x;
      this._y = s * y + t * this._y;
      this._z = s * z + t * this._z;
      this.normalize();
      this._onChangeCallback();
      return this;
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;
    this._onChangeCallback();
    return this;
  }
  slerpQuaternions(qa, qb, t) {
    return this.copy(qa).slerp(qb, t);
  }
  random() {
    const u1 = Math.random();
    const sqrt1u1 = Math.sqrt(1 - u1);
    const sqrtu1 = Math.sqrt(u1);
    const u2 = 2 * Math.PI * Math.random();
    const u3 = 2 * Math.PI * Math.random();
    return this.set(
      sqrt1u1 * Math.cos(u2),
      sqrtu1 * Math.sin(u3),
      sqrtu1 * Math.cos(u3),
      sqrt1u1 * Math.sin(u2)
    );
  }
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._w = attribute.getW(index);
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
}
class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    Vector3.prototype.isVector3 = true;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x, y, z) {
    if (z === void 0)
      z = this.z;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  }
  applyEuler(euler) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
  }
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  }
  applyNormalMatrix(m) {
    return this.applyMatrix3(m).normalize();
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  applyQuaternion(q) {
    const x = this.x, y = this.y, z = this.z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;
    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  }
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  transformDirection(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  cross(v) {
    return this.crossVectors(this, v);
  }
  crossVectors(a, b) {
    const ax = a.x, ay = a.y, az = a.z;
    const bx = b.x, by = b.y, bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  projectOnVector(v) {
    const denominator = v.lengthSq();
    if (denominator === 0)
      return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v).multiplyScalar(scalar);
  }
  projectOnPlane(planeNormal) {
    _vector$b.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector$b);
  }
  reflect(normal) {
    return this.sub(_vector$b.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0)
      return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
  }
  setFromSpherical(s) {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  setFromCylindrical(c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }
  setFromCylindricalCoords(radius, theta, y) {
    this.x = radius * Math.sin(theta);
    this.y = y;
    this.z = radius * Math.cos(theta);
    return this;
  }
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    return this;
  }
  setFromMatrixScale(m) {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  setFromMatrixColumn(m, index) {
    return this.fromArray(m.elements, index * 4);
  }
  setFromMatrix3Column(m, index) {
    return this.fromArray(m.elements, index * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(c) {
    this.x = c.r;
    this.y = c.g;
    this.z = c.b;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    const u = (Math.random() - 0.5) * 2;
    const t = Math.random() * Math.PI * 2;
    const f = Math.sqrt(1 - u ** 2);
    this.x = f * Math.cos(t);
    this.y = f * Math.sin(t);
    this.z = u;
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
}
const _vector$b = /* @__PURE__ */ new Vector3();
const _quaternion$4 = /* @__PURE__ */ new Quaternion();
class Box3 {
  constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = min;
    this.max = max;
  }
  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }
  setFromArray(array) {
    this.makeEmpty();
    for (let i = 0, il = array.length; i < il; i += 3) {
      this.expandByPoint(_vector$a.fromArray(array, i));
    }
    return this;
  }
  setFromBufferAttribute(attribute) {
    this.makeEmpty();
    for (let i = 0, il = attribute.count; i < il; i++) {
      this.expandByPoint(_vector$a.fromBufferAttribute(attribute, i));
    }
    return this;
  }
  setFromPoints(points) {
    this.makeEmpty();
    for (let i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$a.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  setFromObject(object, precise = false) {
    this.makeEmpty();
    return this.expandByObject(object, precise);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
  }
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  expandByObject(object, precise = false) {
    object.updateWorldMatrix(false, false);
    if (object.boundingBox !== void 0) {
      if (object.boundingBox === null) {
        object.computeBoundingBox();
      }
      _box$3.copy(object.boundingBox);
      _box$3.applyMatrix4(object.matrixWorld);
      this.union(_box$3);
    } else {
      const geometry = object.geometry;
      if (geometry !== void 0) {
        if (precise && geometry.attributes !== void 0 && geometry.attributes.position !== void 0) {
          const position = geometry.attributes.position;
          for (let i = 0, l = position.count; i < l; i++) {
            _vector$a.fromBufferAttribute(position, i).applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$a);
          }
        } else {
          if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
          }
          _box$3.copy(geometry.boundingBox);
          _box$3.applyMatrix4(object.matrixWorld);
          this.union(_box$3);
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      this.expandByObject(children[i], precise);
    }
    return this;
  }
  containsPoint(point) {
    return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
  }
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
  }
  getParameter(point, target) {
    return target.set(
      (point.x - this.min.x) / (this.max.x - this.min.x),
      (point.y - this.min.y) / (this.max.y - this.min.y),
      (point.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(box) {
    return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
  }
  intersectsSphere(sphere) {
    this.clampPoint(sphere.center, _vector$a);
    return _vector$a.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
  }
  intersectsPlane(plane) {
    let min, max;
    if (plane.normal.x > 0) {
      min = plane.normal.x * this.min.x;
      max = plane.normal.x * this.max.x;
    } else {
      min = plane.normal.x * this.max.x;
      max = plane.normal.x * this.min.x;
    }
    if (plane.normal.y > 0) {
      min += plane.normal.y * this.min.y;
      max += plane.normal.y * this.max.y;
    } else {
      min += plane.normal.y * this.max.y;
      max += plane.normal.y * this.min.y;
    }
    if (plane.normal.z > 0) {
      min += plane.normal.z * this.min.z;
      max += plane.normal.z * this.max.z;
    } else {
      min += plane.normal.z * this.max.z;
      max += plane.normal.z * this.min.z;
    }
    return min <= -plane.constant && max >= -plane.constant;
  }
  intersectsTriangle(triangle) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(_center);
    _extents.subVectors(this.max, _center);
    _v0$2.subVectors(triangle.a, _center);
    _v1$7.subVectors(triangle.b, _center);
    _v2$4.subVectors(triangle.c, _center);
    _f0.subVectors(_v1$7, _v0$2);
    _f1.subVectors(_v2$4, _v1$7);
    _f2.subVectors(_v0$2, _v2$4);
    let axes = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    _triangleNormal.crossVectors(_f0, _f1);
    axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
    return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
  }
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  distanceToPoint(point) {
    return this.clampPoint(point, _vector$a).distanceTo(point);
  }
  getBoundingSphere(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
    } else {
      this.getCenter(target.center);
      target.radius = this.getSize(_vector$a).length() * 0.5;
    }
    return target;
  }
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    if (this.isEmpty())
      this.makeEmpty();
    return this;
  }
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  applyMatrix4(matrix) {
    if (this.isEmpty())
      return this;
    _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
    _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
    this.setFromPoints(_points);
    return this;
  }
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
}
const _points = [
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3()
];
const _vector$a = /* @__PURE__ */ new Vector3();
const _box$3 = /* @__PURE__ */ new Box3();
const _v0$2 = /* @__PURE__ */ new Vector3();
const _v1$7 = /* @__PURE__ */ new Vector3();
const _v2$4 = /* @__PURE__ */ new Vector3();
const _f0 = /* @__PURE__ */ new Vector3();
const _f1 = /* @__PURE__ */ new Vector3();
const _f2 = /* @__PURE__ */ new Vector3();
const _center = /* @__PURE__ */ new Vector3();
const _extents = /* @__PURE__ */ new Vector3();
const _triangleNormal = /* @__PURE__ */ new Vector3();
const _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(axes, v0, v1, v2, extents) {
  for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
    _testAxis.fromArray(axes, i);
    const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
    const p0 = v0.dot(_testAxis);
    const p1 = v1.dot(_testAxis);
    const p2 = v2.dot(_testAxis);
    if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
      return false;
    }
  }
  return true;
}
const _box$2 = /* @__PURE__ */ new Box3();
const _v1$6 = /* @__PURE__ */ new Vector3();
const _v2$3 = /* @__PURE__ */ new Vector3();
class Sphere {
  constructor(center = new Vector3(), radius = -1) {
    this.center = center;
    this.radius = radius;
  }
  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }
  setFromPoints(points, optionalCenter) {
    const center = this.center;
    if (optionalCenter !== void 0) {
      center.copy(optionalCenter);
    } else {
      _box$2.setFromPoints(points).getCenter(center);
    }
    let maxRadiusSq = 0;
    for (let i = 0, il = points.length; i < il; i++) {
      maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
    }
    this.radius = Math.sqrt(maxRadiusSq);
    return this;
  }
  copy(sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(point) {
    return point.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(sphere) {
    const radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  }
  intersectsBox(box) {
    return box.intersectsSphere(this);
  }
  intersectsPlane(plane) {
    return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(point, target) {
    const deltaLengthSq = this.center.distanceToSquared(point);
    target.copy(point);
    if (deltaLengthSq > this.radius * this.radius) {
      target.sub(this.center).normalize();
      target.multiplyScalar(this.radius).add(this.center);
    }
    return target;
  }
  getBoundingBox(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
      return target;
    }
    target.set(this.center, this.center);
    target.expandByScalar(this.radius);
    return target;
  }
  applyMatrix4(matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  }
  translate(offset) {
    this.center.add(offset);
    return this;
  }
  expandByPoint(point) {
    if (this.isEmpty()) {
      this.center.copy(point);
      this.radius = 0;
      return this;
    }
    _v1$6.subVectors(point, this.center);
    const lengthSq = _v1$6.lengthSq();
    if (lengthSq > this.radius * this.radius) {
      const length = Math.sqrt(lengthSq);
      const delta = (length - this.radius) * 0.5;
      this.center.addScaledVector(_v1$6, delta / length);
      this.radius += delta;
    }
    return this;
  }
  union(sphere) {
    if (sphere.isEmpty()) {
      return this;
    }
    if (this.isEmpty()) {
      this.copy(sphere);
      return this;
    }
    if (this.center.equals(sphere.center) === true) {
      this.radius = Math.max(this.radius, sphere.radius);
    } else {
      _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
      this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
      this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
    }
    return this;
  }
  equals(sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _vector$9 = /* @__PURE__ */ new Vector3();
const _segCenter = /* @__PURE__ */ new Vector3();
const _segDir = /* @__PURE__ */ new Vector3();
const _diff = /* @__PURE__ */ new Vector3();
const _edge1 = /* @__PURE__ */ new Vector3();
const _edge2 = /* @__PURE__ */ new Vector3();
const _normal$1 = /* @__PURE__ */ new Vector3();
class Ray {
  constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
    this.origin = origin;
    this.direction = direction;
  }
  set(origin, direction) {
    this.origin.copy(origin);
    this.direction.copy(direction);
    return this;
  }
  copy(ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);
    return this;
  }
  at(t, target) {
    return target.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(v) {
    this.direction.copy(v).sub(this.origin).normalize();
    return this;
  }
  recast(t) {
    this.origin.copy(this.at(t, _vector$9));
    return this;
  }
  closestPointToPoint(point, target) {
    target.subVectors(point, this.origin);
    const directionDistance = target.dot(this.direction);
    if (directionDistance < 0) {
      return target.copy(this.origin);
    }
    return target.copy(this.origin).addScaledVector(this.direction, directionDistance);
  }
  distanceToPoint(point) {
    return Math.sqrt(this.distanceSqToPoint(point));
  }
  distanceSqToPoint(point) {
    const directionDistance = _vector$9.subVectors(point, this.origin).dot(this.direction);
    if (directionDistance < 0) {
      return this.origin.distanceToSquared(point);
    }
    _vector$9.copy(this.origin).addScaledVector(this.direction, directionDistance);
    return _vector$9.distanceToSquared(point);
  }
  distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
    _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
    _segDir.copy(v1).sub(v0).normalize();
    _diff.copy(this.origin).sub(_segCenter);
    const segExtent = v0.distanceTo(v1) * 0.5;
    const a01 = -this.direction.dot(_segDir);
    const b0 = _diff.dot(this.direction);
    const b1 = -_diff.dot(_segDir);
    const c = _diff.lengthSq();
    const det = Math.abs(1 - a01 * a01);
    let s0, s1, sqrDist, extDet;
    if (det > 0) {
      s0 = a01 * b1 - b0;
      s1 = a01 * b0 - b1;
      extDet = segExtent * det;
      if (s0 >= 0) {
        if (s1 >= -extDet) {
          if (s1 <= extDet) {
            const invDet = 1 / det;
            s0 *= invDet;
            s1 *= invDet;
            sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
          } else {
            s1 = segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          s1 = -segExtent;
          s0 = Math.max(0, -(a01 * s1 + b0));
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      } else {
        if (s1 <= -extDet) {
          s0 = Math.max(0, -(-a01 * segExtent + b0));
          s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        } else if (s1 <= extDet) {
          s0 = 0;
          s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = s1 * (s1 + 2 * b1) + c;
        } else {
          s0 = Math.max(0, -(a01 * segExtent + b0));
          s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      }
    } else {
      s1 = a01 > 0 ? -segExtent : segExtent;
      s0 = Math.max(0, -(a01 * s1 + b0));
      sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
    }
    if (optionalPointOnRay) {
      optionalPointOnRay.copy(this.origin).addScaledVector(this.direction, s0);
    }
    if (optionalPointOnSegment) {
      optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir, s1);
    }
    return sqrDist;
  }
  intersectSphere(sphere, target) {
    _vector$9.subVectors(sphere.center, this.origin);
    const tca = _vector$9.dot(this.direction);
    const d2 = _vector$9.dot(_vector$9) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2)
      return null;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t1 < 0)
      return null;
    if (t0 < 0)
      return this.at(t1, target);
    return this.at(t0, target);
  }
  intersectsSphere(sphere) {
    return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
  }
  distanceToPlane(plane) {
    const denominator = plane.normal.dot(this.direction);
    if (denominator === 0) {
      if (plane.distanceToPoint(this.origin) === 0) {
        return 0;
      }
      return null;
    }
    const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
    return t >= 0 ? t : null;
  }
  intersectPlane(plane, target) {
    const t = this.distanceToPlane(plane);
    if (t === null) {
      return null;
    }
    return this.at(t, target);
  }
  intersectsPlane(plane) {
    const distToPoint = plane.distanceToPoint(this.origin);
    if (distToPoint === 0) {
      return true;
    }
    const denominator = plane.normal.dot(this.direction);
    if (denominator * distToPoint < 0) {
      return true;
    }
    return false;
  }
  intersectBox(box, target) {
    let tmin, tmax, tymin, tymax, tzmin, tzmax;
    const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
    const origin = this.origin;
    if (invdirx >= 0) {
      tmin = (box.min.x - origin.x) * invdirx;
      tmax = (box.max.x - origin.x) * invdirx;
    } else {
      tmin = (box.max.x - origin.x) * invdirx;
      tmax = (box.min.x - origin.x) * invdirx;
    }
    if (invdiry >= 0) {
      tymin = (box.min.y - origin.y) * invdiry;
      tymax = (box.max.y - origin.y) * invdiry;
    } else {
      tymin = (box.max.y - origin.y) * invdiry;
      tymax = (box.min.y - origin.y) * invdiry;
    }
    if (tmin > tymax || tymin > tmax)
      return null;
    if (tymin > tmin || isNaN(tmin))
      tmin = tymin;
    if (tymax < tmax || isNaN(tmax))
      tmax = tymax;
    if (invdirz >= 0) {
      tzmin = (box.min.z - origin.z) * invdirz;
      tzmax = (box.max.z - origin.z) * invdirz;
    } else {
      tzmin = (box.max.z - origin.z) * invdirz;
      tzmax = (box.min.z - origin.z) * invdirz;
    }
    if (tmin > tzmax || tzmin > tmax)
      return null;
    if (tzmin > tmin || tmin !== tmin)
      tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax)
      tmax = tzmax;
    if (tmax < 0)
      return null;
    return this.at(tmin >= 0 ? tmin : tmax, target);
  }
  intersectsBox(box) {
    return this.intersectBox(box, _vector$9) !== null;
  }
  intersectTriangle(a, b, c, backfaceCulling, target) {
    _edge1.subVectors(b, a);
    _edge2.subVectors(c, a);
    _normal$1.crossVectors(_edge1, _edge2);
    let DdN = this.direction.dot(_normal$1);
    let sign;
    if (DdN > 0) {
      if (backfaceCulling)
        return null;
      sign = 1;
    } else if (DdN < 0) {
      sign = -1;
      DdN = -DdN;
    } else {
      return null;
    }
    _diff.subVectors(this.origin, a);
    const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (DdQxE2 < 0) {
      return null;
    }
    const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff));
    if (DdE1xQ < 0) {
      return null;
    }
    if (DdQxE2 + DdE1xQ > DdN) {
      return null;
    }
    const QdN = -sign * _diff.dot(_normal$1);
    if (QdN < 0) {
      return null;
    }
    return this.at(QdN / DdN, target);
  }
  applyMatrix4(matrix4) {
    this.origin.applyMatrix4(matrix4);
    this.direction.transformDirection(matrix4);
    return this;
  }
  equals(ray) {
    return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    Matrix4.prototype.isMatrix4 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
    }
  }
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  copyPosition(m) {
    const te = this.elements, me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  setFromMatrix3(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[3],
      me[6],
      0,
      me[1],
      me[4],
      me[7],
      0,
      me[2],
      me[5],
      me[8],
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  extractRotation(m) {
    const te = this.elements;
    const me = m.elements;
    const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
    const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
    const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromEuler(euler) {
    const te = this.elements;
    const x = euler.x, y = euler.y, z = euler.z;
    const a = Math.cos(x), b = Math.sin(x);
    const c = Math.cos(y), d = Math.sin(y);
    const e = Math.cos(z), f = Math.sin(z);
    if (euler.order === "XYZ") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === "YXZ") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === "ZXY") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === "ZYX") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === "YZX") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === "XZY") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(q) {
    return this.compose(_zero, q, _one);
  }
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      if (Math.abs(up.z) === 1) {
        _z.x += 1e-4;
      } else {
        _z.z += 1e-4;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
    const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
    const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
    const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  }
  transpose() {
    const te = this.elements;
    let tmp;
    tmp = te[1];
    te[1] = te[4];
    te[4] = tmp;
    tmp = te[2];
    te[2] = te[8];
    te[8] = tmp;
    tmp = te[6];
    te[6] = te[9];
    te[9] = tmp;
    tmp = te[3];
    te[3] = te[12];
    te[12] = tmp;
    tmp = te[7];
    te[7] = te[13];
    te[13] = tmp;
    tmp = te[11];
    te[11] = te[14];
    te[14] = tmp;
    return this;
  }
  setPosition(x, y, z) {
    const te = this.elements;
    if (x.isVector3) {
      te[12] = x.x;
      te[13] = x.y;
      te[14] = x.z;
    } else {
      te[12] = x;
      te[13] = y;
      te[14] = z;
    }
    return this;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
    if (det === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
    te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
    te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
    te[4] = t12 * detInv;
    te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
    te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
    te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
    te[8] = t13 * detInv;
    te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
    te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
    te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
    te[12] = t14 * detInv;
    te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
    te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
    te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
    return this;
  }
  scale(v) {
    const te = this.elements;
    const x = v.x, y = v.y, z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  }
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  makeTranslation(x, y, z) {
    if (x.isVector3) {
      this.set(
        1,
        0,
        0,
        x.x,
        0,
        1,
        0,
        x.y,
        0,
        0,
        1,
        x.z,
        0,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        0,
        x,
        0,
        1,
        0,
        y,
        0,
        0,
        1,
        z,
        0,
        0,
        0,
        1
      );
    }
    return this;
  }
  makeRotationX(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      1,
      0,
      0,
      0,
      0,
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationY(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      0,
      s,
      0,
      0,
      1,
      0,
      0,
      -s,
      0,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationZ(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationAxis(axis, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x, y = axis.y, z = axis.z;
    const tx = t * x, ty = t * y;
    this.set(
      tx * x + c,
      tx * y - s * z,
      tx * z + s * y,
      0,
      tx * y + s * z,
      ty * y + c,
      ty * z - s * x,
      0,
      tx * z - s * y,
      ty * z + s * x,
      t * z * z + c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeScale(x, y, z) {
    this.set(
      x,
      0,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      0,
      z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(
      1,
      yx,
      zx,
      0,
      xy,
      1,
      zy,
      0,
      xz,
      yz,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  decompose(position, quaternion, scale) {
    const te = this.elements;
    let sx = _v1$5.set(te[0], te[1], te[2]).length();
    const sy = _v1$5.set(te[4], te[5], te[6]).length();
    const sz = _v1$5.set(te[8], te[9], te[10]).length();
    const det = this.determinant();
    if (det < 0)
      sx = -sx;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];
    _m1$2.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1$2.elements[0] *= invSX;
    _m1$2.elements[1] *= invSX;
    _m1$2.elements[2] *= invSX;
    _m1$2.elements[4] *= invSY;
    _m1$2.elements[5] *= invSY;
    _m1$2.elements[6] *= invSY;
    _m1$2.elements[8] *= invSZ;
    _m1$2.elements[9] *= invSZ;
    _m1$2.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1$2);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
    const te = this.elements;
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    let c, d;
    if (coordinateSystem === WebGLCoordinateSystem) {
      c = -(far + near) / (far - near);
      d = -2 * far * near / (far - near);
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      c = -far / (far - near);
      d = -far * near / (far - near);
    } else {
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
    }
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
    const te = this.elements;
    const w = 1 / (right - left);
    const h = 1 / (top - bottom);
    const p = 1 / (far - near);
    const x = (right + left) * w;
    const y = (top + bottom) * h;
    let z, zInv;
    if (coordinateSystem === WebGLCoordinateSystem) {
      z = (far + near) * p;
      zInv = -2 * p;
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      z = near * p;
      zInv = -1 * p;
    } else {
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
    }
    te[0] = 2 * w;
    te[4] = 0;
    te[8] = 0;
    te[12] = -x;
    te[1] = 0;
    te[5] = 2 * h;
    te[9] = 0;
    te[13] = -y;
    te[2] = 0;
    te[6] = 0;
    te[10] = zInv;
    te[14] = -z;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 16; i++) {
      if (te[i] !== me[i])
        return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
}
const _v1$5 = /* @__PURE__ */ new Vector3();
const _m1$2 = /* @__PURE__ */ new Matrix4();
const _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
const _one = /* @__PURE__ */ new Vector3(1, 1, 1);
const _x = /* @__PURE__ */ new Vector3();
const _y = /* @__PURE__ */ new Vector3();
const _z = /* @__PURE__ */ new Vector3();
const _matrix = /* @__PURE__ */ new Matrix4();
const _quaternion$3 = /* @__PURE__ */ new Quaternion();
class Euler {
  constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  set(x, y, z, order = this._order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m, order = this._order, update = true) {
    const te = m.elements;
    const m11 = te[0], m12 = te[4], m13 = te[8];
    const m21 = te[1], m22 = te[5], m23 = te[9];
    const m31 = te[2], m32 = te[6], m33 = te[10];
    switch (order) {
      case "XYZ":
        this._y = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case "YZX":
        this._z = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case "XZY":
        this._z = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
    }
    this._order = order;
    if (update === true)
      this._onChangeCallback();
    return this;
  }
  setFromQuaternion(q, order, update) {
    _matrix.makeRotationFromQuaternion(q);
    return this.setFromRotationMatrix(_matrix, order, update);
  }
  setFromVector3(v, order = this._order) {
    return this.set(v.x, v.y, v.z, order);
  }
  reorder(newOrder) {
    _quaternion$3.setFromEuler(this);
    return this.setFromQuaternion(_quaternion$3, newOrder);
  }
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== void 0)
      this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
}
Euler.DEFAULT_ORDER = "XYZ";
class Layers {
  constructor() {
    this.mask = 1 | 0;
  }
  set(channel) {
    this.mask = (1 << channel | 0) >>> 0;
  }
  enable(channel) {
    this.mask |= 1 << channel | 0;
  }
  enableAll() {
    this.mask = 4294967295 | 0;
  }
  toggle(channel) {
    this.mask ^= 1 << channel | 0;
  }
  disable(channel) {
    this.mask &= ~(1 << channel | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }
  isEnabled(channel) {
    return (this.mask & (1 << channel | 0)) !== 0;
  }
}
let _object3DId = 0;
const _v1$4 = /* @__PURE__ */ new Vector3();
const _q1 = /* @__PURE__ */ new Quaternion();
const _m1$1 = /* @__PURE__ */ new Matrix4();
const _target = /* @__PURE__ */ new Vector3();
const _position$3 = /* @__PURE__ */ new Vector3();
const _scale$2 = /* @__PURE__ */ new Vector3();
const _quaternion$2 = /* @__PURE__ */ new Quaternion();
const _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
const _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
const _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
const _addedEvent = { type: "added" };
const _removedEvent = { type: "removed" };
class Object3D extends EventDispatcher {
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", { value: _object3DId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = Object3D.DEFAULT_UP.clone();
    const position = new Vector3();
    const rotation = new Euler();
    const quaternion = new Quaternion();
    const scale = new Vector3(1, 1, 1);
    function onRotationChange() {
      quaternion.setFromEuler(rotation, false);
    }
    function onQuaternionChange() {
      rotation.setFromQuaternion(quaternion, void 0, false);
    }
    rotation._onChange(onRotationChange);
    quaternion._onChange(onQuaternionChange);
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: position
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: rotation
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: quaternion
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: scale
      },
      modelViewMatrix: {
        value: new Matrix4()
      },
      normalMatrix: {
        value: new Matrix3()
      }
    });
    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();
    this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.layers = new Layers();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(matrix) {
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    this.matrix.premultiply(matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(q) {
    this.quaternion.premultiply(q);
    return this;
  }
  setRotationFromAxisAngle(axis, angle) {
    this.quaternion.setFromAxisAngle(axis, angle);
  }
  setRotationFromEuler(euler) {
    this.quaternion.setFromEuler(euler, true);
  }
  setRotationFromMatrix(m) {
    this.quaternion.setFromRotationMatrix(m);
  }
  setRotationFromQuaternion(q) {
    this.quaternion.copy(q);
  }
  rotateOnAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q1);
    return this;
  }
  rotateOnWorldAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q1);
    return this;
  }
  rotateX(angle) {
    return this.rotateOnAxis(_xAxis, angle);
  }
  rotateY(angle) {
    return this.rotateOnAxis(_yAxis, angle);
  }
  rotateZ(angle) {
    return this.rotateOnAxis(_zAxis, angle);
  }
  translateOnAxis(axis, distance) {
    _v1$4.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1$4.multiplyScalar(distance));
    return this;
  }
  translateX(distance) {
    return this.translateOnAxis(_xAxis, distance);
  }
  translateY(distance) {
    return this.translateOnAxis(_yAxis, distance);
  }
  translateZ(distance) {
    return this.translateOnAxis(_zAxis, distance);
  }
  localToWorld(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  lookAt(x, y, z) {
    if (x.isVector3) {
      _target.copy(x);
    } else {
      _target.set(x, y, z);
    }
    const parent = this.parent;
    this.updateWorldMatrix(true, false);
    _position$3.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      _m1$1.lookAt(_position$3, _target, this.up);
    } else {
      _m1$1.lookAt(_target, _position$3, this.up);
    }
    this.quaternion.setFromRotationMatrix(_m1$1);
    if (parent) {
      _m1$1.extractRotation(parent.matrixWorld);
      _q1.setFromRotationMatrix(_m1$1);
      this.quaternion.premultiply(_q1.invert());
    }
  }
  add(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    if (object === this) {
      console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
      return this;
    }
    if (object && object.isObject3D) {
      if (object.parent !== null) {
        object.parent.remove(object);
      }
      object.parent = this;
      this.children.push(object);
      object.dispatchEvent(_addedEvent);
    } else {
      console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
    }
    return this;
  }
  remove(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
      return this;
    }
    const index = this.children.indexOf(object);
    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);
      object.dispatchEvent(_removedEvent);
    }
    return this;
  }
  removeFromParent() {
    const parent = this.parent;
    if (parent !== null) {
      parent.remove(this);
    }
    return this;
  }
  clear() {
    for (let i = 0; i < this.children.length; i++) {
      const object = this.children[i];
      object.parent = null;
      object.dispatchEvent(_removedEvent);
    }
    this.children.length = 0;
    return this;
  }
  attach(object) {
    this.updateWorldMatrix(true, false);
    _m1$1.copy(this.matrixWorld).invert();
    if (object.parent !== null) {
      object.parent.updateWorldMatrix(true, false);
      _m1$1.multiply(object.parent.matrixWorld);
    }
    object.applyMatrix4(_m1$1);
    this.add(object);
    object.updateWorldMatrix(false, true);
    return this;
  }
  getObjectById(id) {
    return this.getObjectByProperty("id", id);
  }
  getObjectByName(name) {
    return this.getObjectByProperty("name", name);
  }
  getObjectByProperty(name, value) {
    if (this[name] === value)
      return this;
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];
      const object = child.getObjectByProperty(name, value);
      if (object !== void 0) {
        return object;
      }
    }
    return void 0;
  }
  getObjectsByProperty(name, value) {
    let result = [];
    if (this[name] === value)
      result.push(this);
    for (let i = 0, l = this.children.length; i < l; i++) {
      const childResult = this.children[i].getObjectsByProperty(name, value);
      if (childResult.length > 0) {
        result = result.concat(childResult);
      }
    }
    return result;
  }
  getWorldPosition(target) {
    this.updateWorldMatrix(true, false);
    return target.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, target, _scale$2);
    return target;
  }
  getWorldScale(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, _quaternion$2, target);
    return target;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  }
  traverseVisible(callback) {
    if (this.visible === false)
      return;
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  }
  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i];
      if (child.matrixWorldAutoUpdate === true || force === true) {
        child.updateMatrixWorld(force);
      }
    }
  }
  updateWorldMatrix(updateParents, updateChildren) {
    const parent = this.parent;
    if (updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true) {
      parent.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    if (this.parent === null) {
      this.matrixWorld.copy(this.matrix);
    } else {
      this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
    }
    if (updateChildren === true) {
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        if (child.matrixWorldAutoUpdate === true) {
          child.updateWorldMatrix(false, true);
        }
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    const output = {};
    if (isRootObject) {
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      output.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== "")
      object.name = this.name;
    if (this.castShadow === true)
      object.castShadow = true;
    if (this.receiveShadow === true)
      object.receiveShadow = true;
    if (this.visible === false)
      object.visible = false;
    if (this.frustumCulled === false)
      object.frustumCulled = false;
    if (this.renderOrder !== 0)
      object.renderOrder = this.renderOrder;
    if (Object.keys(this.userData).length > 0)
      object.userData = this.userData;
    object.layers = this.layers.mask;
    object.matrix = this.matrix.toArray();
    object.up = this.up.toArray();
    if (this.matrixAutoUpdate === false)
      object.matrixAutoUpdate = false;
    if (this.isInstancedMesh) {
      object.type = "InstancedMesh";
      object.count = this.count;
      object.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null)
        object.instanceColor = this.instanceColor.toJSON();
    }
    function serialize(library, element) {
      if (library[element.uuid] === void 0) {
        library[element.uuid] = element.toJSON(meta);
      }
      return element.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          object.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          object.background = this.background.toJSON(meta).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        object.environment = this.environment.toJSON(meta).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      object.geometry = serialize(meta.geometries, this.geometry);
      const parameters = this.geometry.parameters;
      if (parameters !== void 0 && parameters.shapes !== void 0) {
        const shapes = parameters.shapes;
        if (Array.isArray(shapes)) {
          for (let i = 0, l = shapes.length; i < l; i++) {
            const shape = shapes[i];
            serialize(meta.shapes, shape);
          }
        } else {
          serialize(meta.shapes, shapes);
        }
      }
    }
    if (this.isSkinnedMesh) {
      object.bindMode = this.bindMode;
      object.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== void 0) {
        serialize(meta.skeletons, this.skeleton);
        object.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== void 0) {
      if (Array.isArray(this.material)) {
        const uuids = [];
        for (let i = 0, l = this.material.length; i < l; i++) {
          uuids.push(serialize(meta.materials, this.material[i]));
        }
        object.material = uuids;
      } else {
        object.material = serialize(meta.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      object.children = [];
      for (let i = 0; i < this.children.length; i++) {
        object.children.push(this.children[i].toJSON(meta).object);
      }
    }
    if (this.animations.length > 0) {
      object.animations = [];
      for (let i = 0; i < this.animations.length; i++) {
        const animation = this.animations[i];
        object.animations.push(serialize(meta.animations, animation));
      }
    }
    if (isRootObject) {
      const geometries = extractFromCache(meta.geometries);
      const materials = extractFromCache(meta.materials);
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const shapes = extractFromCache(meta.shapes);
      const skeletons = extractFromCache(meta.skeletons);
      const animations = extractFromCache(meta.animations);
      const nodes = extractFromCache(meta.nodes);
      if (geometries.length > 0)
        output.geometries = geometries;
      if (materials.length > 0)
        output.materials = materials;
      if (textures.length > 0)
        output.textures = textures;
      if (images.length > 0)
        output.images = images;
      if (shapes.length > 0)
        output.shapes = shapes;
      if (skeletons.length > 0)
        output.skeletons = skeletons;
      if (animations.length > 0)
        output.animations = animations;
      if (nodes.length > 0)
        output.nodes = nodes;
    }
    output.object = object;
    return output;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data = cache[key];
        delete data.metadata;
        values.push(data);
      }
      return values;
    }
  }
  clone(recursive) {
    return new this.constructor().copy(this, recursive);
  }
  copy(source, recursive = true) {
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.rotation.order = source.rotation.order;
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
    this.layers.mask = source.layers.mask;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.animations = source.animations;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    if (recursive === true) {
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        this.add(child.clone());
      }
    }
    return this;
  }
}
Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const _v0$1 = /* @__PURE__ */ new Vector3();
const _v1$3 = /* @__PURE__ */ new Vector3();
const _v2$2 = /* @__PURE__ */ new Vector3();
const _v3$1 = /* @__PURE__ */ new Vector3();
const _vab = /* @__PURE__ */ new Vector3();
const _vac = /* @__PURE__ */ new Vector3();
const _vbc = /* @__PURE__ */ new Vector3();
const _vap = /* @__PURE__ */ new Vector3();
const _vbp = /* @__PURE__ */ new Vector3();
const _vcp = /* @__PURE__ */ new Vector3();
let warnedGetUV = false;
class Triangle {
  constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  static getNormal(a, b, c, target) {
    target.subVectors(c, b);
    _v0$1.subVectors(a, b);
    target.cross(_v0$1);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(point, a, b, c, target) {
    _v0$1.subVectors(c, a);
    _v1$3.subVectors(b, a);
    _v2$2.subVectors(point, a);
    const dot00 = _v0$1.dot(_v0$1);
    const dot01 = _v0$1.dot(_v1$3);
    const dot02 = _v0$1.dot(_v2$2);
    const dot11 = _v1$3.dot(_v1$3);
    const dot12 = _v1$3.dot(_v2$2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      return target.set(-2, -1, -1);
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
  static containsPoint(point, a, b, c) {
    this.getBarycoord(point, a, b, c, _v3$1);
    return _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1;
  }
  static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
    if (warnedGetUV === false) {
      console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().");
      warnedGetUV = true;
    }
    return this.getInterpolation(point, p1, p2, p3, uv1, uv2, uv3, target);
  }
  static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
    this.getBarycoord(point, p1, p2, p3, _v3$1);
    target.setScalar(0);
    target.addScaledVector(v1, _v3$1.x);
    target.addScaledVector(v2, _v3$1.y);
    target.addScaledVector(v3, _v3$1.z);
    return target;
  }
  static isFrontFacing(a, b, c, direction) {
    _v0$1.subVectors(c, b);
    _v1$3.subVectors(a, b);
    return _v0$1.cross(_v1$3).dot(direction) < 0 ? true : false;
  }
  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  setFromAttributeAndIndices(attribute, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute, i0);
    this.b.fromBufferAttribute(attribute, i1);
    this.c.fromBufferAttribute(attribute, i2);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  getArea() {
    _v0$1.subVectors(this.c, this.b);
    _v1$3.subVectors(this.a, this.b);
    return _v0$1.cross(_v1$3).length() * 0.5;
  }
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(target) {
    return Triangle.getNormal(this.a, this.b, this.c, target);
  }
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(point, target) {
    return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  getUV(point, uv1, uv2, uv3, target) {
    if (warnedGetUV === false) {
      console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().");
      warnedGetUV = true;
    }
    return Triangle.getInterpolation(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
  }
  getInterpolation(point, v1, v2, v3, target) {
    return Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
  }
  containsPoint(point) {
    return Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  isFrontFacing(direction) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
  }
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  closestPointToPoint(p, target) {
    const a = this.a, b = this.b, c = this.c;
    let v, w;
    _vab.subVectors(b, a);
    _vac.subVectors(c, a);
    _vap.subVectors(p, a);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a);
    }
    _vbp.subVectors(p, b);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v = d1 / (d1 - d3);
      return target.copy(a).addScaledVector(_vab, v);
    }
    _vcp.subVectors(p, c);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w = d2 / (d2 - d6);
      return target.copy(a).addScaledVector(_vac, w);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c, b);
      w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b).addScaledVector(_vbc, w);
    }
    const denom = 1 / (va + vb + vc);
    v = vb * denom;
    w = vc * denom;
    return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
  }
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
}
let materialId = 0;
class Material extends EventDispatcher {
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", { value: materialId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Material";
    this.blending = NormalBlending;
    this.side = FrontSide;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.blendSrc = SrcAlphaFactor;
    this.blendDst = OneMinusSrcAlphaFactor;
    this.blendEquation = AddEquation;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.depthFunc = LessEqualDepth;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = AlwaysStencilFunc;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = KeepStencilOp;
    this.stencilZFail = KeepStencilOp;
    this.stencilZPass = KeepStencilOp;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(value) {
    if (this._alphaTest > 0 !== value > 0) {
      this.version++;
    }
    this._alphaTest = value;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(values) {
    if (values === void 0)
      return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        console.warn(`THREE.Material: parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        console.warn(`THREE.Material: '${key}' is not a property of THREE.${this.type}.`);
        continue;
      }
      if (currentValue && currentValue.isColor) {
        currentValue.set(newValue);
      } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (isRootObject) {
      meta = {
        textures: {},
        images: {}
      };
    }
    const data = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "")
      data.name = this.name;
    if (this.color && this.color.isColor)
      data.color = this.color.getHex();
    if (this.roughness !== void 0)
      data.roughness = this.roughness;
    if (this.metalness !== void 0)
      data.metalness = this.metalness;
    if (this.sheen !== void 0)
      data.sheen = this.sheen;
    if (this.sheenColor && this.sheenColor.isColor)
      data.sheenColor = this.sheenColor.getHex();
    if (this.sheenRoughness !== void 0)
      data.sheenRoughness = this.sheenRoughness;
    if (this.emissive && this.emissive.isColor)
      data.emissive = this.emissive.getHex();
    if (this.emissiveIntensity && this.emissiveIntensity !== 1)
      data.emissiveIntensity = this.emissiveIntensity;
    if (this.specular && this.specular.isColor)
      data.specular = this.specular.getHex();
    if (this.specularIntensity !== void 0)
      data.specularIntensity = this.specularIntensity;
    if (this.specularColor && this.specularColor.isColor)
      data.specularColor = this.specularColor.getHex();
    if (this.shininess !== void 0)
      data.shininess = this.shininess;
    if (this.clearcoat !== void 0)
      data.clearcoat = this.clearcoat;
    if (this.clearcoatRoughness !== void 0)
      data.clearcoatRoughness = this.clearcoatRoughness;
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
      data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.iridescence !== void 0)
      data.iridescence = this.iridescence;
    if (this.iridescenceIOR !== void 0)
      data.iridescenceIOR = this.iridescenceIOR;
    if (this.iridescenceThicknessRange !== void 0)
      data.iridescenceThicknessRange = this.iridescenceThicknessRange;
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
    }
    if (this.anisotropy !== void 0)
      data.anisotropy = this.anisotropy;
    if (this.anisotropyRotation !== void 0)
      data.anisotropyRotation = this.anisotropyRotation;
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      data.anisotropyMap = this.anisotropyMap.toJSON(meta).uuid;
    }
    if (this.map && this.map.isTexture)
      data.map = this.map.toJSON(meta).uuid;
    if (this.matcap && this.matcap.isTexture)
      data.matcap = this.matcap.toJSON(meta).uuid;
    if (this.alphaMap && this.alphaMap.isTexture)
      data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap && this.lightMap.isTexture) {
      data.lightMap = this.lightMap.toJSON(meta).uuid;
      data.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      data.aoMap = this.aoMap.toJSON(meta).uuid;
      data.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalMapType = this.normalMapType;
      data.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture)
      data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap && this.metalnessMap.isTexture)
      data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap && this.emissiveMap.isTexture)
      data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap && this.specularMap.isTexture)
      data.specularMap = this.specularMap.toJSON(meta).uuid;
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture)
      data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
    if (this.specularColorMap && this.specularColorMap.isTexture)
      data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
    if (this.envMap && this.envMap.isTexture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      if (this.combine !== void 0)
        data.combine = this.combine;
    }
    if (this.envMapIntensity !== void 0)
      data.envMapIntensity = this.envMapIntensity;
    if (this.reflectivity !== void 0)
      data.reflectivity = this.reflectivity;
    if (this.refractionRatio !== void 0)
      data.refractionRatio = this.refractionRatio;
    if (this.gradientMap && this.gradientMap.isTexture) {
      data.gradientMap = this.gradientMap.toJSON(meta).uuid;
    }
    if (this.transmission !== void 0)
      data.transmission = this.transmission;
    if (this.transmissionMap && this.transmissionMap.isTexture)
      data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
    if (this.thickness !== void 0)
      data.thickness = this.thickness;
    if (this.thicknessMap && this.thicknessMap.isTexture)
      data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
    if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity)
      data.attenuationDistance = this.attenuationDistance;
    if (this.attenuationColor !== void 0)
      data.attenuationColor = this.attenuationColor.getHex();
    if (this.size !== void 0)
      data.size = this.size;
    if (this.shadowSide !== null)
      data.shadowSide = this.shadowSide;
    if (this.sizeAttenuation !== void 0)
      data.sizeAttenuation = this.sizeAttenuation;
    if (this.blending !== NormalBlending)
      data.blending = this.blending;
    if (this.side !== FrontSide)
      data.side = this.side;
    if (this.vertexColors)
      data.vertexColors = true;
    if (this.opacity < 1)
      data.opacity = this.opacity;
    if (this.transparent === true)
      data.transparent = this.transparent;
    data.depthFunc = this.depthFunc;
    data.depthTest = this.depthTest;
    data.depthWrite = this.depthWrite;
    data.colorWrite = this.colorWrite;
    data.stencilWrite = this.stencilWrite;
    data.stencilWriteMask = this.stencilWriteMask;
    data.stencilFunc = this.stencilFunc;
    data.stencilRef = this.stencilRef;
    data.stencilFuncMask = this.stencilFuncMask;
    data.stencilFail = this.stencilFail;
    data.stencilZFail = this.stencilZFail;
    data.stencilZPass = this.stencilZPass;
    if (this.rotation !== void 0 && this.rotation !== 0)
      data.rotation = this.rotation;
    if (this.polygonOffset === true)
      data.polygonOffset = true;
    if (this.polygonOffsetFactor !== 0)
      data.polygonOffsetFactor = this.polygonOffsetFactor;
    if (this.polygonOffsetUnits !== 0)
      data.polygonOffsetUnits = this.polygonOffsetUnits;
    if (this.linewidth !== void 0 && this.linewidth !== 1)
      data.linewidth = this.linewidth;
    if (this.dashSize !== void 0)
      data.dashSize = this.dashSize;
    if (this.gapSize !== void 0)
      data.gapSize = this.gapSize;
    if (this.scale !== void 0)
      data.scale = this.scale;
    if (this.dithering === true)
      data.dithering = true;
    if (this.alphaTest > 0)
      data.alphaTest = this.alphaTest;
    if (this.alphaToCoverage === true)
      data.alphaToCoverage = this.alphaToCoverage;
    if (this.premultipliedAlpha === true)
      data.premultipliedAlpha = this.premultipliedAlpha;
    if (this.forceSinglePass === true)
      data.forceSinglePass = this.forceSinglePass;
    if (this.wireframe === true)
      data.wireframe = this.wireframe;
    if (this.wireframeLinewidth > 1)
      data.wireframeLinewidth = this.wireframeLinewidth;
    if (this.wireframeLinecap !== "round")
      data.wireframeLinecap = this.wireframeLinecap;
    if (this.wireframeLinejoin !== "round")
      data.wireframeLinejoin = this.wireframeLinejoin;
    if (this.flatShading === true)
      data.flatShading = this.flatShading;
    if (this.visible === false)
      data.visible = false;
    if (this.toneMapped === false)
      data.toneMapped = false;
    if (this.fog === false)
      data.fog = false;
    if (Object.keys(this.userData).length > 0)
      data.userData = this.userData;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data2 = cache[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRootObject) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      if (textures.length > 0)
        data.textures = textures;
      if (images.length > 0)
        data.images = images;
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.blending = source.blending;
    this.side = source.side;
    this.vertexColors = source.vertexColors;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.stencilWriteMask = source.stencilWriteMask;
    this.stencilFunc = source.stencilFunc;
    this.stencilRef = source.stencilRef;
    this.stencilFuncMask = source.stencilFuncMask;
    this.stencilFail = source.stencilFail;
    this.stencilZFail = source.stencilZFail;
    this.stencilZPass = source.stencilZPass;
    this.stencilWrite = source.stencilWrite;
    const srcPlanes = source.clippingPlanes;
    let dstPlanes = null;
    if (srcPlanes !== null) {
      const n = srcPlanes.length;
      dstPlanes = new Array(n);
      for (let i = 0; i !== n; ++i) {
        dstPlanes[i] = srcPlanes[i].clone();
      }
    }
    this.clippingPlanes = dstPlanes;
    this.clipIntersection = source.clipIntersection;
    this.clipShadows = source.clipShadows;
    this.shadowSide = source.shadowSide;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.dithering = source.dithering;
    this.alphaTest = source.alphaTest;
    this.alphaToCoverage = source.alphaToCoverage;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.forceSinglePass = source.forceSinglePass;
    this.visible = source.visible;
    this.toneMapped = source.toneMapped;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
}
const _colorKeywords = {
  "aliceblue": 15792383,
  "antiquewhite": 16444375,
  "aqua": 65535,
  "aquamarine": 8388564,
  "azure": 15794175,
  "beige": 16119260,
  "bisque": 16770244,
  "black": 0,
  "blanchedalmond": 16772045,
  "blue": 255,
  "blueviolet": 9055202,
  "brown": 10824234,
  "burlywood": 14596231,
  "cadetblue": 6266528,
  "chartreuse": 8388352,
  "chocolate": 13789470,
  "coral": 16744272,
  "cornflowerblue": 6591981,
  "cornsilk": 16775388,
  "crimson": 14423100,
  "cyan": 65535,
  "darkblue": 139,
  "darkcyan": 35723,
  "darkgoldenrod": 12092939,
  "darkgray": 11119017,
  "darkgreen": 25600,
  "darkgrey": 11119017,
  "darkkhaki": 12433259,
  "darkmagenta": 9109643,
  "darkolivegreen": 5597999,
  "darkorange": 16747520,
  "darkorchid": 10040012,
  "darkred": 9109504,
  "darksalmon": 15308410,
  "darkseagreen": 9419919,
  "darkslateblue": 4734347,
  "darkslategray": 3100495,
  "darkslategrey": 3100495,
  "darkturquoise": 52945,
  "darkviolet": 9699539,
  "deeppink": 16716947,
  "deepskyblue": 49151,
  "dimgray": 6908265,
  "dimgrey": 6908265,
  "dodgerblue": 2003199,
  "firebrick": 11674146,
  "floralwhite": 16775920,
  "forestgreen": 2263842,
  "fuchsia": 16711935,
  "gainsboro": 14474460,
  "ghostwhite": 16316671,
  "gold": 16766720,
  "goldenrod": 14329120,
  "gray": 8421504,
  "green": 32768,
  "greenyellow": 11403055,
  "grey": 8421504,
  "honeydew": 15794160,
  "hotpink": 16738740,
  "indianred": 13458524,
  "indigo": 4915330,
  "ivory": 16777200,
  "khaki": 15787660,
  "lavender": 15132410,
  "lavenderblush": 16773365,
  "lawngreen": 8190976,
  "lemonchiffon": 16775885,
  "lightblue": 11393254,
  "lightcoral": 15761536,
  "lightcyan": 14745599,
  "lightgoldenrodyellow": 16448210,
  "lightgray": 13882323,
  "lightgreen": 9498256,
  "lightgrey": 13882323,
  "lightpink": 16758465,
  "lightsalmon": 16752762,
  "lightseagreen": 2142890,
  "lightskyblue": 8900346,
  "lightslategray": 7833753,
  "lightslategrey": 7833753,
  "lightsteelblue": 11584734,
  "lightyellow": 16777184,
  "lime": 65280,
  "limegreen": 3329330,
  "linen": 16445670,
  "magenta": 16711935,
  "maroon": 8388608,
  "mediumaquamarine": 6737322,
  "mediumblue": 205,
  "mediumorchid": 12211667,
  "mediumpurple": 9662683,
  "mediumseagreen": 3978097,
  "mediumslateblue": 8087790,
  "mediumspringgreen": 64154,
  "mediumturquoise": 4772300,
  "mediumvioletred": 13047173,
  "midnightblue": 1644912,
  "mintcream": 16121850,
  "mistyrose": 16770273,
  "moccasin": 16770229,
  "navajowhite": 16768685,
  "navy": 128,
  "oldlace": 16643558,
  "olive": 8421376,
  "olivedrab": 7048739,
  "orange": 16753920,
  "orangered": 16729344,
  "orchid": 14315734,
  "palegoldenrod": 15657130,
  "palegreen": 10025880,
  "paleturquoise": 11529966,
  "palevioletred": 14381203,
  "papayawhip": 16773077,
  "peachpuff": 16767673,
  "peru": 13468991,
  "pink": 16761035,
  "plum": 14524637,
  "powderblue": 11591910,
  "purple": 8388736,
  "rebeccapurple": 6697881,
  "red": 16711680,
  "rosybrown": 12357519,
  "royalblue": 4286945,
  "saddlebrown": 9127187,
  "salmon": 16416882,
  "sandybrown": 16032864,
  "seagreen": 3050327,
  "seashell": 16774638,
  "sienna": 10506797,
  "silver": 12632256,
  "skyblue": 8900331,
  "slateblue": 6970061,
  "slategray": 7372944,
  "slategrey": 7372944,
  "snow": 16775930,
  "springgreen": 65407,
  "steelblue": 4620980,
  "tan": 13808780,
  "teal": 32896,
  "thistle": 14204888,
  "tomato": 16737095,
  "turquoise": 4251856,
  "violet": 15631086,
  "wheat": 16113331,
  "white": 16777215,
  "whitesmoke": 16119285,
  "yellow": 16776960,
  "yellowgreen": 10145074
};
const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * 6 * (2 / 3 - t);
  return p;
}
class Color {
  constructor(r, g, b) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(r, g, b);
  }
  set(r, g, b) {
    if (g === void 0 && b === void 0) {
      const value = r;
      if (value && value.isColor) {
        this.copy(value);
      } else if (typeof value === "number") {
        this.setHex(value);
      } else if (typeof value === "string") {
        this.setStyle(value);
      }
    } else {
      this.setRGB(r, g, b);
    }
    return this;
  }
  setScalar(scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
    return this;
  }
  setHex(hex, colorSpace = SRGBColorSpace) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
    this.r = r;
    this.g = g;
    this.b = b;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
    h = euclideanModulo(h, 1);
    s = clamp(s, 0, 1);
    l = clamp(l, 0, 1);
    if (s === 0) {
      this.r = this.g = this.b = l;
    } else {
      const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
      const q = 2 * l - p;
      this.r = hue2rgb(q, p, h + 1 / 3);
      this.g = hue2rgb(q, p, h);
      this.b = hue2rgb(q, p, h - 1 / 3);
    }
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setStyle(style, colorSpace = SRGBColorSpace) {
    function handleAlpha(string) {
      if (string === void 0)
        return;
      if (parseFloat(string) < 1) {
        console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
      }
    }
    let m;
    if (m = /^(\w+)\(([^\)]*)\)/.exec(style)) {
      let color;
      const name = m[1];
      const components = m[2];
      switch (name) {
        case "rgb":
        case "rgba":
          if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(255, parseInt(color[1], 10)) / 255,
              Math.min(255, parseInt(color[2], 10)) / 255,
              Math.min(255, parseInt(color[3], 10)) / 255,
              colorSpace
            );
          }
          if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(100, parseInt(color[1], 10)) / 100,
              Math.min(100, parseInt(color[2], 10)) / 100,
              Math.min(100, parseInt(color[3], 10)) / 100,
              colorSpace
            );
          }
          break;
        case "hsl":
        case "hsla":
          if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setHSL(
              parseFloat(color[1]) / 360,
              parseFloat(color[2]) / 100,
              parseFloat(color[3]) / 100,
              colorSpace
            );
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + style);
      }
    } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
      const hex = m[1];
      const size = hex.length;
      if (size === 3) {
        return this.setRGB(
          parseInt(hex.charAt(0), 16) / 15,
          parseInt(hex.charAt(1), 16) / 15,
          parseInt(hex.charAt(2), 16) / 15,
          colorSpace
        );
      } else if (size === 6) {
        return this.setHex(parseInt(hex, 16), colorSpace);
      } else {
        console.warn("THREE.Color: Invalid hex color " + style);
      }
    } else if (style && style.length > 0) {
      return this.setColorName(style, colorSpace);
    }
    return this;
  }
  setColorName(style, colorSpace = SRGBColorSpace) {
    const hex = _colorKeywords[style.toLowerCase()];
    if (hex !== void 0) {
      this.setHex(hex, colorSpace);
    } else {
      console.warn("THREE.Color: Unknown color " + style);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    return this;
  }
  copySRGBToLinear(color) {
    this.r = SRGBToLinear(color.r);
    this.g = SRGBToLinear(color.g);
    this.b = SRGBToLinear(color.b);
    return this;
  }
  copyLinearToSRGB(color) {
    this.r = LinearToSRGB(color.r);
    this.g = LinearToSRGB(color.g);
    this.b = LinearToSRGB(color.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
  }
  getHexString(colorSpace = SRGBColorSpace) {
    return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
  }
  getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue, saturation;
    const lightness = (min + max) / 2;
    if (min === max) {
      hue = 0;
      saturation = 0;
    } else {
      const delta = max - min;
      saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }
      hue /= 6;
    }
    target.h = hue;
    target.s = saturation;
    target.l = lightness;
    return target;
  }
  getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    target.r = _color.r;
    target.g = _color.g;
    target.b = _color.b;
    return target;
  }
  getStyle(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    if (colorSpace !== SRGBColorSpace) {
      return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
    }
    return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }
  offsetHSL(h, s, l) {
    this.getHSL(_hslA);
    _hslA.h += h;
    _hslA.s += s;
    _hslA.l += l;
    this.setHSL(_hslA.h, _hslA.s, _hslA.l);
    return this;
  }
  add(color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    return this;
  }
  addColors(color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  }
  addScalar(s) {
    this.r += s;
    this.g += s;
    this.b += s;
    return this;
  }
  sub(color) {
    this.r = Math.max(0, this.r - color.r);
    this.g = Math.max(0, this.g - color.g);
    this.b = Math.max(0, this.b - color.b);
    return this;
  }
  multiply(color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    return this;
  }
  multiplyScalar(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }
  lerp(color, alpha) {
    this.r += (color.r - this.r) * alpha;
    this.g += (color.g - this.g) * alpha;
    this.b += (color.b - this.b) * alpha;
    return this;
  }
  lerpColors(color1, color2, alpha) {
    this.r = color1.r + (color2.r - color1.r) * alpha;
    this.g = color1.g + (color2.g - color1.g) * alpha;
    this.b = color1.b + (color2.b - color1.b) * alpha;
    return this;
  }
  lerpHSL(color, alpha) {
    this.getHSL(_hslA);
    color.getHSL(_hslB);
    const h = lerp(_hslA.h, _hslB.h, alpha);
    const s = lerp(_hslA.s, _hslB.s, alpha);
    const l = lerp(_hslA.l, _hslB.l, alpha);
    this.setHSL(h, s, l);
    return this;
  }
  setFromVector3(v) {
    this.r = v.x;
    this.g = v.y;
    this.b = v.z;
    return this;
  }
  applyMatrix3(m) {
    const r = this.r, g = this.g, b = this.b;
    const e = m.elements;
    this.r = e[0] * r + e[3] * g + e[6] * b;
    this.g = e[1] * r + e[4] * g + e[7] * b;
    this.b = e[2] * r + e[5] * g + e[8] * b;
    return this;
  }
  equals(c) {
    return c.r === this.r && c.g === this.g && c.b === this.b;
  }
  fromArray(array, offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.r = attribute.getX(index);
    this.g = attribute.getY(index);
    this.b = attribute.getZ(index);
    return this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
}
const _color = /* @__PURE__ */ new Color();
Color.NAMES = _colorKeywords;
class MeshBasicMaterial extends Material {
  constructor(parameters) {
    super();
    this.isMeshBasicMaterial = true;
    this.type = "MeshBasicMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.fog = source.fog;
    return this;
  }
}
const _vector$8 = /* @__PURE__ */ new Vector3();
const _vector2$1 = /* @__PURE__ */ new Vector2();
class BufferAttribute {
  constructor(array, itemSize, normalized = false) {
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.usage = StaticDrawUsage;
    this.updateRange = { offset: 0, count: -1 };
    this.gpuType = FloatType;
    this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    this.gpuType = source.gpuType;
    return this;
  }
  copyAt(index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;
    for (let i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }
    return this;
  }
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  applyMatrix3(m) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector2$1.fromBufferAttribute(this, i);
        _vector2$1.applyMatrix3(m);
        this.setXY(i, _vector2$1.x, _vector2$1.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$8.fromBufferAttribute(this, i);
        _vector$8.applyMatrix3(m);
        this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
    }
    return this;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.applyMatrix4(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.applyNormalMatrix(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.transformDirection(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  getX(index) {
    let x = this.array[index * this.itemSize];
    if (this.normalized)
      x = denormalize(x, this.array);
    return x;
  }
  setX(index, x) {
    if (this.normalized)
      x = normalize(x, this.array);
    this.array[index * this.itemSize] = x;
    return this;
  }
  getY(index) {
    let y = this.array[index * this.itemSize + 1];
    if (this.normalized)
      y = denormalize(y, this.array);
    return y;
  }
  setY(index, y) {
    if (this.normalized)
      y = normalize(y, this.array);
    this.array[index * this.itemSize + 1] = y;
    return this;
  }
  getZ(index) {
    let z = this.array[index * this.itemSize + 2];
    if (this.normalized)
      z = denormalize(z, this.array);
    return z;
  }
  setZ(index, z) {
    if (this.normalized)
      z = normalize(z, this.array);
    this.array[index * this.itemSize + 2] = z;
    return this;
  }
  getW(index) {
    let w = this.array[index * this.itemSize + 3];
    if (this.normalized)
      w = denormalize(w, this.array);
    return w;
  }
  setW(index, w) {
    if (this.normalized)
      w = normalize(w, this.array);
    this.array[index * this.itemSize + 3] = w;
    return this;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
      w = normalize(w, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "")
      data.name = this.name;
    if (this.usage !== StaticDrawUsage)
      data.usage = this.usage;
    if (this.updateRange.offset !== 0 || this.updateRange.count !== -1)
      data.updateRange = this.updateRange;
    return data;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Uint16BufferAttribute extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
}
class Uint32BufferAttribute extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
}
class Float32BufferAttribute extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
}
let _id$1 = 0;
const _m1 = /* @__PURE__ */ new Matrix4();
const _obj = /* @__PURE__ */ new Object3D();
const _offset = /* @__PURE__ */ new Vector3();
const _box$1 = /* @__PURE__ */ new Box3();
const _boxMorphTargets = /* @__PURE__ */ new Box3();
const _vector$7 = /* @__PURE__ */ new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", { value: _id$1++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal = this.attributes.normal;
    if (normal !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal.applyNormalMatrix(normalMatrix);
      normal.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(q) {
    _m1.makeRotationFromQuaternion(q);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateX(angle) {
    _m1.makeRotationX(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateY(angle) {
    _m1.makeRotationY(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateZ(angle) {
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  translate(x, y, z) {
    _m1.makeTranslation(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  scale(x, y, z) {
    _m1.makeScale(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  setFromPoints(points) {
    const position = [];
    for (let i = 0, l = points.length; i < l; i++) {
      const point = points[i];
      position.push(point.x, point.y, point.z || 0);
    }
    this.setAttribute("position", new Float32BufferAttribute(position, 3));
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingBox.set(
        new Vector3(-Infinity, -Infinity, -Infinity),
        new Vector3(Infinity, Infinity, Infinity)
      );
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _box$1.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$7.addVectors(this.boundingBox.min, _box$1.min);
            this.boundingBox.expandByPoint(_vector$7);
            _vector$7.addVectors(this.boundingBox.max, _box$1.max);
            this.boundingBox.expandByPoint(_vector$7);
          } else {
            this.boundingBox.expandByPoint(_box$1.min);
            this.boundingBox.expandByPoint(_box$1.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingSphere.set(new Vector3(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box$1.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$7.addVectors(_box$1.min, _boxMorphTargets.min);
            _box$1.expandByPoint(_vector$7);
            _vector$7.addVectors(_box$1.max, _boxMorphTargets.max);
            _box$1.expandByPoint(_vector$7);
          } else {
            _box$1.expandByPoint(_boxMorphTargets.min);
            _box$1.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box$1.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = position.count; i < il; i++) {
        _vector$7.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$7));
      }
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
            _vector$7.fromBufferAttribute(morphAttribute, j);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j);
              _vector$7.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$7));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const indices = index.array;
    const positions = attributes.position.array;
    const normals = attributes.normal.array;
    const uvs = attributes.uv.array;
    const nVertices = positions.length / 3;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * nVertices), 4));
    }
    const tangents = this.getAttribute("tangent").array;
    const tan1 = [], tan2 = [];
    for (let i = 0; i < nVertices; i++) {
      tan1[i] = new Vector3();
      tan2[i] = new Vector3();
    }
    const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
    function handleTriangle(a, b, c) {
      vA.fromArray(positions, a * 3);
      vB.fromArray(positions, b * 3);
      vC.fromArray(positions, c * 3);
      uvA.fromArray(uvs, a * 2);
      uvB.fromArray(uvs, b * 2);
      uvC.fromArray(uvs, c * 2);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r))
        return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
      tan1[a].add(sdir);
      tan1[b].add(sdir);
      tan1[c].add(sdir);
      tan2[a].add(tdir);
      tan2[b].add(tdir);
      tan2[c].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: indices.length
      }];
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleTriangle(
          indices[j + 0],
          indices[j + 1],
          indices[j + 2]
        );
      }
    }
    const tmp = new Vector3(), tmp2 = new Vector3();
    const n = new Vector3(), n2 = new Vector3();
    function handleVertex(v) {
      n.fromArray(normals, v * 3);
      n2.copy(n);
      const t = tan1[v];
      tmp.copy(t);
      tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
      tmp2.crossVectors(n2, t);
      const test = tmp2.dot(tan2[v]);
      const w = test < 0 ? -1 : 1;
      tangents[v * 4] = tmp.x;
      tangents[v * 4 + 1] = tmp.y;
      tangents[v * 4 + 2] = tmp.z;
      tangents[v * 4 + 3] = w;
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleVertex(indices[j + 0]);
        handleVertex(indices[j + 1]);
        handleVertex(indices[j + 2]);
      }
    }
  }
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i = 0, il = normalAttribute.count; i < il; i++) {
          normalAttribute.setXYZ(i, 0, 0, 0);
        }
      }
      const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
      const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
      const cb = new Vector3(), ab = new Vector3();
      if (index) {
        for (let i = 0, il = index.count; i < il; i += 3) {
          const vA = index.getX(i + 0);
          const vB = index.getX(i + 1);
          const vC = index.getX(i + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
          pA.fromBufferAttribute(positionAttribute, i + 0);
          pB.fromBufferAttribute(positionAttribute, i + 1);
          pC.fromBufferAttribute(positionAttribute, i + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  merge() {
    console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead.");
    return this;
  }
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i = 0, il = normals.count; i < il; i++) {
      _vector$7.fromBufferAttribute(normals, i);
      _vector$7.normalize();
      normals.setXYZ(i, _vector$7.x, _vector$7.y, _vector$7.z);
    }
  }
  toNonIndexed() {
    function convertBufferAttribute(attribute, indices2) {
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      const normalized = attribute.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i = 0, l = indices2.length; i < l; i++) {
        if (attribute.isInterleavedBufferAttribute) {
          index = indices2[i] * attribute.data.stride + attribute.offset;
        } else {
          index = indices2[i] * itemSize;
        }
        for (let j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      const newAttribute = convertBufferAttribute(attribute, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, il = morphAttribute.length; i < il; i++) {
        const attribute = morphAttribute[i];
        const newAttribute = convertBufferAttribute(attribute, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "")
      data.name = this.name;
    if (Object.keys(this.userData).length > 0)
      data.userData = this.userData;
    if (this.parameters !== void 0) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0)
          data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute = attributes[key];
      data.data.attributes[key] = attribute.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i = 0, il = attributeArray.length; i < il; i++) {
        const attribute = attributeArray[i];
        array.push(attribute.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = {
        center: boundingSphere.center.toArray(),
        radius: boundingSphere.radius
      };
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone(data));
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      this.setAttribute(name, attribute.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, l = morphAttribute.length; i < l; i++) {
        array.push(morphAttribute[i].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const _inverseMatrix$3 = /* @__PURE__ */ new Matrix4();
const _ray$3 = /* @__PURE__ */ new Ray();
const _sphere$5 = /* @__PURE__ */ new Sphere();
const _sphereHitAt = /* @__PURE__ */ new Vector3();
const _vA$1 = /* @__PURE__ */ new Vector3();
const _vB$1 = /* @__PURE__ */ new Vector3();
const _vC$1 = /* @__PURE__ */ new Vector3();
const _tempA = /* @__PURE__ */ new Vector3();
const _morphA = /* @__PURE__ */ new Vector3();
const _uvA$1 = /* @__PURE__ */ new Vector2();
const _uvB$1 = /* @__PURE__ */ new Vector2();
const _uvC$1 = /* @__PURE__ */ new Vector2();
const _normalA = /* @__PURE__ */ new Vector3();
const _normalB = /* @__PURE__ */ new Vector3();
const _normalC = /* @__PURE__ */ new Vector3();
const _intersectionPoint = /* @__PURE__ */ new Vector3();
const _intersectionPointWorld = /* @__PURE__ */ new Vector3();
let Mesh$1 = class Mesh extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
    super();
    this.isMesh = true;
    this.type = "Mesh";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.morphTargetInfluences !== void 0) {
      this.morphTargetInfluences = source.morphTargetInfluences.slice();
    }
    if (source.morphTargetDictionary !== void 0) {
      this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
    }
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    const morphAttributes = geometry.morphAttributes;
    const keys = Object.keys(morphAttributes);
    if (keys.length > 0) {
      const morphAttribute = morphAttributes[keys[0]];
      if (morphAttribute !== void 0) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
          const name = morphAttribute[m].name || String(m);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[name] = m;
        }
      }
    }
  }
  getVertexPosition(index, target) {
    const geometry = this.geometry;
    const position = geometry.attributes.position;
    const morphPosition = geometry.morphAttributes.position;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    target.fromBufferAttribute(position, index);
    const morphInfluences = this.morphTargetInfluences;
    if (morphPosition && morphInfluences) {
      _morphA.set(0, 0, 0);
      for (let i = 0, il = morphPosition.length; i < il; i++) {
        const influence = morphInfluences[i];
        const morphAttribute = morphPosition[i];
        if (influence === 0)
          continue;
        _tempA.fromBufferAttribute(morphAttribute, index);
        if (morphTargetsRelative) {
          _morphA.addScaledVector(_tempA, influence);
        } else {
          _morphA.addScaledVector(_tempA.sub(target), influence);
        }
      }
      target.add(_morphA);
    }
    return target;
  }
  raycast(raycaster, intersects) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === void 0)
      return;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere$5.copy(geometry.boundingSphere);
    _sphere$5.applyMatrix4(matrixWorld);
    _ray$3.copy(raycaster.ray).recast(raycaster.near);
    if (_sphere$5.containsPoint(_ray$3.origin) === false) {
      if (_ray$3.intersectSphere(_sphere$5, _sphereHitAt) === null)
        return;
      if (_ray$3.origin.distanceToSquared(_sphereHitAt) > (raycaster.far - raycaster.near) ** 2)
        return;
    }
    _inverseMatrix$3.copy(matrixWorld).invert();
    _ray$3.copy(raycaster.ray).applyMatrix4(_inverseMatrix$3);
    if (geometry.boundingBox !== null) {
      if (_ray$3.intersectsBox(geometry.boundingBox) === false)
        return;
    }
    this._computeIntersections(raycaster, intersects, _ray$3);
  }
  _computeIntersections(raycaster, intersects, rayLocalSpace) {
    let intersection;
    const geometry = this.geometry;
    const material = this.material;
    const index = geometry.index;
    const position = geometry.attributes.position;
    const uv = geometry.attributes.uv;
    const uv1 = geometry.attributes.uv1;
    const normal = geometry.attributes.normal;
    const groups = geometry.groups;
    const drawRange = geometry.drawRange;
    if (index !== null) {
      if (Array.isArray(material)) {
        for (let i = 0, il = groups.length; i < il; i++) {
          const group = groups[i];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j = start, jl = end; j < jl; j += 3) {
            const a = index.getX(j);
            const b = index.getX(j + 1);
            const c = index.getX(j + 2);
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(j / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i += 3) {
          const a = index.getX(i);
          const b = index.getX(i + 1);
          const c = index.getX(i + 2);
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c);
          if (intersection) {
            intersection.faceIndex = Math.floor(i / 3);
            intersects.push(intersection);
          }
        }
      }
    } else if (position !== void 0) {
      if (Array.isArray(material)) {
        for (let i = 0, il = groups.length; i < il; i++) {
          const group = groups[i];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j = start, jl = end; j < jl; j += 3) {
            const a = j;
            const b = j + 1;
            const c = j + 2;
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(j / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(position.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i += 3) {
          const a = i;
          const b = i + 1;
          const c = i + 2;
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c);
          if (intersection) {
            intersection.faceIndex = Math.floor(i / 3);
            intersects.push(intersection);
          }
        }
      }
    }
  }
};
function checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
  let intersect;
  if (material.side === BackSide) {
    intersect = ray.intersectTriangle(pC, pB, pA, true, point);
  } else {
    intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
  }
  if (intersect === null)
    return null;
  _intersectionPointWorld.copy(point);
  _intersectionPointWorld.applyMatrix4(object.matrixWorld);
  const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
  if (distance < raycaster.near || distance > raycaster.far)
    return null;
  return {
    distance,
    point: _intersectionPointWorld.clone(),
    object
  };
}
function checkGeometryIntersection(object, material, raycaster, ray, uv, uv1, normal, a, b, c) {
  object.getVertexPosition(a, _vA$1);
  object.getVertexPosition(b, _vB$1);
  object.getVertexPosition(c, _vC$1);
  const intersection = checkIntersection(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
  if (intersection) {
    if (uv) {
      _uvA$1.fromBufferAttribute(uv, a);
      _uvB$1.fromBufferAttribute(uv, b);
      _uvC$1.fromBufferAttribute(uv, c);
      intersection.uv = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
    }
    if (uv1) {
      _uvA$1.fromBufferAttribute(uv1, a);
      _uvB$1.fromBufferAttribute(uv1, b);
      _uvC$1.fromBufferAttribute(uv1, c);
      intersection.uv1 = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
      intersection.uv2 = intersection.uv1;
    }
    if (normal) {
      _normalA.fromBufferAttribute(normal, a);
      _normalB.fromBufferAttribute(normal, b);
      _normalC.fromBufferAttribute(normal, c);
      intersection.normal = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _normalA, _normalB, _normalC, new Vector3());
      if (intersection.normal.dot(ray.direction) > 0) {
        intersection.normal.multiplyScalar(-1);
      }
    }
    const face = {
      a,
      b,
      c,
      normal: new Vector3(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
    intersection.face = face;
  }
  return intersection;
}
class BoxGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u, v, w, udir, vdir, width2, height2, depth2, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth2 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector3();
      for (let iy = 0; iy < gridY1; iy++) {
        const y = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x = ix * segmentWidth - widthHalf;
          vector[u] = x * udir;
          vector[v] = y * vdir;
          vector[w] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u] = 0;
          vector[v] = 0;
          vector[w] = depth2 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
}
class Camera extends Object3D {
  constructor() {
    super();
    this.isCamera = true;
    this.type = "Camera";
    this.matrixWorldInverse = new Matrix4();
    this.projectionMatrix = new Matrix4();
    this.projectionMatrixInverse = new Matrix4();
    this.coordinateSystem = WebGLCoordinateSystem;
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixWorldInverse.copy(source.matrixWorldInverse);
    this.projectionMatrix.copy(source.projectionMatrix);
    this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
    this.coordinateSystem = source.coordinateSystem;
    return this;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(force) {
    super.updateMatrixWorld(force);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(updateParents, updateChildren) {
    super.updateWorldMatrix(updateParents, updateChildren);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
let PerspectiveCamera$1 = class PerspectiveCamera extends Camera {
  constructor(fov = 50, aspect = 1, near = 0.1, far = 2e3) {
    super();
    this.isPerspectiveCamera = true;
    this.type = "PerspectiveCamera";
    this.fov = fov;
    this.zoom = 1;
    this.near = near;
    this.far = far;
    this.focus = 10;
    this.aspect = aspect;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.fov = source.fov;
    this.zoom = source.zoom;
    this.near = source.near;
    this.far = source.far;
    this.focus = source.focus;
    this.aspect = source.aspect;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    this.filmGauge = source.filmGauge;
    this.filmOffset = source.filmOffset;
    return this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(focalLength) {
    const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
    this.fov = RAD2DEG * 2 * Math.atan(vExtentSlope);
    this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const vExtentSlope = Math.tan(DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / vExtentSlope;
  }
  getEffectiveFOV() {
    return RAD2DEG * 2 * Math.atan(
      Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    this.aspect = fullWidth / fullHeight;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const near = this.near;
    let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
    let height = 2 * top;
    let width = this.aspect * height;
    let left = -0.5 * width;
    const view = this.view;
    if (this.view !== null && this.view.enabled) {
      const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
      left += view.offsetX * width / fullWidth;
      top -= view.offsetY * height / fullHeight;
      width *= view.width / fullWidth;
      height *= view.height / fullHeight;
    }
    const skew = this.filmOffset;
    if (skew !== 0)
      left += near * skew / this.getFilmWidth();
    this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.fov = this.fov;
    data.object.zoom = this.zoom;
    data.object.near = this.near;
    data.object.far = this.far;
    data.object.focus = this.focus;
    data.object.aspect = this.aspect;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    data.object.filmGauge = this.filmGauge;
    data.object.filmOffset = this.filmOffset;
    return data;
  }
};
const _vector1 = /* @__PURE__ */ new Vector3();
const _vector2 = /* @__PURE__ */ new Vector3();
const _normalMatrix = /* @__PURE__ */ new Matrix3();
class Plane {
  constructor(normal = new Vector3(1, 0, 0), constant = 0) {
    this.isPlane = true;
    this.normal = normal;
    this.constant = constant;
  }
  set(normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  }
  setComponents(x, y, z, w) {
    this.normal.set(x, y, z);
    this.constant = w;
    return this;
  }
  setFromNormalAndCoplanarPoint(normal, point) {
    this.normal.copy(normal);
    this.constant = -point.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(a, b, c) {
    const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(normal, a);
    return this;
  }
  copy(plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  }
  normalize() {
    const inverseNormalLength = 1 / this.normal.length();
    this.normal.multiplyScalar(inverseNormalLength);
    this.constant *= inverseNormalLength;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(point) {
    return this.normal.dot(point) + this.constant;
  }
  distanceToSphere(sphere) {
    return this.distanceToPoint(sphere.center) - sphere.radius;
  }
  projectPoint(point, target) {
    return target.copy(point).addScaledVector(this.normal, -this.distanceToPoint(point));
  }
  intersectLine(line, target) {
    const direction = line.delta(_vector1);
    const denominator = this.normal.dot(direction);
    if (denominator === 0) {
      if (this.distanceToPoint(line.start) === 0) {
        return target.copy(line.start);
      }
      return null;
    }
    const t = -(line.start.dot(this.normal) + this.constant) / denominator;
    if (t < 0 || t > 1) {
      return null;
    }
    return target.copy(line.start).addScaledVector(direction, t);
  }
  intersectsLine(line) {
    const startSign = this.distanceToPoint(line.start);
    const endSign = this.distanceToPoint(line.end);
    return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
  }
  intersectsBox(box) {
    return box.intersectsPlane(this);
  }
  intersectsSphere(sphere) {
    return sphere.intersectsPlane(this);
  }
  coplanarPoint(target) {
    return target.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(matrix, optionalNormalMatrix) {
    const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
    const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
    const normal = this.normal.applyMatrix3(normalMatrix).normalize();
    this.constant = -referencePoint.dot(normal);
    return this;
  }
  translate(offset) {
    this.constant -= offset.dot(this.normal);
    return this;
  }
  equals(plane) {
    return plane.normal.equals(this.normal) && plane.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _sphere$4 = /* @__PURE__ */ new Sphere();
const _vector$6 = /* @__PURE__ */ new Vector3();
class Frustum {
  constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
    this.planes = [p0, p1, p2, p3, p4, p5];
  }
  set(p0, p1, p2, p3, p4, p5) {
    const planes = this.planes;
    planes[0].copy(p0);
    planes[1].copy(p1);
    planes[2].copy(p2);
    planes[3].copy(p3);
    planes[4].copy(p4);
    planes[5].copy(p5);
    return this;
  }
  copy(frustum) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      planes[i].copy(frustum.planes[i]);
    }
    return this;
  }
  setFromProjectionMatrix(m, coordinateSystem = WebGLCoordinateSystem) {
    const planes = this.planes;
    const me = m.elements;
    const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
    const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
    const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
    const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
    if (coordinateSystem === WebGLCoordinateSystem) {
      planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      planes[5].setComponents(me2, me6, me10, me14).normalize();
    } else {
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + coordinateSystem);
    }
    return this;
  }
  intersectsObject(object) {
    if (object.boundingSphere !== void 0) {
      if (object.boundingSphere === null)
        object.computeBoundingSphere();
      _sphere$4.copy(object.boundingSphere).applyMatrix4(object.matrixWorld);
    } else {
      const geometry = object.geometry;
      if (geometry.boundingSphere === null)
        geometry.computeBoundingSphere();
      _sphere$4.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
    }
    return this.intersectsSphere(_sphere$4);
  }
  intersectsSprite(sprite) {
    _sphere$4.center.set(0, 0, 0);
    _sphere$4.radius = 0.7071067811865476;
    _sphere$4.applyMatrix4(sprite.matrixWorld);
    return this.intersectsSphere(_sphere$4);
  }
  intersectsSphere(sphere) {
    const planes = this.planes;
    const center = sphere.center;
    const negRadius = -sphere.radius;
    for (let i = 0; i < 6; i++) {
      const distance = planes[i].distanceToPoint(center);
      if (distance < negRadius) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(box) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      const plane = planes[i];
      _vector$6.x = plane.normal.x > 0 ? box.max.x : box.min.x;
      _vector$6.y = plane.normal.y > 0 ? box.max.y : box.min.y;
      _vector$6.z = plane.normal.z > 0 ? box.max.z : box.min.z;
      if (plane.distanceToPoint(_vector$6) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(point) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      if (planes[i].distanceToPoint(point) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class OrthographicCamera extends Camera {
  constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
    super();
    this.isOrthographicCamera = true;
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    this.zoom = source.zoom;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    return this;
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const dx = (this.right - this.left) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (this.right + this.left) / 2;
    const cy = (this.top + this.bottom) / 2;
    let left = cx - dx;
    let right = cx + dx;
    let top = cy + dy;
    let bottom = cy - dy;
    if (this.view !== null && this.view.enabled) {
      const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      left += scaleW * this.view.offsetX;
      right = left + scaleW * this.view.width;
      top -= scaleH * this.view.offsetY;
      bottom = top - scaleH * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.zoom = this.zoom;
    data.object.left = this.left;
    data.object.right = this.right;
    data.object.top = this.top;
    data.object.bottom = this.bottom;
    data.object.near = this.near;
    data.object.far = this.far;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    return data;
  }
}
class Scene extends Object3D {
  constructor() {
    super();
    this.isScene = true;
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.background !== null)
      this.background = source.background.clone();
    if (source.environment !== null)
      this.environment = source.environment.clone();
    if (source.fog !== null)
      this.fog = source.fog.clone();
    this.backgroundBlurriness = source.backgroundBlurriness;
    this.backgroundIntensity = source.backgroundIntensity;
    if (source.overrideMaterial !== null)
      this.overrideMaterial = source.overrideMaterial.clone();
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.fog !== null)
      data.object.fog = this.fog.toJSON();
    if (this.backgroundBlurriness > 0)
      data.object.backgroundBlurriness = this.backgroundBlurriness;
    if (this.backgroundIntensity !== 1)
      data.object.backgroundIntensity = this.backgroundIntensity;
    return data;
  }
  get autoUpdate() {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.");
    return this.matrixWorldAutoUpdate;
  }
  set autoUpdate(value) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.");
    this.matrixWorldAutoUpdate = value;
  }
}
class MeshStandardMaterial extends Material {
  constructor(parameters) {
    super();
    this.isMeshStandardMaterial = true;
    this.defines = { "STANDARD": "" };
    this.type = "MeshStandardMaterial";
    this.color = new Color(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "STANDARD": "" };
    this.color.copy(source.color);
    this.roughness = source.roughness;
    this.metalness = source.metalness;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.roughnessMap = source.roughnessMap;
    this.metalnessMap = source.metalnessMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapIntensity = source.envMapIntensity;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
}
const Cache = {
  enabled: false,
  files: {},
  add: function(key, file) {
    if (this.enabled === false)
      return;
    this.files[key] = file;
  },
  get: function(key) {
    if (this.enabled === false)
      return;
    return this.files[key];
  },
  remove: function(key) {
    delete this.files[key];
  },
  clear: function() {
    this.files = {};
  }
};
class LoadingManager {
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader2) {
      handlers.push(regex, loader2);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i = 0, l = handlers.length; i < l; i += 2) {
        const regex = handlers[i];
        const loader2 = handlers[i + 1];
        if (regex.global)
          regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader2;
        }
      }
      return null;
    };
  }
}
const DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
class Loader {
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  load() {
  }
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  parse() {
  }
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
}
class ImageLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    if (this.path !== void 0)
      url = this.path + url;
    url = this.manager.resolveURL(url);
    const scope = this;
    const cached = Cache.get(url);
    if (cached !== void 0) {
      scope.manager.itemStart(url);
      setTimeout(function() {
        if (onLoad)
          onLoad(cached);
        scope.manager.itemEnd(url);
      }, 0);
      return cached;
    }
    const image = createElementNS("img");
    function onImageLoad() {
      removeEventListeners();
      Cache.add(url, this);
      if (onLoad)
        onLoad(this);
      scope.manager.itemEnd(url);
    }
    function onImageError(event) {
      removeEventListeners();
      if (onError)
        onError(event);
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    }
    function removeEventListeners() {
      image.removeEventListener("load", onImageLoad, false);
      image.removeEventListener("error", onImageError, false);
    }
    image.addEventListener("load", onImageLoad, false);
    image.addEventListener("error", onImageError, false);
    if (url.slice(0, 5) !== "data:") {
      if (this.crossOrigin !== void 0)
        image.crossOrigin = this.crossOrigin;
    }
    scope.manager.itemStart(url);
    image.src = url;
    return image;
  }
}
class TextureLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const texture = new Texture();
    const loader2 = new ImageLoader(this.manager);
    loader2.setCrossOrigin(this.crossOrigin);
    loader2.setPath(this.path);
    loader2.load(url, function(image) {
      texture.image = image;
      texture.needsUpdate = true;
      if (onLoad !== void 0) {
        onLoad(texture);
      }
    }, onProgress, onError);
    return texture;
  }
}
class Light extends Object3D {
  constructor(color, intensity = 1) {
    super();
    this.isLight = true;
    this.type = "Light";
    this.color = new Color(color);
    this.intensity = intensity;
  }
  dispose() {
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.color.copy(source.color);
    this.intensity = source.intensity;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.color = this.color.getHex();
    data.object.intensity = this.intensity;
    if (this.groundColor !== void 0)
      data.object.groundColor = this.groundColor.getHex();
    if (this.distance !== void 0)
      data.object.distance = this.distance;
    if (this.angle !== void 0)
      data.object.angle = this.angle;
    if (this.decay !== void 0)
      data.object.decay = this.decay;
    if (this.penumbra !== void 0)
      data.object.penumbra = this.penumbra;
    if (this.shadow !== void 0)
      data.object.shadow = this.shadow.toJSON();
    return data;
  }
}
const _projScreenMatrix$1 = /* @__PURE__ */ new Matrix4();
const _lightPositionWorld$1 = /* @__PURE__ */ new Vector3();
const _lookTarget$1 = /* @__PURE__ */ new Vector3();
class LightShadow {
  constructor(camera) {
    this.camera = camera;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.blurSamples = 8;
    this.mapSize = new Vector2(512, 512);
    this.map = null;
    this.mapPass = null;
    this.matrix = new Matrix4();
    this.autoUpdate = true;
    this.needsUpdate = false;
    this._frustum = new Frustum();
    this._frameExtents = new Vector2(1, 1);
    this._viewportCount = 1;
    this._viewports = [
      new Vector4(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(light) {
    const shadowCamera = this.camera;
    const shadowMatrix = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(light.matrixWorld);
    shadowCamera.position.copy(_lightPositionWorld$1);
    _lookTarget$1.setFromMatrixPosition(light.target.matrixWorld);
    shadowCamera.lookAt(_lookTarget$1);
    shadowCamera.updateMatrixWorld();
    _projScreenMatrix$1.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(_projScreenMatrix$1);
    shadowMatrix.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    );
    shadowMatrix.multiply(_projScreenMatrix$1);
  }
  getViewport(viewportIndex) {
    return this._viewports[viewportIndex];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    if (this.map) {
      this.map.dispose();
    }
    if (this.mapPass) {
      this.mapPass.dispose();
    }
  }
  copy(source) {
    this.camera = source.camera.clone();
    this.bias = source.bias;
    this.radius = source.radius;
    this.mapSize.copy(source.mapSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const object = {};
    if (this.bias !== 0)
      object.bias = this.bias;
    if (this.normalBias !== 0)
      object.normalBias = this.normalBias;
    if (this.radius !== 1)
      object.radius = this.radius;
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512)
      object.mapSize = this.mapSize.toArray();
    object.camera = this.camera.toJSON(false).object;
    delete object.camera.matrix;
    return object;
  }
}
class SpotLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera$1(50, 1, 0.5, 500));
    this.isSpotLightShadow = true;
    this.focus = 1;
  }
  updateMatrices(light) {
    const camera = this.camera;
    const fov = RAD2DEG * 2 * light.angle * this.focus;
    const aspect = this.mapSize.width / this.mapSize.height;
    const far = light.distance || camera.far;
    if (fov !== camera.fov || aspect !== camera.aspect || far !== camera.far) {
      camera.fov = fov;
      camera.aspect = aspect;
      camera.far = far;
      camera.updateProjectionMatrix();
    }
    super.updateMatrices(light);
  }
  copy(source) {
    super.copy(source);
    this.focus = source.focus;
    return this;
  }
}
let SpotLight$1 = class SpotLight extends Light {
  constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 2) {
    super(color, intensity);
    this.isSpotLight = true;
    this.type = "SpotLight";
    this.position.copy(Object3D.DEFAULT_UP);
    this.updateMatrix();
    this.target = new Object3D();
    this.distance = distance;
    this.angle = angle;
    this.penumbra = penumbra;
    this.decay = decay;
    this.map = null;
    this.shadow = new SpotLightShadow();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(power) {
    this.intensity = power / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.distance = source.distance;
    this.angle = source.angle;
    this.penumbra = source.penumbra;
    this.decay = source.decay;
    this.target = source.target.clone();
    this.shadow = source.shadow.clone();
    return this;
  }
};
let AmbientLight$1 = class AmbientLight extends Light {
  constructor(color, intensity) {
    super(color, intensity);
    this.isAmbientLight = true;
    this.type = "AmbientLight";
  }
};
class Clock {
  constructor(autoStart = true) {
    this.autoStart = autoStart;
    this.startTime = 0;
    this.oldTime = 0;
    this.elapsedTime = 0;
    this.running = false;
  }
  start() {
    this.startTime = now();
    this.oldTime = this.startTime;
    this.elapsedTime = 0;
    this.running = true;
  }
  stop() {
    this.getElapsedTime();
    this.running = false;
    this.autoStart = false;
  }
  getElapsedTime() {
    this.getDelta();
    return this.elapsedTime;
  }
  getDelta() {
    let diff = 0;
    if (this.autoStart && !this.running) {
      this.start();
      return 0;
    }
    if (this.running) {
      const newTime = now();
      diff = (newTime - this.oldTime) / 1e3;
      this.oldTime = newTime;
      this.elapsedTime += diff;
    }
    return diff;
  }
}
function now() {
  return (typeof performance === "undefined" ? Date : performance).now();
}
class Raycaster {
  constructor(origin, direction, near = 0, far = Infinity) {
    this.ray = new Ray(origin, direction);
    this.near = near;
    this.far = far;
    this.camera = null;
    this.layers = new Layers();
    this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(origin, direction) {
    this.ray.set(origin, direction);
  }
  setFromCamera(coords, camera) {
    if (camera.isPerspectiveCamera) {
      this.ray.origin.setFromMatrixPosition(camera.matrixWorld);
      this.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(this.ray.origin).normalize();
      this.camera = camera;
    } else if (camera.isOrthographicCamera) {
      this.ray.origin.set(coords.x, coords.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
      this.ray.direction.set(0, 0, -1).transformDirection(camera.matrixWorld);
      this.camera = camera;
    } else {
      console.error("THREE.Raycaster: Unsupported camera type: " + camera.type);
    }
  }
  intersectObject(object, recursive = true, intersects = []) {
    intersectObject(object, this, intersects, recursive);
    intersects.sort(ascSort);
    return intersects;
  }
  intersectObjects(objects, recursive = true, intersects = []) {
    for (let i = 0, l = objects.length; i < l; i++) {
      intersectObject(objects[i], this, intersects, recursive);
    }
    intersects.sort(ascSort);
    return intersects;
  }
}
function ascSort(a, b) {
  return a.distance - b.distance;
}
function intersectObject(object, raycaster, intersects, recursive) {
  if (object.layers.test(raycaster.layers)) {
    object.raycast(raycaster, intersects);
  }
  if (recursive === true) {
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      intersectObject(children[i], raycaster, intersects, true);
    }
  }
}
class BoxBufferGeometry extends BoxGeometry {
  // @deprecated, r144
  constructor(width, height, depth, widthSegments, heightSegments, depthSegments) {
    console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry.");
    super(width, height, depth, widthSegments, heightSegments, depthSegments);
  }
}
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: REVISION
  } }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    console.warn("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = REVISION;
  }
}
class Pass {
  constructor() {
    this.isPass = true;
    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;
    this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
new OrthographicCamera(-1, 1, 1, -1, 0, 1);
const _geometry = new BufferGeometry();
_geometry.setAttribute("position", new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
_geometry.setAttribute("uv", new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
class RenderPass extends Pass {
  constructor(scene, camera, overrideMaterial, clearColor, clearAlpha) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.overrideMaterial = overrideMaterial;
    this.clearColor = clearColor;
    this.clearAlpha = clearAlpha !== void 0 ? clearAlpha : 0;
    this.clear = true;
    this.clearDepth = false;
    this.needsSwap = false;
    this._oldClearColor = new Color();
  }
  render(renderer, writeBuffer, readBuffer) {
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    let oldClearAlpha, oldOverrideMaterial;
    if (this.overrideMaterial !== void 0) {
      oldOverrideMaterial = this.scene.overrideMaterial;
      this.scene.overrideMaterial = this.overrideMaterial;
    }
    if (this.clearColor) {
      renderer.getClearColor(this._oldClearColor);
      oldClearAlpha = renderer.getClearAlpha();
      renderer.setClearColor(this.clearColor, this.clearAlpha);
    }
    if (this.clearDepth) {
      renderer.clearDepth();
    }
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    if (this.clear)
      renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
    renderer.render(this.scene, this.camera);
    if (this.clearColor) {
      renderer.setClearColor(this._oldClearColor, oldClearAlpha);
    }
    if (this.overrideMaterial !== void 0) {
      this.scene.overrideMaterial = oldOverrideMaterial;
    }
    renderer.autoClear = oldAutoClear;
  }
}
const setRendererColorOutput = (ctx, linear, flat) => {
  if (!ctx.renderer)
    return;
  if (linear) {
    ctx.renderer.outputEncoding = LinearEncoding;
  } else {
    ctx.renderer.outputEncoding = sRGBEncoding;
  }
  if (flat) {
    ctx.renderer.toneMapping = NoToneMapping;
  } else {
    ctx.renderer.toneMapping = ACESFilmicToneMapping;
  }
};
const setRendererAndComposerSize = (ctx, size, dpr) => {
  if (!ctx.renderer || !ctx.composer)
    return;
  ctx.renderer.setSize(size.width, size.height);
  ctx.renderer.setPixelRatio(dpr);
  ctx.composer.setSize(size.width, size.height);
  ctx.composer.setPixelRatio(dpr);
};
const setRendererShadows = (ctx, shadows, shadowMapType) => {
  if (!ctx.renderer)
    return;
  ctx.renderer.shadowMap.enabled = shadows;
  ctx.renderer.shadowMap.type = shadowMapType;
};
const getThrelteUserData = (object) => {
  return object.userData;
};
const setPointerFromEvent = (ctx, e) => {
  ctx.pointer.update((v2) => {
    if (!ctx.renderer)
      return v2;
    return v2.set(e.offsetX / ctx.renderer.domElement.clientWidth * 2 - 1, -(e.offsetY / ctx.renderer.domElement.clientHeight) * 2 + 1);
  });
};
const runRaycaster = (rootCtx, pointer, camera, objects) => {
  rootCtx.raycaster.setFromCamera(pointer, camera);
  return rootCtx.raycaster.intersectObjects(objects, false);
};
const targetChanged = (a, b) => {
  if (a.object.uuid !== b.object.uuid)
    return true;
  if (a.instanceId !== b.instanceId)
    return true;
  return false;
};
const useEventRaycast = (ctx, rootCtx, renderCtx) => {
  let camera;
  const unsubscribeCamera = ctx.camera.subscribe((value) => camera = value);
  onDestroy(unsubscribeCamera);
  let pointer;
  const unsubscribePointer = ctx.pointer.subscribe((value) => pointer = value);
  onDestroy(unsubscribePointer);
  const onEvent = (e) => {
    e.preventDefault();
    ctx.pointerOverCanvas.set(true);
    renderCtx.pointerInvalidated = true;
    setPointerFromEvent(ctx, e);
    if (rootCtx.interactiveObjects.size === 0 || rootCtx.raycastableObjects.size === 0)
      return;
    const intersects = runRaycaster(rootCtx, pointer, camera, Array.from(rootCtx.raycastableObjects));
    if (intersects.length > 0 && rootCtx.interactiveObjects.has(intersects[0].object)) {
      getThrelteUserData(intersects[0].object).eventDispatcher?.(e.type, {
        ...intersects[0],
        event: e
      });
    }
  };
  return {
    onClick: onEvent,
    onContextMenu: onEvent,
    onPointerUp: onEvent,
    onPointerDown: onEvent,
    onPointerMove: onEvent
  };
};
const useFrameloopRaycast = (ctx, rootCtx) => {
  let pointerOverCanvas = get_store_value(ctx.pointerOverCanvas);
  const unsubscribePointerOverCanvas = ctx.pointerOverCanvas.subscribe((value) => pointerOverCanvas = value);
  onDestroy(unsubscribePointerOverCanvas);
  let camera;
  const unsubscribeCamera = ctx.camera.subscribe((value) => camera = value);
  onDestroy(unsubscribeCamera);
  let pointer;
  const unsubscribePointer = ctx.pointer.subscribe((value) => pointer = value);
  onDestroy(unsubscribePointer);
  const raycast = () => {
    if (rootCtx.interactiveObjects.size === 0 || rootCtx.raycastableObjects.size === 0) {
      return;
    }
    const intersects = pointerOverCanvas ? runRaycaster(rootCtx, pointer, camera, Array.from(rootCtx.raycastableObjects)) : [];
    const intersection = intersects.length && rootCtx.interactiveObjects.has(intersects[0].object) ? intersects[0] : null;
    if (!intersection) {
      if (rootCtx.lastIntersection) {
        getThrelteUserData(rootCtx.lastIntersection.object).eventDispatcher?.("pointerleave", rootCtx.lastIntersection);
      }
    } else {
      if (!rootCtx.lastIntersection) {
        getThrelteUserData(intersection.object).eventDispatcher?.("pointerenter", intersection);
      } else if (rootCtx.lastIntersection && targetChanged(rootCtx.lastIntersection, intersection)) {
        getThrelteUserData(rootCtx.lastIntersection.object).eventDispatcher?.("pointerleave", rootCtx.lastIntersection);
        getThrelteUserData(intersection.object).eventDispatcher?.("pointerenter", intersection);
      }
    }
    rootCtx.lastIntersection = intersection;
  };
  return {
    raycast
  };
};
const browser = typeof window !== "undefined";
const useRaf = (cb) => {
  if (!browser)
    return;
  let handle;
  const tick2 = () => {
    cb();
    handle = requestAnimationFrame(tick2);
  };
  tick2();
  onDestroy(() => {
    if (!handle)
      return;
    cancelAnimationFrame(handle);
  });
};
const runFrameloopCallbacks = (ctx, renderCtx) => {
  if (renderCtx.frameHandlers.size === 0)
    return;
  if (renderCtx.debugFrameloop) {
    let genericFrameHandlers = 0;
    renderCtx.frameHandlers.forEach((h) => {
      if (h.debugFrameloopMessage) {
        renderCtx.invalidations[h.debugFrameloopMessage] = h.debugFrameloopMessage in renderCtx.invalidations ? renderCtx.invalidations[h.debugFrameloopMessage] + 1 : 1;
      } else {
        ++genericFrameHandlers;
      }
    });
    if (genericFrameHandlers > 0)
      renderCtx.invalidations["onFrame"] = renderCtx.frameHandlers.size;
  }
  const anyHasOrder = Array.from(renderCtx.frameHandlers).reduce((acc, h) => h.order ? true : acc, false);
  const delta = ctx.clock.getDelta();
  if (anyHasOrder) {
    Array.from(renderCtx.frameHandlers).sort((a, b) => (a.order ?? 0) > (b.order ?? 0) ? 1 : -1).forEach((h) => h.fn(ctx, delta));
  } else {
    renderCtx.frameHandlers.forEach((h) => h.fn(ctx, delta));
  }
};
const debugFrame = (renderCtx) => {
  if (!renderCtx.debugFrameloop)
    return;
  renderCtx.frame += 1;
  console.log(`frame: ${renderCtx.frame}${Object.keys(renderCtx.invalidations).length > 0 ? ", requested by ↴" : ""}`);
  if (Object.keys(renderCtx.invalidations).length > 0)
    console.table(renderCtx.invalidations);
  renderCtx.invalidations = {};
};
const useFrameloop = (ctx, rootCtx, renderCtx) => {
  let camera = get_store_value(ctx.camera);
  const unsubscribeCamera = ctx.camera.subscribe((c) => camera = c);
  onDestroy(unsubscribeCamera);
  const { raycast } = useFrameloopRaycast(ctx, rootCtx);
  useRaf(() => {
    const shouldRender = renderCtx.frameloop === "always" || renderCtx.frameloop === "demand" && (renderCtx.frameInvalidated || renderCtx.frameHandlers.size > 0) || renderCtx.frameloop === "never" && renderCtx.advance;
    const shouldRaycast = shouldRender || renderCtx.pointerInvalidated;
    if (shouldRaycast) {
      raycast();
      renderCtx.pointerInvalidated = false;
    }
    if (!shouldRender)
      return;
    if (!camera || !ctx.composer || !ctx.renderer)
      return;
    runFrameloopCallbacks(ctx, renderCtx);
    if (ctx.composer.passes.length > 1) {
      ctx.composer.render();
    } else {
      ctx.renderer.render(ctx.scene, camera);
    }
    debugFrame(renderCtx);
    renderCtx.frameInvalidated = false;
    renderCtx.advance = false;
  });
};
const getDefaultCamera = () => {
  const defaultCamera = new PerspectiveCamera$1(75, 0, 0.1, 1e3);
  getThrelteUserData(defaultCamera).threlteDefaultCamera = true;
  defaultCamera.position.z = 5;
  defaultCamera.lookAt(0, 0, 0);
  return defaultCamera;
};
const setDefaultCameraAspectOnSizeChange = (ctx) => {
  const unsubscribe = ctx.size.subscribe((size) => {
    if (getThrelteUserData(get_store_value(ctx.camera)).threlteDefaultCamera) {
      ctx.camera.update((c) => {
        const cam = c;
        cam.aspect = size.width / size.height;
        cam.updateProjectionMatrix();
        ctx.invalidate("Default camera: aspect ratio changed");
        return cam;
      });
    }
  });
  onDestroy(unsubscribe);
};
const createContexts = (linear, flat, dpr, userSize, parentSize, debugFrameloop, frameloop) => {
  const audioCtx = {
    audioListeners: /* @__PURE__ */ new Map(),
    addAudioListener: (listener, id) => {
      id = id ?? "default";
      if (audioCtx.audioListeners.has(id)) {
        console.warn(`An AudioListener with the id "${id}" has already been added, aborting.`);
        return;
      }
      audioCtx.audioListeners.set(id, listener);
    },
    removeAudioListener: (id) => {
      id = id ?? "default";
      if (!audioCtx.audioListeners.has(id)) {
        console.warn(`No AudioListener with the id "${id}" found, aborting.`);
        return;
      }
      audioCtx.audioListeners.delete(id);
    },
    getAudioListener: (id) => {
      id = id ?? "default";
      if (!audioCtx.audioListeners.has(id)) {
        console.warn(`No AudioListener with the id "${id}" found, aborting.`);
        return;
      }
      return audioCtx.audioListeners.get(id);
    }
  };
  const renderCtx = {
    debugFrameloop,
    frameloop,
    frame: 0,
    frameInvalidated: true,
    pointerInvalidated: true,
    invalidations: {},
    frameHandlers: /* @__PURE__ */ new Set(),
    advance: false
  };
  const ctx = {
    size: derived([userSize, parentSize], ([uSize, pSize]) => {
      return uSize ? uSize : pSize;
    }),
    pointer: writable(new Vector2()),
    pointerOverCanvas: writable(false),
    clock: new Clock(),
    camera: writable(getDefaultCamera()),
    scene: new Scene(),
    renderer: void 0,
    composer: void 0,
    invalidate: (debugFrameloopMessage) => {
      renderCtx.frameInvalidated = true;
      if (renderCtx.debugFrameloop && debugFrameloopMessage) {
        renderCtx.invalidations[debugFrameloopMessage] = renderCtx.invalidations[debugFrameloopMessage] ? renderCtx.invalidations[debugFrameloopMessage] + 1 : 1;
      }
    },
    advance: () => {
      renderCtx.advance = true;
    }
  };
  const rootCtx = {
    flat: writable(flat),
    linear: writable(linear),
    dpr: writable(dpr),
    setCamera: (camera) => {
      ctx.camera.set(camera);
      if (!ctx.composer)
        return;
      ctx.composer.passes.forEach((pass) => {
        if (pass instanceof RenderPass) {
          pass.camera = camera;
        }
      });
      ctx.invalidate("Canvas: setting camera");
    },
    raycastableObjects: /* @__PURE__ */ new Set(),
    interactiveObjects: /* @__PURE__ */ new Set(),
    raycaster: new Raycaster(),
    lastIntersection: null,
    addRaycastableObject: (object) => {
      rootCtx.raycastableObjects.add(object);
    },
    removeRaycastableObject: (object) => {
      rootCtx.raycastableObjects.delete(object);
    },
    addInteractiveObject: (object) => {
      rootCtx.interactiveObjects.add(object);
    },
    removeInteractiveObject: (object) => {
      rootCtx.interactiveObjects.delete(object);
    },
    addPass: (pass) => {
      if (!ctx.composer)
        return;
      ctx.composer.addPass(pass);
      ctx.invalidate("Canvas: adding pass");
    },
    removePass: (pass) => {
      if (!ctx.composer)
        return;
      ctx.composer.removePass(pass);
      ctx.invalidate("Canvas: removing pass");
    }
  };
  setContext("threlte", ctx);
  setContext("threlte-root", rootCtx);
  setContext("threlte-render-context", renderCtx);
  setContext("threlte-audio-context", audioCtx);
  const getCtx = () => ctx;
  const getRootCtx = () => rootCtx;
  const getRenderCtx = () => renderCtx;
  const getAudioCtx = () => audioCtx;
  return {
    ctx,
    rootCtx,
    renderCtx,
    audioCtx,
    getCtx,
    getRootCtx,
    getRenderCtx,
    getAudioCtx
  };
};
const useParentSize = () => {
  const parentSizeStore = writable({ width: 0, height: 0 });
  let parentSize = { width: 0, height: 0 };
  const unsubscribeParentSize = parentSizeStore.subscribe((s) => parentSize = s);
  onDestroy(unsubscribeParentSize);
  let el;
  const proxy = () => {
    const currentParentSize = parentSize;
    if (!el)
      return;
    if (!el.parentElement)
      return;
    const { clientWidth, clientHeight } = el.parentElement;
    if (clientWidth !== currentParentSize.width || clientHeight !== currentParentSize.height) {
      parentSizeStore.set({
        width: clientWidth,
        height: clientHeight
      });
    }
  };
  const parentSizeAction = (node) => {
    el = node;
    proxy();
    window.addEventListener("resize", proxy);
  };
  if (!browser) {
    return {
      parentSize: parentSizeStore,
      parentSizeAction
    };
  }
  onDestroy(() => {
    window.removeEventListener("resize", proxy);
  });
  return {
    parentSizeAction,
    parentSize: parentSizeStore
  };
};
const Canvas_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "canvas.svelte-15bl8wt{display:block}",
  map: null
};
const invalidationHandlers = /* @__PURE__ */ new Set();
const invalidateGlobally = (debugFrameloopMessage) => {
  invalidationHandlers.forEach((fn) => fn(debugFrameloopMessage));
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dprStore, $$unsubscribe_dprStore;
  let $derivedSize, $$unsubscribe_derivedSize;
  let $flatStore, $$unsubscribe_flatStore;
  let $linearStore, $$unsubscribe_linearStore;
  let { dpr = browser ? window.devicePixelRatio : 1 } = $$props;
  let { flat = false } = $$props;
  let { linear = false } = $$props;
  let { frameloop = "demand" } = $$props;
  let { debugFrameloop = false } = $$props;
  let { shadows = true } = $$props;
  let { shadowMapType = PCFSoftShadowMap } = $$props;
  let { size = void 0 } = $$props;
  let { rendererParameters = void 0 } = $$props;
  let canvas;
  const userSize = writable(size);
  const { parentSize, parentSizeAction } = useParentSize();
  const contexts = createContexts(linear, flat, dpr, userSize, parentSize, debugFrameloop, frameloop);
  const { getCtx, getRootCtx, getRenderCtx, renderCtx } = contexts;
  const { ctx, rootCtx, audioCtx } = contexts;
  setDefaultCameraAspectOnSizeChange(ctx);
  invalidationHandlers.add(ctx.invalidate);
  onDestroy(() => {
    invalidationHandlers.delete(ctx.invalidate);
  });
  const { size: derivedSize, scene } = ctx;
  $$unsubscribe_derivedSize = subscribe(derivedSize, (value) => $derivedSize = value);
  const { flat: flatStore, linear: linearStore, dpr: dprStore } = rootCtx;
  $$unsubscribe_flatStore = subscribe(flatStore, (value) => $flatStore = value);
  $$unsubscribe_linearStore = subscribe(linearStore, (value) => $linearStore = value);
  $$unsubscribe_dprStore = subscribe(dprStore, (value) => $dprStore = value);
  setContext("threlte-parent", writable(scene));
  useFrameloop(ctx, rootCtx, renderCtx);
  useEventRaycast(ctx, rootCtx, renderCtx);
  if ($$props.dpr === void 0 && $$bindings.dpr && dpr !== void 0)
    $$bindings.dpr(dpr);
  if ($$props.flat === void 0 && $$bindings.flat && flat !== void 0)
    $$bindings.flat(flat);
  if ($$props.linear === void 0 && $$bindings.linear && linear !== void 0)
    $$bindings.linear(linear);
  if ($$props.frameloop === void 0 && $$bindings.frameloop && frameloop !== void 0)
    $$bindings.frameloop(frameloop);
  if ($$props.debugFrameloop === void 0 && $$bindings.debugFrameloop && debugFrameloop !== void 0)
    $$bindings.debugFrameloop(debugFrameloop);
  if ($$props.shadows === void 0 && $$bindings.shadows && shadows !== void 0)
    $$bindings.shadows(shadows);
  if ($$props.shadowMapType === void 0 && $$bindings.shadowMapType && shadowMapType !== void 0)
    $$bindings.shadowMapType(shadowMapType);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.rendererParameters === void 0 && $$bindings.rendererParameters && rendererParameters !== void 0)
    $$bindings.rendererParameters(rendererParameters);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  if ($$props.rootCtx === void 0 && $$bindings.rootCtx && rootCtx !== void 0)
    $$bindings.rootCtx(rootCtx);
  if ($$props.audioCtx === void 0 && $$bindings.audioCtx && audioCtx !== void 0)
    $$bindings.audioCtx(audioCtx);
  $$result.css.add(css$4);
  {
    userSize.set(size);
  }
  set_store_value(linearStore, $linearStore = linear, $linearStore);
  set_store_value(flatStore, $flatStore = flat, $flatStore);
  set_store_value(dprStore, $dprStore = dpr, $dprStore);
  {
    setRendererColorOutput(getCtx(), $linearStore, $flatStore);
  }
  {
    setRendererAndComposerSize(getCtx(), $derivedSize, $dprStore);
  }
  {
    setRendererShadows(getCtx(), shadows, shadowMapType);
  }
  $$unsubscribe_dprStore();
  $$unsubscribe_derivedSize();
  $$unsubscribe_flatStore();
  $$unsubscribe_linearStore();
  return `<canvas class="svelte-15bl8wt"${add_attribute("this", canvas, 0)}>${``}
</canvas>`;
});
const useThrelte = () => {
  return getContext("threlte");
};
const useThrelteRoot = () => {
  return getContext("threlte-root");
};
const createObjectStore = (object) => {
  const objectStore = writable(object);
  let unwrappedObject = object;
  const unsubscribeObjectStore = objectStore.subscribe((o) => unwrappedObject = o);
  onDestroy(unsubscribeObjectStore);
  const set = (newObject) => {
    if (newObject.uuid === unwrappedObject.uuid)
      return;
    objectStore.set(newObject);
  };
  return {
    ...objectStore,
    set
  };
};
const setParent = (objectStore) => {
  setContext("threlte-parent", objectStore);
};
const getParent = () => {
  return getContext("threlte-parent");
};
const HierarchicalObject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentObject, $$unsubscribe_currentObject;
  let $currentParent, $$unsubscribe_currentParent;
  const currentParent = getParent();
  $$unsubscribe_currentParent = subscribe(currentParent, (value) => $currentParent = value);
  let previousParent = $currentParent;
  let { object } = $$props;
  const currentObject = writable(object);
  $$unsubscribe_currentObject = subscribe(currentObject, (value) => $currentObject = value);
  let previousObject = object;
  setParent(currentObject);
  const { invalidate } = useThrelte();
  $currentParent.add($currentObject);
  invalidate("HierarchicalObject: object added");
  onDestroy(() => {
    $currentParent.remove($currentObject);
    invalidate("HierarchicalObject: object removed");
  });
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  set_store_value(currentObject, $currentObject = object, $currentObject);
  {
    {
      if ($currentObject !== previousObject) {
        if (previousObject) {
          $currentParent.remove(previousObject);
        }
        $currentParent.add($currentObject);
        invalidate(`HierarchicalObject: object changed`);
        previousObject = $currentObject;
      }
    }
  }
  {
    {
      if ($currentParent !== previousParent) {
        previousParent.remove($currentObject);
        $currentParent.add($currentObject);
        invalidate(`HierarchicalObject: parent changed`);
        previousParent = $currentParent;
      }
    }
  }
  $$unsubscribe_currentObject();
  $$unsubscribe_currentParent();
  return `${slots.default ? slots.default({}) : ``}`;
});
const LayerableObject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $layers, $$unsubscribe_layers;
  let $objectStore, $$unsubscribe_objectStore;
  let { object } = $$props;
  const objectStore = createObjectStore(object);
  $$unsubscribe_objectStore = subscribe(objectStore, (value) => $objectStore = value);
  const layers = getContext("threlte-layers");
  $$unsubscribe_layers = subscribe(layers, (value) => $layers = value);
  const { invalidate } = useThrelte();
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  {
    objectStore.set(object);
  }
  {
    {
      if ($layers === "all") {
        $objectStore.layers.enableAll();
      } else if ($layers === "none") {
        $objectStore.layers.disableAll();
      } else if (Array.isArray($layers)) {
        for (let index = 0; index < 32; index += 1) {
          const layerIndex = index;
          const enabled = $layers.includes(layerIndex);
          if (enabled) {
            $objectStore.layers.enable(index);
          } else {
            $objectStore.layers.disable(index);
          }
        }
      } else if ($layers !== void 0) {
        $objectStore.layers.set($layers);
      }
      invalidate("LayerableObject");
    }
  }
  $$unsubscribe_layers();
  $$unsubscribe_objectStore();
  return ``;
});
const useFrame = (fn, options) => {
  if (!browser) {
    return {
      start: () => void 0,
      stop: () => void 0,
      started: readable(false)
    };
  }
  const renderCtx = getContext("threlte-render-context");
  const handler = {
    fn,
    order: options?.order,
    debugFrameloopMessage: options?.debugFrameloopMessage
  };
  const started = writable(false);
  const stop = () => {
    renderCtx.frameHandlers.delete(handler);
    started.set(false);
  };
  const start = () => {
    renderCtx.frameHandlers.add(handler);
    started.set(true);
  };
  if (options?.autostart ?? true) {
    start();
  }
  onDestroy(() => {
    stop();
  });
  return {
    start,
    stop,
    started: {
      subscribe: started.subscribe
    }
  };
};
const useTicked = () => {
  const ticked = writable(false);
  const init = async () => {
    await tick();
    ticked.set(true);
  };
  init();
  return ticked;
};
const TransformableObject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $objectStore, $$unsubscribe_objectStore;
  let $ticked, $$unsubscribe_ticked;
  let { object } = $$props;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  const targetWorldPos = new Vector3();
  const dispatch = createEventDispatcher();
  const { invalidate } = useThrelte();
  const ticked = useTicked();
  $$unsubscribe_ticked = subscribe(ticked, (value) => $ticked = value);
  const dispatchTransform = async () => {
    if (!$ticked)
      await tick();
    dispatch("transform");
  };
  const onTransform = async () => {
    invalidate("TransformableObject: transformed");
    await dispatchTransform();
  };
  getThrelteUserData(object).onTransform = onTransform;
  const { start: startLookingAt, stop: stopLookingAt } = useFrame(
    async () => {
      if (lookAt && !rotation && lookAt instanceof Object3D) {
        lookAt.getWorldPosition(targetWorldPos);
        object.lookAt(targetWorldPos);
        await dispatchTransform();
      }
    },
    {
      autostart: false,
      debugFrameloopMessage: "TransformableObject: tracking object"
    }
  );
  const objectStore = createObjectStore(object);
  $$unsubscribe_objectStore = subscribe(objectStore, (value) => $objectStore = value);
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  {
    objectStore.set(object);
  }
  {
    {
      if (position) {
        $objectStore.position.set(position.x ?? 0, position.y ?? 0, position.z ?? 0);
        onTransform();
      }
      if (lookAt && !rotation) {
        if (lookAt instanceof Object3D) {
          startLookingAt();
        } else {
          stopLookingAt();
          $objectStore.lookAt(lookAt.x ?? 0, lookAt.y ?? 0, lookAt.z ?? 0);
          onTransform();
        }
      }
      if (!lookAt) {
        stopLookingAt();
      }
    }
  }
  {
    {
      if (scale) {
        if (typeof scale === "number") {
          $objectStore.scale.set(scale, scale, scale);
        } else {
          $objectStore.scale.set(scale.x ?? 1, scale.y ?? 1, scale.z ?? 1);
        }
        onTransform();
      }
    }
  }
  {
    {
      if (rotation) {
        $objectStore.rotation.set(rotation.x ?? 0, rotation.y ?? 0, rotation.z ?? 0, rotation.order ?? "XYZ");
        onTransform();
      }
    }
  }
  $$unsubscribe_objectStore();
  $$unsubscribe_ticked();
  return ``;
});
const ViewportAwareObject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $started, $$unsubscribe_started;
  let $ticked, $$unsubscribe_ticked;
  let $camera, $$unsubscribe_camera;
  let { object } = $$props;
  let { viewportAware = false } = $$props;
  const dispatch = createEventDispatcher();
  const { camera, invalidate } = useThrelte();
  $$unsubscribe_camera = subscribe(camera, (value) => $camera = value);
  const frustum = new Frustum();
  const projScreenMatrix = new Matrix4();
  const objectIsMesh = (objOrMesh) => {
    return objOrMesh.type === "Mesh";
  };
  const v3World = new Vector3();
  const checkInViewport = () => {
    if (!$camera)
      return true;
    projScreenMatrix.multiplyMatrices($camera.projectionMatrix, $camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);
    if (objectIsMesh(object)) {
      return frustum.intersectsObject(object);
    } else {
      object.getWorldPosition(v3World);
      return frustum.containsPoint(v3World);
    }
  };
  const ticked = useTicked();
  $$unsubscribe_ticked = subscribe(ticked, (value) => $ticked = value);
  let { inViewport = checkInViewport() } = $$props;
  const dispatchEvent = async (isInViewport) => {
    if (isInViewport) {
      if (!$ticked)
        await tick();
      dispatch("viewportenter", object);
    } else {
      if (!$ticked)
        await tick();
      dispatch("viewportleave", object);
    }
  };
  const { start, stop, started } = useFrame(
    () => {
      const v = checkInViewport();
      if (inViewport === void 0) {
        inViewport = checkInViewport();
        dispatchEvent(inViewport);
      } else if (v !== inViewport) {
        dispatchEvent(v);
        inViewport = v;
      }
    },
    {
      autostart: viewportAware,
      debugFrameloopMessage: "ViewportAwareObject: tracking viewport visibility"
    }
  );
  $$unsubscribe_started = subscribe(started, (value) => $started = value);
  invalidate("ViewportAwareObject");
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  {
    if (viewportAware && !$started) {
      start();
    } else if (!viewportAware && $started) {
      stop();
    }
  }
  $$unsubscribe_started();
  $$unsubscribe_ticked();
  $$unsubscribe_camera();
  return ``;
});
const Object3DInstance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { object } = $$props;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  const { invalidate } = useThrelte();
  const getObject = () => object;
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (visible !== void 0)
          getObject().visible = visible;
        if (castShadow !== void 0)
          getObject().castShadow = castShadow;
        if (receiveShadow !== void 0)
          getObject().receiveShadow = receiveShadow;
        if (frustumCulled !== void 0)
          getObject().frustumCulled = frustumCulled;
        if (renderOrder !== void 0)
          getObject().renderOrder = renderOrder;
        invalidate("Object3DInstance: props changed");
      }
    }
    $$rendered = `${validate_component(LayerableObject, "LayerableObject").$$render($$result, { object }, {}, {})}

${validate_component(TransformableObject, "TransformableObject").$$render(
      $$result,
      {
        object,
        position,
        rotation,
        scale,
        lookAt
      },
      {},
      {}
    )}

${validate_component(HierarchicalObject, "HierarchicalObject").$$render($$result, { object }, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}

${validate_component(ViewportAwareObject, "ViewportAwareObject").$$render(
      $$result,
      { object, viewportAware, inViewport },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const CameraInstance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cam, $$unsubscribe_cam;
  let { camera } = $$props;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { useCamera = false } = $$props;
  const cam = createObjectStore(camera);
  $$unsubscribe_cam = subscribe(cam, (value) => $cam = value);
  const { setCamera } = useThrelteRoot();
  if ($$props.camera === void 0 && $$bindings.camera && camera !== void 0)
    $$bindings.camera(camera);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.useCamera === void 0 && $$bindings.useCamera && useCamera !== void 0)
    $$bindings.useCamera(useCamera);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      cam.set(camera);
    }
    {
      if (useCamera) {
        setCamera($cam);
      }
    }
    $$rendered = `${validate_component(Object3DInstance, "Object3DInstance").$$render(
      $$result,
      {
        object: camera,
        lookAt,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        position,
        scale,
        rotation,
        viewportAware,
        visible,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_cam();
  return $$rendered;
});
const PerspectiveCamera2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $size, $$unsubscribe_size;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { useCamera = true } = $$props;
  let { near = void 0 } = $$props;
  let { far = void 0 } = $$props;
  let { fov = void 0 } = $$props;
  const { size, invalidate } = useThrelte();
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  const camera = new PerspectiveCamera$1(fov, $size.width / $size.height, near, far);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.useCamera === void 0 && $$bindings.useCamera && useCamera !== void 0)
    $$bindings.useCamera(useCamera);
  if ($$props.near === void 0 && $$bindings.near && near !== void 0)
    $$bindings.near(near);
  if ($$props.far === void 0 && $$bindings.far && far !== void 0)
    $$bindings.far(far);
  if ($$props.fov === void 0 && $$bindings.fov && fov !== void 0)
    $$bindings.fov(fov);
  if ($$props.camera === void 0 && $$bindings.camera && camera !== void 0)
    $$bindings.camera(camera);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        camera.aspect = $size.width / $size.height;
        camera.updateProjectionMatrix();
        invalidate("PerspectiveCamera: aspect changed");
      }
    }
    {
      {
        if (near !== void 0)
          camera.near = near;
        if (far !== void 0)
          camera.far = far;
        if (fov !== void 0)
          camera.fov = fov;
        camera.updateProjectionMatrix();
        invalidate("PerspectiveCamera: props changed");
      }
    }
    $$rendered = `${validate_component(CameraInstance, "CameraInstance").$$render(
      $$result,
      {
        camera,
        position,
        scale,
        rotation,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        viewportAware,
        lookAt,
        useCamera,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_size();
  return $$rendered;
});
const loaders = [];
const useLoader = (loader2, memoizeFn) => {
  const maybeLoader = loaders.find((ll) => ll instanceof loader2);
  if (maybeLoader)
    return maybeLoader;
  const newLoader = memoizeFn();
  loaders.push(newLoader);
  return newLoader;
};
const convertColorRepresentationToColor = (colorRep, linear) => {
  if (linear)
    return new Color(colorRep);
  return new Color().setHex(new Color(colorRep).getHex()).convertSRGBToLinear();
};
const LightInstance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $linear, $$unsubscribe_linear;
  let { light } = $$props;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { intensity = void 0 } = $$props;
  const { invalidate } = useThrelte();
  const { linear } = useThrelteRoot();
  $$unsubscribe_linear = subscribe(linear, (value) => $linear = value);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (intensity !== void 0)
          light.intensity = intensity;
        if (color !== void 0)
          light.color = convertColorRepresentationToColor(color, $linear);
        invalidate("LightInstance: props changed");
      }
    }
    $$rendered = `${validate_component(Object3DInstance, "Object3DInstance").$$render(
      $$result,
      {
        object: light,
        lookAt,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        position,
        scale,
        rotation,
        viewportAware,
        visible,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_linear();
  return $$rendered;
});
const AmbientLight2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { color = void 0 } = $$props;
  let { intensity = void 0 } = $$props;
  const light = new AmbientLight$1(color, intensity);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(LightInstance, "LightInstance").$$render(
      $$result,
      {
        light,
        lookAt,
        position,
        scale,
        rotation,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        viewportAware,
        color,
        intensity,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const SpotLight2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $started, $$unsubscribe_started;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { intensity = void 0 } = $$props;
  let { angle = void 0 } = $$props;
  let { decay = void 0 } = $$props;
  let { distance = void 0 } = $$props;
  let { penumbra = void 0 } = $$props;
  let { power = void 0 } = $$props;
  let { target = void 0 } = $$props;
  let { shadow = void 0 } = $$props;
  const { invalidate } = useThrelte();
  const light = new SpotLight$1(color, intensity);
  const originalTarget = light.target;
  const { start, stop, started } = useFrame(
    () => {
    },
    {
      autostart: false,
      debugFrameloopMessage: "SpotLight: tracking target"
    }
  );
  $$unsubscribe_started = subscribe(started, (value) => $started = value);
  const updateLightTarget = (target2) => {
    if (target2 && target2 instanceof Object3D && !$started) {
      light.target = target2;
      start();
      invalidate("SpotLight: target changed");
    } else if ((!target2 || !(target2 instanceof Object3D)) && $started) {
      light.target = originalTarget;
      stop();
      invalidate("SpotLight: target changed");
    }
  };
  const updateLightShadow = (shadow2) => {
    if (shadow2) {
      const { mapSize = [512, 512], camera: { near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow2 === true ? {} : shadow2;
      light.shadow.mapSize.set(mapSize[0], mapSize[1]);
      light.shadow.camera.near = near;
      light.shadow.camera.far = far;
      light.shadow.bias = bias;
      light.shadow.radius = radius;
    }
    invalidate("SpotLight: shadow changed");
  };
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  if ($$props.angle === void 0 && $$bindings.angle && angle !== void 0)
    $$bindings.angle(angle);
  if ($$props.decay === void 0 && $$bindings.decay && decay !== void 0)
    $$bindings.decay(decay);
  if ($$props.distance === void 0 && $$bindings.distance && distance !== void 0)
    $$bindings.distance(distance);
  if ($$props.penumbra === void 0 && $$bindings.penumbra && penumbra !== void 0)
    $$bindings.penumbra(penumbra);
  if ($$props.power === void 0 && $$bindings.power && power !== void 0)
    $$bindings.power(power);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      updateLightTarget(target);
    }
    {
      updateLightShadow(shadow);
    }
    {
      {
        if (distance !== void 0)
          light.distance = distance;
        if (decay !== void 0)
          light.decay = decay;
        if (angle !== void 0)
          light.angle = angle;
        if (penumbra !== void 0)
          light.penumbra = penumbra;
        if (power !== void 0)
          light.power = power;
        invalidate("SpotLight: props changed");
      }
    }
    $$rendered = `${target && !(target instanceof Object3D) ? `${validate_component(HierarchicalObject, "HierarchicalObject").$$render($$result, { object: originalTarget }, {}, {})}
  ${validate_component(TransformableObject, "TransformableObject").$$render($$result, { object: originalTarget, position: target }, {}, {})}` : ``}

${validate_component(LightInstance, "LightInstance").$$render(
      $$result,
      {
        light,
        position,
        scale,
        rotation,
        castShadow: shadow ? true : false,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        viewportAware,
        color,
        intensity,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_started();
  return $$rendered;
});
const InteractiveObject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { object } = $$props;
  let previousObject = object;
  let { interactive = false } = $$props;
  let { ignorePointer = false } = $$props;
  const eventDispatcher = createEventDispatcher();
  const { addInteractiveObject, removeInteractiveObject, addRaycastableObject, removeRaycastableObject } = useThrelteRoot();
  const { invalidate } = useThrelte();
  const removeObjectInteractivity = (object2) => {
    removeRaycastableObject(object2);
    removeInteractiveObject(object2);
    delete getThrelteUserData(object2).eventDispatcher;
  };
  const setupObjectInteractivity = (object2, ignorePointer2, interactive2) => {
    getThrelteUserData(object2).eventDispatcher = eventDispatcher;
    if (ignorePointer2) {
      removeRaycastableObject(object2);
      removeInteractiveObject(object2);
    } else {
      addRaycastableObject(object2);
      if (interactive2) {
        addInteractiveObject(object2);
      } else {
        removeInteractiveObject(object2);
      }
    }
  };
  onDestroy(() => {
    removeObjectInteractivity(object);
    invalidate("InteractiveObject: object removed");
  });
  if ($$props.object === void 0 && $$bindings.object && object !== void 0)
    $$bindings.object(object);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.ignorePointer === void 0 && $$bindings.ignorePointer && ignorePointer !== void 0)
    $$bindings.ignorePointer(ignorePointer);
  {
    {
      if (object !== previousObject) {
        removeObjectInteractivity(previousObject);
        setupObjectInteractivity(object, ignorePointer, interactive);
        invalidate("InteractiveObject: object changed");
        previousObject = object;
      } else if (object === previousObject) {
        setupObjectInteractivity(object, ignorePointer, interactive);
        invalidate("InteractiveObject: props changed");
      }
    }
  }
  return ``;
});
const MeshInstance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mesh } = $$props;
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { lookAt = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { interactive = false } = $$props;
  let { ignorePointer = false } = $$props;
  if ($$props.mesh === void 0 && $$bindings.mesh && mesh !== void 0)
    $$bindings.mesh(mesh);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.ignorePointer === void 0 && $$bindings.ignorePointer && ignorePointer !== void 0)
    $$bindings.ignorePointer(ignorePointer);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Object3DInstance, "Object3DInstance").$$render(
      $$result,
      {
        object: mesh,
        lookAt,
        position,
        scale,
        rotation,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        viewportAware,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}

${validate_component(InteractiveObject, "InteractiveObject").$$render($$result, { object: mesh, interactive, ignorePointer }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Mesh2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = void 0 } = $$props;
  let { scale = void 0 } = $$props;
  let { rotation = void 0 } = $$props;
  let { viewportAware = false } = $$props;
  let { inViewport = false } = $$props;
  let { castShadow = void 0 } = $$props;
  let { receiveShadow = void 0 } = $$props;
  let { frustumCulled = void 0 } = $$props;
  let { renderOrder = void 0 } = $$props;
  let { visible = void 0 } = $$props;
  let { interactive = false } = $$props;
  let { ignorePointer = false } = $$props;
  let { lookAt = void 0 } = $$props;
  let { geometry } = $$props;
  let { material } = $$props;
  let previousMaterial = material;
  let previousGeometry = geometry;
  const { invalidate } = useThrelte();
  const mesh = new Mesh$1(geometry, material);
  const getMesh = () => mesh;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.viewportAware === void 0 && $$bindings.viewportAware && viewportAware !== void 0)
    $$bindings.viewportAware(viewportAware);
  if ($$props.inViewport === void 0 && $$bindings.inViewport && inViewport !== void 0)
    $$bindings.inViewport(inViewport);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.ignorePointer === void 0 && $$bindings.ignorePointer && ignorePointer !== void 0)
    $$bindings.ignorePointer(ignorePointer);
  if ($$props.lookAt === void 0 && $$bindings.lookAt && lookAt !== void 0)
    $$bindings.lookAt(lookAt);
  if ($$props.geometry === void 0 && $$bindings.geometry && geometry !== void 0)
    $$bindings.geometry(geometry);
  if ($$props.material === void 0 && $$bindings.material && material !== void 0)
    $$bindings.material(material);
  if ($$props.mesh === void 0 && $$bindings.mesh && mesh !== void 0)
    $$bindings.mesh(mesh);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (material !== previousMaterial) {
          getMesh().material = material;
          invalidate("Mesh: material changed");
        } else {
          invalidate("Mesh: material props changed");
        }
        previousMaterial = material;
      }
    }
    {
      {
        if (geometry !== previousGeometry) {
          getMesh().geometry = geometry;
          invalidate("Mesh: geometry changed");
        } else {
          invalidate("Mesh: geometry props changed");
        }
        previousGeometry = geometry;
      }
    }
    $$rendered = `${validate_component(MeshInstance, "MeshInstance").$$render(
      $$result,
      {
        mesh,
        position,
        scale,
        rotation,
        lookAt,
        castShadow,
        receiveShadow,
        frustumCulled,
        renderOrder,
        visible,
        interactive,
        ignorePointer,
        viewportAware,
        inViewport
      },
      {
        inViewport: ($$value) => {
          inViewport = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const placeholderObject3D = new Object3D();
placeholderObject3D.scale.set(0, 0, 0);
({
  matrix: placeholderObject3D.matrix,
  color: null
});
new Matrix4().fromArray(new Array(16).fill(0));
new Color(16777215);
const loader = useLoader(TextureLoader, () => new TextureLoader());
const loadTexture = (path, options) => {
  return loader.load(path, (t) => {
    invalidateGlobally("useTexture");
    options?.onLoad?.(t);
  }, (e) => {
    options?.onProgress?.(e);
  }, (e) => {
    options?.onError?.(e);
  });
};
const pathsIsString = (paths) => {
  return typeof paths === "string";
};
const pathsIsArray = (paths) => {
  return Array.isArray(paths);
};
const convertTextureColor = (texture) => {
  try {
    const rootCtx = useThrelteRoot();
    if (!rootCtx)
      return texture;
    if (!get_store_value(rootCtx.linear))
      texture.encoding = sRGBEncoding;
  } catch (error) {
    console.warn("Calling useTexture outside component initialization does not support color correction.");
  }
  return texture;
};
function useTexture(paths, options) {
  if (pathsIsString(paths)) {
    if (!browser)
      return new Texture();
    return convertTextureColor(loadTexture(paths, options));
  } else if (pathsIsArray(paths)) {
    if (!browser) {
      return paths.map(() => new Texture());
    }
    return paths.map((path) => convertTextureColor(loadTexture(path, options)));
  } else {
    const entries = Object.entries(paths);
    const map = entries.reduce((acc, [key, value]) => {
      acc[key] = browser ? loadTexture(value, options) : new Texture();
      return acc;
    }, {});
    return map;
  }
}
const suru_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".suru_wrapper.svelte-ek39oa.svelte-ek39oa{height:100%;width:100%}.settings-toggle.svelte-ek39oa.svelte-ek39oa{display:inline-block;margin-right:40px;cursor:pointer\n  }.settings-wrapper.svelte-ek39oa.svelte-ek39oa{overflow:auto}.btn.svelte-ek39oa.svelte-ek39oa{padding:4px 8px;border-radius:4px;display:inline-block;border:1px solid #eee;margin-right:4px}.btn.selected.svelte-ek39oa.svelte-ek39oa{background:#eee\n  }.control-wrapper.svelte-ek39oa.svelte-ek39oa{float:left;width:50%}.control.svelte-ek39oa.svelte-ek39oa{display:block;font-size:12px}.control-wrapper.svelte-ek39oa .header.svelte-ek39oa{text-transform:uppercase;font-size:10px;color:#666666;letter-spacing:1px;margin-top:10px}.label.svelte-ek39oa.svelte-ek39oa{display:inline-block;width:200px}.fav.svelte-ek39oa.svelte-ek39oa{padding:0}.fav.svelte-ek39oa a.svelte-ek39oa{display:inline-block;color:#666666;text-decoration:none;padding:4px 8px;border-left:1px solid #eee}.fav.svelte-ek39oa a.svelte-ek39oa:hover{background:#eee}.fav.svelte-ek39oa a.svelte-ek39oa:first-child{border-left:none}.canvas-wrapper.svelte-ek39oa.svelte-ek39oa{position:relative;height:100%;margin-top:40px}.html-overlay.svelte-ek39oa.svelte-ek39oa{position:absolute;height:100%;width:100%;top:0;left:0;text-align:center}.fake-header.svelte-ek39oa.svelte-ek39oa{width:100%;height:70px;background-image:url('/fake-header.png');background-position:top center;background-repeat:no-repeat;background-size:contain}.page-header.svelte-ek39oa.svelte-ek39oa{width:80%;margin:0 auto;text-transform:uppercase;line-height:40px;border-bottom:1px solid #ccc;text-align:left;letter-spacing:2px;font-size:14px}.dark.svelte-ek39oa .page-header.svelte-ek39oa{color:#999;border-bottom:1px solid #666}h1.svelte-ek39oa.svelte-ek39oa{font-size:2.8em;width:50%;margin:60px auto;text-align:left}.dark.svelte-ek39oa h1.svelte-ek39oa{color:#fff}.search.svelte-ek39oa.svelte-ek39oa{width:50%;margin:0 auto;text-align:left}.search.svelte-ek39oa input.svelte-ek39oa{height:32px;background:#e7e7e7;outline:none;border:none;border-bottom:1px solid #626262;;;width:50%;padding:0 16px;vertical-align:top}.search.svelte-ek39oa .btn.svelte-ek39oa{background:#0C8420;color:#fff;height:33px;padding:0 16px;line-height:34px;border-radius:0;border:none}",
  map: null
};
const Suru = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const texture1 = useTexture("https://unco.github.io/docs/paper.png", {
    onError: (error) => {
      console.warn(`An error occured loading the texture: ${error.message}`);
    }
  });
  let ms = [
    new MeshStandardMaterial({ map: texture1 }),
    new MeshStandardMaterial({ color: "#000000" }),
    new MeshStandardMaterial({ color: "#E95420" })
  ];
  let m = ms[0];
  new MeshStandardMaterial({ color: "#ff3300" });
  let camera_fov = 50;
  let ambient_intensity = 100;
  let directional_intensity = 100;
  let x_rot1 = 34;
  let y_rot1 = 16;
  let z_rot1 = 5;
  let x_mov1 = 69;
  let y_mov1 = 49;
  let z_mov1 = 51;
  let scale1 = 34;
  let x_rot2 = 60;
  let y_rot2 = 5;
  let z_rot2 = 5;
  let x_mov2 = 80;
  let y_mov2 = 50;
  let z_mov2 = 79;
  let scale2 = 45;
  let favourites = [
    [86, 4, 44, 24, 69, 72, 34, 65, 22, 20, 61, 0, 68, 78, 1],
    [69, 19, 83, 13, 47, 32, 91, 51, 64, 96, 64, 73, 68, 53, 0]
  ];
  async function anim() {
  }
  $$result.css.add(css$3);
  {
    {
      anim();
    }
  }
  return `<div class="suru_wrapper svelte-ek39oa"><div><div class="settings-toggle svelte-ek39oa">Settings ${`↧`}</div>
    <div class="${["btn svelte-ek39oa", m == ms[0] ? "selected" : ""].join(" ").trim()}">Material 1</div>
    <div class="${["btn svelte-ek39oa", m == ms[1] ? "selected" : ""].join(" ").trim()}">Material 2</div>
    <div class="${["btn svelte-ek39oa", m == ms[2] ? "selected" : ""].join(" ").trim()}">.</div>
    <div class="btn svelte-ek39oa">Randomize</div>
    <div class="btn svelte-ek39oa">+</div>
        ${each(favourites, (fav, i) => {
    return `<div class="btn fav svelte-ek39oa"><a href="/" class="svelte-ek39oa">Fav ${escape(i + 1)}</a><a href="/" class="svelte-ek39oa">⨯</a>
            </div>`;
  })}</div>
    ${``}

    <div class="canvas-wrapper svelte-ek39oa">${validate_component(Canvas, "Canvas").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PerspectiveCamera2, "PerspectiveCamera").$$render(
        $$result,
        {
          position: { x: 0, y: 20, z: 0 },
          lookAt: { x: 0, y: 0, z: 0 },
          fov: camera_fov
        },
        {},
        {}
      )}
    
    
    ${`${validate_component(SpotLight2, "SpotLight").$$render(
        $$result,
        {
          shadow: true,
          position: { x: -5, y: 20, z: -10 },
          intensity: directional_intensity / 50
        },
        {},
        {}
      )}`}
    ${`${validate_component(SpotLight2, "SpotLight").$$render(
        $$result,
        {
          shadow: true,
          position: { x: -10, y: 20, z: -5 },
          intensity: directional_intensity / 50
        },
        {},
        {}
      )}`}
    ${`${validate_component(SpotLight2, "SpotLight").$$render(
        $$result,
        {
          shadow: true,
          position: { x: -10, y: 20, z: 5 },
          intensity: directional_intensity / 50
        },
        {},
        {}
      )}`}
    ${`${validate_component(SpotLight2, "SpotLight").$$render(
        $$result,
        {
          target: { x: 13, y: 5, z: 8.5 },
          shadow: true,
          position: { x: -15, y: 25, z: -10 },
          intensity: 2
        },
        {},
        {}
      )}`}
    ${validate_component(AmbientLight2, "AmbientLight").$$render($$result, { intensity: ambient_intensity / 100 }, {}, {})}

    
    ${validate_component(Mesh2, "Mesh").$$render(
        $$result,
        {
          scale: scale1 / 20,
          position: {
            x: x_mov1 / 2.5 - 20,
            y: y_mov1 / 10 - 10,
            z: z_mov1 / 5 - 10
          },
          rotation: {
            x: x_rot1 * 3.6 * (Math.PI / 180),
            y: y_rot1 * 3.6 * (Math.PI / 180),
            z: z_rot1 * 3.6 * (Math.PI / 180)
          },
          castShadow: true,
          receiveShadow: true,
          geometry: new BoxBufferGeometry(5, 3, 5),
          material: m
        },
        {},
        {}
      )}
    
    ${validate_component(Mesh2, "Mesh").$$render(
        $$result,
        {
          scale: scale2 / 20,
          position: {
            x: x_mov2 / 2.5 - 20,
            y: y_mov2 / 10 - 10,
            z: z_mov2 / 5 - 10
          },
          rotation: {
            x: x_rot2 * 3.6 * (Math.PI / 180),
            y: y_rot2 * 3.6 * (Math.PI / 180),
            z: z_rot2 * 3.6 * (Math.PI / 180)
          },
          castShadow: true,
          receiveShadow: true,
          geometry: new BoxBufferGeometry(5, 3, 5),
          material: m
        },
        {},
        {}
      )}

    
    ${validate_component(Mesh2, "Mesh").$$render(
        $$result,
        {
          receiveShadow: true,
          rotation: { x: -90 * (Math.PI / 180) },
          geometry: new BoxBufferGeometry(300, 300, 0.01),
          material: m
        },
        {},
        {}
      )}`;
    }
  })}
  ${``}</div>
</div>`;
});
const glyphs_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".row.svelte-1vq0jo4.svelte-1vq0jo4{overflow:auto}.glyph.svelte-1vq0jo4.svelte-1vq0jo4{box-sizing:border-box;float:left}.glyph.svelte-1vq0jo4>div.svelte-1vq0jo4{width:80%;height:80%;background-size:contain;background-repeat:no-repeat;margin:10%}.glyph.hover_target.svelte-1vq0jo4.svelte-1vq0jo4:not(.empty):hover{background-color:#e95420}.glyphs_container.svelte-1vq0jo4.svelte-1vq0jo4{width:100%;height:100%}",
  map: null
};
const Glyphs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shell;
  let { hover_target: hover_target2 = true } = $$props;
  let { glyph_break: glyph_break2 = 0.4 } = $$props;
  let { blank_fill: blank_fill2 = false } = $$props;
  let { glyph_grid = [] } = $$props;
  let { single_target: single_target2 } = $$props;
  let { iterations = 10 } = $$props;
  let { initial_ms = 300 } = $$props;
  if ($$props.hover_target === void 0 && $$bindings.hover_target && hover_target2 !== void 0)
    $$bindings.hover_target(hover_target2);
  if ($$props.glyph_break === void 0 && $$bindings.glyph_break && glyph_break2 !== void 0)
    $$bindings.glyph_break(glyph_break2);
  if ($$props.blank_fill === void 0 && $$bindings.blank_fill && blank_fill2 !== void 0)
    $$bindings.blank_fill(blank_fill2);
  if ($$props.glyph_grid === void 0 && $$bindings.glyph_grid && glyph_grid !== void 0)
    $$bindings.glyph_grid(glyph_grid);
  if ($$props.single_target === void 0 && $$bindings.single_target && single_target2 !== void 0)
    $$bindings.single_target(single_target2);
  if ($$props.iterations === void 0 && $$bindings.iterations && iterations !== void 0)
    $$bindings.iterations(iterations);
  if ($$props.initial_ms === void 0 && $$bindings.initial_ms && initial_ms !== void 0)
    $$bindings.initial_ms(initial_ms);
  $$result.css.add(css$2);
  return `<div class="glyphs_container svelte-1vq0jo4"${add_attribute("this", shell, 0)}>${``}
</div>`;
});
const love_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-hvpd2t.svelte-hvpd2t{text-align:center;margin-top:100px}h1.svelte-hvpd2t span.svelte-hvpd2t{display:inline-block;width:256px;height:64px;vertical-align:middle;margin-left:32px}",
  map: null
};
let single_target$1 = false;
let hover_target$1 = false;
let blank_fill$1 = true;
let glyph_break = 0;
const Love = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let glyph_grid = [["29", "18", "28", "8"]];
  $$result.css.add(css$1);
  return `<h1 class="svelte-hvpd2t">Made by Canonical with<span class="svelte-hvpd2t">${validate_component(Glyphs, "Glyphs").$$render(
    $$result,
    {
      glyph_grid,
      single_target: single_target$1,
      blank_fill: blank_fill$1,
      glyph_break,
      hover_target: hover_target$1
    },
    {},
    {}
  )}</span></h1>`;
});
const glyph_svelte_svelte_type_style_lang = "";
const css = {
  code: ".win.svelte-1qfryrb{display:flex;flex-direction:row;width:100%;height:100%}.glyphs.svelte-1qfryrb{width:60%;height:100%}.panel.svelte-1qfryrb{width:40%;height:100%}",
  map: null
};
let single_target = false;
let hover_target = true;
let blank_fill = false;
const Glyph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let breaker = 20;
  let glyph_break2 = 0;
  let glyphlist = [
    "?",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41"
  ];
  let g = glyphlist[14];
  let glyph_grid = [
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    breaker[g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
    [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g]
  ];
  $$result.css.add(css);
  {
    {
      glyph_break2 = breaker / 100;
    }
  }
  {
    {
      let temp_row = [];
      for (let i = 0; i < 10; i++) {
        let temp_col = [];
        for (let j = 0; j < 17; j++) {
          {
            JSON.stringify(glyph_grid);
          }
          temp_col.push(g);
        }
        temp_row.push(temp_col);
      }
      glyph_break2 = breaker / 100;
      glyph_grid = temp_row;
    }
  }
  return `<div class="win svelte-1qfryrb"><div class="glyphs svelte-1qfryrb">${glyph_grid ? `${validate_component(Glyphs, "Glyphs").$$render(
    $$result,
    {
      glyph_grid,
      single_target,
      blank_fill,
      glyph_break: glyph_break2,
      hover_target
    },
    {},
    {}
  )}` : ``}</div>
  <div class="panel svelte-1qfryrb">Glyph
    <select>${each(glyphlist, (glyph) => {
    return `<option${add_attribute("value", glyph, 0)}>${escape(glyph)}</option>`;
  })}</select>

   Decay <button>-</button> <button>+</button> ${escape(breaker)}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let toy = $page.params.toy;
  $$unsubscribe_page();
  return `${toy == "suru" ? `${validate_component(Suru, "Suru").$$render($$result, {}, {}, {})}` : `${toy == "love" ? `${validate_component(Love, "Love").$$render($$result, {}, {}, {})}` : `${toy == "glyph" ? `${validate_component(Glyph, "Glyph").$$render($$result, {}, {}, {})}` : `no toy`}`}`}`;
});
export {
  Page as default
};
