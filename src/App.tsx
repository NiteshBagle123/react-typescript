import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setToDos] = useState<Todo[]>([]);

  const newToDoAddHandler = (text: string) => {
      setToDos(prevToDos => [
        ...prevToDos,
        {
          id: Math.random().toString(),
          text
        }
      ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setToDos(prevToDos => prevToDos.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <NewToDo onAddToDo={newToDoAddHandler}/>
      <ToDoList items={todos} onDeleteToDo={todoDeleteHandler}/>
    </div>
  )
};

export default App;
