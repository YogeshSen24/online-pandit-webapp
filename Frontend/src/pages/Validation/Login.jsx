import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import IMG1 from "../../assets/pandit-logo.png";
import "./validation.css";
import swal from 'sweetalert'

const Login = () => {


  useEffect(()=>{
    if(localStorage.getItem("status")==="on"){
      navigate("/")
    }
  })
  const [id, setid] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate=useNavigate()

  const onChangeId = (e) => {
    setid(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async () => {
    if(id && password){
      fetch("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if(response.status==true){
          swal("SUCCESS", response.message, "success");
          localStorage.setItem("status" , "on")
          navigate('/')
        } else if(response.status==false){
          swal("Error", response.message, "error");
        }

  

      });
    }
    
    else{
      alert("Pleas Fill all data field")
    }
  };
  return (
    <div className="validation">
      <div className="val_form__container">
        <div>
          <img className="validation__logo" src={IMG1} alt="" />
        </div>
        <h2>Log in</h2>
        <input
          placeholder="Your ID"
          onChange={onChangeId}
          className="validation__field"
          type="text"
        />
        <input
          placeholder="Your Passeword"
          onChange={onChangePassword}
          className="validation__field"
          type="password"
        />
        <button className="validation__btn" onClick={handleClick}>
          Log in
        </button>
        <Link className="validation__link" to={"/signup"}>
          or Register Now ?
        </Link>
      </div>
    </div>
  );
};

export default Login;
