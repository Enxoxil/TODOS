import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import {IInitialState} from "../../BLL/store/registration-slice/registration-slice";


interface INavigation {
    user: IInitialState,
    handleLogout: () => void,
    handleLogin: () => void,
}

const Navigation: FC<INavigation> = ({user, handleLogout, handleLogin}) => {
    return (
            <nav className={classes.todoNavigate}>
                <ul className={classes.todoNavigate__Wrapper}>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/home' tabIndex={0} className={classes.todoNavigate__item}>Home</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/todos' tabIndex={0} className={classes.todoNavigate__item}>Todos</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/admin' tabIndex={0} className={classes.todoNavigate__item}>Admin</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}>
                        {user!.email ? (
                            <button className={classes.todoNavigate__item} onClick={handleLogout}>Sign out</button>
                        ) : (
                            <button className={classes.todoNavigate__item} onClick={handleLogin}>Sign in</button>
                        )}
                    </li>
                </ul>
            </nav>
    )
};

export default Navigation;