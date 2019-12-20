/**
 * Returns the keys of a path
 *
 * @param   {string} path   a/path/like.this
 * @returns {string[]} with keys
 */
export declare function getKeysFromPath(path: string): string[];
/**
 * Gets a deep property in an object, based on a path to that property
 *
 * @param {object} target an object to wherefrom to retrieve the deep reference of
 * @param {string} path   'path/to.prop'
 * @returns {*} the last prop in the path
 */
export declare function pathToProp(target: object, path: string): any;
export default pathToProp;
