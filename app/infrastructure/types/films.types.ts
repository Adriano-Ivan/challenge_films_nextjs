import { ListEntityState } from "./base.types";

export type FilmEntity = {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Country: string;
  Awards: string;
  Language: string;
};

export interface FilmsState {
  films: FilmEntity[];
  filteredFilms: FilmEntity[];
  currentSelectedFilm: FilmEntity | null;
}
