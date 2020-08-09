import { numbers } from '../numbers'

describe('Compare numbers', () => {
  test('should be grater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3)
  })
  test('should be grater than or equal', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4)
  })
  test('should be less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5)
  })
  test('should be less than or equal', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4)
  })
 
})
