import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from '../store/Userinput'

export const Store = configureStore({
    reducer: {
        userInput: userInputReducer
    }
})