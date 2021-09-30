import "./App.css";
import { useState } from "react";
import MyButton from "./components/MyButton";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <div className="col-1">
        <div>
          <MyButton tab={[switch1, setSwitch1]}></MyButton>

          <MyButton tab={[switch2, setSwitch2]}></MyButton>

          <MyButton tab={[switch3, setSwitch3]}></MyButton>
        </div>
      </div>
      <div className="col-2">
        <div
          className="btn2"
          style={{
            backgroundColor:
              switch1 && switch2 && switch3 ? "#46ac4a" : "#d34848",
          }}
        >
          {switch1 && switch2 && switch3 ? "GO !" : "No Way"}
        </div>
      </div>
    </div>
  );
};

export default App;
