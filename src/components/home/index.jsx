import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Main from "../main";
export default function () {
  return (
    <>
      <div className="Home">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}
