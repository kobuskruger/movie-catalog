import { useQuery } from "@tanstack/react-query";
import { Movies } from "../../../api/apiAgent";
import MovieList from "./MovieList";

function MovieSearch({ search }) {
  const { data, status, error } = useQuery({
    queryKey: ["movies", "search", search],
    queryFn: () => Movies.search(search),
    config: {
      suspense: true,
    },
    enabled: !!search,
  });

  if (status === "idle" || !search) {
    return <div>Search for a movie</div>;
  }

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (data?.results?.length === 0 && search) {
    return <div>No movies found</div>;
  }

  return <MovieList movies={data.results} />;
}

export default MovieSearch;
