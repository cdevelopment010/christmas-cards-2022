import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardBasket from "./CardBasket";

const ItemDetail = ( { updateBasket }) => {
    const params = useParams();
    console.log(params.id)
    
    useEffect(()=> {
        fetchData();
    },[])

      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        const data = await fetch('../Data/data-all.json')
          .then(res => res.json())
          .then(data => data.filter(i=> i.id == params.id));
          console.log(data);
          setData(data);
      }

    return (
        <div className="container">
            
            {data.map((item, index)=> {

                
            return(
                <div className="d-grid container gap-25 mt-5">
                    <h1  className="text-center">Item Detail</h1>
                    {/* {item.title} | {item.quantity} */}
                    <CardBasket item = {item.item} />
                </div>
                
            )
            })}

        </div>
    )
}

export default ItemDetail;