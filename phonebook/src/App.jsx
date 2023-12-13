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
    console.log(person);
    const existingPerson = persons.find((per) => per.id === person.id);
    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to the phonebook, replace the old number with the new one?`
        )
      ) {
        personsService.updateNumber(person).then((updatedPerson) => {
          console.log(updatedPerson);
          setPersons(
            persons.map((currentPerson) =>
              currentPerson.id === updatedPerson.id
                ? updatedPerson
                : currentPerson
            )
          );
        });
      }
    } else {
      personsService.addPerson(person).then((newPerson) => {
        setPersons(persons.concat(newPerson));
      });
    }
  };

  const deletePerson = (id) => {
    personsService.deletePerson(id).then((response) => {
      console.log(response);
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson addPerson={addPerson} phoneBook={persons} />
      <ShowNumbers
        phoneBook={persons}
        deletePerson={deletePerson}
      ></ShowNumbers>
    </div>
  );
};

export default App;
