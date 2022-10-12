import React from 'react';
import classes from './TodoItem.module.css'
import { ITodoContainer } from './TodoItemContainer'

interface ITodo extends ITodoContainer {

}

const TodoItem: React.FC<ITodo> = (props) => {

    return (
        <div className={classes.item}>
            {!props.edit && <li>{props.text}</li>}
            {props.edit &&
                <li >
                </li>
            }

            <div className={classes.control}>
                <label htmlFor="isDone">Is Done</label>
                <input onChange={props.onIsDoneHandler} type="checkbox" checked={props.checked} value='IsDone' id='isDone'/>
                <button onClick={props.onRemoveHandler}>X</button>
            </div>
        </div>
    )
};

export default TodoItem;