import { useContext } from "react";
import { OptionsContext } from "../../../stores/OptionsProvider";

function MovieGenreTagList({ genreIds }) {
  const { genres } = useContext(OptionsContext);

  return (
    <div className="flex flex-wrap gap-2">
      {genreIds.map((genreId) => (
        <span
          key={genreId}
          className="cursor-pointer rounded-full bg-gray-200 px-2 py-1 text-xs transition-colors duration-200 ease-in-out hover:bg-gray-300"
        >
          {genres[genreId]}
        </span>
      ))}
    </div>
  );
}

export default MovieGenreTagList;
