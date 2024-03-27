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
    <div>
      <p>All users </p>
      <table>
        <thead>
          <tr className="placetable">
            <th>id</th>
            <th>Full Names</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="placetable">
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