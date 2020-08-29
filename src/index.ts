/**
 * Returns the keys of a path
 *
 * @param   {string} path   a/path/like.this
 * @returns {string[]} with keys
 */
export function getKeysFromPath (path: string | string[]): string[] {
  return (path as any).split ? (path as string).split(/\.|\//) : (path as string[])
}

/**
 * Gets a deep property in an object, based on a path to that property. Pass the path as array when you have prop names with `.` or `/` in them
 *
 * @param {Record<string, unknown>} obj an object to wherefrom to retrieve the deep reference of
 * @param {string | string[]} path 'path/to.prop' or ['path', 'to', 'prop']
 * @returns {unknown} the last prop in the path
 */
export function pathToProp (obj: Record<string, unknown>, path: string | string[]): unknown {
  const keys = getKeysFromPath(path)
  let p
  for (p = 0; p < keys.length; p++) {
		obj = (obj ? obj[keys[p]] : undefined) as any
	}
  return obj === undefined ? undefined : obj
}

export const getProp = pathToProp
