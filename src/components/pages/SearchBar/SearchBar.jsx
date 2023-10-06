import "./SearchBar.scss";
import "../Shop/Shop.css";
import axiosInstance from "../Instances/axiosInstance";
import React, { useEffect, useState } from "react";
import SearchDataPrint from "./SearchDataPrint";
const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [productData, setProductData] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  const callProductApi = () => {
    axiosInstance
      .get(`/viewBySearch?search=${search}`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data.result.result);
        setProductData(data.result.result);

        return data;
      })
      .catch((err) => {
        setErrorMsg("Some error occured");
        setProductData([]);
        return "Some error";
      })
      .finally(() => {});
  };

  useEffect(() => {
    if (search !== "") {
      clearTimeout(timeoutId);

      const newTimeoutId = setTimeout(() => {
        callProductApi(search);
      }, 3000);

      setTimeoutId(newTimeoutId);
    }
  }, [search]);

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          id="search-input"
          placeholder="Enter Search Term"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="search-button">Search</button>
      </div>
      <div className="search-results">
        {productData.map((book) => (
          <SearchDataPrint
            key={book.id}
            id={book.id}
            title={book.title}
            ISBN={book.ISBN}
            author={book.author}
            genre={book.genre}
            stock={book.stock}
            pageCount={book.pageCount}
            price={book.price}
            img={book.img}
          />
        ))}
        {errorMsg && <h4>Error: {errorMsg}</h4>}
      </div>
      
    </div>
  );
};
export default SearchBar;
