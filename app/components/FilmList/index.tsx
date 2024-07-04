"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./hooks/useFilmList";
import { Col, Pagination, Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";
import { CONSTANTS_VALUES } from "@infrastructure/values";
import React from "react";

const filmsColumnStyles: React.CSSProperties = {
  width: "100%",
  // backgroundColor: "red",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
  justifyItems: "center",
  alignItems: "center",
  overflowY: "auto",
};

const paginationContainerStyles: React.CSSProperties = {
  backgroundColor: "#ccc",
  width: "100%",
  justifyContent: "center",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 80vh)`,
};

const containerContentStyles: React.CSSProperties = {
  width: "100%",
  height: `calc(${CONSTANTS_VALUES.CONTENT_HEIGHT} - 10vh)`,
  backgroundColor: "#ddd",
};

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
      <Space direction="vertical" style={containerContentStyles}>
        {thereIsSelectedFilm && <FilmDetails />}

        <Col style={filmsColumnStyles}>
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

      <Space style={paginationContainerStyles}>
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
