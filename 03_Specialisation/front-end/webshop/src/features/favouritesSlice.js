import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    favouriteItems: localStorage.getItem("favouriteItems")
        ? JSON.parse(localStorage.getItem("favouriteItems"))
        : [],
    favouritesTotalQuantity: 0,
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addToFavourites(state, action) {
            const itemIndex = state.favouriteItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                
                toast.info(
                    `Product already added to Favourites!`
                );
            } else {
                const tempFavourite = { ...action.payload, favouritesQuantity: 1 };
                state.favouriteItems.push(tempFavourite);
                toast.info(
                    `${action.payload.title} added to Favourites!`
                );
            }
            localStorage.setItem(
                "favouriteItems",
                JSON.stringify(state.favouriteItems)
            );
        },

        removeFromFavourites(state, action) {
            const nextFavouriteItems = state.favouriteItems.filter(
                (favouriteItem) => favouriteItem.id !== action.payload.id
            );
            state.favouriteItems = nextFavouriteItems;
            localStorage.setItem(
                "favouriteItems",
                JSON.stringify(state.favouriteItems)
            );
            toast.info(
                `${action.payload.title} removed from shopping cart!`
            );
        },

        clearFavourites(state, action) {
            state.favouriteItems = [];
            toast.info(
                "Your favourites list has been cleared!"
            );
        },
        // get total favourites
    },
});

export const { addToFavourites, removeFromFavourites, clearFavourites } =
    favouritesSlice.actions;
export default favouritesSlice.reducer;
