import { Link } from "react-router-dom";
const Card = ( { item }) => {
    return (
        <div className="card-container d-grid grid-row-1 ">
            <div className="card">
                <img  src={item.item.imgUrl} alt={`chirstmas by ${item.item.author}`} title={`Image by ${item.item.author}`}/>
                <div className="card-hover d-flex align-items-center justify-content-center flex-direction-column gap-25">
                    <button type="button"><Link to={`/shop/${item.id}`}>View Detail</Link></button>
                    <button type="button">Add to basket</button>
                </div>
            </div>
            <div className="grid-col-2 d-grid grid-col-2-auto">
                <span className="col-span-2 text-bold">{item.item.title}</span>
                <span>{item.item.price}</span>
                <span className="justify-self-end">{item.item.author}</span>
            </div>
        </div>
    )
}

export default Card; 