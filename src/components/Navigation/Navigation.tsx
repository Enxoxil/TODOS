import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Navigation: FC = (props) => {
    return (
            <nav>
                <ul>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/todos'>Todos</NavLink></li>
                    <li><NavLink to='/admin'>Admin</NavLink></li>
                </ul>
            </nav>
    )
};

export default Navigation;