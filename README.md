# Path to prop 🛤

```
npm i path-to-prop
```

Retrieves a property from an object based on a `'path/to.that.prop'`

- Supports paths with both `/` and `.` to separate props
- Safely typed (with TypeScript) - returns `unknown`

## Usage

```js
import { getProp } from 'path-to-prop'

const target = {a: {b: {c: {d: {e: 1}}}}}
const path = 'a/b/c.d.e'

getProp(target, path)
  // returns 1

getProp(target, 'nonexistent.prop')
  // returns undefined
```

When you have `/` or `.` in your prop names, use an array:

```js
const target = {'a/b': {'c.d': 1}}

getProp(target, ['a/b', 'c.d'])
  // returns 1
```
