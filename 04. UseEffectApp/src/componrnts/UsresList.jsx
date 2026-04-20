import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Users List API fetch Components- UsersList.jsx
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                marginTop: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px"
              }}
            >
              <strong>{user.name}</strong>
              <br />
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
