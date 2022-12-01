import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetail = () => {
    const params = useParams();
    
    useEffect(()=> {
        fetchData();
    })

      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        const data = await fetch('../Data/data-all.json')
          .then(res => res.json())
          .then(data => data.filter(i=> i.id === params.id));
          console.log(data);
          setData(data);
      }

    return (
        <div className="container">
            
            Item ID: {params.id}

        </div>
    )
}

export default ItemDetail;