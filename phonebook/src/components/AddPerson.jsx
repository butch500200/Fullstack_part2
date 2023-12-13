import React from "react";
import { useState } from "react";

export const AddPerson = ({ addPerson, phoneBook }) => {
  const [newName, setNewName] = useState("");
  const [newNumbers, setnewNumbers] = useState("");
  const [cantAdd, setCantAdd] = useState(false);

  const textOnChangeHandler = (e) => {
    // if (
    //   phoneBook.find((person) => person.name === e.target.value) != undefined
    // ) {
    //   setCantAdd(true);
    // } else {
    //   setCantAdd(false);
    // }
    setNewName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumbers,
      id: phoneBook.length + 1,
    };
    //console.log(newPerson);

    addPerson(newPerson);
    setNewName("");
    setnewNumbers("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        name:{" "}
        <input
          placeholder="new name here ..."
          onChange={textOnChangeHandler}
          value={newName}
        />
        <br></br>
        number:
        <input
          placeholder="number .."
          onChange={(e) => {
            setnewNumbers(e.target.value);
          }}
          value={newNumbers}
        />
      </div>
      <div>
        <button type="submit" disabled={cantAdd}>
          {cantAdd ? "Name already added!" : "add"}
        </button>
      </div>
    </form>
  );
};
