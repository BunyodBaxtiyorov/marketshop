import React from "react";
import "./css/main.css";
import logo from "../img/Logo.png";
import icon1 from "../img/document.png";
import icon2 from "../img/heart.png";
import icon3 from "../img/global.png";
import icon4 from "../img/user.png";
// import icon5 from "../img/Ell.png";
// import icon6 from "../img/rec.png";
// import icon7 from "../img/1c.png";
// import icon8 from "../img/c1.png";
// import icon9 from "../img/Elli.png";

import Modal from "./modal.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="Header">
      <div className="container">
        <div className="menu">
          <div className="all">
            <div className="img">
              <a href="/">
                {" "}
                <img src={logo} className="h-img" alt="Tekin Market logo" />
              </a>
            </div>
            <div className="btn" href="/">
              <Modal />
            </div>
            <nav className="menu-2">
              <ul>
                <li>
                  <img src={icon1} alt="" />
                  <a href="">{t("description.part3")}</a>
                </li>
                <li>
                  <img src={icon2} alt="" />
                  <a href="">{t("description.like")}</a>
                </li>
                <li>
                  <div className="Language">
                    <img src={icon3} alt="" />
                    <select name="" id="bb" onChange={handleLanguageChange}>
                      <option value="en">O'zbek</option>
                      <option value="ru">Ruscha</option>
                    </select>

                    {/* <a href="">O'zbekcha</a> */}
                  </div>
                </li>
                <li>
                  <img src={icon4} alt="" />
                  <Link className="ul-1" to={"/login"}>
                    {t("description.Kirish")}
                  </Link>
                </li>
                <li className="h-a">
                  <a href="">
                    {" "}
                    <span>+</span> {t("description.elon")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="h-a-1 btn-22">
            <a href="/">{t("description.qol")}</a>
          </button>

          {/* <main class="main">
            <button class="btney">offet hover</button>
          </main> */}
        </div>
      </div>
    </div>
  );
}
