import React, {useContext} from 'react';
import {TodosContext} from "../../store/todos-context";
import NewTodo from "./NewTodo";

const NewTodoContainer = () => {

    const todosCtx = useContext(TodosContext);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // const enteredText = todoTextInputRef.current!.value
        const enteredText = todosCtx.inputValue;
        if (enteredText.trim().length === 0) {
            //TODO throw error
            return;
        }
        todosCtx.addTodo(enteredText);
        // todoTextInputRef.current!.value = '';
    }

    const onKeyDownHandler: React.KeyboardEventHandler = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            formSubmitHandler(event);
        }
    }

    return (
        <>
            <NewTodo
                onKeyDownHandler={onKeyDownHandler}
                formSubmitHandler={formSubmitHandler}
            />
        </>
    )
};

export default NewTodoContainer;