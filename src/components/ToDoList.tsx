import React from 'react';
import './TodoList.css';

interface ToDoListProps {
    items: {
        id: string,
        text: string
    }[],
    onDeleteToDo: (id: string) => void
};

const ToDoList: React.FC<ToDoListProps> = (props) => {
    const { items, onDeleteToDo } = props;
    return (
        <ul>
            {items.map(todo => <li key={todo.id}>
                <span>
                    {todo.text}
                </span>
                <button onClick={() => onDeleteToDo(todo.id)}>Delete</button>
            </li>)}
        </ul>
    )
};

export default ToDoList;