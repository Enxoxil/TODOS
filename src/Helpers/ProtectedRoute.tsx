import React, {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";

interface IProtectedRoute {
    isAllowed: boolean,
    redirectPath?: string,
    children?: React.ReactElement | React.ReactElement[],
}

const ProtectedRoute: FC<IProtectedRoute> = ({isAllowed, redirectPath = '/auth/signin', children}) => {

    if (!isAllowed) return <Navigate to={redirectPath} replace/>;
    return children ? <>{children}</> : <Outlet/>;

};

export default ProtectedRoute;