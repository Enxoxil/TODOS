import React, {useRef} from 'react';
import classes from './NewTodo.module.css';
interface IProps {
    onAddTodoHandler: (text: string) => void;
}

const NewTodo: React.FC<IProps> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //TODO throw error
            return;
        }
        props.onAddTodoHandler(enteredText);
        todoTextInputRef.current!.value = '';
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <label htmlFor='text'>Please enter TODO text</label>
                <input type='text' id='text' ref={todoTextInputRef} />
                <button type='submit'>Add TODO</button>
            </form>
        </>
    )
};

export default NewTodo;