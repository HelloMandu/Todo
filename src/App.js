import React, { useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const INIT_LENGTH = 10;

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= INIT_LENGTH; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function toDoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
      todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
    )
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, undefined, createBulkTodos);
  const nextId = useRef(INIT_LENGTH + 1);
  const onInsert = useCallback(text =>{
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    dispatch({type: 'INSERT', todo})
    nextId.current += 1;
  }, []);
  const onRemove = useCallback(id =>{
    dispatch({type: 'REMOVE', id});
  }, [])
  const onToggle = useCallback(id =>{
    dispatch({type: 'TOGGLE', id});
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
