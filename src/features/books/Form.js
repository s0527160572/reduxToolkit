
//   import React from "react";
//   import { useDispatch , useSelector} from "react-redux";
// import { addBook } from "./BooksSlice";

// const From = () => {
//   let toAdd=useSelector(st=>st.Books.toAdd)
//   let dispatch = useDispatch();

 
//   return (
//     <form >
//       <div>
//         <label >Name:</label>
//         <input
//           type="text"
//         id="n"
       
       
//         />
//       </div>
//       <div>
//         <label htmlFor="author">Author:</label>
//         <input
//           type="text"
//         id="a"
        
         
//         />
//       </div>
//       <div>
//         <label >Price:</label>
//         <input
//           type="number"
//         id="p"
       
        
//         />
//       </div>
//       <button type="submit"    
//       onClick={()=>{dispatch(addBook({"name":document.getElementById("n").value
//       , "artist":document.getElementById("a").value,
//       "price":document.getElementById("p").value}));
//      }}>Add Book</button>
//     </form>
//   );
// };




 
// export default From;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, toAdd } from "./BooksSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ name, author, price }));
    dispatch(toAdd(false))
    // setName("");
    // setAuthor("");
    // setPrice("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
