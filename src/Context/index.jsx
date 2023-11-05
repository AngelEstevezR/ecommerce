import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    //Shopping Cart, increment quantity
    const [count, setCount] = useState(0)

    //Product Detail, open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)

    //Product Detail, show product
    const [productToShow,setProductToShow] = useState({})

    //Shopping Cart, add products to cart
    const [cartProducts,setCartProducts] = useState([])

    //ShoppingCart, order
    const [order,setOrder] = useState([])

    //Checkout Side Menu, open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}