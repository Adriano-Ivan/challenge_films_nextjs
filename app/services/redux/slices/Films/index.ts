import { createSlice } from "@reduxjs/toolkit";
import { FilmsState, HttpRequestStatus } from "@infrastructure/types";
import { defineFilmsList } from "./reducers";

const initialState: FilmsState = {
  films: [],
  filteredFilms: [],
  currentSelectedFilm: null,
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(defineFilmsList, (state, action) => {
      state.films = [...action.payload.listFilms];
      state.filteredFilms = [...action.payload.listFilms];
    });
  },
});

export default filmsSlice.reducer;
