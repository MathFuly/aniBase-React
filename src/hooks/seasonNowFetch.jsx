import { useEffect } from "react";
import { useState } from "react";

export const seasonNowFetch = (page) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState("");

  const getAnimes = async () => {
    setLoad(true);
    fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setPages(response.pagination.last_visible_page);
        setData(response.data);
      })
      .catch((err) => console.log(err));

    setLoad(false);
  };

  useEffect(() => {
    getAnimes();
  }, [page]);

  return { data, load, pages };
};
