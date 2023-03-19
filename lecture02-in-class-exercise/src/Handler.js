import React, {useState}from "react";

function Handler(){

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const handleNum1Change = ((e) => {
      setNum1(parseInt(e.target.value));
    });
  
    const handleNum2Change = ((e) => {
      setNum2(parseInt(e.target.value));
    });

    const[add,addHandler] = useState(num1+num2);
    const[sub,subHandler] = useState(num1-num2);
    const[mul,mulHandler] = useState(num1*num2);
    const[div,divHandler] = useState(num1/num2);

    return(
        <>
        <input type="text" value={num1} onChange={handleNum1Change}/>
        <input type="text" value={num2} onChange={handleNum2Change}/>
        <p>
        <button onClick={()=>addHandler(num1+num2)}> Add </button> {add} &nbsp;&nbsp;
        <button onClick={()=>subHandler(num1-num2)}> Sub </button> {sub} &nbsp;&nbsp;
        <button onClick={()=>mulHandler(num1*num2)}> Mul </button> {mul} &nbsp;&nbsp;
        <button onClick={()=>divHandler(num1/num2)}> Div </button> {div} &nbsp;&nbsp;
        </p>
        </>
    );
}

export default Handler;