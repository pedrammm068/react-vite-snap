import { useLocation, useNavigate } from "react-router-dom"
import useCart from "../../storeZTak/zusTak"

export default function Cart() {
    const {products ,RemoveCart,  AllPrice } = useCart() 
   const nav = useNavigate()
     const loc = useLocation()

    function handelproduct(id) {
        if (loc.pathname === "/:id") {
            return
        } else {
            nav(`/${id}`)
        }
    }
 
    return (
        <>
{products.length === 0 ? (
    <div>
    <p className="text-center pb-32">!سبد شما خالی است</p>
    </div>
) : (
    <>
<p className="text-center pb-4">مجموع قیمت : ${AllPrice()}</p>
       <div className="md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 sm:gap-4 md:p-2 mb-16  md:gap-4">
    {products.map(item => (
        <>
    
        <div className="w-full  h-36  border rounded-2xl mb-4 p-2">
            <h2 dir="rtl" className="line-clamp-1">اسم محصول: {item.title}</h2>
            <p dir="rtl">قیمت: {item.price}$</p>
            <div dir="rtl" className="flex gap-4 p-1">
        <p dir="rtl">تعداد: {item.quantity}</p>
        <button className="bg-red-500 text-white w-6 h-6 rounded" onClick={() => RemoveCart(item.id)}>-</button>
            </div>
            <div className="bg-amber-300 w-48 rounded ">
            <p className="w-full  line-clamp-1 text-center p-2 " onClick={() => handelproduct(item.id)}>رفتن به صفحه ی محصول</p>

            </div>
        </div>
        </>
    ))}
        </div>
    </>
)}

        </>
    )
}