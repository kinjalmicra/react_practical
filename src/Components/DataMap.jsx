import React from "react";

function DataMap() {
  const arr = [
    { name: "sara", email: "sara@gmail.com", contact: 12345 },
    { name: "abc", email: "abc@gmail.com", contact: 12345 },
    { name: "xyz", email: "xyz@gmail.com", contact: 12345 },
    { name: "cma", email: "cma@gmail.com", contact: 12345 },
    { name: "csa", email: "csa@gmail.com", contact: 12345 },
  ];

  return (
    <div>
      <h1>Handle Array with List</h1>
      <table border={2}>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {arr.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DataMap;
