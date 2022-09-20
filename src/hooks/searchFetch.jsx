import { useEffect } from "react";
import { useState } from "react";

export const searchFetch = (query) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const url = `https://api.jikan.moe/v4/anime?q=${query}`;

  console.log(url);

  const getSearch = async () => {
    setLoad(!load);
    console.log(load);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
            setLoad(false);
        setData(response.data);
      })
      .catch((err) => console.log(err));


  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return { data, load };
};
