import React from "react";
import './Modal.css'

function Modal() {
  return (
    <div className="container">
      <div className="headerdiv">
        <h3>Main question or action</h3>
      </div>

      <div>
        <label>
          <input type="checkbox" />
          Staging
        </label> 

        <label>
          <input type="checkbox" />
          Development
        </label>

      </div>

      <div className="footer">
        <button className="applyBtn">apply</button>
        <button className="cancelBtn">cancel</button>
      </div>
    </div>
  );
}

export default Modal;
