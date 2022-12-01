import { useEffect, useState } from "react";
import Card from "./Card";

const Popular = ({ updateBasket }) => {
    useEffect(()=> {
        fetchData();
      }, [])
    
      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        const data = await fetch('./Data/data-all.json')
          .then(res => res.json())
          .then(data => data.filter(i => i.item.popular))
          console.log(data)
          setData(data);
      }

      return (
        <div className="d-grid gap-25 mt-5 container">
        <h1 className="text-center">Popular</h1>
        <div className="d-grid grid-wrap grid-row-1 justify-items-center gap-25">
        {data.map((item,index) => {
            return (
              <div key={index}>
                <Card item={item} updateBasket={updateBasket}/>
              </div>
            )
          })}
          </div>
      </div>
      )
}

export default Popular;