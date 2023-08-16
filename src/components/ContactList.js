import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [
  //   {
  //     id: "1211",
  //     name: "sandeep",
  //     email: "spr@gmail.com",
  //   },
  // ];

  const contactFilter = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="main">
      {" "}
      <h2>Contact List</h2>
      <h2>
        Contact List{" "}
        <Link to = "/add">
        <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{contactFilter}</div>{" "}
    </div>
  );
};

export default ContactList;
