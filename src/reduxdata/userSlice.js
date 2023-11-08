import { createSlice } from "@reduxjs/toolkit";

const localvalues = JSON.parse(localStorage.getItem("userinfo"))

const  initialState = {
    value: localvalues || {token:undefined, isLogin:false, type:undefined, name:undefined}
}

const slice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userReducer:(state,action)=>{
            state.value = action.payload
            console.log(state.value)
            localStorage.setItem("userinfo" , JSON.stringify(action.payload) )
        }
    }

})
export const { userReducer } = slice.actions
export default slice.reducer