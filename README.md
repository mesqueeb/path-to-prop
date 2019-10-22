# Merge anything 🥡

```
npm i path-to-prop
```

Retrieves a property from an object based on a path.to.that.prop

## Usage

```js
import pathToProp from 'path-to-prop'

const target = {a: {b: {c: {d: {e: 1}}}}}
const path = 'a.b.c.d.e'

pathToProp(target, path)
  // returns 1
```
