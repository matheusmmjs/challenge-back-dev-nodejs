import User from '@models/User';

test('it should be ok', () => {
  const user = new User();
  user.email = 'Matheus@123';
  expect(user.email).toEqual('Matheus@123');
});
