import useBookUpdateHook from '../../../hooks/useBookUpdateHook';
import {useDispatch ,useSelector} from 'react-redux';
import { updateBookInfo } from "../../../source/slices/booksSlice";
import './Books.scss'
import React, { useState } from "react";


const UpdateBook = () => {
  const { updateBookByID } = useBookUpdateHook();
  const dispatch =useDispatch();
  const bookInfo= useSelector((state) => state.books);
  console.log(bookInfo)
  const [formData, setFormData] = useState({
    bookID: '',
    title: '',
    author: '',
    ISBN: '',
    genre: '',
    price: '',
    stock: '',
    pageCount: '',
    language: '',
    availability: '',
    bestseller: ''
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    // Filter out empty values from the formData
    const data = Object.keys(formData).reduce((acc, key) => {
      if (formData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    updateBookByID(data);
    dispatch(updateBookInfo(data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div >
      <h1>Update Information</h1>

      <form className="form-container" onSubmit={handleUpdate}>
        <p>Enter the ID</p>
        <input
          type="text"
          name="bookID"
          label="bookID"
          placeholder="input book ID"
          className="custom-input"
          onChange={handleInputChange}
   
        />
        <p>Enter title</p>
        <input
          type="text"
          name="title"
          label="title"
          placeholder="input title"
          className="custom-input"
          onChange={handleInputChange}
   
        />
        <p>Enter Author</p>
        <input
          type="text"
          name="author"
          label="author"
          placeholder="input author name"
          className="custom-input"
          onChange={handleInputChange}
   
        />
        <p>Enter Genre</p>
        <input
          type="text"
          name="genre"
          label="genre"
          placeholder="input genre"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter Price</p>
        <input
          type="text"
          name="price"
          label="price"
          placeholder="input price"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter Stock</p>
        <input
          type="text"
          name="stock"
          label="stock"
          placeholder="Input Stock"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter language</p>
        <input
          type="text"
          name="language"
          label="language"
          placeholder="Input language"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter PageCount</p>
        <input
          type="text"
          name="pageCount"
          label="pageCount"
          placeholder="Input Page Count"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter Availability</p>
        <input
          type="text"
          name="availability"
          label="availability"
          placeholder="Input availability"
          className="custom-input"
          onChange={handleInputChange}
        />
        <p>Enter bestseller</p>
        <input
          type="text"
          name="bestseller"
          label="bestseller"
          placeholder="Input bestseller"
          className="custom-input"
          onChange={handleInputChange}
        />
        <button type="submit" className="custom-btn custom-btn-success">Submit</button>
      </form>
    </div>
  );
};

export default UpdateBook;