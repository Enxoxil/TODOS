import React from 'react';
import {Todo} from '../models/Todo';
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[], onRemoveHandler: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <TodoItem onRemoveHandler={props.onRemoveHandler.bind(null, item.id)}
                          text={item.text}
                          key={item.id}/>))}
        </ul>
    )
};

export default Todos;


// onRemoveHandler.bind(null, item.id) - вызов функции, контекст не привязали, а аргумент привязали что бы не передавать item.id в компонент
