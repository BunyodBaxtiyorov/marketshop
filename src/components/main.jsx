import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [regions, setRegions] = useState([]);

  async function fetchRegions() {
    try {
      const response = await axios.get(
        "http://143.198.64.152:1777/api/region/v1/all?page=0&size=20"
      );
      setRegions(response.data?.objectKoinot?.content || []);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  }

  useEffect(() => {
    fetchRegions();
  }, []);

  console.log("Viloyat", regions);
  // fffffff
  const [blog, setBlog] = useState([]);

  async function getBlog() {
    try {
      const response = await axios.get(
        "http://143.198.64.152:1777/api/category/v1"
      );
      console.log("Response:", response); // Log the entire response for debugging
      setBlog(response.data.objectKoinot);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  }

  useEffect(() => {
    getBlog();
  }, []);

  console.log("malumotey", blog);
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
                    <option value="region">Viloyat</option>
                    {regions.map((region) => (
                      <option key={region.id} value={region.name}>
                        {region.name}
                      </option>
                    ))}
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
              {blog.map((objectKoinot) => (
                <Link
                  key={objectKoinot.id}
                  to={`/${objectKoinot.id}`}
                  className="gr-t"
                >
                  <div className="div-blog">
                    <img
                      src={`data:image/svg+xml;utf8,${encodeURIComponent(
                        objectKoinot.icon
                      )}`}
                      alt=""
                      width={"39px"}
                      height={"39px"}
                    />
                  </div>
                  <p className="bedroom">{objectKoinot.nameUz}</p>
                </Link>
              ))}
              {/* <Link to={"/"} className="gr-t">
                <img src={gr2} alt="" />
              </Link>
              <Link to={"/"} className="gr-t">
                <img src={gr3} alt="" />
              </Link>
              <Link to={"/"} className="gr-t">
                <img src={gr4} alt="" />
              </Link>
              <Link to={"/"} className="gr-t">
                <img src={gr5} alt="" />
              </Link>
              <Link to={"/"} className="gr-t">
                <img src={gr6} alt="" />
              </Link>
              <Link to={"/"} className="gr-t">
                <img src={gr7} alt="" />
              </Link> */}
            </div>
          </div>
        </main>
        <div className="main-text-1">
          <h1>Yangilari </h1>
          <h2>Ommabop</h2>
        </div>
        <hr />
        <Product />
        <hr />
        <h1 style={{ textAlign: "center" }}>Tekin Market Blog</h1>
      </div>
    </div>
  );
}

export default Main;
