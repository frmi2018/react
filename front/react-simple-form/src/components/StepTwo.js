import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepTwo = (props) => {
  // récupération des states
  const {
    name,
    email,
    password,
    setVisible,
    visiblePass,
    setVisiblePass,
    iconPass,
    setIconPass,
  } = props;

  const handleSubmit = (e) => {
    // empécher le rafraichissement du document
    e.preventDefault();
    // cacher Form et afficher StepTwo
    setIconPass("eye");
    setVisiblePass(false);
    setVisible(true);
  };

  // stars password
  const nbStars = () => {
    let stars = "";
    for (let i = 0; i < password.length; i++) {
      stars += "\u26AB";
    }
    return stars;
  };

  // JSX
  return (
    <>
      <h1>Results</h1>
      <div className="stepTwo">
        <span>Name : </span>
        <span>{name}</span>
        <span>Email : </span>
        <span>{email}</span>
        <span>Password : </span>
        <div>
          {visiblePass === true ? (
            <span>{password}</span>
          ) : (
            <span>{nbStars()}</span>
          )}
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
        <button onClick={handleSubmit}>Edit your informations</button>
      </div>
    </>
  );
};

export default StepTwo;
