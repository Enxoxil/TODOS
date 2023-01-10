import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Auth: FC = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Who are you?</h1>
            <Outlet/>
        </div>
    )
};

export default Auth;