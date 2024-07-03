import { listFilmsAsync } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { useEffect, useMemo, useState } from "react";

export const useFilmList = () => {
  const dispatch = useAppDispatch();
  const filmsDataRedux = useAppSelector((e) => e.films);
  const sizePage = 4;
  const [page, setPage] = useState(0);
  const skip = useMemo(() => page * sizePage, [page]);
  const progressUntil = useMemo(() => skip + sizePage, [page, skip]);

  useEffect(() => {
    dispatch(listFilmsAsync());
  }, []);

  const definePage = (page: number) => {
    setPage(page);
  };

  return {
    dataFilms: filmsDataRedux.entities,
    selectedFilm: filmsDataRedux.selectedFilm,
    skip,
    progressUntil,
    sizePage,
    sizeList: filmsDataRedux.entities.length,
    thereIsSelectedFilm: filmsDataRedux.selectedFilm !== null,
    definePage,
  };
};
