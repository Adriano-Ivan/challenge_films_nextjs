"use client";
import {
  defineSelectedFilm,
  updateLocalFilmRating,
} from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { Col, Image, Modal, Row, Space } from "antd";
import React from "react";
import {
  contentContainerStyles,
  extraThirdInformationColumnContentStyle,
  modalStyles,
  thirdInformationColumnDetailsStyle,
} from "./styles";
import TextTitle from "@components/utils/TextTitle";
import AppParagraph from "@components/utils/AppParagraph";
import AppRatingStar from "@components/utils/AppRatingStars";
import EntitledText from "@components/utils/EntitledText";

function FilmDetails() {
  const dispatch = useAppDispatch();
  const selectedFilm = useAppSelector((e) => e.films.selectedFilm);

  const onCloseModal = () => {
    dispatch(defineSelectedFilm(null));
  };

  const onChangeRating = (newRating: number) => {
    if (selectedFilm) {
      dispatch(updateLocalFilmRating(selectedFilm.imdbID, newRating));
    }
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
          <Row style={contentContainerStyles}>
            <Col xs={24} xl={8} md={12}>
              <Image src={selectedFilm.Poster} />
            </Col>
            <Col xs={24} xl={8} md={12}>
              <EntitledText
                text={selectedFilm.Plot}
                title={selectedFilm.Title}
                levelTitle={3}
              />
              <EntitledText
                levelTitle={5}
                text={selectedFilm.Director}
                title="Director"
              />
              <EntitledText
                levelTitle={5}
                text={selectedFilm.Writer}
                title="Writer"
              />
              <EntitledText
                levelTitle={5}
                text={selectedFilm.Genre}
                title="Genre"
              />
              <EntitledText
                levelTitle={5}
                text={selectedFilm.Actors}
                title="Actors"
              />
              <EntitledText
                levelTitle={5}
                text={selectedFilm.Language}
                title="Language"
              />

              <EntitledText
                levelTitle={5}
                text={selectedFilm.Country}
                title="Country"
              />
            </Col>
            <Col
              style={thirdInformationColumnDetailsStyle}
              xs={24}
              xl={8}
              md={24}
            >
              <AppRatingStar
                defaultValue={selectedFilm.localRating}
                showMessage={false}
                onChangeRating={onChangeRating}
              />
              <Space
                direction="vertical"
                style={extraThirdInformationColumnContentStyle}
              >
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.Released}
                  title="Released"
                />
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.Runtime}
                  title="Runtime"
                />
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.Awards}
                  title="Awards"
                />
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.Metascore}
                  title="Metascore"
                />
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.imdbVotes}
                  title="IMDB Votes"
                />
                <EntitledText
                  levelTitle={5}
                  text={selectedFilm.imdbRating}
                  title="IMDB Rating"
                />
              </Space>
            </Col>
          </Row>
        )}
      </Modal>
    </>
  );
}

export default FilmDetails;
