export default function CardproductId({imges , title , price}) {
    
    return (     
        <>
        <div className="flex flex-col justify-center items-center p-4 m-10 bg-amber-200 rounded-2xl">
            <h1 className="line-clamp-1">{title}</h1>
<img className="w-56" src={imges} alt="" />
<p>قیمت: {price}</p>
        </div>
        </>
    )
}