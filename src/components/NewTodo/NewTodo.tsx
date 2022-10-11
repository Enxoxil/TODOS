import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import {TodosContext} from "../../store/todos-context";
import {Input} from "antd";

interface INewTodo {
    formSubmitHandler: (event: React.FormEvent) => void,
    onKeyDownHandler:(event: React.KeyboardEvent) => void,
}

const NewTodo: React.FC<INewTodo> = (props) => {
    const {TextArea} = Input;
    const todosCtx = useContext(TodosContext);
    // const todoTextInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <form onSubmit={props.formSubmitHandler} className={classes.form}>
                <label htmlFor='text'>Please enter TODO text</label>
                {/*<input type='text' id='text' ref={todoTextInputRef} value={todosCtx.inputValue} onChange={todosCtx.inputEvent}/>*/}
                {/*<input type='text' id='text' value={todosCtx.inputValue} onChange={todosCtx.inputEvent}/>*/}
                <TextArea placeholder='Please, enter your TODO. (shift + enter = add todo).' allowClear autoSize={{ maxRows: 1}}
                          value={todosCtx.inputValue} onChange={todosCtx.inputEvent} onKeyDown={props.onKeyDownHandler} />
                <button type='submit'>Add TODO</button>
            </form>
        </>
    )
};

export default NewTodo;