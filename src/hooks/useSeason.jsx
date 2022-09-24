import { useState, useEffect } from "react";

export const useSeason = (year, season, operation, page) => {
  const [data, setData] = useState([]);
  const [loada, setLoada] = useState(false);
  const [pages, setPages] = useState("");

  const getAnimeSeason = async () => {
    if (operation == true) {
      setLoada(true);

     await fetch(
       `https://api.jikan.moe/v4/seasons/${year}/${season}?page=${page}&order_by=score&sort=desc`
     ).then((response) =>
       response
         .json()
         .then((response) => {
           setData(response.data);
           setPages(response.pagination.last_visible_page);
           setLoada(false);
         })
         .catch((err) => console.log(err))
     );
    }
  };

  useEffect(() => {
    getAnimeSeason();
  }, [year, season, operation, page]);
  return { data, loada, pages };
};
