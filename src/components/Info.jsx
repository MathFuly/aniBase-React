import styles from "./Info.module.css";

const Info = (data) => {

    console.log(data)
  return (
    <>
      {data.data && (
        <div className={styles.infobottom}>
          <div className={styles.synopsis}>
            <p>Synopsis:</p>
            <span>{data.data.synopsis}</span>
          </div>
          {data.data.trailer && (
            <div className={styles.trailer}>
              <p>Trailer:</p>

              <div>
                {data.data.trailer.embed_url && (
                  <iframe
                    width="1920"
                    height="929"
                    src={data.data.trailer.embed_url}
                    title="TVアニメ『BLEACH 千年血戦篇』ティザーPV／２０２２年１０月放送開始"
                    frameborder="0"
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Info;
