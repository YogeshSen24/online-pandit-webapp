import React from "react";
import "./footer.css";
import IMG from "../../assets/pandit-logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="container__left">
          <img src={IMG} alt="" />
          <p>
            Online pandit is trusted name in India having a group of world
            renowned purohits and pandits who perform online pujas and yagnas
            for you. Get your puja performed in temples and religious places.
            Online pandit is dedicated to provide all kind of Puja service
            depending on your needs and requirement.
          </p>
        </div>
        <div className="container__right">
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({isActive}) => `${isActive ? "selected" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({isActive}) => `${isActive ? "selected" : ""}`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  className={({isActive}) => `${isActive ? "selected" : ""}`}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({isActive}) => `${isActive ? "selected" : ""}`}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to=""> Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Address</h3>
            <div>
              <IoLocationSharp />
              <h4>
                Shri Balaji Mandir, Jashpur Nagar District : Jashpur, (C.G. )
              </h4>
            </div>
            <div>
              <IoMdCall />
              <h4>+91-9406095060</h4>
            </div>
            <div>
              <MdEmail />
              <h4>mrm9406095060@gmail.com</h4>
            </div>
            <div className="icon__group">
              <span className="icon__container">
                <a href="">
                  <AiFillFacebook className="footer__icon" />
                </a>
              </span>
              <span className="icon__container">
                <a href="">
                  <TfiYoutube className="footer__icon" />
                </a>
              </span>
              <span className="icon__container">
                <a href="">
                  <FaWhatsappSquare className="footer__icon" />
                </a>
              </span>
              <span className="icon__container">
                <a href="">
                  <IoLogoInstagram className="footer__icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
