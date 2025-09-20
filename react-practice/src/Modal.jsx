import React from "react";
import './Modal.css'

function Modal() {
  return (
    <div className="container">
      <div className="headerdiv">
        <h3>Main question or action</h3>
      </div>

      <div className="inputs">
        <label>
          <input type="checkbox" />
          Action Item 1
        </label> 

        <label>
          <input type="checkbox" />
          Action Item 2
        </label>

      </div>

      <div className="footer">
        <button className="applyBtn">Apply</button>
        <button className="cancelBtn">Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
