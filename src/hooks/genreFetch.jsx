import { useState, useEffect } from "react";

export const genreFetch = (number, operation, page) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState("");

  const getAnimes = async () => {
    if (operation == true) {
      setLoad(!load);

      fetch(`https://api.jikan.moe/v4/anime?page=${page}&genres=${number}`).then(
        (response) =>
          response
            .json()
            .then((response) => {
              setData(response.data);
              setPages(response.pagination.last_visible_page);
              console.log(pages);
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
