export default function CardproductId({imges , title , price , description}) {
    
    return (     
        <>
     <div className="md:flex md:justify-between md:p-4">
     <h1 className="md:hidden text-center font-extrabold p-4 bg-amber-50">{title}</h1>
<p className="font-bold md:hidden text-center" dir="rtl">قیمت: {price}</p>
<p className=" md:hidden text-center">{description}</p>


        <div className="flex justify-center p-2  bg-amber-50">
<img className="md:w-94 w-64 border  " src={imges} alt="" />
        </div>

<div className="flex flex-col ">
            <h1 className="text-2xl font-extrabold hidden md:block">{title}</h1>
<p className="font-bold md:block hidden" dir="rtl">قیمت: {price}</p>
<p className=" md:block hidden">{description}</p>
</div>

     </div>
        </>
    )
}