import { useState } from "react";
import React from "react";
import { Person } from "./Person";

export const ShowNumbers = ({ phoneBook }) => {
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (e) => {
    setFilter(e.target.value);
  };
  const phoneBookDisplay = phoneBook.filter((person) => {
    return person.name.includes(filter);
  });

  return (
    <div>
      <h2>Numbers</h2>
      <input placeholder="filter..." onChange={filterChangeHandler} />
      {phoneBookDisplay.map((person) => {
        return <Person person={person} key={person.id}></Person>;
      })}
    </div>
  );
};
