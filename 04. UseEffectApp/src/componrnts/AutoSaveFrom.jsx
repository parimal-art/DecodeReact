import { useState, useEffect } from "react";

function AutoSaveForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("Text changed:", text);   // log current value

    if (text.trim() === "") {
      setStatus("");
      return;
    }

    setStatus("Saving...");
    console.log("Saving started...");

    const timer = setTimeout(() => {
      setStatus("Saved!");
      console.log("Saved to storage:", text); // simulate save log
    }, 2000);

    return () => {
      clearTimeout(timer);
      console.log("Cleanup: previous timer cancelled"); // shows cleanup
    };
  }, [text]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Auto Save Form</h1>

      <textarea
        rows="4"
        cols="40"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => {
          console.log("User typing:", e.target.value); // live typing log
          setText(e.target.value);
        }}
        style={{ padding: "10px" }}
      ></textarea>

      <h3 style={{ marginTop: "20px", color: "green" }}>{status}</h3>
    </div>
  );
}

export default AutoSaveForm;
