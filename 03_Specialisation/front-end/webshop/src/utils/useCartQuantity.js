import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCartQuantity = () => {
    const cart = useSelector((state) => state.cart);
    const [totalQuantity, setTotalQuantity] = useState({
        total: 0,
        quantity: 0,
    })

    useEffect(() => {
        setTotalQuantity(cart.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { cartQuantity } = cartItem;
                const itemTotal = cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {

                total: 0,
                quantity: 0,
            }
        ))


    }, [cart])

    return totalQuantity
}

