import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!Array.isArray(food_list)) {
    return <div>Error: food_list is not an array</div>;
  }

  return (
    <div className='mt-[30px] ' id='food-display'>
      <h2 className='text-2xl font-semibold  text-responsive-xl'>Top dishes near you</h2>
      <div className= "grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category){
            return <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
          }
          
})}
      </div>
    </div>
  );
};

export default FoodDisplay;
