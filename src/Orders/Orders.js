import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = product =>{
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id)
  }
  return (
    <div className='shop-container'>
      <div className="review-item-container">
        {
             cart.map(product => <ReviewItem
             key={product.id}
             product={product}
             handleRemoveProduct={handleRemoveProduct}
             ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart 
        key={cart.id}
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