import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ITodo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The ToDo with id: ${id}
  has a title of: ${title}
  Is it finished? ${completed}
  `);
};
