import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { DefaultOptionType } from "antd/es/select";
import { useMemo, useState } from "react";

export const useSearchFilmsArea = () => {
  const dispatch = useAppDispatch();
  const filmsDataRedux = useAppSelector((e) => e.films);
  const [searchValue, setSearchValue] = useState("");
  const options = useMemo<DefaultOptionType[]>(() => {
    const optionsFilms: DefaultOptionType[] = filmsDataRedux.entities
      .map((film) => {
        return {
          value: film.imdbID,
          label: film.Title,
          key: `${film.imdbID}`,
        };
      })
      .filter((option) =>
        option.label.toLocaleLowerCase().includes(searchValue)
      ) as never as DefaultOptionType[];
    console.log("optionsFlms", optionsFilms);
    return optionsFilms;
  }, [searchValue, filmsDataRedux.entities]);
  const onChange = (_: any, option: DefaultOptionType) => {
    console.log("option", option);

    const selectedFilm = filmsDataRedux.entities.find(
      (film) => film.imdbID === option.value
    );
    if (selectedFilm) {
      dispatch(defineSelectedFilm(selectedFilm));
    }
  };

  const onSearch = (value: string) => {
    console.log("value", value, value.length);
    setSearchValue(value.trim().toLocaleLowerCase());
  };

  console.log("these are options", options);
  return { options, onChange, onSearch };
};
