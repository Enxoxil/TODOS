import React, {useRef, forwardRef, memo, FC, useImperativeHandle, useEffect} from 'react';
import classes from './TodoItem.module.css'
import {ITodo} from "./Types/ITodo";
import {Input} from "antd";
import type {InputRef} from 'antd';

const TodoItem: FC<ITodo> = (props) => {
    const inputRef = useRef<InputRef>(null);
    const {checked,
        text,
        todoText,
        editMode,
        onEditHandler,
        onSubmitHandler,
        onBlurHandler,
        onIsDoneHandler,
        onRemoveHandler,
        onEditActivateHandler
    } = props;

    useEffect(() => {
        if (props.editMode) {
            inputRef!.current!.focus({
                cursor: 'end'
            });
        }
    }, [props.editMode])


    return (
        <div className={classes.item}>
            <div className={classes.control}>
                <div className={classes.box}>
                    <label htmlFor="isDone">Is Done</label>
                    <input onChange={onIsDoneHandler} type="checkbox" checked={checked} value='IsDone'
                           id='isDone'/>
                </div>

                <button className={classes.controlButton} onClick={onRemoveHandler}>X</button>
            </div>
            <div onDoubleClick={onEditActivateHandler}>
                {!editMode && <li>{text}</li>}
                {editMode &&
                    <li>
                        <form onSubmit={onSubmitHandler}>
                            <Input ref={inputRef} allowClear onChange={onEditHandler}
                                   onBlur={onBlurHandler}
                                   value={todoText}/>
                        </form>
                    </li>
                }


            </div>
        </div>
    )
};

export default TodoItem;