import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='w-[100%] m-auto shadow-[0px_0px_10px_#00000015] transition duration-300 animate-fadeIn'>
      <div className='relative'>
        <img className='rounded-t-[15px] p-[5px]' src={image} alt={name} />
        {!cartItems[id] ? (
          <img 
            className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}    
            alt="Add"
          />
        ) : (
          <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img 
              className='w-[30px] cursor-pointer' 
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red} 
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img 
              className='w-[30px] cursor-pointer' 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add"
            /> 
          </div>
        )}
      </div>
      <div className='flex justify-between items-center mb-[10px]'>
        <p className='text-[20px] font-medium'>{name}</p>
        <img className='w-[70px]' src={assets.rating_starts} alt='Rating stars' />
      </div>
      <p className='text-[12px] text-[#676767]'>{description}</p>
      <p className='text-[22px] text-orange-500 font-medium m-[10px]'>${price}</p>
    </div>
  );
};

export default FoodItem;
