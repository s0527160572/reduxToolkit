import { useSelector } from "react-redux";
import ShowBooks from "./ShowBooks.js";

const BooksList=()=>{
    let arrBooks=useSelector(st=>st.Books.arrBooks);
    return(
        <ul>
            {arrBooks.map(it=><li key={it.id}><ShowBooks one={it}/></li>)}
        </ul>
    )

}
export default BooksList;