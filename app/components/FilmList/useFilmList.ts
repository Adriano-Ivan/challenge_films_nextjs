import { FilmEntity } from "@infrastructure/types";
import { defineFilmsList } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { useEffect } from "react";

export const useFilmList = (filmsData: FilmEntity[]) => {
  const useDispatch = useAppDispatch();
  const filmsDataRedux = useAppSelector((e) => e.films);

  useEffect(() => {
    useDispatch(defineFilmsList(filmsData));
  }, [filmsData]);

  useEffect(() => {
    console.log("redux data", filmsDataRedux);
  }, [filmsDataRedux]);
};
