"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./hooks/useFilmList";
import { Col, Pagination, Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";
import React from "react";
import {
  containerContentStyles,
  filmsColumnStyles,
  loadingContainerContentStyles,
  paginationContainerStyles,
} from "./styles";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function FilmList() {
  const {
    dataFilms,
    skip,
    progressUntil,
    sizeList,
    sizePage,
    thereIsSelectedFilm,
    loading,
    definePage,
  } = useFilmList();

  const definePaginationPage = (page: number, _: number) => {
    definePage(page - 1);
  };

  return loading ? (
    <Space style={loadingContainerContentStyles}>
      <Spin indicator={<LoadingOutlined spin />} />
    </Space>
  ) : (
    <>
      <Space direction="vertical" style={containerContentStyles}>
        {thereIsSelectedFilm && <FilmDetails />}

        <Col style={filmsColumnStyles}>
          {dataFilms?.slice(skip, progressUntil).map((f: FilmEntity) => {
            return <FilmCard film={f} key={`${f.imdbID}`} />;
          })}
        </Col>
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
