import { useInfiniteQuery } from "@tanstack/react-query";
import { Movies } from "../../../api/apiAgent";
import MovieList from "./MovieList";
import Button from "../../common/Button";

function MovieSearch({ search }) {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", "search", search],
    queryFn: ({ pageParam }) => Movies.search(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
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

  const movies = data.pages.flatMap((page) => page.results);

  return (
    <div className="flex flex-col gap-6">
      <MovieList movies={movies} />
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || status === "loading" || isFetchingNextPage}
          className="self-center"
        >
          {isFetchingNextPage || status === "loading"
            ? "Loading ..."
            : "Load More"}
        </Button>
      )}
    </div>
  );
}

export default MovieSearch;
