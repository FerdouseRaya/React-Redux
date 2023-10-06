
import './SearchBar.scss'
const SearchDataPrint = ({ id, img,  ISBN, title, author, genre, stock, price, pageCount }) => {
    //console.log('addProductToCart:', addProductToCart);
    return (
        <div className="card">
            <div className="search-wrapper">
                <img className="card-img" src={img} alt={title} />
                <div className="product_info">
                    <h5>Title: {title}</h5>
                    <h5>ISBN: {ISBN}</h5>
                    <h5>Author: {author}</h5>
                    <h5>Genre: {genre}</h5>
                    <h5>Stock:  {stock}</h5>
                    <h5>PageCount: {pageCount}</h5>
                    <h5>Price:  ${price}</h5>                    
                </div>
            </div>
        </div>

    );
};
export default SearchDataPrint