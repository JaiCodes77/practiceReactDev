import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(inputs));
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  return ( 
    <div className="containerdiv"> 
    <div className="containerstylingdiv"> 
      <form onSubmit={handleSubmit} className="formdiv">
        <div className="labeldiv"> 
          <label>first Name :</label>
          <input
            type="text"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
            className="inputfield"
          />
        </div>

        <div className="labeldiv">
          <label>last Name :</label>
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
            className="inputfield"
          />
        </div>

        <div className="labeldiv">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="inputfield"
          />
        </div>

        <div className="labeldiv">
          {" "}
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            className="inputfield"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default ContactUs;
