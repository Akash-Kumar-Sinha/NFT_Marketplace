import React from "react";
const variants = {
  outline: { gray_400: "border border-gray-400 border-solid text-black-900" },
  fill: { white_A700: "bg-white-A700" },
};
const shapes = { round: "rounded-lg" };
const sizes = { sm: "pb-[18px] pr-[18px] pt-[19px]" };
const Header = () => {
  return (
    <>
      <div className={`rounded-lg border border-gray-400 border-solid text-black-900 bg-white-A700 pb-[18px] pr-[18px] pt-[19px]`}>
      <input 
          className={`bg-transparent focus:outline-none`}
          type="text"
          
        />
      </div>
      header
    </>
  );
};

export default Header;
