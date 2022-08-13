import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //   const addCount =  axios.post("http://localhost:8080/count",{count:counter+1})
  useEffect(() => {
    axios
      .get("http://localhost:8080/count")
      .then((res) => setCounter(res.data.count))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>The count is {counter}</h2>
      <button
        className="addCounter"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="reduceCounter"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Reduce
      </button>
    </div>
  );
};

export default Counter;
