import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {inputUser, inputEmail, inputPassword, inputConfirmPassword, onClick} from '../modules/userSlice';
import Popup from './Popup';

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
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
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
    const onSubmit = (e) => {
        if(password!=confirmPassword){
            setPopup({
                open: true,
                title: "Error",
                message: "Please make sure all fields are filled in correctly."
            });
            return;
            }
        else{
            setPopup({
                open: true,
                title: "Welcome!",
                message: "Now you are our client!"
            });
            return;
        }
    }
    
    return (
        <Layout>
            <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
            <h1>Register</h1>
            <h2> WELCOME </h2>
            <input type="text" value={username} placeholder='NAME'
            onChange = {handleOnUser}/>
            <br/>
            <input type="text" value={email} placeholder='EMAIL'
            onChange = {handleOnEmail}/>
            <br/>
            <input type="password" value={password} placeholder='PASSWORD'
            onChange = {handleOnPassword}/>
            <br/>
            <input type="password" value={confirmPassword} placeholder='CONFIRM PASSWORD'
            onChange = {handleOnConfirmPassword}/>
            <br/>
            <br/>
            <button onClick = {onSubmit}
            value = "onClick"> Register </button>
            <br/>
        </Layout>
    );
}
export default User;