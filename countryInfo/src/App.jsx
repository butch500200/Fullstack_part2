import { useState, useEffect } from "react";
import appService from "./services/appService";
import { DisplayContries } from "./components/DisplayContries";

//API KEY EXAMPLE

// export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
// ($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
// set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.exe

// const api_key = import.meta.env.VITE_SOME_KEY;
// console.log(api_key);

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
        <DisplayContries
          contries={filteredContries}
          setContry={setFilter}
        ></DisplayContries>
      </div>
    </>
  );
}

export default App;
