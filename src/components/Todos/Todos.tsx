import React, {FC, useContext} from 'react';
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import classes from "./Todos.module.css";
import {TodosContext} from "../../store/todos-context";

const Todos: FC = () => {
    const {inputValue, todos, removeTodo, isDone} = useContext(TodosContext);
    const filteredTodos = todos.filter((item) => item.text.includes(inputValue));

    return (
        <ul className={classes.todos}>
            {!inputValue && todos.map(item => {
                return <TodoItemContainer onRemoveHandler={removeTodo.bind(null, item.id)}
                                          onIsDoneHandler={isDone.bind(null, item.id)}
                                          checked={item.checked}
                                          text={item.text}
                                          key={item.id}
                                          edit={item.edit}
                                          id={item.id}
                                          currentDate={item.currentDate}
                />
            })}
            {inputValue && filteredTodos.map(item => {
                return <TodoItemContainer onRemoveHandler={removeTodo.bind(null, item.id)}
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

