import { useState, useEffect } from "react";

export const genreFetch = (number, operation, page) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState("");

  const getAnimes = async () => {
    if (operation == true) {
      setLoad(true);

      await fetch(
        `https://api.jikan.moe/v4/anime?page=${page}&genres=${number}&order_by=score&sort=desc`
      ).then((response) =>
        response
          .json()
          .then((response) => {
            setData(response.data);
            setPages(response.pagination.last_visible_page);
            setLoad(false);
          })
          .catch((err) => console.log(err))
      );
    }
  };

  useEffect(() => {
    getAnimes();
  }, [number, operation, page]);

  return { data, load, pages };
};
