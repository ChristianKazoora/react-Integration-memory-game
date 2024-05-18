import React from "react";
const Score = ({ score }) => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "left",
        display: "flex",
      }}
    >
      <div
        style={{
          border: "2px solid green",
          width: "max-content",
          borderRadius: "5px",
          backgroundColor: "lightgreen",
        }}
      >
        <h2>
          Score: <div style={{ color: "red", display: "inline" }}>{score}</div>
        </h2>
      </div>
    </div>
  );
};

export default Score;
