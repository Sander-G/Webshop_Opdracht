import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteItems: localStorage.getItem("favouriteItems") ?
    JSON.parse(localStorage.getItem("favouriteItems")) : [],
    favouriteTotalQuantity: 0,
}

const favouritesSlice = createSlice ({
    name: "favourites",
    initialState,
    reducers:{
        addToFavourites(state, action){
            const itemIndex = state.favouriteItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.favouriteItems[itemIndex].favouritesQuantity = 1
            }
            else {
                const tempFavourite = {...action.payload, favouritesQuantity: 1};
                state.favouriteItems.push(tempFavourite); 
            }
            localStorage.setItem ("favouriteItems", JSON.stringify (state.favouriteItems));
        },
    }
});

export const { addToFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;