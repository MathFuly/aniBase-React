import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return { handleSubmit, search, setSearch };
};
