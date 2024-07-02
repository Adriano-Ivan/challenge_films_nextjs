import { FilmEntity } from "./films.types";

export interface ListResponse<T> {
  data: T[];
}

export interface ValuesResponse<T> {
  value: T;
}

interface ValueListResponse<T> extends ValuesResponse<ListResponse<T>> {}

export interface ListFilmsResponse extends ValueListResponse<FilmEntity> {}
