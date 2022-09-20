import { FaHotjar } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

import SeasonNow from "../../components/SeasonNow";
import UpComing from "../../components/UpComing";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div>
        <div className={styles.title}>
          <span>
            <FaHotjar />
          </span>

          <h1>Upcoming Anime</h1>
        </div>

        <UpComing url2={"https://jikan1.p.rapidapi.com/top/anime/1/upcoming"} />
      </div>
      <div>
        <div className={styles.title}>
          <span>
            <FaLeaf />
          </span>
          <h1>Current Season</h1>
        </div>
        <SeasonNow url={"https://api.jikan.moe/v4/seasons/now"} />
      </div>
    </div>
  );
};

export default Home;
