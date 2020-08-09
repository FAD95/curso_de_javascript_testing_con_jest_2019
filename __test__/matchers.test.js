describe('Common matchers', () => {
  const user = {
    name: 'Fadith',
    lastname: 'Escorcia',
  }
  const user1 = {
    name: 'Fadith',
    lastname: 'Escorcia2',
  }
  test('should be the same', () => {
    expect(user).toEqual(user1)
  })
  test('should not be the same', () => {
    expect(user).not.toEqual(user1)
  })
})
