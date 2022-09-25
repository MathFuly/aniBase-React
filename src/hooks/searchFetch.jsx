import { useEffect } from "react";
import { useState } from "react";

export const searchFetch = (query, page) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState("");
  const url = `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&order_by=score&sort=desc`;

  const getSearch = async () => {
    setLoad(true);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setPages(response.pagination.last_visible_page);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSearch();
  }, [query, page]);

  return { data, load, pages };
};
