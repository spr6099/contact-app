import react from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
        props.getContactId(id); 

    }
  const contactFilter = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });

  return <div className="ui celled list">{contactFilter}</div>;
};

export default ContactList;
