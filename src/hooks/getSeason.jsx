import { useState, useEffect } from "react";

export const getSeason = () => {
  const [seasons, setSeasons] = useState([]);
  const [operation, setOperation] = useState(false);
  const [load, setLoad] = useState(false);
  const [seasonni, setSeasonsni] = useState(null);
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const getSeasons = async () => {
    setLoad(true);
    await fetch(`https://api.jikan.moe/v4/seasons`)
      .then((response) => response.json())
      .then((response) => {
        setSeasons(response.data);
        setOperation(true);
        setLoad(false);
        const seasonDefault = response.data.filter(
          (season) => season.year == anoAtual
        );
        setSeasonsni(seasonDefault[0]);
      });
  };

  useEffect(() => {
    getSeasons();
  }, []);

  return { seasons, operation, load, seasonni };
};
