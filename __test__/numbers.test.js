import { numbers } from '../numbers'

describe('Compare numbers', () => {
  test('should be grater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3)
  })
  test('should be grater than', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4)
  })
  test('should be grater than', () => {
    expect(numbers(2, 2)).toBeLessThan(5)
  })
})
