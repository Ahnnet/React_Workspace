import {useSelector, useDispatch} from 'react-redux/';
import { increament, decreament, reset, incrementByAmount } from '../../modules/counter/counterSlice';
import {useState} from "react";
import styled from "styled-components";

const Layout=styled.div`
margin-top: 10px;
padding: 20px;
text-align: center;
`

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <Layout>
            <p>{count}</p>
            <div>
            <button
            onClick={() => dispatch(increament())}>+</button>
            <button
            onClick={()=>dispatch(decreament())}>-</button>
            <br />
            <input type="text" value={incrementAmount}
            onChange={(e)=>setIncrementAmount(e.target.value)}/>
            <br />
            <button
            onClick={()=>dispatch(incrementByAmount(addValue))}>Add Number</button>
            <button
            onClick={resetAll}>Reset</button>

{/*             
            <input type="number" value={username}
            onChange={handleOnUser}/>
            <br />
            <button onClick = {handleOnBtClick}
            value = "onclick">Add Amount</button>
            <button onClick = {handleOnReset}
            value = "onclick">Reset</button> */}


            </div>


        </Layout>
    );
}
export default Counter;