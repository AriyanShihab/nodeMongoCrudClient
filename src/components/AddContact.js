import React, { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({});

  const henadelSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/contacts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("contact added");
      })
      .catch((err) => {
        console.log(err);
      });
    event.target.reset();
  };

  const handelChangeOnBlur = (event) => {
    const feild = event.target.name;
    const value = event.target.value;
    const prevContact = { ...contact };
    prevContact[feild] = value;
    setContact(prevContact);
  };

  return (
    <div className="App">
      <h2>Add Contact </h2>

      <form onSubmit={henadelSubmit}>
        <input
          onBlur={handelChangeOnBlur}
          type="text"
          name="name"
          placeholder="Conatct Name"
        />
        <br />
        <input
          onBlur={handelChangeOnBlur}
          type="text"
          name="number"
          id=""
          placeholder="Contact Number"
        />
        <br />

        <button type="submit">Add Contatc</button>
      </form>
    </div>
  );
};

export default AddContact;
