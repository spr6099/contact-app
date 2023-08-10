import react from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    const contactFilter = props.contacts.map((contact)=>{
        return (
           <ContactCard contact={contact}></ContactCard>
        
    )}) 

    return(
        <div className="ui celled list">
        {contactFilter}
        </div>
    )
};

export default ContactList;