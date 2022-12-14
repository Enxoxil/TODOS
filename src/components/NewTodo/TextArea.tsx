import React, {useContext} from 'react';
import {Input} from "antd";
import classes from './NewTodo.module.css'
import {ITextArea} from "./Types/ITextArea";

const TextArea: React.FC<ITextArea> = ({onKeyDownHandler, inputValue, inputEvent}) => {
    const {TextArea} = Input;
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