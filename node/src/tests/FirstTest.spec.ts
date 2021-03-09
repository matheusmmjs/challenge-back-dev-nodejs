import User from '@models/User';
import Transfer from '@models/Transfer';

test('it should be ok - user', () => {
  const user = new User();
  user.email = 'Matheus@123';
  expect(user.email).toEqual('Matheus@123');
});

test('it should be ok - transfer', () => {
  const transfer = new Transfer();
  transfer.value = '100';
  expect(transfer.value).toEqual('100');
});
