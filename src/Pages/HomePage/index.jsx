
import { useEffect, useState } from "react";
import Cardproduct from "../../components/Cardproducts";
import Home from "../../components/Home";
import Login from "../../components/Login";
import useCart from "../../storeZTak/zusTak";

export default function HomePage({numberCart}) {
  const [isClick , setisClick] = useState( localStorage.getItem("isClick" ) ? false : true)
  const {clearCart} = useCart()
   const [Loding , setLoding] = useState(true)

   useEffect (() => {
const time = setTimeout(() => {
setLoding(false)
}, 2000)
return () => clearTimeout(time)
   }, [])

   if (Loding) {
    return (
      <>
      <div className="flex fixed right-0 top-0 items-center justify-center h-full w-full z-10"> 
       <div className="fixed bg-amber-50 w-full h-full  flex items-center pb-40 justify-center z-10">
       <p className="text-black text-4xl font-semibold">مشتی  باید منتظر بمونی</p>
     </div>
       
       </div> 
       </>
    )
   }

   return (
        <>
        <Home  />
        <div className="mb-8 md:mb-8 md:grid md:grid-cols-4 p-4 sm:grid-cols-2 sm:grid ">
        <Cardproduct numberCart={numberCart} />
        </div>
        <div className="flex justify-center md:p-4 pb-24">
        <div onClick={(e) => {
                                    e.stopPropagation()
                                    clearCart()
                                }} className="bg-red-700 rounded-3xl">
                                    <p className="px-4 py-1 text-center"> حذف کل سبد خرید</p></div>

        </div>

{!(isClick === false) && <Login setisClick={setisClick} /> } 
    

        </>
    )
}