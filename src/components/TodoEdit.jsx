import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';

function TodoEdit({ currentTodo, onSubmit }) {
  const [title, setTitle] = useState(currentTodo.title);
  const [text, setText] = useState(currentTodo.text);
  const [isDone, setIsDone] = useState(currentTodo.isDone);
  const { editTodoById } = useTodosContext();

  const handleEditTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleEditText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(currentTodo.id, title, text, isDone);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input type="text" value={title} onChange={handleEditTitle} />
        <label> Text </label>
        <input type="text" value={text} onChange={handleEditText} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TodoEdit;
