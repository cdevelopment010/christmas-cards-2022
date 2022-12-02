import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardBasket from "./CardBasket";

const Basket = ( {updateBasket} ) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);
    useEffect(() => {
        getBasketItems();
        
    }, [])

    let nav = useNavigate()
    useEffect(() => {
        
    }, [ items ])

    const deleteItems = () => {
        localStorage.removeItem('christmas-code-challenge-2022-cards');
        setItems([]); 
        setTotalPrice(0)
        updateBasket();
        nav('/basket'); 
    }

    const getBasketItems = () => {
        let basket = JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards')) !== null ?
            JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards'))
            : []
        ; 
        let basketUnique = [];
        basket.forEach((item) => {
            let addItem = true;
            basketUnique.forEach(unique => {
                if (unique.title === item.title) {
                    addItem = false;
                    unique.quantity ++;
                }
            }); 

            if (addItem) {
                item.quantity = 1;
                basketUnique.push(item);
            } 
        });


        let price = basketUnique.reduce((prev, curr) => {
            return prev = prev + (curr.quantity * curr.price * 1);
        }, 0)
        price=Math.round(price*100)/100;
        setTotalPrice(price);
        setItems(basketUnique);
    }
    return (
        <div className="d-grid container gap-25 mt-5">
            <h1 className="text-center">Basket</h1>
            <i 
                className="fa-solid fa-trash justify-self-end text-col-1 trash" 
                title="This will delete all items in your basket"
                onClick={deleteItems}
                ></i>

            {items.length === 0 &&
            
                    <div className="text-center">
                        <h2 className="ff-poppins">Oh No! <br/><br/>  Looks like your basket is empty!</h2>
                    </div>
                
            }
            {items.map((item, index)=> {

                
                return(
                    <div>
                        {/* {item.title} | {item.quantity} */}
                        <CardBasket item = {item} />
                    </div>
                    
                )
            })}
            <div className="d-flex gap-25 justify-content-end">
                <span>
                    Total Price: 
                </span>
                
                <span className="text-bold  ">
                    £{totalPrice}
                </span>
            </div>
        </div>
    )
}

export default Basket;