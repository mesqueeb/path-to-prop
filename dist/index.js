function getKeysFromPath(path) {
  return path.split ? path.split(/\.|\//) : path;
}
function pathToProp(obj, path) {
  const keys = getKeysFromPath(path);
  let p;
  for (p = 0; p < keys.length; p++) {
    obj = obj ? obj[keys[p]] : void 0;
  }
  return obj === void 0 ? void 0 : obj;
}
const getProp = pathToProp;

export { getKeysFromPath, getProp, pathToProp };
