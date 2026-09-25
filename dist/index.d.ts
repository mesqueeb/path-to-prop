/**
 * Returns the keys of a path
 *
 * @param {string} path A/path/like.this
 * @returns {string[]} With keys
 */
export declare function getKeysFromPath(path: string | string[]): string[];
/**
 * Gets a deep property in an object, based on a path to that property. Pass the path as array when
 * you have prop names with `.` or `/` in them
 *
 * @param {{ [key in string]: unknown }} obj An object to wherefrom to retrieve the deep reference
 *   of
 * @param {string | string[]} path 'path/to.prop' or ['path', 'to', 'prop']
 * @returns {unknown} The last prop in the path
 */
export declare function pathToProp(obj: {
    [key in string]: unknown;
}, path: string | string[]): unknown;
export declare const getProp: typeof pathToProp;
