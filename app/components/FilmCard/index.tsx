import { FilmEntity } from "@infrastructure/types";
import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch } from "@services/redux/store";
import { Button } from "antd";

function FilmCard({ film }: { film: FilmEntity }) {
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const onSelectedCard = () => {
    dispatch(defineSelectedFilm(film));
  };
  return (
    <>
      <Button
        style={{ backgroundColor: "#00F", color: "#FFF" }}
        onClick={onSelectedCard}
      >
        {film.Title}
      </Button>
      {/* <Button
        onClick={() => {
          router.push("detailedfilm");
        }}
      >
        Detailed film
      </Button> */}
    </>
  );
}

export default FilmCard;
