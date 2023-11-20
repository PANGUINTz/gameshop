import React from "react";

const CardMenu = ({ images, name, discount }) => {
  return (
    <div className="w-fit mx-auto">
      <div className="relative">
        <img
          src={images}
          alt={name}
          className="mx-auto image-logo rounded-md"
        />

        {discount && (
          <div className="bg-orange-500 absolute bottom-0 w-full text-center rounded-b-md discount">
            <p className="text-white font-bold">ลด {discount} %</p>
          </div>
        )}
      </div>
      <h2 className="text-center uppercase text-white text-sm">{name}</h2>
    </div>
  );
};

export default CardMenu;
