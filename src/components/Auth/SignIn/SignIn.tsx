import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link} from "react-router-dom";


const SignIn: FC = () => {

    return (
        <div>
            <h1>Sign In</h1>
            <AuthForm title='Sign In' formHandler={() => {}}/>

            <p>
                Are you haven`t a account? <Link to='/auth/signup'>Sign Up</Link>
            </p>
        </div>
    )
};

export default SignIn;