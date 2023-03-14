function formatDate(date){
    return date.toLocaleDateString();
}

function Me(props){
    return(
        <div>
            <div className="Me">
                <div className="UserInfo">
                    <img className="Photo"
                        src={props.author.logo}
                        alt={props.author.name}/>
                    <div className="UserInfo-name">
                        {props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Cooment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}

export default Me;