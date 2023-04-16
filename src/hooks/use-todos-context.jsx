import { useContext } from 'react';
import TodosContext from '../context/todos';

function useTodosContext() {
  return useContext(TodosContext);
}

export default useTodosContext;
