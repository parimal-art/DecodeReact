import React from "react";
import UserList from "./UserList";

const Sidebar = ({ users }) => {
  // ❗ Not using users here (props drilling problem)

  return (
    <div className="border-2 border-green-400 p-4 rounded-xl mb-3">
      <h3 className="text-md font-semibold text-green-600 mb-2">
        Sidebar (just forwarding 😅)
      </h3>

      {/* Still passing */}
      <UserList users={users} />
    </div>
  );
};

export default Sidebar;