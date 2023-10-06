import "./Books.scss";
import { useNavigate } from "react-router-dom";
const Books = ({
  id,
  img,
  rating,
  languages,
  reviews,
  ISBN,
  title,
  author,
  genre,
  stock,
  price,
  pageCount,
}) => {
  //console.log('addProductToCart:', addProductToCart);
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="wrapper">
        <img className="card-img" src={img} alt={title} />
        <div className="product_info">
          <h5>Title: {title}</h5>
          {/* <h5>ISBN: {ISBN}</h5> */}
          <h5>Author: {author}</h5>
          {/* <h5>Genre: {genre}</h5>
                    <h5>Language: {languages}</h5>
                    <h5>Stock:  {stock}</h5>
                    <h5>PageCount: {pageCount}</h5>
                    <h5>Price:  ${price}</h5> */}
          <h5>Rating: {rating}</h5>
          <h5>Reviews:</h5>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
        <button
          className="custom-btn"
          onClick={() =>
            navigate(`/home/${id}`, {
              replace: true,
              state: {ID:id, ISBN:ISBN,
            title:title},
            })
          }
        >
          Details
        </button>
      </div>
    </div>
    //     <div className="container">
    //     <div className="product-card">
    //         <img className="product-image" src={img} alt={title} />
    //         <h5>Title: {title}</h5>
    //         <h5>ISBN: {ISBN}</h5>
    //         <h5>Author: {author}</h5>
    //         <h5>Genre: {genre}</h5>
    //         <h5>Language: {languages}</h5>
    //         <h5>Stock:  {stock}</h5>
    //         <h5>PageCount: {pageCount}</h5>
    //         <h5>Price:  ${price}</h5>
    //         <h5>Rating: {rating}</h5>
    //         <h5>Reviews:</h5>
    //         <ul>
    //             {reviews.map((review, index) => (
    //                 <li key={index}>{review}</li>
    //             ))}
    //         </ul>
    //     </div>
    // </div>
  );
};
export default Books;
