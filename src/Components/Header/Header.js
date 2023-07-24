import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { filter } from "../../assets/Leftbar/Leftbardata.js";
import { addData } from "../../assets/Leftbar/Leftbardata.js";
import UseIterator from "../../CustomHooks/UseIterator";
import Listitems from "./Listitems";
import TableData from "../TableData/TableData";
import Settings from "../SettingsPage/Settings";

const Header = () => {
  const [dropdowndata, setDropdowndata] = useState(filter);
  const [addmore, setAddmore] = useState(false);
  const { handleDropdownChange, value, handleIndex, handleUpdate, handle }=UseIterator();

  useEffect(() => {
    handleIndex(value, dropdowndata, setDropdowndata);
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="Head">
        <div className="Head_title">
          <h3>Companies</h3>
        </div>
        <div className="Head_Filter">
          <div className="select">
            {dropdowndata?.map((el, index) => {
              if (el.status)
                return (
                  <div key={el.id} className="head_select">
                    <span className="count">{el.count}</span>
                    <select
                      onChange={(e) =>
                        handleUpdate(e, index, dropdowndata, setDropdowndata)
                      }
                    >
                      {el.option.map((el, index) => {
                        return <option value={el.name} key={index}>{el.name}</option>;
                      })}
                    </select>
                  </div>
                );
            })}
          </div>
          <div className="add_more">
            <span onClick={() => setAddmore((prev) => !prev)}>
              <span className="add">+</span> Add more
            </span>
            {addmore && (
              <select
                className="add_more_select"
                onChange={handleDropdownChange}
              >
                {addData?.map((el, index) => {
                  return <option value={el.index}>{el.name}</option>;
                })}
              </select>
            )}
          </div>
        </div>
      </div>
      <Listitems
        dropdowndata={dropdowndata}
        setDropdowndata={setDropdowndata}
      />
      <Settings />
      <TableData />
    </div>
  );
};

export default Header;
