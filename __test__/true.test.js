import { isFalse, isNull, isTrue, isUndefined } from '../true'

describe('Test Null', () => {
  test('should be null', () => {
    expect(isNull()).toBeNull()
  })
})
describe('Test Truthy', () => {
  test('should be true', () => {
    expect(isTrue()).toBeTruthy()
  })
})
describe('Test Falsy', () => {
  test('should be false', () => {
    expect(isFalse()).toBeFalsy()
  })
})
describe('Test Undefined', () => {
  test('should be Undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
})
describe('Test No Truthy', () => {
  test('should be not True', () => {
    expect(isFalse()).not.toBeTruthy()
  })
})
