import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IMG1 from "../../assets/pandit-logo.png";
import "./validation.css";

const Singup = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("status")==="on"){
      navigate("/")
    }
  })

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if(name && email && password){
      fetch("http://localhost/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
    }
    
    else{
      alert("Pleas Fill all data field")
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="validation">
      <div className="val_form__container">
        <div>
          <img className="validation__logo" src={IMG1} alt="" />
        </div>
        <h2>Sign up</h2>
        <input
          placeholder="Your name"
          onChange={onChangeName}
          className="validation__field"
          type="text"
        />
        <input
          placeholder="Your Email"
          onChange={onChangeEmail}
          className="validation__field"
          type="email"
        />
        <input
          placeholder="Your Passeword"
          onChange={onChangePassword}
          className="validation__field"
          type="password"
        />
        <button className="validation__btn" onClick={handleClick}>
          Sign up
        </button>
        <Link className="validation__link" to={"/login"}>
          Already a user? Login now
        </Link>
      </div>
    </div>
  );
};

export default Singup;
