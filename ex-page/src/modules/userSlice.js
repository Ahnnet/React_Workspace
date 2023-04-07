import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
    isClick: false
}

const userSlice = createSlice({
    name:'userInfo',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirm password',
    initialState,
    reducers: {
        inputUser: (state, action) =>{
            state.user = action.payload;
            console.log(state.user);
        },
        inputEmail: (state, action) =>{
            state.email = action.payload;
        },
        inputPassword: (state, action) =>{
            state.email = action.payload;
        },
        inputConfirmPassword: (state, action) =>{
            state.confirmPassword = action.payload;
        },
        onClick: (state) => {
            state.isClick = true;
        }
    }
});

export const {inputUser, inputEmail, inputPassword, inputConfirmPassword, onClick} = userSlice.actions;
export default userSlice.reducer;