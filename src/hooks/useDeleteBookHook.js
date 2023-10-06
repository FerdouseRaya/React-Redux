import axiosInstance from "../utils/axiosInstance";

const useDeleteBookHook = () => {
  const deleteBookByID = (bookID) => {
    axiosInstance
      .delete("/deleteBooks", {
        data: { bookID },
      })
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully deleted", data);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  return { deleteBookByID };
};

export default useDeleteBookHook;
