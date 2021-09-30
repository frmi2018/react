import React, { useState, useEffect } from "react";

function FunctionCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // méthodes cycle de vie

  // au montage du composant uniquement
  // useEffect(() => {
  //   console.log("Mise à jour du titre");
  //   document.title = `Vous avez cliqué ${count} fois`;
  // }, []);

  // au montage et pendant vie du composant
  // useEffect(() => {
  //   console.log("Mise à jour du titre");
  //   document.title = `Vous avez cliqué ${count} fois`;
  // });

  // au montage et pendant vie du composant uniquement si count est modifié
  useEffect(() => {
    console.log("Mise à jour du titre");
    document.title = `Vous avez cliqué ${count} fois`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Cliquer
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default FunctionCount;
