import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {inputUser, inputEmail, inputPassword, inputConfirmPassword, onClick} from '../modules/userSlice';

const Layout = styled.div`
margin-top: 10px;
padding: 20px;
text-align: center;
`;

const User = (props) => {
    const username = useSelector(state=>state.user);
    const email = useSelector(state=>state.email);
    const password = useSelector(state=>state.password);
    const confirmPassword = useSelector(state=>state.confirmPassword);
    const isClick = useSelector(state=>state.isClick);
    const dispatch = useDispatch();


    const handleOnUser = (e) =>{
        dispatch(inputUser(e.target.value));
    }
    const handleOnEmail = (e) =>{
        dispatch(inputEmail(e.target.value));
    }
    const handleOnPassword = (e) =>{
        dispatch(inputPassword(e.target.value));
    }
    const handleOnConfirmPassword = (e) =>{
        dispatch(inputConfirmPassword(e.target.value));
    }
    const handleOnBtClick = (e) => {
        dispatch(onClick());
    }
    
    return (
        <Layout>
            <h1>Register</h1>
            <h2> WELCOME </h2>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME: </b>
            <input type="text" value={username}
            onChange = {handleOnUser}/>
            <br/>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMAIL: </b>
            <input type="text" value={email}
            onChange = {handleOnEmail}/>
            <br/>
            <b>PASSWORD: </b>
            <input type="text" value={password}
            onChange = {handleOnPassword}/>
            <br/>
            <b>&nbsp;&nbsp;&nbsp;CONFIRM: </b>
            <input type="text" value={confirmPassword}
            onChange = {handleOnConfirmPassword}/>
            <br/>
            <br/>
            <button onClick = {handleOnBtClick}
            value = "onClick"> Register </button>
            <br/>
            {isClick && <label> {username} </label>}
            {!(isClick) && <label> {email} </label>}
        </Layout>
    );
}
export default User;