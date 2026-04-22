import { useState, type FC } from 'react';

const users = [
  { name: 'Pankaj', age: 36 },
  { name: 'Nelson', age: 36 },
  { name: 'Rio', age: 17 }
];

const UserSearch: FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: String; age: number } | undefined>();

  const handleClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Find User</button>
      {user ? (
        <div>
          {user.name} - {user.age}
        </div>
      ) : null}
    </div>
  );
};

export default UserSearch;
