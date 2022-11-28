import { useEffect, useState } from "react";

const Home = () => {
    useEffect(()=> {
        fetchData();
      }, [])
    
      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        const data = await fetch('./Data/data-all.json')
          .then(res => res.json())
          setData(data);
      }

      return (
        <div>
        {data.map((item,index) => {
            return (
              <div key={index}>
                <img  src={item.item.imgUrl} alt={`chirstmas by ${item.item.author}`} title={`Image by ${item.item.author}`}/>
                <figcaption>{`Image by ${item.item.author}`}</figcaption>
              </div>
            )
          })}
          </div>
      )
}

export default Home