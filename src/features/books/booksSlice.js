import { createSlice } from "@reduxjs/toolkit";
const initialState={
    arrBooks:[
    {id:1,name:"21 un one house 1", artist:"root rapaport",price:10},
    {id:2,name:"21 un one house 2", artist:"root rapaport",price:10},
    {id:3,name:"21 un one house 3", artist:"root rapaport",price:10},
    {id:4,name:"21 un one house 4", artist:"root rapaport",price:10}],
    selectedBook:null,
    toAdd:null
}
export const BooksSlice=createSlice({
    name:'library',
    initialState:initialState,
    reducers:{
        addBook:(state,action)=>{
            action.payload.id=state.arrBooks.length+1;
            state.arrBooks.push(action.payload);
        },
        removeBook:(state,action)=>{
            let id=action.payload;
            let index=state.arrBooks.findIndex(item=>item.id==id);
            state.arrBooks.splice(index,1);
        },
        selectedBook:(state,action)=>{
            state.selectedBook=action.payload;
        },
        toAdd:(state,action)=>{
           state.toAdd=action.payload
        }


    }
})
export const {addBook, removeBook, selectedBook, toAdd} = BooksSlice.actions;
export default BooksSlice.reducer;