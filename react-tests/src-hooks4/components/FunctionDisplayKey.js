// créer une class 'rfce' (raccourci)
import React, { useState, useEffect } from "react";

function FunctionDisplayKey() {
  const [keyCode, setKeyCode] = useState("");

  const handleKeyCode = (e) => {
    // start EventListener
    console.log("addEventListener start");
    setKeyCode(e.code);
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyCode);
    return () => {
      // stop EventListener
      console.log("addEventListener stop");
      document.removeEventListener("keyup", handleKeyCode);
    };
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">{keyCode}</h1>
      </div>
    </div>
  );
}

export default FunctionDisplayKey;
