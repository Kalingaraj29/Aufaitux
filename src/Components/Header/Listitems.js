import React, { useState } from "react";
import UseIterator from "../../CustomHooks/UseIterator";
import { useDispatch, useSelector } from "react-redux";
import "../Header/Header.css";
import { FaRegTimesCircle } from "react-icons/fa";
import { removeData } from "../../features/counter/counterSlice";
const Listitems = ({ dropdowndata, setDropdowndata }) => {
  const { value } = useSelector((state) => state.counter);
  const { handleCount } = UseIterator();
  const dispatch = useDispatch();
  return (
    <div className="Listitems">
      <div className="lisitems_data">
        <ul className="lisitems_data_ul">
          {value &&
            value.map((el, index) => {
              return (
                <div key={index} className="lisitems_data_li">
                  <li>
                    {el}{" "}
                    <span
                      className="cancel"
                      onClick={() => {
                        dispatch(removeData(index));
                      }}
                    >
                      <FaRegTimesCircle />
                    </span>
                  </li>
                </div>
              );
            })}
        </ul>
        <div className="listitems_clear">
          <button onClick={() => handleCount(dropdowndata, setDropdowndata)}>
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listitems;
