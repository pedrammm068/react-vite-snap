import { useEffect, useState } from "react";

export default function Cardproduct() {
        const [product , setproduct] = useState([])
    
        useEffect( () => {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setproduct(data));
        } , [])
   
    return (
        
        <>
    {product.map(itme =>  (
    <>
    <div className="p-2 flex flex-col justify-center items-center ">
    <div className=" w-80 h-48  border rounded-2xl flex">
                  <img className="w-40 bg-contain p-2 h-40 " src={itme.image} alt="" />
                  <div className="p-2 flex flex-col items-center justify-center">
                      <h3 className="line-clamp-1">{itme.title}</h3>
                      <p className="text-center">price: ${itme.price}</p>
                  </div>
              </div>
        
    </div>
    </>
    )
        )}
        </>
    )
}