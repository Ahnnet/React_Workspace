import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {inputUser, onClick, resetUser} from '../modules/userSlice';

const Layout = styled.div`
margin-top: 10px;
padding: 20px;
text-align: center;
`;

const User = (props) => {
    const username = useSelector(state=>state.user);
    const isClick = useSelector(state=>state.isClick);
    const dispatch = useDispatch();


const handleOnUser = (e) =>{
    dispatch(inputUser(e.target.value));
}
const handleOnBtClick = (e) => {
    dispatch(onClick());
}
const handleOnReset = (e) => {
    e.preventDefault();
    dispatch(resetUser());
}

return (
    <Layout>
        <h2> Redux Toolkit </h2>
        <input type="text" value={username}
        onChange = {handleOnUser}/>
        <button onClick = {handleOnBtClick}
        value = "onClick"> OK </button>
        <button onClick = {handleOnReset}
        value = "reset"> Reset </button>
        <br/>
        {isClick && <label> {username} </label>}
    </Layout>
);
}
export default User;