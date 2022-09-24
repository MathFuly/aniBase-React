import { useState, useEffect } from "react";

export const useGenre = () => {
  const [genres, setGenres] = useState([]);
  const [loadg, setLoadg] = useState(false);
  const [operation, setOperation] = useState(false);

  const getGenres = async () => {
    setLoadg(!loadg);

    await fetch("https://api.jikan.moe/v4/genres/anime").then((response) =>
      response
        .json()
        .then((response) => {
          setGenres(response.data);
          console.log(response);
          setLoadg(false);
          setOperation(true);
        })
        .catch((err) => console.log(err))
    );
  };

  useEffect(() => {
    getGenres();
  }, []);

  return { genres, loadg, operation };
};
