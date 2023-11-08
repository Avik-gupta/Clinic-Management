import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import reception from "./receptionSlice"
import  patient  from "./patientSlice";
import update from "./updateSlice"

const store = configureStore({
    reducer:{
        userinfo:userReducer,
        receptioninfo:reception,
        patientinfo:patient,
        updateinfo:update,
    }

})


export default store