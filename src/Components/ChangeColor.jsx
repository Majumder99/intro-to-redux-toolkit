import React, { useState } from "react";
import { changeColor } from "../features/theme";
import { useDispatch } from "react-redux";

const ChangeColor = () => {
  const dispatcher = useDispatch();
  const [color, setColor] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatcher(changeColor(color));
          }}
        >
          Change Color
        </button>
        <h1>{color}</h1>
      </div>
    </>
  );
};

export default ChangeColor;
