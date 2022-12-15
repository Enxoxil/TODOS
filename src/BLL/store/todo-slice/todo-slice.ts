import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../../models/Todo";

interface IAuth {
    email: string;
    idToken: string;
    refreshToken: string;
}

interface IInitialState {
    todos: Todo[],
    isAuth: IAuth,
}

const initialState: IInitialState = {
    todos: [],
    isAuth: {
        email: '',
        idToken: '',
        refreshToken: '',
    }
}

const token = 'AIzaSyActbvWvQ9TQdBT51adIm-TCpxg0gZ5S7Q';

export const authenticate = createAsyncThunk<IAuth, {email: string, password: string}, {rejectValue: string}>(
    'todosSlice/authenticate',
    async ({email, password}, {
        rejectWithValue
    }) => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${token}`, {
            method : 'POST',
            body: JSON.stringify({
                email,
                password,
                returnRescueToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        if (!response.ok) {
            return rejectWithValue('Error');
        }
        return await response.json();
    }
)

const todoSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                ...new Todo(action.payload)
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        isDone(state, action: PayloadAction<string>) {
            const doneTodoItem = state.todos.find(item => item.id === action.payload);
            if (doneTodoItem) {
                doneTodoItem!.checked = !doneTodoItem!.checked;
            }
        },
        editTodo(state, action: PayloadAction<{ text: string, id: string }>) {
            const editTodo = state.todos.find(item => item.id === action.payload.id);
            if (editTodo) {
                editTodo!.text = action.payload.text;
            }
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(authenticate.fulfilled, (state, action) => {
            state.isAuth.idToken = action.payload.idToken;
            state.isAuth.refreshToken = action.payload.refreshToken;
            state.isAuth.email = action.payload.email;
        })
    }
})

export const {addTodo, removeTodo, isDone, editTodo} = todoSlice.actions
export default todoSlice.reducer;