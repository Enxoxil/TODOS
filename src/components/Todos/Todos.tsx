import React, {FC, useContext} from 'react';
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import classes from "./Todos.module.css";
import {useRootSelector} from '../../BLL/BLL_helpers/hooks';
import {removeTodo, isDone} from "../../BLL/todo-slice/todo-slice";

const Todos: FC = () => {

    const {todos} = useRootSelector((state) => state.todosReducer);
    const {inputValue} = useRootSelector(state => state.inputReducer)

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

