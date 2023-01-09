import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link} from "react-router-dom";
import {auth} from "../../../BLL/store/registration-slice/registration-slice";

const SignIn: FC = () => {

    return (
        <>
            <h1>Sign In</h1>
            <AuthForm title='Sign In' action={auth}/>

            <p>
                Are you haven`t a account? <Link to='/auth/signup'>Sign Up</Link>
            </p>
        </>
    )
};

export default SignIn;