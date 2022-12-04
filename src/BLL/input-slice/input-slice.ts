import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    inputValue: string,
}

const initialState: IInitialState = {
    inputValue: '',
};

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState,
    reducers: {
        addInputValue(state, action){
            state.inputValue = action.payload.text;
        },
        removeInputValue(state){
            state.inputValue = '';
        }
    }
});

export const {addInputValue, removeInputValue} = inputSlice.actions;
export default inputSlice.reducer;