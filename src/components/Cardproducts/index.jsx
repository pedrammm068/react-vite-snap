import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../storeZTak/zusTak";

export default function Cardproduct() {
    const [product, setproduct] = useState([])
  const [Loding , setLoding] = useState(true)
    const { AddCart, RemoveCart, GetQuantity} = useCart()
    const nav = useNavigate()
    const loc = useLocation()

    function handelproduct(id) {
        if (loc.pathname === "/:id") {
            return
        } else {
            nav(`/${id}`)
        }
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data =>  {
                setproduct(data);
                setLoding(false)
             });

    }, [])
    if (Loding) {
        return (
            <>
           <div className="flex fixed right-0 top-0 items-center justify-center h-full w-full z-10"> 
            <div className="fixed bg-amber-300 w-full h-full  flex items-center pb-40 justify-center z-10">
            <p className="text-black text-3xl font-bold">مشتی بازم باید منتظر بمونی</p>
          </div>
            
            </div> 
            </>
        )
    }

    return (

        <>
            {product.map(itme => (
                <>

                    <div className="p-2 flex flex-col justify-center items-center ">
                        <div onClick={() => handelproduct(itme.id)} className=" w-full max-w-96 h-56 max-h-52 md:max-h-96 md:h-96 border rounded-2xl">
                            <div className="grid grid-cols-2 md:block">
                                <img className="w-40 bg-contain p-2 h-40 md:w-full md:h-64 " src={itme.image} alt="" />
                                <div className="p-2 flex flex-col items-center justify-center">
                                    <h3 className="line-clamp-1">{itme.title}</h3>
                                    <p className="text-center">price: ${itme.price}</p>
                                </div>
                            </div>

                            <div className="flex gap-2  justify-center items-center  ">
                                <button className="bg-green-600 w-8 text-center rounded-3xl" onClick={(e) => {
                                    e.stopPropagation(
                                        AddCart({  
                                            id: itme.id,
                                            title: itme.title,
                                            price: itme.price
                                        })
                                    )
                                }}>+</button>
                                <p>{GetQuantity(itme.id)}</p>
                                <button className="bg-red-600 w-8 text-center rounded-3xl" onClick={(e) => {
                                    e.stopPropagation()
                                    RemoveCart(itme.id)
                                }}>-</button>
                                <span className="sm:hidden md:block">در سبد: {GetQuantity(itme.id)}</span>
                            </div>

                        </div>

                    </div>
                </>
            )
            )}
        </>
    )
}