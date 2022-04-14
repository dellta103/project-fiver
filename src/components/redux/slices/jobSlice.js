import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  searchValue: "",
  filteredJobs: null,
  comment: "",
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    filterJobs: (state, action) => {
      state.filteredJobs = action.payload;
    },
    addComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

const { actions, reducer } = jobSlice;

export const { setSearch, filterJobs, addComment } = actions;

export default reducer;
