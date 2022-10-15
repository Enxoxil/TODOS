import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import TextArea from "./TextArea";
import {INewTodo} from "./Types/INewTodo";


const NewTodo: React.FC<INewTodo> = ({formSubmit, inputValue, onKeyDownHandler}) => {

    return (
        <>
            <form onSubmit={formSubmit} className={classes.form}>
                <label htmlFor='text'> shift + enter = add TODO, double click = edit TODO</label>

                <TextArea onKeyDownHandler={onKeyDownHandler}/>
                <button type='submit'>Add TODO</button>
            </form>
        </>
    )
};

export default NewTodo;