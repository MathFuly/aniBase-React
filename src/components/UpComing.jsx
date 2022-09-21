import { animeFetch } from "../hooks/animeFetch";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./UpComing.module.css";

const UpComing = (url2, upcoming = false) => {

  const { data } = animeFetch(Object.values(url2));

  return (
    <div className={styles.animecontainer}>
      <div className={styles.animecontainer2}>
        {data.top &&
          data.top.map((animi) => (
            <div className={styles.animecard}>
              <div className={styles.imgdiv}>
                <span>#{animi.rank}</span>
                <img src={animi.image_url} alt="" />
              </div>
              <div className={styles.infodiv}>
                <div>
                  <h1>{animi.title}</h1>
                </div>

                {animi.start_date == null ? (
                  <p>No Release Date</p>
                ) : (
                  <p>{animi.start_date}</p>
                )}
                <h3>
                  <FaStar />
                  {animi.score}
                </h3>
                <Link to={`/anime/${animi.mal_id}`}>Anime Info</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpComing;
