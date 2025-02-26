import { User } from './models/User';

// const user = new User({ name: 'Pankaj Nelson Tirkey', age: 35 });
// console.log(user['data']);
// user.save();

const user = new User({ id: 1 });
user.fetch();
console.log(user['data']);

// user.set({ name: 'Pankaj Nelson Tirkey', age: 35 });
// user.save();
// console.log(user['data']);

// const user2 = new User({ name: 'Vineeta Minj', age: 33 });
// console.log(user2['data']);
// user2.save();

const user2 = new User({ id: 2 });
user2.fetch();
console.log(user2['data']);
