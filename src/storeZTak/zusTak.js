import { create } from "zustand"

const useCart = create((set , get) => {
    const prevPro = JSON.parse(localStorage.getItem("cart")) || []
    const filteredProducts = prevPro.filter(item => item && item.id && item.quantity)
    return {
        products: filteredProducts,

        
        AddCart: (product) => set(prev => {
            const found = prev.products.findIndex(itme => itme.id === product.id)
            let newP  
            
            if (found >= 0) {
            newP = prev.products.map((item) => {
return item.id === product.id ? {...item , quantity: item.quantity + 1} : item
                })
            } else {
           newP = [...prev.products  ,
             {
                id: product.id,
                title: product.title,
                price: product.price ,
            quantity: 1
        } 
        ]
            }
localStorage.setItem("cart" , JSON.stringify(newP))
return {products: newP}
}),

RemoveCart: (id) => set(prev => {
    const found = prev.products.findIndex(item => item.id === id)
if (found < 0) {
    return prev
}
    let newP
    if (prev.products[found].quantity > 1) {
         newP = prev.products.map(item => {
            return item.id === id ? {...item , quantity: item.quantity - 1} : item
        })
    } else {
newP = prev.products.filter(item => item.id !== id)
    }
    localStorage.setItem("cart" , JSON.stringify(newP))
    return {products: newP}
}), 
GetQuantity : (id) => {
    const felProducts = get().products
    const item = felProducts.find(item => item.id === id)
    return item ? item.quantity : 0
} , 

clearCart : () => {
    localStorage.setItem("cart" , "[]")
    set({products: []})
} , 
Allitem : () => {
    const Allcart = JSON.parse(localStorage.getItem("cart")) || []
    let All = 0
    for (const item of Allcart) {
        All += item.quantity
            }
            return All
} , 
AllPrice : () => {
const AllCarts = get().products
let All = 0
for (const item of AllCarts) {
    All += item.price * item.quantity
}
return All
}
}
})
export default useCart