import { configureStore, createSlice } from "@reduxjs/toolkit";

const ThemeSlice=createSlice({
    name:"Theme",
    initialState:"light",
    reducers:{
        changeTheme:(state,action)=>{
            if(state==="light"){
                state="dark";
            }else if(state==="dark"){
                state="light";
            }
            return state;
        }
    }
})

export const ThemeActions=ThemeSlice.actions;

const  ThemeStore=configureStore({
    reducer:{
        themeChanger:ThemeSlice.reducer
    }
})

export default ThemeStore;