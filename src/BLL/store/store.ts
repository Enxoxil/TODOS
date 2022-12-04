import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "../todo-slice/todo-slice";
import inputReducer from '../input-slice/input-slice'
 const store = configureStore({
    reducer: {
        todosReducer,
        inputReducer,
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

