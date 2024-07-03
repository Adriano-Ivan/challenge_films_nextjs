"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./hooks/useFilmList";
import { Col, Pagination, Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";
import AppContainer from "@components/AppContainer";
import { CONSTANTS_VALUES } from "@infrastructure/values";

function FilmList() {
  const {
    dataFilms,
    skip,
    progressUntil,
    sizeList,
    sizePage,
    thereIsSelectedFilm,
    definePage,
  } = useFilmList();

  const definePaginationPage = (page: number, _: number) => {
    definePage(page - 1);
  };

  return (
    <>
      {thereIsSelectedFilm && <FilmDetails />}

      <Space
        direction="vertical"
        style={{
          width: "100%",
          height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
          backgroundColor: "gray",
        }}
      >
        {/* <Space direction="horizontal" style={{ width: "100%" }}> */}
        {/* <Space
          direction="vertical"
          style={{
            width: "100%",
            height: "inherit",
            backgroundColor: "purple",
          }}
        > */}
        <Col
          style={{
            width: "100%",
            backgroundColor: "red",
            height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
            justifyItems: "center",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          {dataFilms?.slice(skip, progressUntil).map((f: FilmEntity) => {
            return <FilmCard film={f} key={`${f.imdbID}`} />;
          })}
        </Col>
        {/* </Space> */}
        {/* <Space direction="vertical">
            {dataFilms.map((f: FilmEntity, i: number) => {
              return <FilmCard film={f} />;
            })}
          </Space> */}
        {/* </Space> */}
      </Space>

      <Space
        style={{
          backgroundColor: "pink",
          width: "100%",
          justifyContent: "center",
          height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 80vh)`,
        }}
      >
        <Pagination
          onChange={definePaginationPage}
          pageSize={sizePage}
          defaultCurrent={1}
          total={sizeList}
        />
      </Space>
    </>
  );
}

export default FilmList;
