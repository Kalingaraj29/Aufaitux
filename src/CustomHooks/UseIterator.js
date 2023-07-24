import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ClearData,
  SearchData,
  SearchDatas,
  Settingpage,
  addData,
} from "../features/counter/counterSlice";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";

const UseIterator = () => {
  const dispatcher = useDispatch();
  const [value, setValue] = useState(0);
  const [selectData, setSelectdata] = useState([]);
  const [tableData, setTabledata] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [searchtext, setSearchtext] = useState("");
  const [table, setTable] = useState([
    { id: 1, status: true },
    { id: 2, status: false },
    { id: 3, status: false },
    { id: 4, status: false },
    { id: 5, status: false },
  ]);

  const handleDropdownChange = (e) => {
    setValue((prev) => e.target.value);
  };

  const handleIndex = (index, dropdowndata, setDropdowndata) => {
    dropdowndata[index].status = true;
    setDropdowndata([...dropdowndata]);
  };

  const handleUpdate = (e, index, dropdowndata, setDropdowndata) => {
    dispatcher(addData(e.target.value));
    dropdowndata[index].count = dropdowndata[index].count + 1;
    setDropdowndata([...dropdowndata]);
  };

  async function apiCall(pagenum) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09b49e5f182ddd8c50fc7e74eec2ee43&page=${pagenum}`
      );
      setTabledata(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePage = (e) => {
    setPagenum((prev) => e.target.value);
  };

  const handleForm = (e) => {
    setSearchtext(e.target.value);
    dispatcher(SearchDatas(e.target.value));
  };

  const handleactive = (index) => {
    Object.keys(table).map((el, index) => (table[index].status = false));
    setTable([...table]);
    table[index].status = true;
    setTable([...table]);
  };

  const handleCount = (dropdowndata, setDropdowndata) => {
    Object.keys(dropdowndata).map(
      (el, index) => (dropdowndata[index].count = 0)
    );
    setDropdowndata([...dropdowndata]);
    dispatcher(ClearData());
  };

  const handlesettingspage = () => {
    dispatcher(Settingpage());
  };

  return {
    handleDropdownChange,
    handleactive,
    value,
    handleIndex,
    table,
    setTable,
    handleUpdate,
    selectData,
    tableData,
    apiCall,
    handlePage,
    pagenum,
    handleForm,
    searchtext,
    handleCount,
    handlesettingspage,
  };
};

export default UseIterator;
