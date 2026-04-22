import { useState, type FC } from 'react';

const GuestList: FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <>
      <div>
        <h3>Guest List</h3>
        <ul>
          {guests?.length
            ? guests.map((guest) => <li key={guest}>{guest}</li>)
            : null}
        </ul>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
      </div>
    </>
  );
};

export default GuestList;
