import { useState, useEffect } from "react";

function SearchFilter() {
  const [users] = useState([
    "Parimal",
    "Amit",
    "Suman",
    "Rahul",
    "Soham",
    "Priya",
    "Sneha",
    "Aditi",
    "Rohan"
  ]);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(users);

  useEffect(() => {
    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, users]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {filtered.map((name, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              marginTop: "10px",
              borderRadius: "5px"
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
