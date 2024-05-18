import React from "react";
import Latex from "react-latex";
const Current = ({ item }) => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "lightblue",
          justifyContent: "center",
          width: "max-content",
          border: "2px solid blue",
          borderRadius: "5px",
          padding: "3px",
        }}
      >
        <Latex>{item.equation}</Latex>
      </div>
    </div>
  );
};

export default Current;
