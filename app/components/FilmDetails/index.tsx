"use client";
import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { Image, Modal, Space } from "antd";
import React from "react";
import { contentContainerStyles, modalStyles } from "./styles";

function FilmDetails() {
  const dispatch = useAppDispatch();
  const selectedFilm = useAppSelector((e) => e.films.selectedFilm);

  const onCloseModal = () => {
    console.log("clsoe @@@@@");
    dispatch(defineSelectedFilm(null));
  };

  return (
    <>
      <Modal
        onClose={onCloseModal}
        onCancel={onCloseModal}
        width={"80vw"}
        open={selectedFilm !== null}
        okButtonProps={{ style: { display: "none" } }}
        cancelText={"Fechar"}
        style={modalStyles}
      >
        {selectedFilm && (
          <Space direction="vertical" style={contentContainerStyles}>
            <Image src={selectedFilm.Poster} />
            <h1>
              {selectedFilm.Title} - {selectedFilm.Director}
            </h1>
            <h1>
              {selectedFilm.Title} - {selectedFilm.Director}
            </h1>
            <h1>
              {selectedFilm.Title} - {selectedFilm.Director}
            </h1>
          </Space>
        )}
      </Modal>
    </>
  );
}

export default FilmDetails;
