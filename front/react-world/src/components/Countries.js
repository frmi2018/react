import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Countries() {
  // données et test chargement
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // tri des données
  const [sortedData, setSortedData] = useState([]);
  // nombre de pays à afficher
  const [rangeValue, setRangeValue] = useState(10);
  // choix du continent
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  // pays recherché
  const [searchCountry, setSearchCountry] = useState("");

  const handleChangeInput = (e) => {
    setSearchCountry(e.target.value);
  };

  useEffect(() => {
    if (isLoading) {
      console.log(data);
      axios
        .get(
          "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, isLoading, rangeValue]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="countries">
      <div className="sort-container">
        <div>
          <span>1 </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <span> {rangeValue}</span>
          <span> / {data.length}</span>
        </div>
        <div>
          <input
            type="search"
            placeholder="Entrez un pays..."
            size="20"
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div>
          <ul>
            {radios.map((radio) => {
              return (
                <li key={radio}>
                  <input
                    type="radio"
                    value={radio}
                    id={radio}
                    checked={radio === selectedRadio}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                  />
                  <label htmlFor={radio}>{radio}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
        )}
      </div>
      <ul className="countries-list">
        {sortedData
          .filter((country) => country.region.includes(selectedRadio))
          .filter((country) =>
            country.name.toLowerCase().includes(searchCountry.toLowerCase())
          )
          .map((country) => (
            <Card country={country} key={country.name} />
          ))}
      </ul>
    </div>
  );
}
export default Countries;
