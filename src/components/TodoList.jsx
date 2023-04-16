import TodoItem from './TodoItem';
import useTodosContext from '../hooks/use-todos-context';

function TodoList() {
  const { todos } = useTodosContext();

  const renderedTodos = todos.map((todo) => {
    if (!todo.isDone) {
      return (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      );
    }
  });

  const renderedDones = todos.map((todo) => {
    if (todo.isDone) {
      return (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      );
    }
  });

  return (
    <section className="todoLists">
      <ul className="nextTodoList">
        <h2>Things to do</h2>
        {renderedTodos}
      </ul>
      <ul className="pastTodoList">
        <h2>Things done</h2>
        {renderedDones}
      </ul>
    </section>
  );
}

export default TodoList;
