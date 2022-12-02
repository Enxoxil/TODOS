import React, {useContext, useState} from 'react';
import {ITodoContainer} from "./Types/ITodoContainer";
import TodoItem from "./TodoItem";
import {TodosContext} from "../../BLL/todos-context";

const TodoItemContainer: React.FC<ITodoContainer> = (props) => {
    const {editTodo} = useContext(TodosContext);
    const [editMode, setEditMode] = useState(props.edit);
    const [todoText, setTodoText] = useState(props.text);

    const onEditActivateHandler = () => {
        setEditMode(!editMode);
    }
    const onEditHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value !== '') {
            setTodoText(e.target.value);
        }
    }

    const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value !== '') {
            editTodo(props.id, e.target.value);
        }
        setEditMode(!editMode);
    }

    const onSubmitHandler: React.FormEventHandler = (e) => {
        e.preventDefault();
        editTodo(props.id, todoText);
        setEditMode(!editMode);
    }
    return (
        <>
            <TodoItem editMode={editMode} todoText={todoText} onEditActivateHandler={onEditActivateHandler}
                      onEditHandler={onEditHandler} onBlurHandler={onBlurHandler} onSubmitHandler={onSubmitHandler} {...props}
            />
        </>
    )
};

export default TodoItemContainer;