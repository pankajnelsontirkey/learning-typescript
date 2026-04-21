import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo, fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: Function;
}

class _App extends React.Component<AppProps> {
  // componentDidMount(): void {
  //   this.props.fetchTodos();
  // }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (todoId: number): void => {
    this.props.deleteTodo(todoId);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
        {todo.title}
      </div>
    ));
  }

  render(): React.ReactNode {
    // return <div>Hello</div>;
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
