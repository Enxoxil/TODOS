import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import type {UserCredential, User} from "firebase/auth";

interface IAuthRequest {
    email: string,
    pass: string
}

export interface IInitialState {
    email: string | null,
    idToken: string,
    emailVerified: boolean,
    localId: string,
    refreshToken: string,
    expiresIn: string,
}

const initialState: IInitialState =
    {
        email: '',
        idToken: '',
        emailVerified: false,
        localId: '',
        expiresIn: '',
        refreshToken: '',
    }

export const signInWithEmailAndPass = createAsyncThunk(
    'registrationSlice/signInWithEmailAndPass',
    async ({email, pass}: IAuthRequest): Promise<User> => {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    }
)


export const createUserWithEmailAndPass = createAsyncThunk(
    'registrationSlice/createUserWithEmailAndPass',
    async ({email, pass}: IAuthRequest): Promise<User> => {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    }
)


const registrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUserWithEmailAndPass.fulfilled, (state, action) => {
                state.localId = action.payload.uid;
                state.email = action.payload.email;
                state.emailVerified = action.payload.emailVerified;

            });
        builder
            .addCase(signInWithEmailAndPass.fulfilled, (state, action) => {
                state.localId = action.payload.uid;
                state.email = action.payload.email;
                state.emailVerified = action.payload.emailVerified;
            })

    }
});

export default registrationSlice.reducer;