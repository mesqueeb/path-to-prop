'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns the keys of a path
 *
 * @param   {string} path   a/path/like.this
 * @returns {string[]} with keys
 */
function getKeysFromPath(path) {
    if (!path)
        return [];
    // eslint-disable-next-line no-useless-escape
    return path.match(/[^\/^\.]+/g);
}
/**
 * Gets a deep property in an object, based on a path to that property
 *
 * @param {object} target an object to wherefrom to retrieve the deep reference of
 * @param {string} path   'path/to.prop'
 * @returns {*} the last prop in the path
 */
function pathToProp(target, path) {
    var keys = getKeysFromPath(path);
    if (!keys.length)
        return target;
    var obj = target;
    while (obj && keys.length > 1) {
        obj = obj[keys.shift()];
    }
    var key = keys.shift();
    if (obj && obj.hasOwnProperty(key)) {
        return obj[key];
    }
}

exports.default = pathToProp;
exports.getKeysFromPath = getKeysFromPath;
exports.pathToProp = pathToProp;
