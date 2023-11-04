import React, { useState } from "react";

//
//
//
const data = [
  {
    id: 1,
    name: "Telefonlar",
    submenu: [
      {
        id: 1,
        name: "kelin",
        submenu: [
          {
            id: 1,
            name: "barchasi",
          },
          {
            id: 2,
            name: "Kitoblarning Nomi",
          },
          {
            id: 3,
            name: "Wear",
          },
        ],
      },
      {
        id: 1,
        name: "Bolalar Adabiyot ",
        submenu: [
          {
            id: 1,
            name: "Barcha Maxsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Abitureyentlar Kitobi",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Men uchun",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulotlar",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kompyuterlar",
    submenu: [
      {
        id: 1,
        name: "kelin",
        submenu: [
          {
            id: 1,
            name: "barchasi",
          },
          {
            id: 2,
            name: "Kitoblarning Nomi",
          },
          {
            id: 3,
            name: "Wear",
          },
        ],
      },
      {
        id: 1,
        name: "Bolalar Adabiyot ",
        submenu: [
          {
            id: 1,
            name: "Barcha Maxsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Abitureyentlar Kitobi",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Men uchun",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulotlar",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Noutbuklar",
    submenu: [
      {
        id: 1,
        name: "kelin",
        submenu: [
          {
            id: 1,
            name: "barchasi",
          },
          {
            id: 2,
            name: "Kitoblarning Nomi",
          },
          {
            id: 3,
            name: "Wear",
          },
        ],
      },
      {
        id: 1,
        name: "Bolalar Adabiyot ",
        submenu: [
          {
            id: 1,
            name: "Barcha Maxsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Abitureyentlar Kitobi",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Men uchun",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulotlar",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Telefonlar",
    submenu: [
      {
        id: 1,
        name: "kelin",
        submenu: [
          {
            id: 1,
            name: "barchasi",
          },
          {
            id: 2,
            name: "Kitoblarning Nomi",
          },
          {
            id: 3,
            name: "Wear",
          },
        ],
      },
      {
        id: 1,
        name: "Bolalar Adabiyot ",
        submenu: [
          {
            id: 1,
            name: "Barcha Maxsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Abitureyentlar Kitobi",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Men uchun",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulotlar",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Telefonlar",
    submenu: [
      {
        id: 1,
        name: "kelin",
        submenu: [
          {
            id: 1,
            name: "barchasi",
          },
          {
            id: 2,
            name: "Kitoblarning Nomi",
          },
          {
            id: 3,
            name: "Wear",
          },
        ],
      },
      {
        id: 1,
        name: "Bolalar Adabiyot ",
        submenu: [
          {
            id: 1,
            name: "Barcha Maxsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Abitureyentlar Kitobi",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulot",
          },
        ],
      },
      {
        id: 1,
        name: "Men uchun",
        submenu: [
          {
            id: 1,
            name: "Barcha Mahsulotlar",
          },
        ],
      },
    ],
  },
];
export function Index() {
  return (
    <>
      {" "}
      <div className="container-menu">
        <div className="row">
          <div className="left col-3">
            <ul style={{ flexDirection: "column" }}>
              {data.map((item) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justfiyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <li
                        onMouseOver={() => setId(item.id)}
                        className={`${id == item.id && "hover-category"}`}
                      >
                        {item.icon}/{item.name}
                      </li>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="right col-9">
            <Row style={{ paddingLeft: "10px", paddingBottom: "70px" }}>
              {data[id - 1].submenu?.map((item) => {
                return (
                  <Col lg={3} md={3}>
                    <div className="right-menu-item">
                      <h5
                        className="right-menu-hover-text"
                        style={{ cursor: "pointer", fontSize: "18px" }}
                      >
                        {item?.name}
                      </h5>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {item?.submenu?.map((item) => (
                          <li
                            className="right-menu-hover-text"
                            style={{
                              cursor: "pointer",
                              marginTop: "10px",
                              color: "gray",
                              fontWeight: "400",
                            }}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
function Menu() {
  const [id, setId] = useState(1);
  console.log("id for caregory", id);
  return (
    <>
      <div className="container-menu">
        <div className="row">
          <div className="left col-3">
            <ul style={{ flexDirection: "column" }}>
              {data.map((item) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justfiyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <li
                        onMouseOver={() => setId(item.id)}
                        className={`${id == item.id && "hover-category"}`}
                      >
                        {item.icon}
                        {item.name}
                      </li>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="right col-9">
            <Row style={{ paddingLeft: "10px", paddingBottom: "70px" }}>
              {data[id - 1].submenu?.map((item) => {
                return (
                  <Col lg={3} md={3}>
                    <div className="right-menu-item">
                      <h5
                        className="right-menu-hover-text"
                        style={{ cursor: "pointer", fontSize: "18px" }}
                      >
                        {item?.name}
                      </h5>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {item?.submenu?.map((item) => (
                          <li
                            className="right-menu-hover-text"
                            style={{
                              cursor: "pointer",
                              marginTop: "10px",
                              color: "gray",
                              fontWeight: "400",
                            }}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  // const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="header-navbar">
      <ul>
        <li
          onClick={openToggle}
          style={{ display: "flex", alignItems: "center" }}
        >
          {open ? (
            <h1
              size={23}
              style={{
                marginRight: "10px",
                color: "#008dff",
                cursor: "pointer",
              }}
            >
              s
            </h1>
          ) : (
            <h1
              className="hamburger-menu"
              size={23}
              style={{
                marginRight: "10px",
                color: "#008dff",
                cursor: "pointer",
              }}
            >
              Su
            </h1>
          )}
          {/* <Link to="/">{t("navbar.nav1")}</Link> */}
        </li>
        <li>{/* <Link to="/news">{t("navbar.nav2")}</Link> */}</li>
        <li>{/* <Link to="/newProduct">{t("navbar.nav3")}</Link> */}</li>
        <li>{/* <Link to="/Discounts">{t("navbar.nav4")}</Link> */}</li>
        <li>{/* <Link to="/books">{t("navbar.nav5")}</Link> */}</li>
        <li>{/* <Link to="/telephones">{t("navbar.nav6")}</Link> */}</li>
        <li>{/* <Link to="/tv">{t("navbar.nav7")}</Link> */}</li>
        <li>{/* <Link to="/sports">{t("navbar.nav8")}</Link> */}</li>
      </ul>
      {open ? <Menu /> : ""}
    </div>
  );
}
