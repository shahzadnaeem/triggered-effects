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

  function isFixed() {
    return props.id === "Fixed"
  }
  useEffect(() => {
    if (!isFixed()) {
      setNumbers([...shuffle(numbers)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.trigger]);

  return (
    <div className="numsSetContainer">
      <h3>Box - {props.id}</h3>
      <div className="numsSet">
        {numbers.map((num) => {
          let classes = "num";
          if (!isFixed() && (props.trigger & 1)) {
            classes += " alt"
          }

          return (
            <div className={classes} key={num}>
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const numNums = Array(20).fill(0);
  const [count, setCount] = useState(0);

  numNums.splice(10, 0, "Fixed");

  function inc() {
    setCount((n) => n + 1);
  }

  return (
    <div className="App">
      <h1>Effects!</h1>
      <button onClick={inc}>Shuffle all numbers!</button>
      <div className="nums">
        {numNums.map((e, i) => (
          <Nums key={i} id={e !== "Fixed" ? i + 1 : e} trigger={count}></Nums>
        ))}
      </div>
    </div>
  );
}

export default App;
