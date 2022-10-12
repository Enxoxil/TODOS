import React, {useMemo} from 'react';
import classes from './TodoItem.module.css'
import {ITodoContainer} from './TodoItemContainer'
import {Input} from "antd";

interface ITodo extends ITodoContainer {
    onEditHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onEditActivateHandler: () => void,
    onSubmitHandler: (e: React.FormEvent) => void,
    editMode: boolean,
    todoText: string,
}

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