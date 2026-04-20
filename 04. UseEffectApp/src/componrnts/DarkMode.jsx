import { useState, useEffect } from "react";

function DarkMode() {
  // Load initial theme from localStorage OR default to light
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Sync theme to localStorage and document body
  useEffect(() => {
    if (dark) {
      document.body.style.background = "#111";
      document.body.style.color = "#fff";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default DarkMode;
