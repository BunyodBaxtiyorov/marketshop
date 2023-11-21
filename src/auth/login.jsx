import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import object from "../img/OBJECTS.png";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Telefon raqamini tekshirish
      if (!phoneNumber) {
        setError("Iltimos, telefon raqamingizni kiriting.");
        return;
      }

      // Serverga so'rov yuborish
      const response = await axios.post(
        "http://143.198.64.152:1777/api/auth/v1/login",
        { phoneNumber }
      );
      console.log(response.data);
      // Muvaffaqiyatli kirish bo'lsa kerak bo'ladi
      setError("");
    } catch (error) {
      console.error("Xatolik:", error.response.data.message);
      // Xatolik bo'lgan holatda, xatolikni ma'lum qilish
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="sign">
          <div className="frame-sign">
            <div className="btn-sign">
              <Link to={"/login"}>
                <button className="btn-sign-1 btn-3">Kirish</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn-sign-2">Ro'yxatdan o'tish</button>
              </Link>
            </div>
            <div className="kirish-log">
              <h4>Kirish</h4>
            </div>
            <div className="frame-230">
              <div className="phone-login">
                <p className="phone-about">Telefon raqam</p>
                <input
                  className="section"
                  placeholder="+998 00 000 00 00"
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}
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
              <div className="all-login">
                <button onClick={handleLogin}>Kirish</button>
              </div>
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
  );
};

export default Login;
