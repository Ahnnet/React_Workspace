const car = [
    {id:1, name:"GRANDEUR", price:4500, feature:"Graceful design"},
    {id:2, name:"BMW", price:7800, feature:"Fancy"},
    {id:3, name:"AUDI", price:9000, feature:"My favorit"},
    {id:4, name:"FERARI", price:40000, feature:"My dream car"},
    {id:5, name:"GENESIS", price:6700, feature:"Popular Car"},
];

const CarItem = ({car}) => (
    <div>
        <span>
            [{car.id}]{" | "} {car.name} {" | "}{car.price} {" | "}{car.feature}{" "}
        </span>
    </div>
);

const Car = () => {
    return (
        <div>
            <h2>Car List</h2>
            {car.map((c) => (
                <CarItem car = {c}/>
            ))}
        </div>
    );
};

export default Car;