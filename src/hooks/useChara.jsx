import { useState, useEffect } from "react";

export const useChara = (id) => {
  const [data, setData] = useState([]);

  const getChara = async () => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then((response) => response.json())
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        });
  };

  useEffect(() => {
    getChara();
  }, [id]);

  return { data };
};
