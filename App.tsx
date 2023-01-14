import "./style.css";
import React from "react";
import Headed from "./Head";
import Card from "./Card";
import contacts from "./Contacts";
import Form from "./Form";
import Time from "./Time";




var userRegistered = false;



function App() {
    return (
    <div>
        <Headed/>
        <h1 className="detail">WELCOME TO  THE OFFICE</h1>
        <Time/>
        <h1 className="heading">Our Contacts</h1>

        {contacts.map(contact => 
        <Card 
        id={contact.id}
        key={contact.id}
        name={contact.name} 
        img={contact.img}
        tel={contact.tel}
        email={contact.email}
        /> 
        )}

        <h1 className="detail">Please Register Yourself</h1>

        <Form
        isRegistered={userRegistered}/>

        

       
        
       
    </div>
    );

}
export default App;