import { sum, subtract, multiply, divide } from '../maths.js'

describe('Math operations', () => {
    test('Sum test', () => {
        expect(sum(1,1)).toBe(2)
    })
})