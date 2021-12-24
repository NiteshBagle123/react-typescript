import React, { useRef } from "react";
import './NewTodo.css';

interface NewToDoProps {
    onAddToDo: (todoText: string) => void
}
const NewToDo: React.FC<NewToDoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredInputRef = textInputRef.current!.value;
        props.onAddToDo(enteredInputRef);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
}

export default NewToDo;