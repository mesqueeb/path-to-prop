import test from 'ava'
import pathToProp from '../dist/index.cjs'

test('test', t => {
  let res, target, path
  target = {a: {b: {c: {d: {e: 1}}}}}
  path = 'a.b.c.d.e'
  res = pathToProp(target, path)
  t.is(res, 1)
  path = 'a.b.c.d'
  res = pathToProp(target, path)
  t.deepEqual(res, {e: 1})
  path = 'a.b'
  res = pathToProp(target, path)
  t.deepEqual(res, {c: {d: {e: 1}}})
})

test('not an object', t => {
  let target, path, res
  path = 'a.b'
  target = null
  res = pathToProp(target, path)
  t.is(res, undefined)
  target = 1
  res = pathToProp(target, path)
  t.is(res, undefined)
  target = true
  res = pathToProp(target, path)
  t.is(res, undefined)
  target = new Date()
  res = pathToProp(target, path)
  t.is(res, undefined)
  target = function () {}
  res = pathToProp(target, path)
  t.is(res, undefined)
})
