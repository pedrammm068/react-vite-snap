import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../contexts/Cartcontext";

export default function Cardproduct() {
    const { numberCart , setnumberCart } = useContext(CartContext);
        const [product , setproduct] = useState([])
        const [addItme , setAddItme] = useState({})

     const nav = useNavigate() 
     const loc = useLocation()

function handelproduct(id) {
if(loc.pathname === "/:id") {
    return
} else {
    nav(`/${id}`)
}
}
        
        useEffect( () => {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setproduct(data));
        } , [])




        function AddendItme(evt , id) {
evt.stopPropagation()
setAddItme(prev => ( {
    ...prev , 
    [id] : (prev[id] || 0) + 1
}))
        }

        function remove(evt , id) {
            evt.stopPropagation()
            setAddItme(prev => {
    const Val = prev[id] || 0
    const newVal = Val > 0 ? Val - 1 : 0
    return {
        ...prev,
    [id]: newVal
    }
            })
        }
        const Addtocart = (evt , id) => {
            evt.stopPropagation()
         if(!addItme[id] || addItme[id] === 0) {
            return
         }
            const quantity = addItme[id] || 1

            setnumberCart(prev => {
                const indexitme = prev?.findIndex(itme => itme.id === id)
                
                if (indexitme >= 0) {
                    const newCart = [...prev]
                    newCart[indexitme] = {
                        ...newCart[indexitme],
                        quantity : newCart[indexitme].quantity + quantity

                    }
                    return newCart
                }
                return [...(prev || []) , {id , quantity}]
            })
            setAddItme(prev => ({...prev , [id]: 0}))
        }
   

        function removeCart(evt , id) {
evt.stopPropagation()
setnumberCart(itme => itme?.filter(item => item.id !== id) || [])
        }
const Getcart = (id) => {
const item = numberCart?.find(item => item.id === id)
return item ? item.quantity : 0
}
    return (
        
        <>
    {product.map(itme =>  (
    <>
  
    <div className="p-2 flex flex-col justify-center items-center ">
    <div onClick={() => handelproduct(itme.id)} className=" w-full max-w-96 h-56 max-h-52 md:max-h-96 md:h-96 border rounded-2xl">
            <div  className="grid grid-cols-2 md:block">
                    <img className="w-40 bg-contain p-2 h-40 md:w-full md:h-64 " src={itme.image} alt="" />
                  <div className="p-2 flex flex-col items-center justify-center">
                      <h3 className="line-clamp-1">{itme.title}</h3>
                      <p className="text-center">price: ${itme.price}</p>
                  </div>
                </div>  

                  <div className="flex gap-2  justify-center items-center  ">
<button className="bg-green-600 w-8 text-center rounded-3xl" onClick={(e) => AddendItme(e , itme.id)}>+</button>
<p>{addItme[itme.id ]|| 0}</p>
<button className="bg-red-600 w-8 text-center rounded-3xl" onClick={(e) => remove(e , itme.id)}>-</button>
<div onClick={(evt) => Addtocart(evt, itme.id)} className="bg-green-700 rounded-3xl"><p className="px-4 py-1">تایید</p></div>
<div onClick={(evt) => removeCart(evt, itme.id)} className="bg-red-700 rounded-3xl "><p className="px-4 py-1">حذف</p></div>
<span className="sm:hidden md:block">در سبد: {Getcart(itme.id)}</span>
                  </div>

              </div>
        
    </div>
    </>
    )
        )}
        </>
    )
}