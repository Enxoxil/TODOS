import React, {useContext} from 'react';
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todosCtx.todos.map(item => (
                <TodoItem onRemoveHandler={todosCtx.removeTodo.bind(null, item.id)}
                          onIsDoneHandler={todosCtx.isDone.bind(null, item.id)}
                          checked={item.checked}
                          text={item.text}
                          key={item.id}/>))}
        </ul>
    )
};

export default Todos;


// onRemoveHandler.bind(null, item.id) - вызов функции, контекст не привязали, а аргумент привязали что бы не передавать item.id в компонент
