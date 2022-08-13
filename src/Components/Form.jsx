import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getList = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/list")
      .then((res) => {
        setList(res.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  const addListItem = (item) => {
    axios
      .post("http://localhost:8080/list", item)
      .then((res) => getList())
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    getList();
  }, []);
  console.log(list);
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addListItem({ title: text })}>Add</button>
        <div className="list">
          {error?.length > 0 ? (
            <div>{error}</div>
          ) : loading ? (
            <div>loading</div>
          ) : (
            list?.length > 0 &&
            list.map((ele) => <div key={ele.id}>{ele.title}</div>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
