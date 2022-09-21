import { useState, useEffect } from "react";
import { useRecommend } from "../hooks/useRecommend";
import { MdRecommend } from "react-icons/md";
import {
  RiMovieFill,
  RiEye2Line,
  RiTimeFill,
  RiStarFill,
  RiMenu5Fill,
  RiFileInfoFill,
  RiFileTextFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./Recommendation.module.css";

import Load from "../components/Load";

const Recommendation = () => {
  const { data, load } = useRecommend();

  console.log(data);

  return (
    <>
      {load === true ? (
        <Load />
      ) : (
        <div className={styles.recommendationcontainer}>
          <h1 className={styles.rech1}>
            <MdRecommend />
            Recommendation
          </h1>
          {data && (
            <>
              <div className={styles.cover}>
                <img src={data.images.jpg.large_image_url} alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.titles}>
                  <h1>
                    {data.title} {data.type != null && `(${data.type})`}
                  </h1>
                  {data.title === data.title_english ? (
                    ""
                  ) : (
                    <p>{data.title_english}</p>
                  )}
                </div>

                <div className={styles.airing}>
                  {data.airing === false ? (
                    <>
                      <p className={styles.airingicon}>
                        <RiEye2Line />
                        <span>Status:</span>
                      </p>
                      <p>Completed</p>
                    </>
                  ) : (
                    <>
                      <p className={styles.airingicon}>
                        <RiEye2Line />
                        <span>Status: </span>
                      </p>
                      <p>Ongoing</p>
                    </>
                  )}
                </div>

                <div className={styles.episodes}>
                  <div>
                    <RiMovieFill />
                    <p>Episodes: </p>
                  </div>
                  <p>{data.episodes}</p>
                </div>
                <div className={styles.duration}>
                  <div>
                    <RiTimeFill />
                    <p>Duration: </p>
                  </div>
                  <p>{data.duration}</p>
                </div>

                {data.score && (
                  <div className={styles.score}>
                    <div>
                      <RiStarFill />
                      <p>Score:</p>
                    </div>
                    <p>{data.score}</p>
                  </div>
                )}

                {data.genres && (
                  <div className={styles.genres}>
                    <div>
                      <RiMenu5Fill />
                      <p>Genres:</p>
                    </div>
                    {data.genres != undefined &&
                      data.genres.map((genre) => (
                        <p className={styles.genretype}>{genre.name}</p>
                      ))}
                  </div>
                )}
                {data.aired.prop.from.year && (
                  <div className={styles.year}>
                    <div>
                      <RiFileInfoFill />
                      <p>Year: </p>
                    </div>
                    <p>{data.aired.prop.from.year}</p>
                  </div>
                )}
                <div className={styles.synopsis}>
                  <div>
                    <RiFileTextFill />
                    <p>Synopsis:</p>
                  </div>
                  <h4>{data.synopsis}</h4>
                </div>
              </div>
              <Link to={`/anime/${data.mal_id}`}>Anime Info</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Recommendation;
