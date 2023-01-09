import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./todo-slice/todo-slice";
import inputReducer from './input-slice/input-slice'
import registrationReducer from "./registration-slice/registration-slice";
 const store = configureStore({
    reducer: {
        todosReducer,
        inputReducer,
        registrationReducer,
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

