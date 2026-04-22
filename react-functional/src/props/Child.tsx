import type { FC, JSX, PropsWithChildren } from 'react';

interface ChildProps extends PropsWithChildren {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps): JSX.Element => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildAsFC: FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
      {children}
    </div>
  );
};
