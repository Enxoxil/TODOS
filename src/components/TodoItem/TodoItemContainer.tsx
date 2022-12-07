import React, {FC, useState} from 'react';

import TodoItem from "./TodoItem";
import {useRootDispatch, useRootSelector} from "../../BLL/BLL_helpers/hooks";
import {editTodo, isDone, removeTodo} from '../../BLL/store/todo-slice/todo-slice';
import {ITodoContainer} from "./Types/ITodoContainer";

const TodoItemContainer: FC<ITodoContainer> = (props) => {

    const dispatch = useRootDispatch();
    const [editMode, setEditMode] = useState(false);
    const [todoText, setTodoText] = useState(props.text);

    const onRemoveHandler = (id: string) => {
        dispatch(removeTodo({id}));
    }

    const onIsDoneHandler = (id: string) => {
        dispatch(isDone({id}));
    }

    const onActivateEditHandler = () => {
        setEditMode(!editMode);
    }

    const onEditHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value !== '') {
            setTodoText(e.target.value);
        }
    }

    const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value !== '') {
            dispatch(editTodo({text: todoText, id: props.id}));
        }
        setEditMode(!editMode);
    }

    const onSubmitHandler: React.FormEventHandler = (e) => {
        e.preventDefault();
        dispatch(editTodo({text: todoText, id: props.id}));
        setEditMode(!editMode);
    }

    return (
        <>
            <TodoItem
                onRemoveHandler={onRemoveHandler.bind(null, props.id)}
                onIsDoneHandler={onIsDoneHandler.bind(null, props.id)}
                editMode={editMode}
                todoText={todoText}
                onActivateEditHandler={onActivateEditHandler}
                onEditHandler={onEditHandler}
                onBlurHandler={onBlurHandler}
                onSubmitHandler={onSubmitHandler}
                {...props}
            />
        </>
    )
};

export default TodoItemContainer;