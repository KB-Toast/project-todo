import { useState } from 'react';
import { GrEdit, GrTrash, GrCheckboxSelected } from 'react-icons/gr';
import useTodosContext from '../hooks/use-todos-context';
import TodoEdit from './TodoEdit';

function TodoItem({ todo }) {
  const [todoEdit, setTodoEdit] = useState(false);
  const { deleteTodoById, checkTodoById } = useTodosContext();

  const handleDelete = () => {
    deleteTodoById(todo.id);
  };

  const handleEdit = () => {
    setTodoEdit(!todoEdit);
  };

  const handleSubmit = () => {
    setTodoEdit(false);
  };

  const handleCheck = () => {
    checkTodoById(todo.id, todo.title, todo.text, !todo.isDone);
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
    <div className="todoItem">
      {content}
      <aside>
        <GrEdit onClick={handleEdit} className="text-lg block-icon" />
        <GrTrash onClick={handleDelete} className="text-lg block-icon" />
        <GrCheckboxSelected
          onClick={handleCheck}
          className="text-lg block-icon"
        />
      </aside>
    </div>
  );
}

export default TodoItem;
