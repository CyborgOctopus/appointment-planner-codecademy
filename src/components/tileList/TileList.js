import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objects }) => {
  return (
    <div>
      {objects.map(object => <Tile object={object} />)}
    </div>
  );
};
