import React, { useState } from "react";
import UseIterator from "../../CustomHooks/UseIterator";
import "../../Components/SettingsPage/Settings.css";
import { useSelector } from "react-redux";
import image from "../../assets/Leftbar/pexels-stefan-stefancik-91227.jpg";
import { FaCaretDown, FaWindowClose } from "react-icons/fa";
import { settingsData } from "../../assets/Leftbar/Leftbardata";

function Settings() {
  const { handlesettingspage } = UseIterator();
  const { settingpage } = useSelector((state) => state.counter);
  const [data, setData] = useState(settingsData);

  function handleClick(index) {
    data[index].childflag = !data[index].childflag;
    setData([...data]);
  }

  function handleClick1(indexes) {
    data[0].childarray[indexes].childflag =
      !data[0].childarray[indexes].childflag;
    setData([...data]);
  }

  function handleClick2(index) {
    data[index].children = !data[index].children;
    setData([...data]);
  }
  return (
    <>
      {settingpage && (
        <div className="settings_container">
          <div className="box">
            <div className="close">
              <span className="close" onClick={handlesettingspage}>
                <FaWindowClose />
              </span>
            </div>
            <div className="bottom">
              <div className="header_bottom_img">
                <img src={image} alt="" />
              </div>
              <div className="header_bottom_title">
                <h6>Jacobe james</h6>
              </div>
            </div>
            <div className="content">
              <p>
                Manage all user settings here.Changes made here will reflect in
                the user settings and what they access
              </p>
            </div>
            <div className="group_button">
              <ul>
                <li>General settings</li>
                <li className="active">Roles and permission</li>
                <li>Assigned Companies</li>
              </ul>
            </div>
            <div className="managepermisson">
              <h6>Manage Permission</h6>
              <div className="collapsed">
                <ul>
                  {data &&
                    data.map((ele, index) => {
                      return (
                        <div key={ele.id} className="extension">
                          <li>
                            <p className="title">
                              {ele.icon ? (
                                <FaCaretDown
                                  className="icons"
                                  onClick={() => handleClick(index)}
                                />
                              ) : (
                                ""
                              )}{" "}
                              {ele.name}
                            </p>
                          </li>
                          {ele.childflag && ele.child && (
                            <p className="extension3">
                              {ele.icon ? (
                                <FaCaretDown
                                  onClick={() => handleClick2(index)}
                                />
                              ) : (
                                " "
                              )}{" "}
                              {ele.child}
                            </p>
                          )}
                          {ele.childflag && ele.children && ele.child && (
                            <div className="extension1">
                              {ele.childarray.map((el, indexes) => {
                                return (
                                  <div key={el.id}>
                                    <p>
                                      {!el.flag ? "-" : ""}
                                      {el.flag ? (
                                        <FaCaretDown
                                          onClick={() => handleClick1(indexes)}
                                        />
                                      ) : (
                                        ""
                                      )}{" "}
                                      {el.name}
                                    </p>
                                    {el.childflag &&
                                      el.childarray1 &&
                                      el.childarray1.map((ele, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className="extension2"
                                          >
                                            <p>-{ele.name}</p>
                                          </div>
                                        );
                                      })}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {ele.childflag && ele.task && (
                            <p className="extension3">{ele.task}</p>
                          )}
                          {ele.childflag && ele.transaction && (
                            <p className="extension3">{ele.transaction}</p>
                          )}
                        </div>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Settings;
