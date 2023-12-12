import { useState } from "react";
import { ShowNumbers } from "./components/ShowNumbers";
import { AddPerson } from "./components/AddPerson";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const addPerson = (person) => {
    setPersons(persons.concat(person));
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
