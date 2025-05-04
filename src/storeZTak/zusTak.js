import { create } from "zustand"

  const useCart = create((set) => {
    const prevPro = JSON.parse(localStorage.getItem("cart")) || []
            return {
                products: prevPro ,
                AddCart: (id) => set(prev => {
                    const found = prev.products.findIndex(itme => itme.id === id )
              if(found != -1) {
const newP = prev.products.map((item , index) => {
    if(index == found) {
        return {
            ...item , 
            quantity : item.quantity + 1
        }
    } else {
        return item
    }
})
localStorage.setItem("cart" , JSON.stringify(newP))
                return {
    products: newP
}
              } else {
                localStorage.setItem("cart" , JSON.stringify([
                    ...prev.products ,
                    {
                        id,
                        quantity: 1
                    }
                ]))
                return {
                    products: [
                        ...prev.products ,
                        {
                            id,
                            quantity: 1
                        }
                    ]
                }
              }
                  
                })

            }
        })
        export default useCart