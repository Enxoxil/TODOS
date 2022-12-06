import React, {useRef, FC, useEffect} from 'react';
import classes from './TodoItem.module.css'
import {ITodo} from "./Types/ITodo";
import {Input} from "antd";
import type {InputRef} from 'antd';

const TodoItem: FC<ITodo> = (props) => {
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (props.editMode) {
            inputRef!.current!.focus({
                cursor: 'end'
            });
        }
    }, [props.editMode])

    return (
        <div className={props.checked ? `${classes.item} ${classes.checked}` : classes.item}>
            <div className={classes.control}>
                <div className={classes.box}>
                    <label htmlFor={props.id}>Is Done</label>
                    <input onChange={props.onIsDoneHandler} type="checkbox" checked={props.checked} value='IsDone' id={props.id}/>
                </div>
                <div className={classes.date}>
                    <p>{props.currentDate}</p>
                </div>
                <button className={classes.controlButton} onClick={props.onRemoveHandler}>X</button>
            </div>
            <div onDoubleClick={props.onActivateEditHandler}>
                {!props.editMode && <li>{props.todoText}</li>}
                {props.editMode &&
                    <li>
                        <form onSubmit={props.onSubmitHandler}>
                            <Input ref={inputRef} allowClear onChange={props.onEditHandler}
                                   onBlur={props.onBlurHandler}
                                   value={props.todoText}/>
                        </form>
                    </li>
                }
            </div>
        </div>
    )
};

export default TodoItem;