import { FilmEntity } from "@infrastructure/types";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFilmsInstance from "@services/api/axiosFilmsInstance.api";

export const defineSelectedFilm = createAction(
  "filmEntity/defineSelectedFilm",
  function prepare(film: FilmEntity | null) {
    return {
      payload: {
        film,
      },
    };
  }
);

export const updateLocalFilmRating = createAction(
  "filmEntity/updateLocalFilmRating",
  function prepare(imdbId: string, localRating: number) {
    return {
      payload: {
        imdbId,
        localRating,
      },
    };
  }
);

export const listFilmsAsync = createAsyncThunk(
  "filmEntity/listFilmsAsync",
  async () => {
    const response = await axiosFilmsInstance.get<FilmEntity[]>("/movies");

    return response;
  }
);
