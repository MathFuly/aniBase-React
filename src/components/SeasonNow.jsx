import { useState } from "react";

import { seasonNowFetch } from "../hooks/seasonNowFetch";
import Cards from "./Cards";

import styles from "./SeasonNow.module.css";

const SeasonNow = (url) => {
  const { data } = seasonNowFetch(Object.values(url));

  const [view, setView] = useState(false);

  return (
    <div className={styles.season}>
      <div
        className={view === false ? styles.seasondivoff : styles.seasondivoon}
      >
        <div className={styles.seasonoverfolw}>
          {data && data.map((animis) => animis && <Cards animis={animis} />)}
        </div>
      </div>
      <button onClick={() => setView(!view)}>
        {view == false ? "View More" : "Hide"}
      </button>
    </div>
  );
};

export default SeasonNow;
