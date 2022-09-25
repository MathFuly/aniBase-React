import { RiStarFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const Cards = (animis) => {
  const genres = animis.animis.genres;
  const score = animis.animis.score;

  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <img src={animis.animis.images.jpg.image_url} alt="" />
      </div>
      <div className={styles.cardinfo}>
        <p className={styles.title}>{animis.animis.title}</p>
        <div className={styles.cardgenre}>
          {genres && genres.map((g) => <p key={g.mal_id}>{g.name}</p>)}
        </div>
        {score && (
          <div className={styles.scores}>
            <span>
              <RiStarFill />
            </span>
            <p>{score.toString().replace(".", ",")}</p>
          </div>
        )}

        <Link to={`/anime/${animis.animis.mal_id}`}>View More</Link>
      </div>
    </div>
  );
};

export default Cards;
