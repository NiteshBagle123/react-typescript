import React, { useState } from 'react';
import ToDoList from './components/ToolList';
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
  return (
    <div>
      <NewToDo onAddToDo={newToDoAddHandler}/>
      <ToDoList items={todos} />
    </div>
  )
};

export default App;
