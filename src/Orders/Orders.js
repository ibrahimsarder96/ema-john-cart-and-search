import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import useCart from '../hooks/useCart';
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
  const [cart, setCart] = useCart();
  const handleRemoveProduct = product =>{
    const rest = cart.filter(pd => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id)
  }
  return (
    <div className='shop-container'>
      <div className="review-item-container">
        {
             cart.map(product => <ReviewItem
             key={product._id}
             product={product}
             handleRemoveProduct={handleRemoveProduct}
             ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart 
        key={cart._id}
        cart={cart}
        >
          <Link to='/shipment'>
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;