import React, { useState } from "react";
import "./contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import swal from "sweetalert"

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleClick = async () => {
    fetch("http://localhost/formSubmition", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body:JSON.stringify(
        {
            name: name,
            naumber: number,
            email: email,
            subject: subject,
            content: content,
          },
          ) 
        
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response)
        if (response.status == true) {
          swal("SUCCESS", response.message, "success");
        } else if (response.status == false) {
          swal("Error", response.message, "error");
        }
      });
  };

  return (
    <div className="contact">
      <div className="form__container">
        <div className="form__left">
          <h2>Get in touch with us!</h2>
          <div className="line"></div>
          <div className="form__element">
            <span>
              <IoLocationSharp className="form__icon" />
              <h3>Address:</h3>
            </span>
            <h4>
              Shri Balaji Mandir, Jashpur Nagar District : Jashpur, (C.G. )
            </h4>
          </div>
          <div className="form__element">
            <span>
              <IoMdCall className="form__icon" />
              <h3>Phone:</h3>
            </span>
            <h4>+91-9406095060</h4>
          </div>
          <div className="form__element">
            <span>
              <MdEmail className="form__icon" />
              <h3>Email:</h3>
            </span>
            <h4>mrm9406095060@gmail.com</h4>
          </div>
        </div>
        <div className="form__right">
          <div>
            <input
              placeholder="Name"
              onChange={handleChangeName}
              className="field"
              type="text"
            />
            <input
              placeholder="Number"
              onChange={handleChangeNumber}
              className="field"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Email"
              onChange={handleChangeEmail}
              className="field"
              type="text"
            />
            <input
              placeholder="Subject"
              onChange={handleChangeSubject}
              className="field"
              type="text"
            />
          </div>
          <div>
            <textarea
              required
              className="field"
              onChange={handleChangeContent}
              rows="1"
            ></textarea>
          </div>
          <button className="field form__btn" onClick={handleClick}>Send Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
