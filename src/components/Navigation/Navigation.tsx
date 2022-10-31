import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css'
import {IUser} from '../../App'

interface INavigation {
    user: IUser,
    handleLogout: () => void,
    handleLogin: () => void,
}

const Navigation: FC<INavigation> = ({user, handleLogout, handleLogin}) => {
    return (
            <nav className={classes.todoNavigate}>
                <ul className={classes.todoNavigate__Wrapper}>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/home' className={classes.todoNavigate__item}>Home</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/todos' className={classes.todoNavigate__item}>Todos</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}><NavLink to='/admin' className={classes.todoNavigate__item}>Admin</NavLink></li>
                    <li className={classes.todoNavigate__itemWrapper}>
                        {user! && user!.login ? (
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