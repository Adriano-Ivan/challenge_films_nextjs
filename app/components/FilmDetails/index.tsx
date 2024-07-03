import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { Image, Modal } from "antd";

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
        width={"55vw"}
        open={selectedFilm !== null}
      >
        {selectedFilm && (
          <>
            <Image src={selectedFilm.Poster} />
            <h1>
              {selectedFilm.Title} - {selectedFilm.Director}
            </h1>
          </>
        )}
      </Modal>
    </>
  );
}

export default FilmDetails;
