import { useState, useEffect } from "react";

export const fetchAll = (number, page) => {
  const [genres, setGenres] = useState([]);
  const [loadg, setLoadg] = useState(false);
  const [operation, setOperation] = useState(true);

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState([]);

  const getGenres = async () => {
    setLoadg(!loadg);

    fetch("https://api.jikan.moe/v4/genres/anime").then((response) =>
      response
        .json()
        .then((response) => {
          setGenres(response.data);
          setLoadg(false);
          setOperation(!operation);
        })
        .catch((err) => console.log(err))
    );
  };

  const getAnimes = async () => {
    setLoad(!load);

    if (operation == false) {
      fetch(`https://api.jikan.moe/v4/anime?genres=${number}`).then(
        (response) =>
          response
            .json()
            .then((response) => {
              setData(response.data);
              setPages(
                [
                  ...Array(response.pagination.last_visible_page + 1).keys(),
                ].slice(1)
              );
              console.log(data);
              setLoad(false);
            })
            .catch((err) => console.log(err))
      );
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getAnimes();
  }, [number]);

  /*   const getPages = async () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=${number}`).then((response) =>
      response
        .json()
        .then((response) => {
          const pages = [
            ...Array(response.pagination.last_visible_page + 1).keys(),
          ].slice(1);
            setPager(pages);
            console.log(pages)
        })
        .catch((err) => console.log(err))
    );
    };
    

  useEffect(() => {
    getPages();
  }, [number > 0]); */

  /*   const getAnimes = async () => {
    fetch(`https://api.jikan.moe/v4/anime?pages${page}genres=${number}`).then(
      (response) =>
        response
          .json()
          .then((response) => {
            setData(response.data);
            console.log(data);
          })
          .catch((err) => console.log(err))
    );
  };

  useEffect(
    () => {
      getPages();
      getAnimes();
    },
    { number }
  );
 */
  return { genres, loadg, data, load, pages };
};
