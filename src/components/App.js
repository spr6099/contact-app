import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
const { v4: uuidv4 } = require("uuid");

const LOCAL_STORAGE_KEY = "contacts";
const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

function App() {
  const [contacts, setContacts] = useState(retriveContacts ?? []);
  const id = uuidv4();
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id, ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
        {/* <Route path="/"  element={<ContactList contacts = {contacts} getContactId={removeContactHandler}/>}/> */}
          <Route
            path="/"
            render={(props) => { return
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
                {...props}
              />
            }}
          />
          <Route
            path="/add"
            render={(props)=>{ return <AddContact addContactHandler={addContactHandler} />}}
          />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler}/>
                 <ContactList contacts = {contacts} getContactId={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
