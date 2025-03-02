import { useState } from "react";

const Counter = () => {
  // State to store the count value
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: "center",
      margin: "20px",
      padding: "20px",
      border: "2px solid #333",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Current Count: {count}</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          margin: "5px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)}
        style={{
          margin: "5px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)}
        style={{
          margin: "5px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
