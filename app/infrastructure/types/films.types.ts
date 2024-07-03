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
  imdbID: string;
};

export interface FilmsState extends ListEntityState<FilmEntity> {
  selectedFilm: FilmEntity | null;
}
