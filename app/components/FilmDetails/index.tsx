import { defineSelectedFilm } from "@services/redux/slices/Films/reducers";
import { useAppDispatch, useAppSelector } from "@services/redux/store";
import { Modal } from "antd";

function FilmDetails() {
  const dispatch = useAppDispatch();
  const selectedFilm = useAppSelector((e) => e.films.selectedFilm);

  const goList = () => {
    dispatch(defineSelectedFilm(null));
  };

  return (
    <>
      <Modal
        onClose={() => {
          console.log("clsoe @@@@@");
          dispatch(defineSelectedFilm(null));
        }}
        onCancel={() => {
          console.log("clsoe @@@@@");
          dispatch(defineSelectedFilm(null));
        }}
        open={selectedFilm !== null}
      >
        {selectedFilm && <h1>{selectedFilm.Title}</h1>}
      </Modal>
    </>
  );
}

export default FilmDetails;
