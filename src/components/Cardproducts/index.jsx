import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../contexts/Cartcontext";

export default function Cardproduct() {
    const { numberCart , setnumberCart } = useContext(CartContext);
        const [product , setproduct] = useState([])
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

const getQuantity = (id) => {
    return numberCart?.find((item) => item.id === id)?.quantity || 0;
  };

        const quantity = useMemo(() => {
            return (id) => getQuantity(id);
          }, [numberCart]);



        function addCart(evt , id) {
evt.stopPropagation()
const isin = numberCart?.find(itme => itme.id === id)

if(isin) {
    setnumberCart(numberCart.map(itme => itme.id === id ? {...itme , quantity: itme.quantity + 1} : itme))

} else {
    debugger
    setnumberCart([...(numberCart || [] ), {id , quantity : 1}])
}

        }
   

        function removeCart(evt , id) {
evt.stopPropagation()
const quantityRe = quantity(id);
          if (!quantityRe){
            return
          } 
if(quantityRe === 1) {
    setnumberCart(numberCart.filter(itme => itme.id != id))
} else {
    setnumberCart(numberCart?.map(itme => itme.id === id ? {...itme , quantity: itme.quantity - 1} :
        itme
    ))
}

        }

    return (
        
        <>
    {product.map(itme =>  (
    <>
  
    <div className="p-2 flex flex-col justify-center items-center ">
    <div onClick={() => handelproduct(itme.id)} className=" w-full max-w-96 h-56 max-h-52  border rounded-2xl">
            <div  className="grid grid-cols-2">
                    <img className="w-40 bg-contain p-2 h-40 " src={itme.image} alt="" />
                  <div className="p-2 flex flex-col items-center justify-center">
                      <h3 className="line-clamp-1">{itme.title}</h3>
                      <p className="text-center">price: ${itme.price}</p>
                  </div>
                </div>  

                  <div className="flex gap-2  justify-center items-center  ">
<div onClick={(evt) => addCart(evt, itme.id)} className="bg-green-700 rounded-3xl"><p className="px-4 py-1">Add cart</p></div>
<p>{quantity(itme.id) || 0}</p>
<div onClick={(evt) => removeCart(evt, itme.id)} className="bg-red-700 rounded-3xl "><p className="px-4 py-1">Remove cart</p></div>

                  </div>

              </div>
        
    </div>
    </>
    )
        )}
        </>
    )
}