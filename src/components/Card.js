import React from "react";
import Latex from "react-latex";
function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      {/* <img src={item.img} alt="" /> */}
      <Latex>{item.equation}</Latex>
    </div>
  );
}

export default Card;
