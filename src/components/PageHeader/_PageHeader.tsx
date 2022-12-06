import React, {useContext, FC} from 'react';
import {PageHeader} from "antd";
import classes from './_PageHeader.module.css';
import {useRootSelector} from "../../BLL/BLL_helpers/hooks";

const _PageHeader: FC = () => {
    const {todos} = useRootSelector(state => state.todosReducer)
    return (
        <PageHeader className={classes.header}
                     title='TODOS'
                     subTitle={`The number of todos: ${todos.length}`}
        />
    )
};

export default _PageHeader;