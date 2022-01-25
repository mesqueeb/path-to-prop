import { test, expect } from 'vitest'
import { getProp } from '../src'

const target = { a: { b: { c: { d: { e: 1 } } } } }
test('test', () => {
  const res1 = getProp(target, 'a.b.c.d.e')
  expect(res1).toEqual( 1)
  const res1b = getProp(target, 'a/b/c/d/e')
  expect(res1b).toEqual( 1)
  const res1c = getProp(target, 'a/b.c/d.e')
  expect(res1c).toEqual( 1)
  const res2 = getProp(target, 'a.b.c.d')
  expect(res2).toEqual( { e: 1 })
  const res3 = getProp(target, 'a.b')
  expect(res3).toEqual( { c: { d: { e: 1 } } })
  const res4 = getProp(target, 'a')
  expect(res4).toEqual( { b: { c: { d: { e: 1 } } } })
})

const dotTarget = { 'a.b': { 'c/d': { 'e.f': 1 } } }
test('test ./ paths', () => {
  const res1 = getProp(dotTarget, ['a.b', 'c/d', 'e.f'])
  expect(res1).toEqual( 1)
  const res1b = getProp(dotTarget, 'a.b.c/d.e.f')
  expect(res1b).toEqual( undefined)
  const res2 = getProp(dotTarget, ['a.b', 'c/d'])
  expect(res2).toEqual( { 'e.f': 1 })
  const res2b = getProp(dotTarget, 'a.b.c/d')
  expect(res2b).toEqual( undefined)
  const res3 = getProp(dotTarget, ['a.b'])
  expect(res3).toEqual( { 'c/d': { 'e.f': 1 } })
  const res3b = getProp(dotTarget, 'a.b')
  expect(res3b).toEqual( undefined)
})

test('test non existent props', () => {
  const res1 = getProp(target, 'a.b.c.d.X')
  expect(res1).toEqual( undefined)
  const res2 = getProp(target, 'X.b.c.d')
  expect(res2).toEqual( undefined)
  const res3 = getProp(target, 'a.X')
  expect(res3).toEqual( undefined)
  const res4 = getProp(target, 'X')
  expect(res4).toEqual( undefined)
})

test('not an object', () => {
  const path = 'a.b'
  const res1 = getProp(null as any, path)
  expect(res1).toEqual(undefined)
  const res2 = getProp(new Date() as any, path)
  expect(res2).toEqual(undefined)
  const res3 = getProp(function () {} as any, path)
  expect(res3).toEqual(undefined)
})
