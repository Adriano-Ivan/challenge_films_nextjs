"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./useFilmList";
import { Space } from "antd";
import FilmCard from "@components/FilmCard";
import FilmDetails from "@components/FilmDetails";

function FilmList() {
  const { dataFilms } = useFilmList();
  return (
    <>
      <FilmDetails />
      <Space direction="vertical">
        {dataFilms?.map((f: FilmEntity, i: number) => {
          return <FilmCard film={f} />;
        })}
      </Space>
    </>
  );
}

export default FilmList;
