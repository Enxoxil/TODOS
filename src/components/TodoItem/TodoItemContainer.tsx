import React from 'react';
import {Todo} from "../../models/Todo";
import TodoItem from "./TodoItem";

export interface ITodoContainer extends Todo {
    onRemoveHandler: () => void;
    onIsDoneHandler: () => void;
}

const TodoItemContainer: React.FC<ITodoContainer> = (props) => {
    return (
        <>
            <TodoItem {...props}/>
        </>
    )
};

export default TodoItemContainer;