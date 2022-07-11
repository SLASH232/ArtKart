import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{
       currentUser:null,
       isFetching: false,
       error:false
    },
    reducers:{
       loginStart:(state)=>{
           
        console.log("start");
           state.isFetching=true;
       },
       loginSuccess:(state,action)=>{
           console.log("aa gya bhai");
            state.isFetching=false;
            state.currentUser=action.payload

       },
       loginFailure:(state)=>{
           
        console.log("failed");
        state.isFetching=false;
        state.error=true;

       },
    }
});
export const {loginFailure,loginStart,loginSuccess}=userSlice.actions;
export default userSlice.reducer;