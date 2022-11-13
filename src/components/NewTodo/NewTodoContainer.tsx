import React, {useContext} from 'react';
import NewTodo from "./NewTodo";
import {TodosContext} from "../../BLL/todos-context";

const NewTodoContainer: React.FC = () => {
    const {inputValue, addTodo} = useContext(TodosContext)

    const formSubmitHandler: React.FormEventHandler = (event) => {
        event.preventDefault();
        if (inputValue.trim().length === 0) {
            //TODO throw error
            console.log('Entered value = 0')
            return;
        }
        addTodo(inputValue);

    }

    const onKeyDownHandler: React.KeyboardEventHandler = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            formSubmitHandler(event);
        }
    }


    return (
        <>
            <NewTodo formSubmit={formSubmitHandler} inputValue={inputValue} onKeyDownHandler={onKeyDownHandler}/>
        </>
    )
};

export default NewTodoContainer;