import { createContext, useState, useCallback } from 'react';

const TodosContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await fetch('http://localhost:3001/todos');
    const data = await response.json();
    setTodos(data);
  }, []);

  const editTodoById = async (id, newTitle, newText, isDone) => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...data };
        }
        return todo;
      });

      setTodos(updatedTodos);
      return response.json();
    }

    postData(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
      text: newText,
      isDone,
    });
  };

  const checkTodoById = async (id, title, text, newIsDone) => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...data };
        }
        return todo;
      });

      setTodos(updatedTodos);
      return response.json();
    }
    postData(`http://localhost:3001/todos/${id}`, {
      title,
      text,
      isDone: newIsDone,
    });
  };

  const deleteTodoById = async (id) => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(updatedTodos);
    }
    postData(`http://localhost:3001/todos/${id}`);
  };

  const addTodo = async (title, text) => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      //   return response.json();
      const newTodo = await response.json();
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
    }

    postData('http://localhost:3001/todos', { title, text, isDone: false });
  };

  const valueToShare = {
    todos,
    deleteTodoById,
    editTodoById,
    checkTodoById,
    addTodo,
    fetchTodos,
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;
