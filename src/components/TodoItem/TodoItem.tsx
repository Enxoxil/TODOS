import React from 'react';
import classes from './TodoItem.module.css'
import {ITodo} from "./Types/ITodo";
import {Input} from "antd";

const TodoItem: React.FC<ITodo> = React.memo((props) => {

    return (
        <div className={classes.item}>
            <div onDoubleClick={props.onEditActivateHandler}>
                {!props.editMode && <li>{props.text}</li>}
                {props.editMode &&
                    <li>
                        <form onSubmit={props.onSubmitHandler}>
                            <Input allowClear onChange={props.onEditHandler}
                                   value={props.todoText}/>
                        </form>
                    </li>
                }
            </div>
            <div className={classes.control}>
                <label htmlFor="isDone">Is Done</label>
                <input onChange={props.onIsDoneHandler} type="checkbox" checked={props.checked} value='IsDone'
                       id='isDone'/>
                <button onClick={props.onRemoveHandler}>X</button>
            </div>
        </div>
    )
});

export default TodoItem;