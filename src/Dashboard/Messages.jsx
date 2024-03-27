import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Dashstyles/Users.css";

function Messages() {
  const users = [
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 210179,
      Name: "emmanuel",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 210179,
      Name: "eme",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 210179,
      Name: "eric",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
    {
      Id: 21017987,
      Name: "vincent",
      Email: "Vincent@gmail.com",
      PhoneNumber: +250789466837,
    },
  ];

const dev =users.filter(use=>use.Name==='vincent')
  let i = 0;
  
  return (
    <div className="tableuser">
      <p>All users </p>
      <table className="placetable">
        <thead>
          <tr>
            <td>id</td>
            <td>Full Names</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {dev.map((girl) => (
            <tr key={girl}>
              <td>{(i += 1)}</td>
              <td>{girl.Name}</td>
              <td>{girl.PhoneNumber}</td>
              <td>{girl.Email}</td>
             <td><MdDeleteForever /></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Messages;
