import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Produc({ title, region, photo, dec, region1, datas }) {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get(
        "http://143.198.64.152:1777/api/product/v1?page=0&size=20&sortBy=id&sortDirection=DESC/"
      )
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log("malumot", data?.content);

  return (
    <div className="Produc">
      <div className="containerh">
        <div className="Produc-card">
          <div className="card">
            <div className="card-frame">
              <Link to={`/product/${[0].id}`}>
                <div className="dev">
                  <img src={photo} alt={dec} />
                </div>
              </Link>
              <div className="card-title">
                <h3>{title}</h3>
                <div className="list-flex">
                  <p>
                    {region}
                    <span className="span-list">{region1}</span>
                  </p>
                  <p>{datas}</p>
                </div>
                <div className="btn-about">
                  <a href="/">eski</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
