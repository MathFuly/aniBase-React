import { useState, useRef, useEffect } from "react";
import { getSeason } from "../../hooks/getSeason";
import { useSeason } from "../../hooks/useSeason";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiGhostFill } from "react-icons/ri";

import Load from "../../components/Load";
import Cards from "../../components/Cards";
import styles from "./Seasons.module.css";

const Season = () => {
  const { seasons, operation, load, seasonni } = getSeason();

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const [year, setYear] = useState(anoAtual);
  const [choosenSeason, setChoosenSeason] = useState("winter");
  const [page, setPage] = useState(1);

  const { data, loada, pages } = useSeason(
    year,
    choosenSeason,
    operation,
    page
  );

  const pager = [...Array(pages + 1).keys()].slice(1);

  const [viewSeason, setViewSeason] = useState(false);

  return (
    <>
      {load === true ? (
        <Load />
      ) : (
        <div className={styles.seasonssearch}>
          <div className={styles.seasonsmain}>
            <div
              className={
                viewSeason == false
                  ? styles.seasonsoverflowhidden
                  : styles.seasonsoverflowon
              }
            >
              <div className={styles.seasonscontainer}>
                {seasons &&
                  seasons.map((season) => (
                    <button
                      className={year === season.year ? styles.activey : styles.ybutton}
                      key={season.year}
                      onClick={() => {
                        setYear(season.year);
                        setViewSeason(false);
                      }}
                    >
                      {season.year}
                    </button>
                  ))}
              </div>
            </div>
            <button
              onClick={() => setViewSeason(!viewSeason)}
              className={styles.dropbutton}
            >
              {viewSeason == false ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
          <div className={styles.animecontainer}>
            <div className={styles.animeinterface}>
              <h1>{year}</h1>
              <div className={styles.choseseason}>
                {seasonni &&
                  seasonni.seasons.map((ss) => (
                    <button
                      key={ss}
                      className={
                        choosenSeason === ss ? styles.actives : styles.sbutton
                      }
                      onClick={() => {
                        setChoosenSeason(ss);
                        setPage(1);
                      }}
                    >
                      {ss}
                    </button>
                  ))}
              </div>
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
            {loada === true ? (
              <Load />
            ) : (
              <div className={styles.animeoverflow}>
                {data.length == 0 ? (
                  <p className={styles.nfound}>
                    <span>
                      <RiGhostFill />
                    </span>
                    <p>Nothing Found</p>
                  </p>
                ) : (
                  data.map((animis) => <Cards animis={animis} />)
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Season;
