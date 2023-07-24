import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  value: [],
  searchData: "",
  settingpage: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addData: (state, actions) => {
      state.value = [...state.value, actions.payload];
    },
    removeData: (state, actions) => {
      let filteredData = state.value.filter(
        (el, index) => index !== actions.payload
      );
      state.value = [...filteredData];
    },
    ClearData: (state, actions) => {
      state.value = [];
    },
    SearchDatas: (state, actions) => {
      state.searchData = actions.payload;
    },
    Settingpage: (state, actions) => {
      state.settingpage = !state.settingpage;
    },
  },
});

export const { addData, removeData, ClearData, SearchDatas, Settingpage } =
  counterSlice.actions;

export default counterSlice.reducer;
