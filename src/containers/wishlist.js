import { useSelector } from "react-redux";
import { getWishlist } from "../reducks/wishlist/selectors";

const Wishlist = () => {
  const wishlist = useSelector(getWishlist);

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-card">
          <img src={item.product.product_image} alt="" />
          <h4>{item.product.product_name}</h4>
          <p>₹ {item.product.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
