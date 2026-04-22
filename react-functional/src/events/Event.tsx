import type { ChangeEvent, DragEvent, FC } from 'react';

const Event: FC = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    console.log('i am being dragged', event);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default Event;
