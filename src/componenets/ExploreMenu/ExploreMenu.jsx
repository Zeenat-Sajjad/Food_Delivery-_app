import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-4xl text-[#262626] font-medium">Explore our menu</h1>
      <p className="text-[#808080] max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center mt-5 mb-5 mx-0 overflow-x-scroll">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            key={index}
            className="w-[7.5vw] min-w-[80px] rounded-[50%] cursor-pointer transition duration-200"
          >
            <img
              className={`p-[2px] border-4 rounded-full ${category === item.menu_name ? "border-orange-500" : "border-transparent"}`}
              src={item.menu_image}
              alt="pic"
            />
            <p className="mt-[10px] text-[#747474] text-responsive cursor-pointer">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-[10px] mx-[0px] h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
