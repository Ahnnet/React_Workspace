function Car(props){
    return <h2>{props.brand.model}</h2>;
}

function Garage(){
    const carinfo = {name:"FORD", model:"MUSTANG"};
    return(
        <>
        <h1>Who lives in my garage????</h1>
        <Car brand = {carinfo}/>
        </>
    );
}

export default Garage;