// import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icon from "../img/category.png";
import React, { useState, useTransition } from "react";
import "./css/main.css";
import st from "../img/st.png";
import ar from "../img/ar.png";
import sp from "../img/sp.png";
import ct from "../img/ct.png";
import bk from "../img/bk.png";
import hs from "../img/hs.png";
import tl from "../img/tl.png";
import wd from "../img/wd.png";
import hb from "../img/hb.png";
import fu from "../img/fu.png";
import di from "../img/di.png";
import cn from "../img/cn.png";
import axe from "../img/axe.png";
import mn from "../img/mn.png";
import { useTranslation } from "react-i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1158,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={handleOpen} className="btn-modal">
        <img src={icon} alt="Button Icon" /> <p>{t("description.vse")}</p>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="modal-menu" sx={style}>
            <div className="md-menu">
              <div className="md_menu">
                <div className="menu-list">
                  <img src={st} alt="" />
                  <p>Bolalar Dunyosi</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>
              <div className="md_menu">
                <div className="menu-list">
                  <img src={sp} alt="" />
                  <p>Transport</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>
              <div className="md_menu">
                <div className="menu-list">
                  <img src={ct} alt="" />
                  <p>Hayvonlar</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={bk} alt="" />
                  <p>Kitob</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={hs} alt="" />
                  <p>Uy va Bog'</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={tl} alt="" />
                  <p>Elektr Jixozlar</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={wd} alt="" />
                  <p>Kiyim kechak</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={hb} alt="" />
                  <p>Xobbi uchun</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={fu} alt="" />
                  <p>Mebel</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={di} alt="" />
                  <p>Idish Tovoq</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={cn} alt="" />
                  <p>Qurilish mollari</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={axe} alt="" />
                  <p>Qurol Aslaxa (instrument)</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>{" "}
              <div className="md_menu">
                <div className="menu-list">
                  <img src={mn} alt="" />
                  <p>Boshqalar</p>
                  <span>
                    <img src={ar} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="md-menu-1">
              <div className="sub-menu">
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar Kiyimi</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar mebeli</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Maktab o’quvchilari uchun mahsulotlar</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar oyoq kiyimlari</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>O’yinchoqlar</p>
                </div>
              </div>
              <div className="line"></div>
              {/* Menu------- */}
              <div className="sub-menu">
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Boshqa bolalar mahsulotlari</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar kolyaskalari</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar transporti</p>
                </div>
                <div className="sub-text">
                  <img src={ar} alt="" />
                  <p>Bolalar avtoo’rindiqlari</p>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
