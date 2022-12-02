import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const SearchDetail = ({ updateBasket }) => {
    console.log("New Search Detail");
    const params = useParams();
    console.log(params.searchTerm)
    useEffect(()=> {
        setData([]);
        fetchData();
    },[])

      const [data,setData] = useState([]);
      
      const fetchData = async () => {
        setData([]);
        let searchTerm = new RegExp(params.searchTerm, "gi")
        const data = await fetch('../Data/data-all.json')
          .then(res => res.json())
          .then(data => data.filter(i=>   i.item.title.search(searchTerm) > -1 ||  i.item.desc.search(searchTerm) > -1
            // i.title.search(params.searchTerm) > -1 || i.desc.search(params.searchTerm) > -1;

          ))

        console.log("searchDetail:Data", data)
        console.log("searchDetail:Data", data.length)
          setData(data);
      }

    return (
        <div className="container">
            <h1>Searching for {params.searchTerm}...</h1>
            {data.length == 0 &&
                <h2 className="text-center ff-poppins mt-5">
                    0 Matches...
                </h2>
            }
            {data.map((item,index) => {
              return (
                <div key={index}>
                  <Card item={item} updateBasket={updateBasket}/>
                </div>
              )
            })}

        </div>
    )
}

export default SearchDetail;