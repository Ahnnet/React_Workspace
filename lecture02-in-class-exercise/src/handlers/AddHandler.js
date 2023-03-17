import React, {useState}from "react";

function addHandler(){
    const[num1,num2,addHandler] = useState();

    return<>
    <button type="button" onClick={()=>addHandler(num1+num2)}> Add </button>
    </>
}

function subHandler(){
    const[num1,num2,subHandler] = useState();

    return<>
    <button type="button" onClick={()=>subHandler(num1-num2)}> Sub </button>
    </>
}

function mulHandler(){
    const[num1,num2,mulHandler] = useState();
    
    return<>
    <button type="button" onClick={()=>mulHandler(num1*num2)}> Mul </button>
    </>
}

function divHandler(){
    const[num1,num2,divHandler] = useState(num1/num2);
    
    return <>
    <button type="button" onClick={()=>divHandler(num1/num2)}> Div </button>
    </>
}

function Calculate(){

}