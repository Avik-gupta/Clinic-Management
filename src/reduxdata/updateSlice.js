import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"updatereception",
    initialState:{
        value : {}
    },
    reducers:{
        updaterecep:(state,action)=>{
            state.value = action.payload
        },

        updatepatient:(state,action)=>{
            state.value = action.payload
        },

       

       
    }

})
export const { updaterecep , updatepatient } = slice.actions
export default slice.reducer