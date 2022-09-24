import { useState } from "react";
import { useGenre } from "../../hooks/useGenre";
import { genreFetch } from "../../hooks/genreFetch";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Load from "../../components/Load";
import Cards from "../../components/Cards";

import styles from "./Genre.module.css";
import { fetchAll } from "../../hooks/fetchAll";

const Genre = () => {
  const { genres, loadg, operation } = useGenre();

  const [number, setNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [genreName, setGenreName] = useState("Action")

  const { data, load, pages } = genreFetch(number, operation, page);

  const pager = [...Array(pages + 1).keys()].slice(1);

  const [viewgenre, setViewGenres] = useState(false);

  return (
    <>
      {loadg == true ? (
        <Load />
      ) : (
        <div className={styles.genresearch}>
          <div className={styles.genresmain}>
            <div
              className={
                viewgenre == false
                  ? styles.genresoverflowhidden
                  : styles.genresoverflowon
              }
            >
              <div className={styles.genrescontainer}>
                {genres &&
                  genres.map((genre) => (
                    <button
                      className={
                        genreName === genre.name
                          ? styles.activey
                          : styles.ybutton
                      }
                      onClick={() => {
                        setNumber(genre.mal_id);
                        setPage(1);
                        setGenreName(genre.name);
                        setViewGenres(!viewgenre);
                      }}
                    >
                      {genre.name}
                    </button>
                  ))}
              </div>
            </div>
            <button
              onClick={() => setViewGenres(!viewgenre)}
              className={styles.dropbutton}
            >
              {viewgenre == false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>

          <div className={styles.animecontainer}>
            <div className={styles.animeinterface}>
              <h1>{genreName}</h1>
              <div>
                <p>Page :</p>
                <select
                  name="select"
                  className={styles.selector}
                  onChange={(e) => setPage(e.target.value)}
                  value={page}
                >
                  {pager.length > 0 &&
                    pager.map((op) => <option value={op}>{op}</option>)}
                </select>
                <p>of : {pager.length}</p>
              </div>
            </div>
            {load === true ? (
              <Load />
            ) : (
              <div className={styles.animeoverflow}>
                {data && data.map((animis) => <Cards animis={animis} />)}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Genre;
