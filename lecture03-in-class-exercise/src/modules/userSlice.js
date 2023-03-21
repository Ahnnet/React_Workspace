import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    resducers: {
        increament: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        onClick: (state) => {
            state.isClick = true;
        },

        resetUser: (state) => {
            state.isClick = false;
        }
    }
});

export const {increament, decreament} = counterSlice.actions;
export default counterSlice.reducer;

export const {increament, decreament, onClick, resetUser} = userSlice.actions;
export default userSlice.reducer;