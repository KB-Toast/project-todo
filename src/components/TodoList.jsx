import TodoItem from './TodoItem';
import useTodosContext from '../hooks/use-todos-context';

function TodoList() {
  const { todos } = useTodosContext();

  const renderedTodos = todos.map((todo) => {
    if (todo.id === 1) {
      return (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      );
    }
  });

  const renderedDones = todos.map((todo) => {
    if (todo.id !== 1) {
      return (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      );
    }
  });

  return (
    <section>
      <ul>{renderedTodos}</ul>
      <ul>{renderedDones}</ul>
    </section>
  );
}

export default TodoList;
