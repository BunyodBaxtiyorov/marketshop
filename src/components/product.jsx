import Produc from "../security/produc";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await axios.get(
        "http://143.198.64.152:1777/api/product/v1?page=0&size=20&sortBy=id&sortDirection=DESC"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("malumot", data?.content);
  const uploadedAt = 1695657506511;
  const date = new Date(uploadedAt);
  console.log(date);

  // if (loading) {
  //   return <p className="load">Loading...</p>;
  // }
  if (data && data.content && data.content.length > 0) {
    return (
      <div className="Produc">
        <div className="container">
          <div className="soft">
            {data?.content?.map((item) => (
              <Produc
                key={item.id}
                photo={item.photos[0].filePath}
                title={item.name}
                dec={item.photos[0].name}
                region={item.region.name}
                region1={item.district.name}
                // data={date}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="not-api">
        <div className="api-txt">
          <img
            src="https://tekinmarket.uz/static/media/notFindIcon.dd6d178268a42ea28541067e23232178.svg"
            alt="Api-no"
          />
          <h2>Filter bo'yicha hech qanday ma'lumot topilmadi!</h2>
        </div>
      </div>
    );
  }
}
