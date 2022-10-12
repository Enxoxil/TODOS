import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import TextArea from "./TextArea";

interface INewTodoProps {
    formSubmit: (e: React.FormEvent) => void,
    onKeyDownHandler: (e: React.KeyboardEvent) => void,
    inputValue: string
}

const NewTodo: React.FC<INewTodoProps> = ({formSubmit, inputValue, onKeyDownHandler}) => {

    return (
        <>
            <form onSubmit={formSubmit} className={classes.form}>
                <label htmlFor='text'> shift + enter = add todo</label>

                <TextArea onKeyDownHandler={onKeyDownHandler}/>
                <button type='submit'>Add TODO</button>
            </form>
        </>
    )
};

export default NewTodo;