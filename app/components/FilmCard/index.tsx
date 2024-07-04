import AppParagraph from "@components/utils/AppParagraph";
import AppRatingStar from "@components/utils/AppRatingStars";
import TextTitle from "@components/utils/TextTitle";
import { FilmEntity } from "@infrastructure/types";
import {
  defineSelectedFilm,
  updateLocalFilmRating,
} from "@services/redux/slices/Films/reducers";
import { useAppDispatch } from "@services/redux/store";
import { Button, Card, Col, Image, Row } from "antd";
import {
  actionsContainerStyle,
  cardFilmStyle,
  filmImageStyle,
  rowFilmCardStyle,
} from "./styles";

function FilmCard({ film }: { film: FilmEntity }) {
  const dispatch = useAppDispatch();

  const onSelectedCard = () => {
    dispatch(defineSelectedFilm(film));
  };

  const onChangeRating = (newRating: number) => {
    dispatch(updateLocalFilmRating(film.imdbID, newRating));
  };

  return (
    <Row style={rowFilmCardStyle}>
      <Col md={16} xs={24} sm={24}>
        <Card style={cardFilmStyle}>
          <Row>
            <Col xs={24} xl={8} md={12}>
              <Image src={film.Poster} style={filmImageStyle} />
            </Col>
            <Col xs={24} xl={8} md={12}>
              <TextTitle level={4} text={film.Title} />
              <AppParagraph text={film.Plot} />
            </Col>
            <Col style={actionsContainerStyle} xs={24} xl={8} md={24}>
              <AppRatingStar
                defaultValue={film.localRating}
                onChangeRating={onChangeRating}
              />
              <Button onClick={onSelectedCard} type="primary">
                More details
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default FilmCard;
