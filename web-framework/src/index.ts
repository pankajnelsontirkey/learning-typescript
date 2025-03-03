import { User } from './models/User';
import { UserForm } from './views/userForm';

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ name: 'Pankaj', age: 34 })
  );

  userForm.render();
} else {
  throw new Error('Root element not found');
}
