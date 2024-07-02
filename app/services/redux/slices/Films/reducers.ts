import { FilmEntity } from "@infrastructure/types";
import { createAction } from "@reduxjs/toolkit";

export const defineFilmsList = createAction(
  "configuracaoTabelaVisualizacao/updateConfiguracaoTabelaVisualizacaoList",
  function prepare(listFilms: FilmEntity[]) {
    return {
      payload: {
        listFilms,
      },
    };
  }
);
