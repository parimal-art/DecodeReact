import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border border-red-400 p-3 rounded-lg mb-2">
      {/* ✅ Using data finally */}
      <p className="font-bold text-red-600">Name: {user.name}</p>
      <p className="text-gray-700">Age: {user.age}</p>
    </div>
  );
};

export default UserCard;