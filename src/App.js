import { useEffect, useState } from "react";
import "./App.css";
import React from "react";

function shuffle(as) {
  let ci = as.length;

  while (ci !== 0) {
    const i = Math.floor(Math.random() * ci);
    ci--;

    const tmp = as[ci];
    as[ci] = as[i];
    as[i] = tmp;
  }

  return as;
}

function Nums(props) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    setNumbers([...shuffle(numbers)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.trigger]);

  return (
    <div className="numsSetContainer">
      <h3>{props.id}</h3>
      <div className="numsSet">
        {numbers.map((num) => (
          <div
            className={`num ${(props.trigger & 1) === 1 ? "alt" : ""}`}
            key={num}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const numNums = Array(10).fill(0);
  const [count, setCount] = useState(0);

  function inc() {
    setCount((n) => n + 1);
  }

  return (
    <div className="App">
      <h1>Effects!</h1>
      <button onClick={inc}>Shuffle all numbers!</button>
      <div className="nums">
        {numNums.map((e, i) => (
          <Nums key={i} id={i + 1} trigger={count}></Nums>
        ))}
        <Nums id={"Fixed"}></Nums>
        {numNums.map((e, i) => (
          <Nums key={i} id={i + 11} trigger={count}></Nums>
        ))}
      </div>
    </div>
  );
}

export default App;
