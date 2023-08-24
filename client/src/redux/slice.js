import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const u=localStorage.getItem("user");
console.log("user",JSON.parse(u))
const initialState={
    status:"idle",
    user:JSON.parse(u) || null
};
const slice=createSlice({
    name:'slice',
    initialState,
    reducers:{
        logoutUser(state,action){
            console.log("LOGOUT...!")
            localStorage.removeItem('user');
            return {...initialState}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state,action)=>{
            console.log(action)
            state.status="loading"
        }).addCase(registerUser.fulfilled,(state,action)=>{
            console.log(action);
            localStorage.setItem('user',JSON.stringify(action.payload.user));
            state.user=action.payload.user
        }).addCase(registerUser.rejected,(state,action)=>{
            console.log(action)
            state.status="rejected"
        }).addCase(loginUser.pending,(state,action)=>{
            console.log(action)
            state.status="loading"
        }).addCase(loginUser.fulfilled,(state,action)=>{
            console.log(action);
            localStorage.setItem('user',JSON.stringify(action.payload.user));
            state.user=action.payload.user
        }).addCase(loginUser.rejected,(state,action)=>{
            console.log(action)
            state.status="rejected"
        }).addCase(createIdea.pending,(state,action)=>{
            console.log(action)
            state.status="loading"
        }).addCase(createIdea.fulfilled,(state,action)=>{
            console.log(action)
            //state.user=action.payload
        }).addCase(createIdea.rejected,(state,action)=>{
            console.log(action)
            state.status="rejected"
        }).addCase(getIdeas.fulfilled,(state,action)=>{
            console.log(action)
            state.myIdeas=action.payload
        })
    }
})
export const {logoutUser}=slice.actions
export default slice.reducer;
export const registerUser=createAsyncThunk('post/register',async(payload)=>{
    const data=await axios.post("/api/v1/auth/register",payload);
    return data.data
})
export const loginUser=createAsyncThunk("post/login",async(payload)=>{
    const data=await axios.post("/api/v1/auth/login",payload);
    return data.data
});
export const createIdea=createAsyncThunk("post/createIdea",async(payload)=>{
    const data=await axios.post("/api/v1/idea/createIdea",payload);
    console.log(data)
    return data.data
})
export const getIdeas=createAsyncThunk("get/getIdeas",async()=>{
    const data=await axios("/api/v1/idea/");
    return data.data
})



