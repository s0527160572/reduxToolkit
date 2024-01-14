import { useSelector } from "react-redux";
const BookDetails = () => {
    const selected=useSelector(st=>st.books.selectedBook);
    return (
        <div>
            פרטי שיר נבחר:
            <h1>{selected.name}</h1>
            <h2>{selected.artist}</h2>
            <h2>{selected.price}</h2>
        </div>
      );
}
 
export default BookDetails;