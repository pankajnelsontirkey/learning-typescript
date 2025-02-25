import { User } from './models/User';

const user = new User({ name: 'Pankaj', age: 34 });

console.log('Name: ', user.get('name'));
console.log('Age: ', user.get('age'));

user.set({ name: 'Pankaj Nelson Tirkey' });

console.log('Name: ', user.get('name'));
console.log('Age: ', user.get('age'));
