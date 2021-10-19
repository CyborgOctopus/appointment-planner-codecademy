import React from "react";

export const Tile = ({ object }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{object[Object.keys(object)[0]]}</p>
      {Object.keys(object).slice(1).map(key => <p className="tile">{object[key]}</p>)}
    </div>
  );
};
