import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fecthAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setbooks(res.data);
        console.log(res.data, "aaaaaaaaaaaaa");
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Book Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.bookscol && <img src={book.bookscol} alt="" />}
            <h1>{book.title}</h1>
            <h1>{book.desc}</h1>
            <h1>{book.price}</h1>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/Update/${book.id}`}>update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
