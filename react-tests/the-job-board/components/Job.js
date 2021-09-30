const Job = (props) => {
  return (
    <div className={`${props.className}`}>
      <h2>{props.title}</h2>
      <span>
        {props.contractType} - {props.country} - {props.city}
      </span>
    </div>
  );
};

export default Job;
