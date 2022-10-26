import React, {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";

interface IProtectedRoute {
    user: boolean,
    redirectPath?: string,
    children?: React.ReactElement | React.ReactElement[],
}

const ProtectedRoute: FC<IProtectedRoute> = ({user, redirectPath = '/auth', children})=> {

    if(!user) return <Navigate to={redirectPath} replace/>;

    return children ? <>{children}</> : <Outlet/>;

};

export default ProtectedRoute;