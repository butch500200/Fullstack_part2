import { useState, useEffect } from "react";
import { ShowNumbers } from "./components/ShowNumbers";
import { AddPerson } from "./components/AddPerson";
import axios from "axios";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    personsService.getPeople().then((phoneBook) => {
      console.log(phoneBook);
      setPersons(phoneBook);
    });
  }, []);

  const addPerson = (person) => {
    personsService.addPerson(person).then((newPerson) => {
      setPersons(persons.concat(newPerson));
    });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson addPerson={addPerson} phoneBook={persons} />
      <ShowNumbers phoneBook={persons}></ShowNumbers>
    </div>
  );
};

export default App;
