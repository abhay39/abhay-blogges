import { configureStore, createSlice } from "@reduxjs/toolkit";

const ThemeSlice=createSlice({
    name:"Theme",
    initialState:"dark",
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

const CategorySlice=createSlice({
    name:"category",
    initialState:[],
    reducers:{
        addCategory:(state,action)=>{
            state.push(action.payload);
            return state;
        }
    }
})

const allPosts=createSlice({
    name:"allposts",
    initialState:[],
    reducers:{
        addPosts:(state,action)=>{
            state.push(action.payload);
            return state;
        }
    }
})

const UserDetailsSlice = createSlice({
    name: "userDetails",
    initialState: { details: null }, // Change initialState to an object with a 'details' property
    reducers: {
      addDetails: (state, action) => {
        if (action.payload === undefined) {
          return state;
        }
        state.details = action.payload;
      },
    },
  });
  
export const ThemeActions=ThemeSlice.actions;
export const CategoryActions=CategorySlice.actions;
export const AllPostsAction=allPosts.actions;
export const UserDetailsActions=UserDetailsSlice.actions;

const  ThemeStore=configureStore({
    reducer:{
        themeChanger:ThemeSlice.reducer,
        allCategory:CategorySlice.reducer,
        userDetails:UserDetailsSlice.reducer,
        totalPost:allPosts.reducer,
    }
})

export default ThemeStore;