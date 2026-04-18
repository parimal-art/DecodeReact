import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
  return (
    <div className="border-2 border-yellow-400 p-4 rounded-xl mb-3">
      <h4 className="text-md font-semibold text-yellow-600 mb-2">
        User List (map here 👇)
      </h4>

      {/* 🔥 Using map */}
      {props.users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;