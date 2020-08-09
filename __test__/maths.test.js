import { sum, subtract, multiply, divide } from '../maths.js'

describe('Math operations', () => {
    test('Sum test', () => {
        expect(sum(1,1)).toBe(2)
    })
    test('Substract test', () => {
      expect(subtract(1, 1)).toBe(0)
    })
    test('Multiply test', () => {
      expect(multiply(2, 5)).toBe(10)
    })
    test('Divide test', () => {
      expect(divide(10, 2)).toBe(5)
    })
})