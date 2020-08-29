import test from 'ava'
import { getProp } from '../src'

const target = { a: { b: { c: { d: { e: 1 } } } } }
test('test', t => {
  const res1 = getProp(target, 'a.b.c.d.e')
  t.deepEqual(res1, 1)
  const res1b = getProp(target, 'a/b/c/d/e')
  t.deepEqual(res1b, 1)
  const res1c = getProp(target, 'a/b.c/d.e')
  t.deepEqual(res1c, 1)
  const res2 = getProp(target, 'a.b.c.d')
  t.deepEqual(res2, { e: 1 })
  const res3 = getProp(target, 'a.b')
  t.deepEqual(res3, { c: { d: { e: 1 } } })
  const res4 = getProp(target, 'a')
  t.deepEqual(res4, { b: { c: { d: { e: 1 } } } })
})

const dotTarget = { 'a.b': { 'c/d': { 'e.f': 1 } } }
test('test ./ paths', t => {
  const res1 = getProp(dotTarget, ['a.b', 'c/d', 'e.f'])
  t.deepEqual(res1, 1)
  const res1b = getProp(dotTarget, 'a.b.c/d.e.f')
  t.deepEqual(res1b, undefined)
  const res2 = getProp(dotTarget, ['a.b', 'c/d'])
  t.deepEqual(res2, { 'e.f': 1 })
  const res2b = getProp(dotTarget, 'a.b.c/d')
  t.deepEqual(res2b, undefined)
  const res3 = getProp(dotTarget, ['a.b'])
  t.deepEqual(res3, { 'c/d': { 'e.f': 1 } })
  const res3b = getProp(dotTarget, 'a.b')
  t.deepEqual(res3b, undefined)
})

test('test non existent props', t => {
  const res1 = getProp(target, 'a.b.c.d.X')
  t.deepEqual(res1, undefined)
  const res2 = getProp(target, 'X.b.c.d')
  t.deepEqual(res2, undefined)
  const res3 = getProp(target, 'a.X')
  t.deepEqual(res3, undefined)
  const res4 = getProp(target, 'X')
  t.deepEqual(res4, undefined)
})

test('not an object', t => {
  const path = 'a.b'
  const res1 = getProp(null, path)
  t.is(res1, undefined)
  const res2 = getProp(new Date() as any, path)
  t.is(res2, undefined)
  const res3 = getProp(function () {} as any, path)
  t.is(res3, undefined)
})
