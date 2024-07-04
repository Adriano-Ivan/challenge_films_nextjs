import { createSlice } from "@reduxjs/toolkit";
import { FilmsState, HttpRequestStatus } from "@infrastructure/types";
import {
  defineSelectedFilm,
  listFilmsAsync,
  updateLocalFilmRating,
} from "./reducers";
import {
  createFilmRatingRegister,
  getFilmRatingRegister,
} from "@services/localStorage/ratingStorage";

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
        state.listStatus = HttpRequestStatus.succeeded;
        state.entities = action.payload.data.map((film) => {
          const localRating = getFilmRatingRegister(film.imdbID);
          return { ...film, localRating: localRating ? localRating : 1 };
        });
      })
      .addCase(listFilmsAsync.rejected, (state) => {
        state.listStatus = HttpRequestStatus.failed;
      })
      .addCase(defineSelectedFilm, (state, action) => {
        state.selectedFilm = action.payload.film;
      })
      .addCase(updateLocalFilmRating, (state, action) => {
        const { imdbId, localRating } = action.payload;

        const createdLocalRating = createFilmRatingRegister(
          imdbId,
          localRating
        );

        if (createdLocalRating !== null) {
          const { imdbId, rating } = createdLocalRating;
          state.entities = state.entities.map((film) => {
            if (film.imdbID === imdbId) {
              film.localRating = rating;
            }
            return { ...film };
          });
        }
      });
    // builder.addCase(defineFilmsList, (state, action) => {
    //   state.films = [...action.payload.listFilms];
    //   state.filteredFilms = [...action.payload.listFilms];
    // });
  },
});

export default filmsSlice.reducer;
