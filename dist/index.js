/**
 * Returns the keys of a path
 *
 * @param   {string} path   a/path/like.this
 * @returns {string[]} with keys
 */
export function getKeysFromPath(path) {
    return path.split ? path.split(/\.|\//) : path;
}
/**
 * Gets a deep property in an object, based on a path to that property. Pass the path as array when you have prop names with `.` or `/` in them
 *
 * @param {{ [key in string]: unknown }} obj an object to wherefrom to retrieve the deep reference of
 * @param {string | string[]} path 'path/to.prop' or ['path', 'to', 'prop']
 * @returns {unknown} the last prop in the path
 */
export function pathToProp(obj, path) {
    const keys = getKeysFromPath(path);
    let p;
    for (p = 0; p < keys.length; p++) {
        obj = (obj ? obj[keys[p]] : undefined);
    }
    return obj === undefined ? undefined : obj;
}
export const getProp = pathToProp;
