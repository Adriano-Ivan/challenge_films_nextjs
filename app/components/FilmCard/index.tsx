import { FilmEntity } from "@infrastructure/types";
import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch } from "@services/redux/store";
import { Button, Card, Col, Row } from "antd";

function FilmCard({ film }: { film: FilmEntity }) {
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const onSelectedCard = () => {
    dispatch(defineSelectedFilm(film));
  };
  return (
    <Row style={{ backgroundColor: "yellow", justifyContent: "center" }}>
      <Col md={16} xs={24} sm={24}>
        <Card
          style={{
            width: "100%",
            marginTop: 10,
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Button
            style={{ backgroundColor: "#00F", color: "#FFF" }}
            onClick={onSelectedCard}
          >
            {film.Title}
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default FilmCard;
