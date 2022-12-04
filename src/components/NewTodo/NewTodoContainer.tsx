import React, {FC} from 'react';
import NewTodo from "./NewTodo";
import {useRootDispatch, useRootSelector} from "../../BLL/BLL_helpers/hooks";
import {addTodo} from "../../BLL/todo-slice/todo-slice";
import {addInputValue, removeInputValue} from "../../BLL/input-slice/input-slice";

const NewTodoContainer: FC = () => {
    const {inputValue} = useRootSelector(state => state.inputReducer);
    const dispatch = useRootDispatch();

    const inputHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        dispatch(addInputValue({text: event.target.value}));
    };

    const formSubmitHandler: React.FormEventHandler = (event) => {
        event.preventDefault();
        if (!inputValue.trim().length) {
            //TODO throw error
            console.log('Entered value is empty')
            return;
        }
        dispatch(addTodo({text: inputValue}));
        dispatch(removeInputValue());
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