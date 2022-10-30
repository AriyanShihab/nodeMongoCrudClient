import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const { name, number, _id } = data;
  const [contact, setContact] = useState(data);

  const henadelSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          alert(`contact updated`);
        }
      });
  };

  const handelChangeOnBlur = (event) => {
    const feild = event.target.name;
    const value = event.target.value;
    const prevContact = { ...contact };
    prevContact[feild] = value;
    setContact(prevContact);
  };

  return (
    <div className="text-center mt-20">
      <h2>Updat information for {data.name}</h2>

      <form onSubmit={henadelSubmit}>
        <input
          onBlur={handelChangeOnBlur}
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Conatct Name"
          className="border m-2 p-3 rounded"
        />
        <br />
        <input
          onBlur={handelChangeOnBlur}
          defaultValue={number}
          type="text"
          name="number"
          id=""
          placeholder="Contact Number"
          className="border m-2 p-3 rounded"
        />
        <br />

        <button
          className="bg-green-500 rounded px-4 py-2 font-bold"
          type="submit"
        >
          Update Contatc
        </button>
      </form>
    </div>
  );
};

export default Update;
