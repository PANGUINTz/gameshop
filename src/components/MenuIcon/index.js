import React from "react";
import { CreditCard } from "react-feather";

const Icon = ({ icon, menu }) => {
  return (
    <div className="mx-auto max-md:my-1 max-md:w-3/4">
      <div className="flex">
        <div className="bg-pink-400 p-3 rounded-full text-white">
          <p>{icon}</p>
        </div>
        <p className="my-auto mx-2 text-white text-xl max-lg:text-sm">{menu}</p>
      </div>
    </div>
  );
};

const MenuCard = () => {
  return (
    <div className="background-card rounded-lg p-12 m-2">
      <div>
        <div className="mx-auto bg-pink-400 p-5 rounded-full w-fit">
          <CreditCard className="text-white" />
        </div>
        <p className="text-white text-xl text-center max-lg:text-md">
          บัตรเติมเงิน
        </p>
      </div>
    </div>
  );
};

export { MenuCard, Icon };
