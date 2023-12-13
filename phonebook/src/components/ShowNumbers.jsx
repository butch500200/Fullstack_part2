import { useState } from "react";
import React from "react";
import { Person } from "./Person";

export const ShowNumbers = ({ phoneBook, deletePerson }) => {
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (e) => {
    setFilter(e.target.value);
  };
  const phoneBookDisplay = phoneBook.filter((person) => {
    return person.name.includes(filter);
  });

  const confirmDelete = (personName, id) => {
    if (window.confirm(`are you sure you want to delete ${personName}?`)) {
      deletePerson(id);
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      <input placeholder="filter..." onChange={filterChangeHandler} />
      {phoneBookDisplay.map((person) => {
        return (
          <div key={person.id}>
            <Person person={person}></Person>
            <button onClick={() => confirmDelete(person.name, person.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
