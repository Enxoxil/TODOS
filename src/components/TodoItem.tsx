import React from 'react';
import classes from './TodoItem.module.css'

interface ITodo {
    text: string;
    onRemoveHandler: () => void; // event: React.MouseEvent только если нужно использовать событие
    onIsDoneHandler: () => void;
}

const TodoItem: React.FC<ITodo> = (props) => {

    return (
        <div className={classes.item}>
            <li>{props.text}</li>

            <div className={classes.control}>

                <label htmlFor="isDone">Is Done</label>
                <input onChange={props.onIsDoneHandler} type="checkbox" value='IsDone' id='isDone'/>
                <button onClick={props.onRemoveHandler}>X</button>
            </div>
        </div>
    )
};

export default TodoItem;