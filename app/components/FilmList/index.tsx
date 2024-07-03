"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./useFilmList";
import { Pagination, Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";
import { useState } from "react";

function FilmList() {
  const { dataFilms, skip, progressUntil, sizeList, sizePage, definePage } =
    useFilmList();

  const definePaginationPage = (page: number, _: number) => {
    definePage(page - 1);
  };

  return (
    <>
      <FilmDetails />
      <Space direction="horizontal">
        <Space direction="vertical">
          {dataFilms
            ?.slice(skip, progressUntil)
            .map((f: FilmEntity, i: number) => {
              return (
                <FilmCard
                  film={f}
                  key={`${f.Director}-${f.Country}-${f.Title}`}
                />
              );
            })}
        </Space>
        {/* <Space direction="vertical">
          {dataFilms.map((f: FilmEntity, i: number) => {
            return <FilmCard film={f} />;
          })}
        </Space> */}
      </Space>
      <Pagination
        onChange={definePaginationPage}
        pageSize={sizePage}
        defaultCurrent={1}
        total={sizeList}
      />
    </>
  );
}

export default FilmList;
