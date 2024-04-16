import React, { useEffect, useState } from "react";
import Item from "./Item";

function Data(props) {
  let [data, setData] = useState([])
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)

  useEffect(()=>{
    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        let response = await fetch('https://fakestoreapi.com/products')
        setData(await response.json())
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    })()
  }, [])

  if(error){
    return <h1 className="w-full h-screen flex items-center justify-center">Something Wrong</h1>
  }
  if(loading){
    return <h1 className="w-full h-screen flex items-center justify-center">Loading...</h1>
  }

  return (
    <>
      <div className="py-8">
        <h1 className="text-2xl font-bold flex items-center justify-center w-full">
          Data Fetch Through Api
        </h1>

        <div className="flex items-center justify-start flex-wrap w-[90%] mx-auto">
          {data.map((item, i) => {
            return (
              <Item
                key={i}
                image={item.image}
                title={item.title}
                price={`Price: ${item.price} $`}
                category={item.category}
                rating={`Rate: ${item.rating.rate}`}
                count={`Count: ${item.rating.count}`}
              />
            );
          })}
        </div>
      </div>
    </>

  );
}
export default Data;
