export default function CardproductId({imges , title , price , description}) {
    
    return (     
        <>
        <div className="bg-cyan-400 w-full p-4">
            <ul className="flex gap-6 text-white">
                <li>Home</li>
                <li>{title}</li>
            </ul>
        </div>
     <div className="md:flex md:justify-between md:p-4">
     <h1 className="md:hidden text-center font-extrabold p-4 bg-amber-50" dir="rtl">نام محصول: {title}</h1>
<p className="font-bold md:hidden text-center" dir="rtl">قیمت: {price}</p>
<p className=" md:hidden text-center">{description}</p>
<div className="flex flex-col ">
        <div className="flex justify-center p-2  bg-amber-50 pb-24 md:pb-4">
<img className="w-80 h-94 p-2  border-2 border-cyan-300  " src={imges} alt="" />
        </div>
            <h1 className="text-2xl font-extrabold hidden md:block " dir="rtl">نام محصول: {title}</h1>
<p className="font-bold md:block hidden" dir="rtl">قیمت: {price}</p>
<p dir="rtl">توضیحات محصول:</p>
<p className=" md:block hidden">{description}</p>
</div>

     </div>
        </>
    )
}