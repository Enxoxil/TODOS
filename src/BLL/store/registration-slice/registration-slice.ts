import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from 'axios';

const token = 'AIzaSyActbvWvQ9TQdBT51adIm-TCpxg0gZ5S7Q';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/';
const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
})

interface IAuthRequest {
    email: string;
    password: string;
    returnSecureToken: boolean;
}

interface ISignUpResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
}

interface ISignInResponse extends ISignUpResponse {

}

export interface IInitialState {
    email: string,
    idToken: string,
    registered?: boolean,
    localId: string,
    refreshToken: string,
    expiresIn: string,
}

const initialState: IInitialState =
    {
        email: '',
        idToken: '',
        registered: false,
        localId: '',
        expiresIn: '',
        refreshToken: '',
    }


export const registration = createAsyncThunk<ISignUpResponse, IAuthRequest>(
    'todosSlice/registration',
    async ({email, password, returnSecureToken}): Promise<ISignUpResponse> => {
        const response = await api.post<ISignUpResponse>(`accounts:signUp?key=${token}`,
            {email, password, returnSecureToken});
        return response.data;

    }
);

export const auth = createAsyncThunk<ISignUpResponse, IAuthRequest>(
    'todosSlice/auth',
    async ({email, password, returnSecureToken}): Promise<ISignUpResponse> => {
        const response = await api.post<ISignUpResponse>(`accounts:signInWithPassword?key=${token}`,
            {email, password, returnSecureToken});
        return response.data;

    }
);


const registrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.idToken = action.payload.idToken;
                state.localId = action.payload.localId;
                state.refreshToken = action.payload.refreshToken;
                state.expiresIn = action.payload.expiresIn;
            });
        builder
            .addCase(auth.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.idToken = action.payload.idToken;
                state.localId = action.payload.localId;
                state.refreshToken = action.payload.refreshToken;
                state.registered = action.payload.registered;
                state.expiresIn = action.payload.expiresIn;
            })

    }
})

export default registrationSlice.reducer;