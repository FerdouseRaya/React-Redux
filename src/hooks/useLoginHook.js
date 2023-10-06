import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstanceforAuth from "../utils/axiosInstanceforAuth";

const useLoginHook = () => {
  const [bookData, setBookData] = useState([]);
  const navigate = useNavigate();
  const loginPost = (formData) => {
    console.log("The form data ", formData);
    axiosInstanceforAuth
      .post("/login", formData)
      .then((resp) => {
        const token = resp.data.result.token;
        localStorage.setItem("token", token);
        console.log(token);
        navigate("/login");
        return resp.data;
      })
      .then((data) => {
        console.log("Successfully logged!", data);
        setBookData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return { bookData, setBookData, loginPost };
};

export default useLoginHook;
