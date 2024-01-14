import { useDispatch, useSelector } from "react-redux";
import { removeBook, selectedBook } from "./BooksSlice";
const ShowBooks = ({ one }) => {

    let dispatch = useDispatch();
    return (
        <>
            <h1>{one.name}</h1>
            <input type="button" value="select" onClick={() => { dispatch(selectedBook(one)) }} />
            <input type="button" value="delete" onClick={() => { dispatch(removeBook(one.id)) }} />
        </>
    )

}
export default ShowBooks;