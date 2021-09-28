import { useState } from "react";

import "./App.css";

// import components
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

// Imports icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faEyeSlash, faEye, faStar);

function App() {
  // state pour afficher ou cacher Form/StepTwo
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Extras
  const [visiblePass, setVisiblePass] = useState(false);
  const [iconPass, setIconPass] = useState("eye");

  // JSX
  return (
    <div className="App">
      {/* Afficher Form ou StepTwo */}
      {visible ? (
        <Form
          // passage des states à Form
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setVisible={setVisible}
          visiblePass={visiblePass}
          setVisiblePass={setVisiblePass}
          iconPass={iconPass}
          setIconPass={setIconPass}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setVisible={setVisible}
          visiblePass={visiblePass}
          setVisiblePass={setVisiblePass}
          iconPass={iconPass}
          setIconPass={setIconPass}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
