import { useSelector , useDispatch} from "react-redux";

import  BooksList  from './features/books/BooksList.js';
import { addBook} from "./features/books/booksSlice.js";
import BookDetails from "./features/books/BookDetails.js";
import './App.css';


function App() {
  let selected = useSelector(st => st.books.selectedBook);

  let dispatch=useDispatch();
  return (
    <>
      <BooksList />
      {selected && <BookDetails />}
      <input type="button" value="add" onClick={()=>{dispatch(addBook())}}/>
    </>
  );
}

export default App;

