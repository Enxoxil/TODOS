import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Auth: FC = (props) => {
    return (
        <>
            <h1>Who are you?</h1>
            <Outlet/>
        </>
    )
};

export default Auth;