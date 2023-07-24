import React, { useState } from "react";
import "../Leftbar/Leftbar.css";
import {FaAccusoft,FaBuffer,FaCentos,FaBars,FaSignOutAlt,} from "react-icons/fa";
import { data } from "../../assets/Leftbar/Leftbardata.js";
import { bottom } from "../../assets/Leftbar/Leftbardata.js";
import image from "../../assets/Leftbar/pexels-stefan-stefancik-91227.jpg";
import UseIterator from "../../CustomHooks/UseIterator";

const Leftbar = () => {
  const [icon, setIcon] = useState(false);
  const { settingpage, setsettingpage, handlesettingspage } = UseIterator();
  return (
    <div className="Header" style={{ color: "white" }}>
      <div className="Header_top">
        <div className="Header_top_image">
          <FaAccusoft />
        </div>
        <div className="header_top_title">Ynex</div>
        <div className="header_top_side">
          <FaBuffer />
        </div>
      </div>
      <div className="Header_middle">
        <div className="header_middle_ul">
          <ul>
            {data &&
              data.map((el, index) => {
                return (
                  <div
                    key={el.id}
                    className={el.status ? "listitmes active" : "listitmes"}
                  >
                    <li>
                      <span>{el.name}</span>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_div">
          <ul>
            {bottom &&
              bottom.map((el, index) => {
                return (
                  <div className="header_bottom_data" key={el.id}>
                    <li>{el.name}</li>
                  </div>
                );
              })}
          </ul>
        </div>
        <div className="bottom">
          <div className="header_bottom_div_bottom_img">
            <img src={image} alt="" />
          </div>
          <div className="header_bottom_div_bottom_title">
            <p>Jacobe james</p>
            <p className="header_bottom_div_bottom_title_name">
              Jacobejames@gmail.com
            </p>
          </div>
          <div className="header_bottom_div_bottom_icons">
            <FaBars
              onClick={() => {
                setIcon((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
      {icon && (
        <div className="bottom_div">
          <ul>
            <li onClick={handlesettingspage}>
              <FaCentos /> Settings
            </li>
            <li>
              <FaSignOutAlt /> Sign out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Leftbar;
