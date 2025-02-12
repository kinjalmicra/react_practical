import React from "react";

function NestList() {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Burce",
      email: "bruce@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];
  return (
    <div>
      <h1>List with Nested Array</h1>
      <table>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {/*  */}
                <table>
                  <tbody>
                    {item.address.map((data) => (
                      <tr>
                        <td>{data.hm}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/*  */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NestList;
