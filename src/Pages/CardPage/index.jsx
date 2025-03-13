import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import CardproductId from "../../components/CardproductaId";

export default function CardPage({numberCart}) {
    const params = useParams()
    const [productdate, setproductdate] = useState(null)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => setproductdate(data));
    }, [])

    if(!productdate) {
        return (
            <h1 className="text-center font-extrabold">اینترنت قوی ای داری زودتر از ما عمل کرده. منتظر بمون</h1>
        )
    }

    return <CardproductId 
    key={productdate?.id}
    numberCart={numberCart}
    imges={productdate?.image} 
    title={productdate?.title} 
    price={productdate?.price} />
}