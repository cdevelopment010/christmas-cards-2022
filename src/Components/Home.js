import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    useEffect(()=> {
        fetchData();
      }, [])
    
      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        const data = await fetch('./Data/data-all.json')
          .then(res => res.json())
          console.log(data);
          setData(data);
      }

      

      return (
        <div className="d-grid gap-25 mt-5">
          <h1 className="text-center">Latest Cards</h1>
          <div className="d-grid grid-wrap grid-row-1 justify-items-center gap-25">
          {data.map((item,index) => {
              return (
                <div key={index}>
                  <Card item={item} />
                </div>
              )
            })}
            </div>
        </div>
      )
}

export default Home