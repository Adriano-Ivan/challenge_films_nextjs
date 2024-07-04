import { ListEntityState } from "./base.types";

export type FilmEntity = {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Writer: string;
  imdbRating: string;
  Plot: string;
  Poster: string;
  Country: string;
  Awards: string;
  Language: string;
  localRating: number;
};

export interface FilmsState extends ListEntityState<FilmEntity> {
  selectedFilm: FilmEntity | null;
}
