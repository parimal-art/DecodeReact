import { useState, useEffect } from "react";

function PaginationAPI() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Pagination Example</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "10px",
                marginTop: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 15px" }}>Page: {page}</span>

        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default PaginationAPI;
