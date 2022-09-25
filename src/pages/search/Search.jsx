import { useSearchParams } from "react-router-dom";
import { searchFetch } from "../../hooks/searchFetch";
import { useState } from "react";
import { useEffect } from "react";

import Cards from "../../components/Cards";
import Load from "../../components/Load";

import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [page, setPage] = useState(1);

  const { data, load, pages } = searchFetch(query, page);

   const pager = [...Array(pages + 1).keys()].slice(1);

  const [view, setView] = useState(false);

  const review = () => {
    if (data.length > 14) {
      setView(true);
    }
  };

  useEffect(() => {
    review();
  }, []);


  return (
    <div className={styles.search}>
      {load == false ? (
        <div
          className={
            view === false ? styles.searchoverflowon : styles.searchoverflowoff
          }
        >
          <div className={styles.searchcontainer}>
            <div className={styles.animeinterface}>
              <h1>Results for: {query}</h1>
              <div>
                <p>Page :</p>
                <select
                  name="select"
                  className={styles.selector}
                  onChange={(e) => { setPage(e.target.value);  setView(false)}}
                  value={page}
                >
                  {pager.length > 0 &&
                    pager.map((op) => <option key={op} value={op}>{op}</option>)}
                </select>
                <p>of : {pager.length}</p>
              </div>
            </div>
            <div className={styles.animecontainer}>
              {data &&
                data.map((animis) => (
                  <Cards keys={animis.mal_id} className={styles.cardin} animis={animis} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}

      {data.length > 14 && (
        <button onClick={() => setView(!view)}>
          {view == false ? "View More" : "Hide"}
        </button>
      )}
    </div>
  );
};

export default Search;
