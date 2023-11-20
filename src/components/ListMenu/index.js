import React from "react";

const ListMenu = ({ title, subTitle }) => {
  return (
    <div className="p-2 background-menu">
      <h2 className="text-xl font-bold py-2 px-8">{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default ListMenu;
