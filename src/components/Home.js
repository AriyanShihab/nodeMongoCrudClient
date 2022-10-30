import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const contactData = useLoaderData();
  const [contact, setContact] = useState(contactData);

  const handelDelete = (contactID) => {
    fetch(`http://localhost:5000/contacts/${contactID._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const restContact = contact.filter(
          (conData) => conData._id !== contactID._id
        );
        setContact(restContact);
        console.log(restContact);
      });
  };
  return (
    <div className="text-center mt-20 md:w-3/4 mx-auto p-8 rounded shadow-2xl grid grid-cols-3 ">
      {contact.map((contact) => (
        <div key={contact._id} className=" p-4 m-2 shadow-md">
          <h2>Name: {contact.name}</h2>
          <p>Phone Number: {contact.number}</p>
          <button
            onClick={() => handelDelete(contact)}
            className="px-3 py-2 rounded bg-red-400 font-bold m-2"
          >
            Delete Contact
          </button>
          <Link
            to={`update/${contact._id}`}
            className="px-3 py-2 rounded bg-green-400 font-bold"
          >
            Update Contact
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
