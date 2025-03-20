import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./userSlice";


export const store = configureStore({
    name: "Quick Vote",
    reducer: {
        auth: UserSlice
    }
})