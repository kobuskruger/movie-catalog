import MovieSearch from "../components/features/movies/MovieSearch";
import SearchBox from "../components/common/SearchBox";
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router-dom";

function MovieSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedSearch = useDebounce(searchParams.get("q"), 800);

  const handleSetSearch = (q) => {
    if (q?.length > 0) {
      setSearchParams((prev) => {
        prev.set("q", q);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete("q");
        return prev;
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <SearchBox
        placeholder={"Search for a movie"}
        setSearch={handleSetSearch}
        search={searchParams.get("q") || ""}
      />
      <MovieSearch search={debouncedSearch} />
    </div>
  );
}

export default MovieSearchPage;
