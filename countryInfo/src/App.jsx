import { useState, useEffect } from "react";
import appService from "./services/appService";
import { DisplayContries } from "./components/DisplayContries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    console.log("effect");
    appService.getAllContries().then((contries) => {
      setCountries(contries);
      console.log(contries);
    });
  }, []);

  const handleFilterChange = (text) => {
    setFilter(text);
  };

  const filteredContries = countries.filter((contry) => {
    return contry.name.common.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(filteredContries);
  return (
    <>
      <div>
        find countries
        <input
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
        <DisplayContries contries={filteredContries}></DisplayContries>
      </div>
    </>
  );
}

export default App;
