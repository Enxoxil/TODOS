import React, {FC} from 'react';
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import classes from "./Todos.module.css";
import {useRootSelector} from '../../BLL/BLL_helpers/hooks';


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
                    checked={item.checked}
                    text={item.text}
                    key={item.id}
                    id={item.id}
                    currentDate={item.currentDate}
                />
            })}
        </ul>
    )
};

export default Todos;

