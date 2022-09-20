import { useState, useEffect } from "react";

export const animeFetch = (url) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68adc08444msh5592b62d87b6400p19fa3cjsn00d490b0d2ca",
      "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
    },
  };

  const getAnimes = async () => {
    setLoad(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));

    setLoad(false);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return { data, load };
};
