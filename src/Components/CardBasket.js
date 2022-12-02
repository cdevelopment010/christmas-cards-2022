
const CardBasket = ( { item } ) => {

    console.log(item)
    return (
        <div className="d-grid grid-col-2 gap-25 basket-card">
            <img src ={item.imgUrl} className="justify-self-center" alt={`chirstmas by ${item.author}`} title={`Image by ${item.author}`}/>
            <div className="d-grid grid-col-2 m-5">
                <h4>{item.title}</h4>
                {item.quantity &&
                    <span className="justify-self-end">Quantity: {item.quantity}</span>
                }
                <span className="col-span-2">{item.desc}</span>
                {item.quantity &&
                    <span className="col-span-2 justify-self-end align-self-end">£{Math.round(item.price * item.quantity * 100)/100}</span>
                }
                 {!item.quantity &&
                    <span className="col-span-2 justify-self-end align-self-end">£{Math.round(item.price * 100)/100}</span>
                }
            </div>

        </div>
    )
}

export default CardBasket;