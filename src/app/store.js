
import { configureStore } from "@reduxjs/toolkit";
import  BooksSlice  from "../features/books/BooksSlice.js";
export const store=configureStore({
    reducer:{
        Books:BooksSlice
    }
})