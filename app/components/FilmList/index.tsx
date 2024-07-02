"use client";
import { FilmEntity } from "@infrastructure/types";
import { useFilmList } from "./useFilmList";
import { Button, Space } from "antd";

function FilmList({ dataFilms }: { dataFilms: FilmEntity[] }) {
  useFilmList(dataFilms);
  return (
    <Space direction="vertical">
      {dataFilms?.map((f: FilmEntity, i: number) => {
        return (
          <div key={`${i}-${f.Title}-${f.Year}`}>
            <Button>
              {" "}
              <b>{f.Title}</b>
            </Button>
          </div>
        );
      })}
    </Space>
  );
}

export default FilmList;
