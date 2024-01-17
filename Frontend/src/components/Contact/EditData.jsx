import React, { useState } from "react";
import swal from "sweetalert";

const EditData = ({oldname , oldnumber , oldemail, oldsubject , oldcontent}) => {
    const [name, setName] = useState(oldname);
    const [number, setNumber] = useState(oldnumber);
    const [email, setEmail] = useState(oldemail);
    const [subject, setSubject] = useState(oldsubject);
    const [content, setContent] = useState(oldcontent);
  
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
        fetch(`http://localhost/editData/`, {
          method: "PUT",
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
    <div className="edit-form">
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
          placeholder="..."
          onChange={handleChangeContent}
          rows="1"
        ></textarea>
      </div>
      <button className="field form__btn" >
        Send Now
      </button>
    </div>
  );
};

export default EditData;
