import React, {useContext} from 'react';
import {Input} from "antd";
import {TodosContext} from "../../store/todos-context";
import classes from './NewTodo.module.css'

interface IProps {
    onKeyDownHandler: (e: React.KeyboardEvent) => void;
}

const TextArea: React.FC<IProps> = ({onKeyDownHandler}) => {
    const {TextArea} = Input;
    const {inputEvent, inputValue} = useContext(TodosContext)
    return (
        <>
            <TextArea className={classes.textarea}
                      placeholder='Please, enter your TODO.' allowClear autoSize={{maxRows: 3}}
                      value={inputValue} onChange={inputEvent} onKeyDown={onKeyDownHandler}
            />
        </>
    )
};

export default TextArea;