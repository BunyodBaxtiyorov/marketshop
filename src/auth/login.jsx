import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import object from "../img/OBJECTS.png";
export default function Login() {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get("http://143.198.64.152:1777/api/auth/v1/login/")
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log("malumot", data?.content);
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="sign">
            <div className="frame-sign">
              <div className="btn-sign">
                <button className="btn-sign-1">
                  <a href="/login">Kirish</a>
                </button>
                <button className="btn-sign-2">
                  <Link to={"/register"}>Ro'yxatdan o'tish</Link>
                </button>
              </div>
              <div className="kirish-log">
                {" "}
                <h4>Kirish</h4>
              </div>
              <div className="frame-230">
                <div className="phone-login">
                  <p className="phone-about">Telefon raqam</p>
                  <input type="text" className="section" />
                  <p className="erron-login">error</p>
                </div>
                <div className="frame-234">
                  <div className="phone-login">
                    <p className="phone-about">Telefon raqam</p>
                    <input type="text" className="section" />
                    <p className="erron-login">error</p>
                  </div>
                </div>
                <div className="password">
                  <a href="/">parollni unutdingizmi</a>
                </div>
                <button className="all-login">
                  <button href="/kirish" onClick={data.objectKoinot}>
                    Kirish
                  </button>
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
