import React from 'react'

function Users() {
  return (
      <div>
          <p>All users </p>
          <table>
              <th>
                  <ttd>id</ttd>
                  <td>Full Names</td>
                  <td>Email</td>
                  <td>Phone Number</td>
              </th>
              <tr>
                  <td>1</td>  
                  <td>Vincent</td>
                  <td>vincent@gmail.com</td>
                  <td>0789466837</td>
              </tr>
          </table>
    </div>
  )
}

export default Users