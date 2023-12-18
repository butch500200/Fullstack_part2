import { useState, useEffect } from "react";
import { ShowNumbers } from "./components/ShowNumbers";
import { AddPerson } from "./components/AddPerson";
import { Notification } from "./components/Notification";
import axios from "axios";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState({
    message: null,
    positive: null,
  });

  useEffect(() => {
    console.log("effect");
    personsService.getPeople().then((phoneBook) => {
      //console.log(phoneBook);
      setPersons(phoneBook);
    });
  }, []);

  const setNotificationMessageToNull = () => {
    setNotificationMessage({
      message: null,
      positive: true,
    });
  };

  const addPerson = (person) => {
    const existingPerson = persons.find((per) => per.name === person.name);
    person = { ...person, id: existingPerson.id };
    console.log("existing person", existingPerson);
    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to the phonebook, replace the old number with the new one?`
        )
      ) {
        personsService.updateNumber(person).then((updatedPerson) => {
          //notification
          const notification = {
            message: `updated ${updatedPerson.name}'s number`,
            positive: true,
          };
          setNotificationMessage(notification);
          setTimeout(setNotificationMessageToNull, 3000);
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
        const notification = {
          message: `added ${newPerson.name} to the phonebook`,
          positive: true,
        };
        setNotificationMessage(notification);
        setTimeout(setNotificationMessageToNull, 3000);
        setPersons(persons.concat(newPerson));
      });
    }
  };

  const deletePerson = (id) => {
    personsService
      .deletePerson(id)
      .then((response) => {
        const notification = { message: `person deleted `, positive: true };
        setNotificationMessage(notification);
        setTimeout(setNotificationMessageToNull, 3000);
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        const notification = {
          message: `person was already deleted`,
          positive: false,
        };
        setNotificationMessage(notification);
        setTimeout(setNotificationMessageToNull, 3000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notificationMessage.message}
        positive={notificationMessage.positive}
      ></Notification>
      <AddPerson addPerson={addPerson} phoneBook={persons} />
      <ShowNumbers
        phoneBook={persons}
        deletePerson={deletePerson}
      ></ShowNumbers>
    </div>
  );
};

export default App;
