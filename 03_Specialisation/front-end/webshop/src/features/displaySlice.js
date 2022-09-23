import { createSlice } from "@reduxjs/toolkit";

let modalThrottle = false;
const displaySlice = createSlice({
    name: "display",
    initialState: {
        modal: false,
    },
    reducers: {
        toggleModal: (state) => {
            
            if (modalThrottle) return;
            console.log("toggling modal!")

            modalThrottle = true;
            setTimeout(() => {
                modalThrottle = false;
            }, 500);

            state.modal = !state.modal;
        }
    }
});

export const { toggleModal } = displaySlice.actions;
export default displaySlice.reducer;