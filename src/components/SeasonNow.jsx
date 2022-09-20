import { useState } from "react";

import { seasonNowFetch } from "../hooks/seasonNowFetch";
import Cards from "./Cards";

import styles from "./SeasonNow.module.css";

const SeasonNow = () => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(1);
  console.log(page)

  const { data, pages, laod } = seasonNowFetch(page);
  const pager = [...Array(pages + 1).keys()].slice(1);

  return (
    <div className={styles.season}>
      <div
        className={view === false ? styles.seasondivoff : styles.seasondivoon}
      >
        <div className={styles.seasonoverfolw}>
          {data && data.map((animis) => animis && <Cards animis={animis} />)}
        </div>
      </div>
      <div className={styles.pagination}>
        {pager.length > 1 && view == true
          ? pager.map((pagin) => (
              <button onClick={() => setPage(pagin)}>{pagin}</button>
            ))
          : ""}
      </div>

      <button onClick={() => setView(!view)}>
        {view == false ? "View More" : "Hide"}
      </button>
    </div>
  );
};

export default SeasonNow;
