import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Genres } from "../api/apiAgent";

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [genres, setGenres] = useState({});
  const { data, status } = useQuery({
    queryKey: ["genres"],
    queryFn: Genres.getGenres,
  });

  useEffect(() => {
    if (status === "success") {
      for (let genre of data.genres) {
        setGenres((prev) => ({ ...prev, [genre.id]: genre.name }));
      }
    }
  }, [status, data]);

  return (
    <OptionsContext.Provider value={{ genres }}>
      {children}
    </OptionsContext.Provider>
  );
};
