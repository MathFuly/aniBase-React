import { useEffect } from "react";
import { useState } from "react";

export const seasonNowFetch = (url) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState("");

  const getAnimes = async () => {
    setLoad(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));

    setLoad(false);
  };

  useEffect(() => {
    getAnimes();
    console.log(data);
  }, []);

  return { data, load };
};
