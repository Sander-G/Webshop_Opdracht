import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(
                    `One more ${state.cartItems[itemIndex].title} added to cart!`
                );
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.info(
                    `${action.payload.title} added to shopping cart!`
                );
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.info(
                `${action.payload.title} removed from shopping cart!`
            );
        },

        decreaseCartQty(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.info(
                `Removed one ${action.payload.title} from shopping cart!`
            );
        },

        clearCart(state) {
            state.cartItems = [];

            toast.info(
                "Your cart has been cleared!"
            );
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    decreaseCartQty,
    clearCart,
    getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
