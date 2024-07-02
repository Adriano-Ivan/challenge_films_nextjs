import { createSlice } from "@reduxjs/toolkit";
import { FilmsState, HttpRequestStatus } from "@infrastructure/types";
import { defineSelectedFilm, listFilmsAsync } from "./reducers";

const initialState: FilmsState = {
  entities: [],
  selectedFilm: null,
  listStatus: HttpRequestStatus.idle,
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listFilmsAsync.pending, (state) => {
        state.listStatus = HttpRequestStatus.loading;
      })
      .addCase(listFilmsAsync.fulfilled, (state, action) => {
        console.log("actoin", action);
        state.listStatus = HttpRequestStatus.succeeded;
        state.entities = action.payload.data;
      })
      .addCase(listFilmsAsync.rejected, (state) => {
        state.listStatus = HttpRequestStatus.failed;
      })
      .addCase(defineSelectedFilm, (state, action) => {
        state.selectedFilm = action.payload.film;
      });
    // builder.addCase(defineFilmsList, (state, action) => {
    //   state.films = [...action.payload.listFilms];
    //   state.filteredFilms = [...action.payload.listFilms];
    // });
  },
});

export default filmsSlice.reducer;
