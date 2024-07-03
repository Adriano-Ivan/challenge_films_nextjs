"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./hooks/useFilmList";
import { Pagination, Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";
import SearchFilmsArea from "@components/SearchFilmsArea";
import AppContainer from "@components/AppContainer";

function FilmList() {
  const { dataFilms, skip, progressUntil, sizeList, sizePage, definePage } =
    useFilmList();

  const definePaginationPage = (page: number, _: number) => {
    definePage(page - 1);
  };

  return (
    <AppContainer>
      <FilmDetails />

      <Space direction="vertical">
        <SearchFilmsArea />
        <Space direction="horizontal">
          <Space direction="vertical">
            {dataFilms
              ?.slice(skip, progressUntil)
              .map((f: FilmEntity, i: number) => {
                return <FilmCard film={f} key={`${f.imdbID}`} />;
              })}
          </Space>
          {/* <Space direction="vertical">
          {dataFilms.map((f: FilmEntity, i: number) => {
            return <FilmCard film={f} />;
          })}
        </Space> */}
        </Space>
      </Space>

      <Pagination
        onChange={definePaginationPage}
        pageSize={sizePage}
        defaultCurrent={1}
        total={sizeList}
      />
    </AppContainer>
  );
}

export default FilmList;
