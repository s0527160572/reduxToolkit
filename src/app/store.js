
import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice.js";
export const store=configureStore({
    reducer:{
        books:booksSlice
    }
})