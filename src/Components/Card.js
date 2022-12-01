import { Link } from "react-router-dom";
const Card = ( { item, updateBasket }) => {

    // {
    //     [{name: 'card1', 'price': 1.99}]
    // }
    const addToBasket = () => {
        //get the local storage
        //access the array
        //add item to array
        //setLocalStorage

        let basket = JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards')) !== null ?
            JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards'))
            : []
        ; 
        basket.push(item.item);
        console.log(basket)
        localStorage.setItem('christmas-code-challenge-2022-cards', JSON.stringify(basket)); 
        updateBasket();
    }

    return (
        <div className="card-container d-grid grid-row-1 ">
            <div className="card">
                <img  src={item.item.imgUrl} alt={`chirstmas by ${item.item.author}`} title={`Image by ${item.item.author}`}/>
                <div className="card-hover d-flex align-items-center justify-content-center flex-direction-column gap-25">
                    {/* <button type="button"><Link to={`/shop/${item.id}`}>View Detail</Link></button> */}
                    <Link to={`/shop/${item.id}`}><button type="button">View Detail</button></Link>
                    <button type="button" onClick={addToBasket}>Add to basket</button>
                </div>
            </div>
            <div className="grid-col-2 d-grid grid-col-2-auto">
                <span className="col-span-2 text-bold">{item.item.title}</span>
                <span>£{item.item.price}</span>
                <span className="justify-self-end">{item.item.author}</span>
            </div>
        </div>
    )
}

export default Card; 