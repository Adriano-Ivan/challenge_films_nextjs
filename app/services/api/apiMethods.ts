import { FilmEntity, ListResponse } from "@infrastructure/types";
import axiosFilmsInstance from "./axiosFilmsInstance.api";

export const getFilms = async () => {
  try {
    const films = await axiosFilmsInstance.get<ListResponse<FilmEntity>>("");
    // console.log("teste", films.data[0]);
    return films.data as unknown as FilmEntity[];
  } catch {
    return [];
  }
};
