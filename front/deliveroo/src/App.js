import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [lineCart, setLineCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://frmi-deliveroo-backend.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Logo />
      <Hero data={data.restaurant} />
      <div className="content-center">
        <Menu
          data={data.categories}
          lineCart={lineCart}
          setLineCart={setLineCart}
        />
        <Cart lineCart={lineCart} setLineCart={setLineCart} />
      </div>
    </div>
  );
}

export default App;
