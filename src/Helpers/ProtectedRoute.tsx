import React, {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {IUser} from '../App'

interface IProtectedRoute {
    user: IUser,
    redirectPath?: string,
    children?: React.ReactElement | React.ReactElement[],
}

const ProtectedRoute: FC<IProtectedRoute> = ({user, redirectPath = '/auth', children}) => {

    if (!user.login) return <Navigate to={redirectPath} replace/>;

    return children ? <>{children}</> : <Outlet/>;

};

export default ProtectedRoute;