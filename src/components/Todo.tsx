import React from 'react';

interface ITodo {
    text: string;
}

const TodoItem: React.FC<ITodo> = (props) => {
    return (
        <>
            <li >{props.text}</li>
        </>
    )
};

export default TodoItem;