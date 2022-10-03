import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import {TodosContext} from "../store/todos-context";




const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //TODO throw error
            return;
        }
        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = '';
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <label htmlFor='text'>Please enter TODO text</label>
                <input type='text' id='text' ref={todoTextInputRef} />
                <button type='submit'>Add TODO</button>
            </form>
        </>
    )
};

export default NewTodo;