import { useSelector } from "react-redux";
import ShowBooks from "./ShowBooks";

const BooksList=()=>{
    let arrBooks=useSelector(st=>st.books.arrBooks);
    return(
        <ul>
            {arrBooks.map(it=><li key={it.id}><ShowBooks one={it}/></li>)}
        </ul>
    )

}
export default BooksList;