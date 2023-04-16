import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';
import TodoEdit from './TodoEdit';

function TodoItem({ todo }) {
  const [todoEdit, setTodoEdit] = useState(false);
  const { deleteTodoById } = useTodosContext();

  const handleDelete = () => {
    deleteTodoById(todo.id);
  };

  const handleEdit = () => {
    setTodoEdit(!todoEdit);
  };

  const handleSubmit = () => {
    setTodoEdit(false);
  };

  let content = (
    <div>
      <h3> {todo.title} </h3> <p> {todo.text} </p>
    </div>
  );
  if (todoEdit) {
    content = <TodoEdit currentTodo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      {content}
      <aside>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </aside>
    </div>
  );
}

export default TodoItem;
