import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setbooks] = useState({
    title: "",
    desc: "",
    bookscol: "",
    price: null,
  });

  const navigate = useNavigate();

  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setbooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="text"
        placeholder="bookscol"
        onChange={handleChange}
        name="bookscol"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />

      <button className="formbutton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
