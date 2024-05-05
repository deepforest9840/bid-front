import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  // Function to navigate to the product page when bid button is clicked
  const handleBidButtonClick = () => {
    // Navigate to the product page using props.id
    window.location.href = `/product/${props.id}`;
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div> 
        <div className="item-price-old">
          ${props.old_price}
        </div>
        {/* Pass the handleBidButtonClick function as onClick handler */}
        <button className='bid-button' onClick={handleBidButtonClick}>bid</button>
      </div>
    </div>
  )
}

export default Item;
