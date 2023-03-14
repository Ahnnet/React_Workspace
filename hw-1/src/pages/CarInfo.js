const car = [
    {id:1, name:"GRANDEUR", price:4500, feature:"Graceful design"},
    {id:2, name:"BMW", price:7800, feature:"Fancy"},
    {id:3, name:"AUDI", price:9000, feature:"My favorit"},
    {id:4, name:"FERARI", price:40000, feature:"My dream car"},
    {id:5, name:"GENESIS", price:6700, feature:"Popular Car"},
];

const CarItem = ({car}) => (
    <>
        <tr>
            <td>{car.id}</td>&nbsp;&nbsp;
            <td>{car.name}</td>&nbsp;&nbsp;
            <td>{car.price}</td>&nbsp;&nbsp;
            <td>{car.feature}</td>&nbsp;&nbsp;
        </tr>
    </>
);

const CarInfo = () => {
    return(
        <div>
        <h1>Car Information</h1>
        {car.map((c) => (
            <CarItem car = {c}/>
        ))}
        </div>
    );
};

export default CarInfo;