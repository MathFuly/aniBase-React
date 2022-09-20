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

  const { data, load } = searchFetch(query);

  const [view, setView] = useState(false);

  const review = () => {
    if (data.length > 14) {
      setView(true);
    }
  };

  useEffect(() => {
    review();
  }, []);

  console.log(load)

  return (
    <div className={styles.search}>
      {load == false ? (
          <div
            className={
              view === false
                ? styles.searchoverflowoff
                : styles.searchoverflowon
            }
          >
            <div className={styles.searchcontainer}>
              {data &&
                data.map((animis) => (
                  <Cards className={styles.cardin} animis={animis} />
                ))}
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
