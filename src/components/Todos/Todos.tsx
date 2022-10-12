import React, {useContext} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../../store/todos-context";

const Todos: React.FC = () => {
    const {todos, removeTodo, isDone} = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todos.map(item => (
                <TodoItem onRemoveHandler={removeTodo.bind(null, item.id)}
                          onIsDoneHandler={isDone.bind(null, item.id)}
                          checked={item.checked}
                          text={item.text}
                          key={item.id}
                          edit={item.edit}
                          id={item.id}
                />))}
        </ul>
    )
};

export default Todos;


// onRemoveHandler.bind(null, item.id) - вызов функции, контекст не привязали, а аргумент привязали что бы не передавать item.id в компонент
