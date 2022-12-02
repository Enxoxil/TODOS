import React, {FC, useContext} from 'react';
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import classes from "./Todos.module.css";
import {TodosContext} from "../../BLL/todos-context";

const Todos: FC = () => {
    const {inputValue, todos, removeTodo, isDone} = useContext(TodosContext);

    const getFilteredTodos = () => {
        if (!inputValue) return todos;
        return todos.filter((item) => item.text.includes(inputValue));
    }
    const filteredTodos = getFilteredTodos();

    return (
        <ul className={classes.todos}>
            {filteredTodos.map(item => {
                return <TodoItemContainer
                    onRemoveHandler={removeTodo.bind(null, item.id)}
                    onIsDoneHandler={isDone.bind(null, item.id)}
                    checked={item.checked}
                    text={item.text}
                    key={item.id}
                    edit={item.edit}
                    id={item.id}
                    currentDate={item.currentDate}
                />
            })}
        </ul>
    )
};

export default Todos;

