import React from "react";
import { useState } from "react";

const InputForm = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        autoFocus
        className="form-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text">{value}</div>
    </div>
  );
};

export default InputForm;
