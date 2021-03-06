import { User } from '@models/User';
import { UsersController } from '@controllers/UsersController';

test('it should be ok', () => {
  const user = new User();
  user.name = 'Matheus';
  expect(user.name).toEqual('Matheus');
});

test('it should be ok 2', () => {
  const userController = new UsersController();
  expect(userController.test(1, 2)).toBe(3);
});
