import React from 'react';
import classes from './TodoItem.module.css'

interface ITodo {
    text: string;
    onRemoveHandler: () => void; // event: React.MouseEvent только если нужно использовать событие
}

const TodoItem: React.FC<ITodo> = (props) => {

    return (
        <>
            <li className={classes.item} onClick={props.onRemoveHandler}>{props.text}</li>
        </>
    )
};

export default TodoItem;