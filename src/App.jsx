import { useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import useTodosContext from './hooks/use-todos-context';

function App() {
  const { fetchTodos } = useTodosContext();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <main>
      <h1>My app</h1>
      <TodoList />
      <TodoAdd />
    </main>
  );
}

export default App;
