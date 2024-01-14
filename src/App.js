import { useSelector , useDispatch} from "react-redux";

import  BooksList  from './features/books/BooksList.js';

import BookDetails from "./features/books/BookDetails.js";
import './App.css';
import From from "./features/books/Form.js";
import {toAdd} from "./features/books/BooksSlice.js"


function App() {
  let selected = useSelector(st => st.Books.selectedBook);
let Add=useSelector(st=>st.Books.toAdd)
  let dispatch=useDispatch();
  return (
    <>
      <BooksList />
      {selected && <BookDetails />}
      <input type="button" value="add" onClick={()=> { dispatch(toAdd(true)) }} />
   
      {Add&&<From/>}
      
    </>
  );
}

export default App;

