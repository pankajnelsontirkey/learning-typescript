import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  // const { ID, Title, Finished } = todo;
  const { id, title, completed } = todo;

  // console.log(`
  //   The Todo with ID: ${ID}
  //   Has a title of: ${Title}
  //   Is it finished: ${Finished}
  //   `);

  // console.log(`
  //   The Todo with ID: ${id}
  //   Has a title of: ${title}
  //   Is it finished: ${completed}
  //   `);

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
    `);
};
