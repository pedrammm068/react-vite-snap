import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CardPage from "./Pages/CardPage";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CartContext from "./contexts/Cartcontext"; 

export default function App() {
    const [numberCart, setnumberCart] = useState([]);

    return (
        <>
        <div className="md:flex md:flex-col md:justify-center md:items-center">

        <div className="md:max-w-[1360px] w-full">
            <CartContext.Provider value={{numberCart, setnumberCart}}>
                <Layout>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/:id" element={<CardPage />} />
                            <Route path="/cart" element={<CartPage />} />
                        </Routes>
                    </BrowserRouter>
                </Layout>
            </CartContext.Provider>
            </div>
        </div>
        </>
    );
}