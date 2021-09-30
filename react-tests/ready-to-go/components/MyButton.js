const MyButton = (props) => {
  return (
    <div>
      <button
        className="btn1"
        style={{
          backgroundColor: props.tab[0] ? "#5c48d3" : "#FFFFFF",
          color: props.tab[0] ? "white" : "black",
        }}
        onClick={() => {
          props.tab[1](true);
        }}
      >
        ON
      </button>

      <button
        className="btn1"
        style={{
          backgroundColor: props.tab[0] ? "#FFFFFF" : "#5c48d3",
          color: props.tab[0] ? "black" : "white",
        }}
        onClick={() => {
          props.tab[1](false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default MyButton;
