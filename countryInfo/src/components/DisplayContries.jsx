import React from "react";
import { Contry } from "./Contry";

export const DisplayContries = ({ contries }) => {
  const numContries = contries.length;

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
              <button>show</button>
            </li>
          );
        })}
      </>
    );
  }

  return <div>Too many matches, please narrow your filter</div>;
};
