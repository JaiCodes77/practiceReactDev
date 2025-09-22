import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalOpen = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={modalOpen}>Open Modal</button> 

     {isModalOpen && (
      <div className="modal-overlay" onClick={modalClose}>
        <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
          <h3 className="headerdiv">Syncing Data Between Environments</h3>
        
           <div className="checkbox-container">
          <label>
            <input type="checkbox" className="inputs"/>
            Staging
          </label>
          
          <label>
            <input type="checkbox" className="inputs"/>
            Development
          </label>
        </div>

          <div className="footer">
          <button className="applyBtn Btnn">Apply Sync</button>
          <button className="cancelBtn Btnn" onClick={modalClose}>Cancel</button>
          </div>
        </div>
      </div>
     )}
    </div>
    );
}

export default Modal;
