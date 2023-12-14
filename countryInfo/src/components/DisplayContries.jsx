import React from "react";
import { Contry } from "./Contry";

export const DisplayContries = ({ contries, setContry }) => {
  const numContries = contries.length;

  const handleShowClicked = (country) => {
    console.log(country);
    setContry(country);
  };

  if (numContries === 0) {
    return <div>no contries</div>;
  }
  if (numContries === 1) {
    return <Contry contry={contries[0]}></Contry>;
  }
  if (numContries < 11) {
    return (
      <>
        {contries.map((contry) => {
          return (
            <li key={contry.name.official}>
              {contry.name.common}
              <button onClick={() => handleShowClicked(contry.name.common)}>
                show
              </button>
            </li>
          );
        })}
      </>
    );
  }

  return <div>Too many matches, please narrow your filter</div>;
};
