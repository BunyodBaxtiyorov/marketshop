import React from "react";
import { Link } from "react-router-dom";
import object from "../img/OBJECTS.png";
export default function Register() {
  return (
    <>
      <div className="header-0"></div>
      <div className="Register">
        <div className="container">
          {" "}
          <div className="sign">
            <div className="frame-sign">
              <div className="btn-sign">
                <button className="btn-sign-1">
                  <Link to={"/login"}>
                    <b>Kirish</b>
                  </Link>
                </button>
                <button className="btn-sign-2 btn-4">
                  <Link to={"/register"}>Ro'yxatdan o'tish</Link>
                </button>
              </div>
              <div className="kirish-log">
                {" "}
                <h4>Ro'yxatdan o'tish</h4>
              </div>
              <div className="frame-230">
                <div className="phone-login">
                  <p className="phone-about">Telefon raqam</p>
                  <input
                    type="text"
                    className="section"
                    placeholder="+998-00-000-00-00"
                    // value={phoneNumber}
                    // onChange={handlePhoneNumberChange}
                  />
                  <p className="erron-login">error</p>
                </div>
                <div className="frame-234">
                  {/* <div className="phone-login">
                    <p className="phone-about">Telefon raqam</p>
                    <input type="text" className="section" />
                    <p className="erron-login">error</p>
                  </div> */}
                </div>
                <div className="password">
                  <a href="/">parollni unutdingizmi</a>
                </div>
                <button className="all-login">
                  <button href="/kirish">Ro'yxatdan o'tish</button>
                </button>
              </div>
            </div>
            <div className="img-sign">
              <div className="sign-img">
                <img src={object} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
