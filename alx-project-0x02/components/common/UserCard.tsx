// components/common/UserCard.tsx

import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
