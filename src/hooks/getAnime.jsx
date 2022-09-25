import { useState, useEffect } from "react";

export const getAnime = (id) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getAnime1 = async () => {
    setLoad(true);

    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setLoad(false);
      });
  };

  useEffect(() => {
    getAnime1();
  }, [id]);

  return { data, load };
};
