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
  const initNumbers = Array(6).fill(0).map((v,i) => i+1);

  const [numbers, setNumbers] = useState(initNumbers);

  function isFixed() {
    return props.id === "Fixed";
  }

  useEffect(() => {
    if (props.trigger === 0) {
      setNumbers(initNumbers);
    } else {
      if (!isFixed()) {
        setNumbers([...shuffle(numbers)]);
      }  
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.trigger]);

  return (
    <div className="numsSetContainer">
      <h3>Box - {props.id} ({props.trigger})</h3>
      <div className="numsSet">
        {numbers.map((num) => {
          let classes = "num";
          if (!isFixed() && props.trigger & 1) {
            classes += " alt";
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

  function inc(by=1) {
    setCount((n) => n + by);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Effects!</h1>
      <div id="controls">
        <button onClick={() => inc()}>Shuffle all numbers</button>
        <label>Shuffle count: {count}</label>
        <button onClick={reset}>Reset all numbers</button>
      </div>
      <div className="nums">
        {numNums.map((e, i) => (
          <Nums key={i} id={e !== "Fixed" ? i + 1 : e} trigger={count}></Nums>
        ))}
      </div>
    </div>
  );
}

export default App;
