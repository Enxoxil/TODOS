import React, {useContext, useState} from 'react';
import {Todo} from "../../models/Todo";
import TodoItem from "./TodoItem";
import {TodosContext} from "../../store/todos-context";

export interface ITodoContainer extends Todo {
    onRemoveHandler: () => void;
    onIsDoneHandler: () => void;
}

const TodoItemContainer: React.FC<ITodoContainer> = (props) => {
    const {editTodo} = useContext(TodosContext);
    const [editMode, setEditMode] = useState(props.edit);
    const [todoText, setTodoText] = useState(props.text)
    const onEditActivateHandler = () => {
        setEditMode(!editMode);
    }
    const onEditHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTodoText(e.target.value);
        console.log(todoText)
    }

    const onSubmitHandler: React.FormEventHandler = (e) => {
        e.preventDefault();
        editTodo(props.id, todoText);
        setEditMode(!editMode);
    }
    return (
        <>
            <TodoItem editMode={editMode} todoText={todoText} onEditActivateHandler={onEditActivateHandler}
                      onEditHandler={onEditHandler} onSubmitHandler={onSubmitHandler} {...props}
            />
        </>
    )
};

export default TodoItemContainer;