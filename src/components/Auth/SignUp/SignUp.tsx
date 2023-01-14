import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link, useNavigate} from "react-router-dom";
import {useRootDispatch} from "../../../BLL/BLL_helpers/hooks";
import {createUserWithEmailAndPass} from "../../../BLL/store/registration-slice/registration-slice";


const SignUp: FC = () => {
    const dispatch = useRootDispatch();
    const navigate = useNavigate();
    const signUpHandler = async (email: string, pass: string) => {
        await dispatch(createUserWithEmailAndPass({email, pass}));
        await navigate('/todos');
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <AuthForm title='Sign Up' formHandler={signUpHandler}/>
            <p>
                Are you have a account? <Link to='/auth/signin'>Sign In</Link>
            </p>
        </div>
    )
};

export default SignUp;