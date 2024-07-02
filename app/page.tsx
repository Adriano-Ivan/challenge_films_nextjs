import styles from "./page.module.css";
import { FilmList } from "@components";
import { FilmEntity } from "@infrastructure/types";
import { getFilms } from "@services/api/apiMethods";
import Link from "next/link";

export default async function Home() {
  const dataFilms = await getFilms();
  console.log("dataFilms", dataFilms);

  return (
    <>
      <Link href="/detailedfilm">Detailed film</Link>
      <FilmList dataFilms={dataFilms as FilmEntity[]} />
    </>
  );
}
