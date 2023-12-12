import { useState, useEffect } from "react";
import { ShowNumbers } from "./components/ShowNumbers";
import { AddPerson } from "./components/AddPerson";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const addPerson = (person) => {
    setPersons(persons.concat(person));
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson addPerson={addPerson} phoneBook={persons} />
      <ShowNumbers phoneBook={persons}></ShowNumbers>
    </div>
  );
};

export default App;
