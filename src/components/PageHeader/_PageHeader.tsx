import React, {useContext, FC} from 'react';
import {PageHeader} from "antd";
import classes from './_PageHeader.module.css';
import {TodosContext} from "../../store/todos-context";

const _PageHeader: FC = () => {
    const {todos} = useContext(TodosContext);
    return (
        <PageHeader className={classes.header}
                     title='TODOS'
                     subTitle={`The number of todos: ${todos.length}`}
        />
    )
};

export default _PageHeader;