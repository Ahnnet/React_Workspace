import React, {useState}from "react";

function Handler(){

    let num1=null
    let num2=null

    const[add,addHandler] = useState(num1+num2);
    const[sub,subHandler] = useState(num1-num2);
    const[mul,mulHandler] = useState(num1*num2);
    const[div,divHandler] = useState(num1/num2);

    const handleNum1Change = (e) => {
        num1 = parseInt(e.target.value);
        console.log(num1)
        console.log(num2)
        console.log(typeof(num1))
        console.log(typeof(num2))
      };
    
      const handleNum2Change = (e) => {
        num2 = parseInt(e.target.value);
      };

    return(
        <>
        <input type="text" value={num1} onChange={handleNum1Change}/>
        <input type="text" value={num2} onChange={handleNum2Change}/>
        <p>
        <button onClick={addHandler}> Add </button> {add}
        <button onClick={subHandler}> Sub </button> {sub}
        <button onClick={mulHandler}> Mul </button> {mul}
        <button onClick={divHandler}> Div </button> {div}
        </p>
        </>
    );
}

export default Handler;