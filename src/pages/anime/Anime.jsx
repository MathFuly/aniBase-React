import { useState } from "react";
import { getAnime } from "../../hooks/getAnime";
import { NavLink, useParams } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";

import Load from "../../components/Load";

import styles from "./Anime.module.css";

import Info from "../../components/Info";
import Characters from "../../components/Characters";

const Anime = () => {
  const { id } = useParams();

  const { data, load } = getAnime(id);

  const [display, setDisplay] = useState("details");

  return (
    <div className={styles.container}>
      {load === false ? (
        <>
          {data && (
            <>
              <div className={styles.card}>
                {data.images && (
                  <div className={styles.divimg}>
                    <img src={data.images.webp.large_image_url} alt="" />
                  </div>
                )}
                <div className={styles.infomain}>
                  {data.title && (
                    <div className={styles.infotitle}>
                      <h1>{data.title}</h1>
                      {data.title_english && <p>{data.title_english}</p>}
                    </div>
                  )}
                  <div className={styles.infostatics}>
                    {data.score ? (
                      <div className={styles.infornumber}>
                        <span>Score:</span>
                        <p>
                          <RiStarFill /> {`${data.score}`.replace(".", ",")}
                        </p>
                      </div>
                    ) : (
                      <div className={styles.infornumber}>
                        <span>Score:</span>
                        <p>N/A</p>
                      </div>
                    )}
                    {data.rank ? (
                      <div className={styles.infornumber}>
                        <span>Rank:</span>
                        <p># {data.rank}</p>
                      </div>
                    ) : (
                      <div className={styles.infornumber}>
                        <span>Rank:</span>
                        <p>N/A</p>
                      </div>
                    )}
                    {data.popularity ? (
                      <div className={styles.infornumber}>
                        <span>Popularity:</span>
                        <p># {data.popularity}</p>
                      </div>
                    ) : (
                      <div className={styles.infornumber}>
                        <span>Popularity:</span>
                        <p>N/A</p>
                      </div>
                    )}
                  </div>
                  <div className={styles.otherinfo}>
                    <p>Background:</p>
                    <span>{data.background}</span>
                  </div>
                </div>
                <div className={styles.sidebar2}>
                  <div className={styles.information}>
                    <h3>Information:</h3>
                    <div className={styles.informationbase}>
                      <div>
                        <p>Type:</p>
                        <span>{data.type}</span>
                      </div>
                      <div>
                        <p>Episodes:</p>
                        <span>{data.episodes}</span>
                      </div>
                      <div>
                        <p>status:</p>
                        <span>{data.status}</span>
                      </div>
                      <div>
                        <p>aired:</p>
                        {data.aired && <span>{data.aired.string}</span>}
                      </div>
                      <div>
                        <p>season:</p>
                        <span>
                          {data.season} {data.year}
                        </span>
                      </div>
                      <div>
                        <p>broadcast:</p>
                        {data.broadcast && <span>{data.broadcast.string}</span>}
                      </div>
                      <div>
                        <p>producers:</p>
                        {data.producers &&
                          data.producers.map((producer) => (
                            <span key={producer.name}>{producer.name},</span>
                          ))}
                      </div>
                      <div>
                        <p>studios:</p>
                        {data.studios &&
                          data.studios.map((studio) => (
                            <span key={studio.name}>{studio.name},</span>
                          ))}
                      </div>
                      <div>
                        <p>source:</p>
                        <span>{data.source}</span>
                      </div>
                      <div>
                        <p>genres:</p>
                        {data.genres &&
                          data.genres.map((genre) => (
                            <span key={genre.name}>{genre.name}, </span>
                          ))}
                      </div>
                      <div>
                        <p>duration:</p>
                        <span>{data.duration}</span>
                      </div>
                      <div>
                        <p>rating:</p>
                        <span>{data.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.menu}>
                    <h3>Menu</h3>
                    {display && (
                      <div>
                        <NavLink
                          className={display === "details" ? styles.active : ""}
                          onClick={() => setDisplay("details")}
                        >
                          Details
                        </NavLink>
                        <NavLink
                          className={display === "staff" ? styles.active : ""}
                          onClick={() => setDisplay("staff")}
                        >
                          Characters & Staff
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
                {display === "details" && <Info data={data} />}
                {display === "staff" && <Characters id={data.mal_id} />}
              </div>
              <div className={styles.sidebar}>
                <div className={styles.information}>
                  <h3>Information</h3>
                  <div className={styles.informationbase}>
                    <div>
                      <p>Type:</p>
                      <span>{data.type}</span>
                    </div>
                    <div>
                      <p>Episodes:</p>
                      <span>{data.episodes}</span>
                    </div>
                    <div>
                      <p>status:</p>
                      <span>{data.status}</span>
                    </div>
                    <div>
                      <p>aired:</p>
                      {data.aired && <span>{data.aired.string}</span>}
                    </div>
                    <div>
                      <p>season:</p>
                      <span>
                        {data.season} {data.year}
                      </span>
                    </div>
                    <div>
                      <p>broadcast:</p>
                      {data.broadcast && <span>{data.broadcast.string}</span>}
                    </div>
                    <div>
                      <p>producers:</p>
                      {data.producers &&
                        data.producers.map((producer) => (
                          <span key={producer.name}>{producer.name},</span>
                        ))}
                    </div>
                    <div>
                      <p>studios:</p>
                      {data.studios &&
                        data.studios.map((studio) => (
                          <span key={studio.name}>{studio.name},</span>
                        ))}
                    </div>
                    <div>
                      <p>source:</p>
                      <span>{data.source}</span>
                    </div>
                    <div>
                      <p>genres:</p>
                      {data.genres &&
                        data.genres.map((genre) => <span key={genre.name}>{genre.name}, </span>)}
                    </div>
                    <div>
                      <p>duration:</p>
                      <span>{data.duration}</span>
                    </div>
                    <div>
                      <p>rating:</p>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.menu}>
                  <h3>Menu</h3>
                  <div>
                    <NavLink onClick={() => setDisplay("details")}>
                      Details
                    </NavLink>
                    <NavLink onClick={() => setDisplay("staff")}>
                      Characters & Staff
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <Load />
      )}
    </div>
  );
};

export default Anime;
