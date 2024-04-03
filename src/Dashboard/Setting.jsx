import React from 'react'
import './Dashstyles/Setting.css'
function Setting() {
  return (
    <form className='form-setting'>
      <div className="setting">
        <div className="input-label">
          <label htmlFor="">FullName</label>
          <input type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="">PhoneNumber</label>
          <input type="text" />
        </div>
        <div className="input-label">
          <label htmlFor=""> Gender</label>
          <input type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="">Country</label>
          <input type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="">Eduction</label>
          <input type="text" />
        </div>
      </div>
      <div className="input-label">
        <label htmlFor="">Logout</label>
        <button>Logout</button>
      </div>
    </form>
  );
}

export default Setting