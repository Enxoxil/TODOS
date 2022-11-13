import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "../todo-slice/todo-slice";

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

