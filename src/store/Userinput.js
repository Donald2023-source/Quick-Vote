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

        clearInput: (state) => {
            state.fullName = '',
            state.passport = '',
            state.email = '',
            state.stateOfOrigin = '',
            state.localGovernment = '',
            state.DOB = '',
            state.NIN = '' 
        }
    }
})

export const { clearInput, updateInput } = userInputSlice.actions;
export default userInputSlice.reducer