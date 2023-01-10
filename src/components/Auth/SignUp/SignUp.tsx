import React, {FC} from 'react';
import AuthForm from "../AuthForm";
import {Link} from "react-router-dom";
import {registration} from "../../../BLL/store/registration-slice/registration-slice";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRootDispatch} from "../../../BLL/BLL_helpers/hooks";

interface ISignUpHandler {
    email: string,
    password: string,
}

const SignUp: FC = () => {
    const dispatch = useRootDispatch();
    const signUpHandler = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.uid);
                console.log(userCredential)
                // dispatch(registration({email, password}));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
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