import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log('change!');
});

user.fetch();

console.log('user', user.getAll);
