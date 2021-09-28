import "./index.css";

const Hero = ({ data }) => {
  return (
    <div className="hero">
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <img src={data.picture} alt={data.name} />
    </div>
  );
};

export default Hero;
