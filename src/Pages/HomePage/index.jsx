
import { useState } from "react";
import Cardproduct from "../../components/Cardproducts";
import Home from "../../components/Home";
import Login from "../../components/Login";

export default function HomePage({numberCart}) {
  const [isClick , setisClick] = useState( localStorage.getItem("isClick" ) ? false : true)
    return (
        <>
    
        <Home  />
        <div className="mb-24">
        <Cardproduct numberCart={numberCart} />
        </div>

{!(isClick === false) && <Login setisClick={setisClick} /> } 
    

        </>
    )
}