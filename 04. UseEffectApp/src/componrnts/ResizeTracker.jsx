import { useState, useEffect } from "react";

function ResizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Window Size Tracker</h1>

      <h2>Width: {width}px</h2>
      <h2>Height: {height}px</h2>
    </div>
  );
}

export default ResizeTracker;
