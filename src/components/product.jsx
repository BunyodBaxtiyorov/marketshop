import Produc from "../security/produc";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Yangi state loading

  async function getData() {
    try {
      const response = await axios.get(
        "http://143.198.64.152:1777/api/product/v1?page=0&size=20&sortBy=id&sortDirection=DESC"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Ishlayotganini so'rangdan so'ng loadingni o'chirish
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("malumot", data?.content);
  const uploadedAt = 1695657506511;
  const date = new Date(uploadedAt);
  console.log(date);

  if (loading) {
    return <p className="load"></p>; // Agar ma'lumotlar yuklanmoqda bo'lsa, "Loading..." so'zini ko'rsat
  }

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
            // data={date}
          />
        ))}
      </div>
    </div>
  );
}
