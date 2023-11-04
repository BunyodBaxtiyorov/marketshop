import Produc from "../security/produc";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Product() {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get(
        "http://143.198.64.152:1777/api/product/v1?page=0&size=20&sortBy=id&sortDirection=DESC"
      )
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log("malumot", data?.content);

  return (
    <div className="Produc">
      <div className="container">
        {data?.content?.map((item) => (
          <Produc
            key={item.id}
            photo={item.photos[0].filePath}
            title={item.name}
            dec={item.photos[0].name}
            region={item.region.name}
            region1={item.district.name}
          />
        ))}
      </div>
    </div>
  );
}
