import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import'./Dashstyles/Users.css'

function Users() {


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
          {users.map((user) => (
            <tr >
              <td>{user.Id}</td>
              <td>{user.Name}</td>
              <td>{user.PhoneNumber}</td>
              <td>{user.Email}</td>
              <td>
                {" "}
                <MdDeleteForever />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users