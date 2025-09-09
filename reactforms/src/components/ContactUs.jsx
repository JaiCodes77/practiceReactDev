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
          <h3 className="h3">Create Your Account</h3>
        <div className="labeldiv"> 
          <input
            type="text"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
            className="inputfield"
            placeholder="Enter your firstname"
          />
        </div>

        <div className="labeldiv">
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
            className="inputfield"
            placeholder="Enter your lastname"
          />
        </div>

        <div className="labeldiv">
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="inputfield"
            placeholder="Enter your email"
          />
        </div>

        <div className="labeldiv">
          {" "}
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            className="inputfield"
            placeholder="Enter your password"
          />
        </div>

        <button className="btn" type="submit">Create Account</button>
      </form>
      </div>
    </div>
  );
}

export default ContactUs;
