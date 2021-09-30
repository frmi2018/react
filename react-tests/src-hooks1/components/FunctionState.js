import React, { useState } from "react";

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  //   const removeOne = () => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   };

  //   const addOne = () => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   };

  return (
    <div>
      <h2 className="text-center">With function</h2>
      <span className="text-center">range 0 - 9</span>
      <div className="d-flex justify-content-center">
        {/* <button onClick={removeOne}>1</button> */}
        <button
          className="m-4"
          onClick={() => {
            counter > 0 && setCounter((prevCounter) => prevCounter - 1);
          }}
        >
          -
        </button>
        <p className="m-4">{counter}</p>
        {/* <button onClick={addOne}>+1</button> */}
        <button
          className="m-4"
          onClick={() =>
            counter < 9 && setCounter((prevCounter) => prevCounter + 1)
          }
        >
          +
        </button>
        <button className="m-4 text-danger" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FunctionState;
