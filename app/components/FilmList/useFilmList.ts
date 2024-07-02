import { listFilmsAsync } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { useEffect } from "react";

export const useFilmList = () => {
  const dispatch = useAppDispatch();
  const filmsDataRedux = useAppSelector((e) => e.films);

  // useEffect(() => {
  // useDispatch(defineFilmsList(filmsData));
  // }, [filmsData]);

  useEffect(() => {
    console.log("redux data", filmsDataRedux);
  }, [filmsDataRedux]);

  useEffect(() => {
    dispatch(listFilmsAsync());
  }, []);

  return {
    dataFilms: filmsDataRedux.entities,
    selectedFilm: filmsDataRedux.selectedFilm,
  };
};
