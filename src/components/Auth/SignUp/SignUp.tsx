import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link} from "react-router-dom";
import {registration} from "../../../BLL/store/registration-slice/registration-slice";


const SignUp: FC = (props) => {

    return (
        <>
            <h1>Sign Up</h1>
            <AuthForm title='Sign Up' action={registration}/>

            <p>
                Are you have a account? <Link to='/auth/signin'>Sign In</Link>
            </p>
        </>
    )
};

export default SignUp;