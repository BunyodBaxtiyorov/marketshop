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
import { useTranslation } from "react-i18next";
import Footer from "./footer";

function Main() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const [blog, setBlog] = useState([]);
  const { t } = useTranslation();

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

  async function getBlog() {
    try {
      const response = await axios.get(
        "http://143.198.64.152:1777/api/category/v1"
      );
      setBlog(response.data.objectKoinot);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    }
  }

  async function fetchDistricts(regionName) {
    try {
      const response = await axios.get(
        `http://143.198.64.152:1777/api/district/v1/all?regionName=${regionName}`
      );
      setDistricts(response.data?.objectKoinot?.content || []);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  }

  useEffect(() => {
    fetchRegions();
    getBlog();
  }, []);

  const handleRegionChange = async (e) => {
    const selectedRegionValue = e.target.value;
    setSelectedRegion(selectedRegionValue);
    await fetchDistricts(selectedRegionValue);
  };

  return (
    <div className="Main">
      <div className="container">
        <main>
          <div className="banner container">
            <div className="bn-hd">
              <div className="main-header">
                <div className="main-text">
                  <h1>{t("description.ehson")}</h1>
                </div>
                <div className="main-h-input">
                  <select
                    className="h-inp"
                    name="region"
                    id="region"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                  >
                    <option value="region">Viloyat</option>
                    {regions.map((region) => (
                      <option key={region.id} value={region.name}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                  <select className="h-inp" name="district" id="district">
                    <option value="">Tuman</option>
                    {districts.map((data) => (
                      <option key={data.id} value={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                  <img src={icon0} alt="" />
                  <input
                    className="web-inp"
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
            </div>
          </div>
        </main>
        <div className="main-text-1">
          <h1>Yangilari </h1>
          <h2>Ommabop</h2>
        </div>
        <hr />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
