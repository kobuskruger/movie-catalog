import { IconMovie } from "@tabler/icons-react";

function MoviePoster({ title, posterUrl }) {
  return (
    <>
      {posterUrl ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterUrl}`}
          alt={title}
          className="max-h-64 max-w-max self-center rounded-lg sm:max-h-80 sm:max-w-56"
        />
      ) : (
        <div className="flex h-64 max-h-64 w-56 max-w-full items-center justify-center self-center rounded-lg bg-gray-300 sm:max-h-80 sm:max-w-56">
          <IconMovie size={48} />
        </div>
      )}
    </>
  );
}

export default MoviePoster;
