import React, { useState } from "react";

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
        <div
          className="fixed w-screen h-screen flex justify-center items-center z-50"
          style={{ backgroundColor: "rgb(173, 179, 183)" }}
          onClick={modalClose}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-xl"
            style={{ width: "560px", height: "250px"}}
            onClick={(e) => e.stopPropagation()}
          > 

           <div className="flex justify-between">
            <h3 className="mb-10 font-semibold">Syncing Data Between Environments</h3>
            <button className="mb-10 mr-4 cursor-pointer" onClick={modalClose}>Dismiss</button>
            </div>

            <div className="flex flex-col mb-5" style={{ gap: "10px" }}>
              <label>
                <input type="checkbox" className="mr-2" />
                Staging
              </label>

              <label>
                <input type="checkbox" className="mr-2" />
                Development
              </label>
            </div>

            <div className=" mt-10 flex gap-3" style={{ marginLeft: "280px" }}>
              <button
                className="m-1 p-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white mb-3"
                style={{ minWidth: '100px', border: "1px solid lightgray" }}
              >
                Apply Sync
              </button>
              <button
                className="m-1 p-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white mb-3"
                style={{ minWidth: '100px', border: "1px solid lightgray" }}
                onClick={modalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
