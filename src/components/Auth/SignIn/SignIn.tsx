import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link, useNavigate} from "react-router-dom";
import {useRootDispatch} from "../../../BLL/BLL_helpers/hooks";
import {signInWithEmailAndPass} from "../../../BLL/store/registration-slice/registration-slice";


const SignIn: FC = () => {
    const dispatch = useRootDispatch();
    const navigate = useNavigate();
    const signInHandler = async (email: string, pass: string) => {
        await dispatch(signInWithEmailAndPass({email, pass}));
        await navigate('/todos')
    }
    return (
        <div>
            <h1>Sign In</h1>
            <AuthForm title='Sign In' formHandler={signInHandler}/>

            <p>
                Are you haven`t a account? <Link to='/auth/signup'>Sign Up</Link>
            </p>
        </div>
    )
};

export default SignIn;