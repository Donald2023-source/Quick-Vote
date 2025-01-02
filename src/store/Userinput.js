import { createSlice } from "@reduxjs/toolkit";

const userInputSlice = createSlice({
    name: 'userInputSlice',

    initialState: {
        fullName: '',
        passport: '',
        email: '',
        stateOfOrigin: '',
        localGovernment: '',
        DOB: '',
        NIN: ''
    },

    reducers: {
        updateInput: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value
        },

        clearInput: {
            fullName: '',
            passport: '',
            email: '',
            stateOfOrigin: '',
            localGovernment: '',
            DOB: '',
            NIN: '' 
        }
    }
})