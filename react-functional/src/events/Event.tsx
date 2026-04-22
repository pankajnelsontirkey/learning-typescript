import type { ChangeEvent, FC } from 'react';

const Event: FC = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};

export default Event;
