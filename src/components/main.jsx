import React from "react";
import Product from "./product";
import gr from "../img/gr1.png";
import gr7 from "../img/gr7.png";
import gr2 from "../img/gr2.png";
import gr3 from "../img/gr3.png";
import gr4 from "../img/gr4.png";
import gr5 from "../img/gr5.png";
import gr6 from "../img/gr6.png";
import logo1 from "../img/gr.png";
import icon0 from "../img/search-normal.png";
function Main() {
  return (
    <div className="Main">
      <div className="container">
        <main>
          <div className="banner container">
            {/* <div className="d-fl">
<div className="ell">
 <img src={icon5} alt="" />
              </div>
              <div className="rec">
                <img src={icon6} width={"230px"} alt="" />
              </div>
              <div className="c1">
                <img src={icon7} alt="" />
              </div>
            </div>
            <div className="d-fl-1">
              <div className="c1-h">
                <img src={icon8} alt="" />
              </div>
              <div className="c1-3">
                <img height={"220px"} src={icon9} alt="" />
              </div>
            </div> */}
            <div className="bn-hd">
              <div className="main-header">
                <div className="main-text">
                  <h1>Ehsonning Mukofati Ehson</h1>
                </div>
                <div className="main-h-input">
                  <select className="h-inp" name="" id="">
                    <option value="option1">Barchasi</option>
                    <option value="option1">Barchasi</option>
                    <option value="option1">Barchasi</option>
                  </select>
                  <select className="h-inp" name="" id="">
                    <option value="option1">Shaxar</option>
                    <option value="option1">Shaxar</option>
                    <option value="option1">Shaxar</option>
                  </select>
                  <img src={icon0} alt="" />{" "}
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Nimadir qidiramizmi?"
                  />
                </div>
                <div className="main-about"></div>
              </div>
              <img className="w-2" src={logo1} alt="" />
            </div>
            <div className="T-h container">
              <a href="/" className="gr-t">
                <img src={gr} alt="" width={"126px"} height={"104px"} />
              </a>
              <a href="/" className="gr-t">
                <img src={gr2} alt="" />
              </a>
              <a href="/" className="gr-t">
                <img src={gr3} alt="" />
              </a>
              <a href="/" className="gr-t">
                <img src={gr4} alt="" />
              </a>
              <a href="/" className="gr-t">
                <img src={gr5} alt="" />
              </a>
              <a href="/" className="gr-t">
                <img src={gr6} alt="" />
              </a>
              <a href="/" className="gr-t">
                <img src={gr7} alt="" />
              </a>
            </div>
          </div>
        </main>
        <div className="main-text-1">
          <h1>Yangilari </h1>
          <h2>Ommabop</h2>
        </div>
        <hr />
        <Product />
      </div>
    </div>
  );
}

export default Main;
