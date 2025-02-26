import axios from 'axios';

const res = axios.post('http://localhost:3000/users', {
  name: 'Pankaj',
  age: 34
});

res.then(({ data }) => {
  console.log('res', data);
});
