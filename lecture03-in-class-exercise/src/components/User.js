import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {increament, decreament, onClick, resetUser} from '../modules/userSlice';

const Layout=styled.div`
margin-top: 10px;
padding: 20px;
text-align: center;
`

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return(
        <Layout>
        <h2>{count}</h2>
        <br />
        
        <button
        onClick={() => dispatch(increament())}>+</button>
        <button
        onClick={()=>dispatch(decreament())}>-</button>
{/* 
        <input type="number" value={username}
        onChange={handleOnUser}/>
        <br />
        <button onClick = {handleOnBtClick}
        value = "onclick">Add Amount</button>
        <button onClick = {handleOnReset}
        value = "onclick">Reset</button>
        <br />
        {isClick && <lable> {username} </lable>} */}
    </Layout>
    );
}





const User = (props) => {
    // const username = useSelector(state=>state.user);
    const isClick = useSelector(state=>state.isClick);
    const dispatch = useDispatch();

const handleOnBtClick = (e) => {
    dispatch(onClick());
}
const handleOnReset = (e) => {
    e.preventDefault();
    dispatch(resetUser());
}

}

export default Counter;