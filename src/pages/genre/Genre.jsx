import { useState } from "react";
import { useGenre } from "../../hooks/useGenre";
import { genreFetch } from "../../hooks/genreFetch";

import Load from "../../components/Load";
import Cards from "../../components/Cards";

import styles from "./Genre.module.css";
import { fetchAll } from "../../hooks/fetchAll";

const Genre = () => {
  const { genres, loadg, operation } = useGenre();

  const [number, setNumber] = useState(1);
  const [page, setPage] = useState(1);

  const { data, load, pages } = genreFetch(number, operation, page);

  const pager = [...Array(pages + 1).keys()].slice(1);

  console.log(pager);

  return (
    <>
      <div className={styles.genresearch}>
        <div className={styles.genresoverflow}>
          {loadg == true ? (
            <Load />
          ) : (
            <div className={styles.genrescontainer}>
              {genres &&
                genres.map((genre) => (
                  <button onClick={() => { setNumber(genre.mal_id);  setPage(1)}}>
                    {genre.name}
                  </button>
                ))}
            </div>
          )}
        </div>

        <div className={styles.animecontainer}>
          <div className={styles.animeoverflow}>
            {data && data.map((animis) => <Cards animis={animis} />)}
          </div>
          <select name="select" className={styles.selector} onChange={(e) => setPage(e.target.value)}>
            {pager.length > 0 &&
              pager.map((op) => <option value={op}>{op}</option>)}
          </select>
        </div>
      </div>
    </>
  );
};

export default Genre;
