import React from "react";

export const Person = ({ person }) => {
  return (
    <>
      <h3>
        {person.name} {person.number}
      </h3>
    </>
  );
};
