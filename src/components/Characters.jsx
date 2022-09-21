import { useState } from "react";
import { useChara } from "../hooks/useChara";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import styles from "./Characters.module.css";

const Characters = (id) => {
  const { data } = useChara(id.id);

  const [view, setView] = useState("");

  return (
    <>
      {data && (
        <div className={styles.charamain}>
          <h3>Staff</h3>
          <div className={styles.charalist}>
            {data.map((characters) => (
              <div
                className={
                  view === characters.character.mal_id
                    ? styles.charatwo
                    : styles.charaone
                }
              >
                <div className={styles.menu}>
                  <div className={styles.chara}>
                    <div className={styles.charaimg}>
                      <img
                        src={characters.character.images.webp.image_url}
                        alt=""
                      />
                    </div>
                    <div className={styles.charatext}>
                      <p>{characters.character.name}</p>
                      <span>{characters.role}</span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setView(characters.character.mal_id)}
                    >
                      {view === characters.character.mal_id ? (
                        <RiArrowDropUpLine />
                      ) : (
                        <RiArrowDropDownLine />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.actores}>
                  {characters.voice_actors.map((actor) => (
                    <div className={styles.actor}>
                      <div className={styles.actorimg}>
                        <img src={actor.person.images.jpg.image_url} alt="" />
                      </div>
                      <div className={styles.actortext}>
                        <p>{actor.person.name}</p>
                        <span>{actor.language}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Characters;
