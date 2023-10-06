import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
const useBookUpdateHook = () => {
  const [updateBookData, setUpdateBookData] = useState([]);

  const updateBookByID = (formData) => {
    console.log("The form data ", formData);
    axiosInstance
      .patch("/editInfo", formData)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully updated", data);
        setUpdateBookData(data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  };
  return { updateBookData, setUpdateBookData, updateBookByID };
};

export default useBookUpdateHook;
