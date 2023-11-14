import React, { useEffect, useState } from "react";
import axios from "axios";
import location from "../img/location.png";
import clock from "../img/clock.png";
import eye from "../img/eye.png";
import "./style.css";
export default function Productlist() {
  const [data, setData] = useState([]);
  async function getData() {
    await axios
      .get(
        `http://143.198.64.152:1777/api/product/v1?page=0&size=20&sortBy=id&sortDirection=DESC`
      )
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log("malumot", data?.content);
  return (
    <div className="Productlist">
      <div className="container">
        {data?.content?.map((item) => (
          <div className="dataswip">
            <swiper-container
              //   style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
              class="mySwiper"
              thumbs-swiper=".mySwiper2"
              loop="true"
              space-between="10"
              navigation="true"
            >
              <swiper-slide>
                <img src={item.photos[0].filePath} />
              </swiper-slide>
              <swiper-slide>
                <img src={item.photos[0].filePath} />
              </swiper-slide>
              <swiper-slide>
                <img src={item.photos[0].filePath} />
              </swiper-slide>
              {/* <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </swiper-slide> */}
            </swiper-container>
            <div className="Product-txt">
              <div className="produc-text">
                <h1>{item.name}</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="product-list">
                  <button>
                    <a href="/"> O’rtacha</a>
                  </button>
                  <div className="product-main">
                    <img src={location} alt="" />
                    <p className="produc-p">{item.district.name}</p>
                  </div>
                  <div className="produc-data">
                    <img src={clock} alt="" />
                    <p>21:30 | 17.05.2023</p>
                  </div>
                  <div className="produc-view">
                    <img src={eye} alt="" />
                    <p>186 +</p>
                  </div>
                </div>
              </div>
              <div className="produc-btn">
                <button>
                  <a href="/">Qo’ng’iroq qilish</a>
                </button>
                <div className="produc-elon">
                  <img
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww"
                    alt=""
                    width={"60px"}
                    height={"55px"}
                  />
                  <div className="produc-photo-text">
                    <h4>Elon bo'yicha</h4>
                    <p>So’ngi faolligi 12.06.2023</p>
                  </div>
                </div>
              </div>
              <div className="warning-produc">
                <p>
                  <span>Muhim eslatma:</span> Qo’ngiroq qilish uchun 1 oyga 10
                  ta limit beriladi va kunlik limit 3 ta. Undan tashqari
                  qo’ng’rioq qilishingiz uchun siz saytdan ro’yhatdan o’tgan
                  bo’lishingiz kerak bo’ladi.{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
        {data?.content?.map((item) => (
          <swiper-container
            class="mySwiper2"
            loop="true"
            space-between="10"
            slides-per-view="4"
            free-mode="true"
            watch-slides-progress="true"
          >
            <swiper-slide>
              <img src={item.photos[0].filePath} />
            </swiper-slide>
            <swiper-slide>
              <img src={item.photos[0].filePath} />
            </swiper-slide>
            <swiper-slide>
              <img src={item.photos[0].filePath} />
            </swiper-slide>
            {/* <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </swiper-slide> */}
          </swiper-container>
        ))}
      </div>
    </div>
  );
}
