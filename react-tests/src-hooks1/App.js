import "./App.css";
import React from "react";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Counters</h1>
      <ClassState />
      <hr />
      <FunctionState />
    </div>
  );
}

export default App;
