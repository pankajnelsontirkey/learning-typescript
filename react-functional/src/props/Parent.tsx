import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='red' onClick={() => console.log('clicked')}>
        abcdefg
      </Child>
      <ChildAsFC color='red' onClick={() => console.log('clicked')}>
        abcdefg
      </ChildAsFC>
    </>
  );
};

export default Parent;
