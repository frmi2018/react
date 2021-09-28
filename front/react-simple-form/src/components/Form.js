import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  // récupération des states
  const {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setVisible,
    visiblePass,
    setVisiblePass,
    iconPass,
    setIconPass,
  } = props;

  const handleTextChange = (e) => {
    // state name égale ce qui est saisie dans input
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // state email égale ce qui est saisie dans input
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // state email égale ce qui est saisie dans input
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    // state email égale ce qui est saisie dans input
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // empécher le rafraichissement du document
    e.preventDefault();
    // cacher Form et afficher StepTwo
    checkPassword();
  };

  const checkPassword = () => {
    if (name === "") {
      alert("Entrer un nom");
    } else {
      if (email === "") {
        alert("Entrer un email");
      } else if ((password && confirmPassword) === "") {
        alert("Entrer un mot de pass");
      } else if (password !== confirmPassword) {
        alert("Vos mots de passe ne sont pas identiques !");
      } else {
        setVisiblePass(false);
        setIconPass("eye");
        setVisible(false);
      }
    }
  };

  // JSX
  return (
    <>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleTextChange}
        />
        <span>Email</span>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Your password</span>
        <div>
          <input
            type={visiblePass === true ? "text" : "password"}
            placeholder=""
            value={password}
            onChange={handlePasswordChange}
          />
          {/* icon show/hide */}
          <i>
            <FontAwesomeIcon
              onClick={() => {
                if (visiblePass) {
                  setVisiblePass(false);
                  setIconPass("eye");
                } else {
                  setVisiblePass(true);
                  setIconPass("eye-slash");
                }
              }}
              icon={iconPass}
            />
          </i>
        </div>
        <span>Confirm your password</span>
        <div>
          <input
            type={visiblePass === true ? "text" : "password"}
            placeholder=""
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {/* icon show/hide */}
          <i>
            <FontAwesomeIcon
              onClick={() => {
                if (visiblePass) {
                  setVisiblePass(false);
                  setIconPass("eye");
                } else {
                  setVisiblePass(true);
                  setIconPass("eye-slash");
                }
              }}
              icon={iconPass}
            />
          </i>
        </div>

        <input className="submit-button" type="submit" value="Register" />
      </form>
    </>
  );
};

export default Form;
