import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"reception",
    initialState:{
        value : []
    },
    reducers:{
        receptionList:(state,action)=>{
            state.value = action.payload
        },

        dellist:(state,action)=>{
            state.value = action.payload
        },

        uplist:(state,action)=>{
            state.value = action.payload
        }
    }

})
export const { receptionList , dellist , uplist} = slice.actions
export default slice.reducer