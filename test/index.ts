import test from 'ava'
import pathToProp from '../src'

test('test', t => {
  const target = { a: { b: { c: { d: { e: 1 } } } } }
  const res1 = pathToProp(target, 'a.b.c.d.e')
  t.deepEqual(res1, 1)
  const res2 = pathToProp(target, 'a.b.c.d')
  t.deepEqual(res2, { e: 1 })
  const res3 = pathToProp(target, 'a.b')
  t.deepEqual(res3, { c: { d: { e: 1 } } })
  const res4 = pathToProp(target, 'a')
  t.deepEqual(res4, { b: { c: { d: { e: 1 } } } })
})

test('not an object', t => {
  const path = 'a.b'
  const res1 = pathToProp(null, path)
  t.is(res1, undefined)
  const res2 = pathToProp(new Date(), path)
  t.is(res2, undefined)
  const res3 = pathToProp(function () {}, path)
  t.is(res3, undefined)
})
