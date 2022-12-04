import React, {useContext, useState} from 'react';
import NewTodo from "./NewTodo";
import {useRootDispatch} from "../../BLL/BLL_helpers/hooks";
import {addTodo} from "../../BLL/todo-slice/todo-slice";

const NewTodoContainer: React.FC = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useRootDispatch();

    const inputHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setInputValue(event.target.value);
    };

    const formSubmitHandler: React.FormEventHandler = (event) => {
        event.preventDefault();
        if (!inputValue.trim().length) {
            //TODO throw error
            console.log('Entered value is empty')
            return;
        }
        dispatch(addTodo({text: inputValue}));
        setInputValue('');
    };

    const onKeyDownHandler: React.KeyboardEventHandler = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            formSubmitHandler(event);
        }
    };

    return (
        <>
            <NewTodo formSubmit={formSubmitHandler} inputValue={inputValue} inputHandler={inputHandler} onKeyDownHandler={onKeyDownHandler}/>
        </>
    )
};

export default NewTodoContainer;