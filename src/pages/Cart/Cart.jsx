import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='mt-[100px]'>
      <div className='cart-items'>
        <div className="grid grid-cols-custom-layout gap-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => (
          <div key={index}>
            <div className="my-[10px] mx-0 text-black grid grid-cols-custom-layout gap-4 items-center">
              <img className='w-[50px]' src={item.image} alt="pic" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItems[item._id] || 0}</p>
              <p>{item.price * (cartItems[item._id] || 0)}</p>
              <p onClick={() => removeFromCart(item._id)} className="cursor-pointer">x</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;