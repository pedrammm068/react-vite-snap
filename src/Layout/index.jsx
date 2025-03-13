import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartContext from "../contexts/Cartcontext";

export default function Layout({ children }) {
    const { numberCart} = useContext(CartContext);
    return (
        <>
        <Header />
        {children}
        <Footer  numberCart={numberCart} />
        </>
    )
}