const user = [
    {name:"gachon Kim", product:"Grandeur XG Pric", e:5500, Date:"2023-03-02"},
];

const UserItem = ({user}) => (
    <div>
        <p>Customer name: {user.name}</p>
        <p>Product: {user.product}</p>
        <p>e: {user.e}</p>
        <p>Date: {user.Date}</p>
    </div>
);

const UserInfo = () => {
    return (
        <div>
            <h1>Customer Information</h1>
            {user.map((u) => (
                <UserItem user = {u}/>
            ))}
        </div>
    );
};

export default UserInfo;