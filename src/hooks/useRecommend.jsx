import { useState, useEffect } from "react";

export const useRecommend = () => {
  const [data, setData] = useState(undefined);
  const [load, setLoad] = useState(false);

  const getAnime = async () => {
    setLoad(true);
    await fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnime();
  }, []);

  return { data,load };
};
