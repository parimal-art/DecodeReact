import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

export default function Users() {
  const { users, loading } = useSelector((s) => s.user);
  const dispatch = useDispatch();

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Users</h2>

      <button
        onClick={() => dispatch(fetchUsers())}
        className="mb-3 px-4 py-2 bg-purple-500 text-white rounded"
      >
        Fetch Users
      </button>

      {loading && <p>Loading...</p>}

      {users.map((u) => (
        <div key={u.id} className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-1">
          {u.name}
        </div>
      ))}
    </div>
  );
}