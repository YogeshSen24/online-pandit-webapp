import React from "react";
import "./navbar.css";
import IMG1 from "../../assets/pandit-logo.png";
import PS from "../../assets/gplay.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={IMG1} alt="" />
        </div>
        <div className="nav__right">
          <ul>
            <li>
              <NavLink to={"/"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>Home</NavLink>
            </li>
            <li>
              <NavLink  to={"/about"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>About</NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>Contact Us</NavLink>
            </li>
            {localStorage.getItem("status")==="on" ? (
              <li>
              <a href="/" onClick={(e)=>{
                e.preventDefault()
                localStorage.setItem("status" , "off")
                }}>Log out</a>
            </li>
            ) : (
              <>
                  <li><NavLink  to={"/login"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>Login</NavLink></li>

                  <li><NavLink  to={"/signup"} className={({isActive})=>
                `${isActive ? "selected" : ""}`
              }>Signup</NavLink></li>
              </>
            )}
          </ul>
          <GiHamburgerMenu className="menu__icon" />

          <div className="playstore">
            <img src={PS} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
