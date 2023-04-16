import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';

function TodoAdd() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addTodo } = useTodosContext();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title, text);
    setTitle('');
    setText('');
  };

  return (
    <form id="addTodo" onSubmit={handleSubmit}>
      <label htmlFor="title"> Title </label>
      <input
        className="formAddTodo"
        type="text"
        value={title}
        onChange={handleChangeTitle}
      />
      <label htmlFor="text"> Text</label>
      <input
        className="formAddTodo"
        type="text"
        value={text}
        onChange={handleChangeText}
      />
      <button className="addBtn">Add todo</button>
    </form>
  );
}

export default TodoAdd;
