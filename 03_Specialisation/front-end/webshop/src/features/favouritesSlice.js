import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteItems: localStorage.getItem("favouriteItems") ?
    JSON.parse(localStorage.getItem("favouriteItems")) : [],
    favouritesTotalQuantity: 0,
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

        removeFromFavourites(state,action){
            const nextFavouriteItems = state.favouriteItems.filter(
                favouriteItem => favouriteItem.id !== action.payload.id
            )
            state.favouriteItems = nextFavouriteItems;
            localStorage.setItem("favouriteItems", JSON.stringify(state.favouriteItems))

        },

        clearFavourites(state, action){
            state.favouriteItems = []
        },

        // get total favourites

    }
    
});

export const { addToFavourites, removeFromFavourites, clearFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;