import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
  const {product, handleRemoveProduct} = props
  const {img, name, price, quantity, shipping} = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className='product-name' title={name}>
            {name.length > 20 ? name.slice(0, 20) + '...': name}
            </p>
          <p>Price: <span className='orange-color'>${price}</span></p>
          <p>Shipping: ${shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-item">
          <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;