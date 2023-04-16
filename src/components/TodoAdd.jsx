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
    <form onSubmit={handleSubmit}>
      <label for="title"> Title </label>
      <input type="text" value={title} onChange={handleChangeTitle} />
      <label for="text"> Text</label>
      <textarea value={text} onChange={handleChangeText} />
      <button> Add todo</button>
    </form>
  );
}

export default TodoAdd;
