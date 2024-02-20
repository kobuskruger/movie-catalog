import { useLocalStorage } from "@uidotdev/usehooks";
import { IconHeart } from "@tabler/icons-react";

function MovieFavoriteIcon({ movie }) {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
    "favoriteMovies",
    [],
  );

  const isFavorite = favoriteMovies.some((m) => m.id === movie.id);

  return (
    <IconHeart
      onClick={
        isFavorite
          ? () =>
              setFavoriteMovies((p) => [...p.filter((m) => m.id !== movie.id)])
          : () => setFavoriteMovies((p) => [...p, movie])
      }
      color="red"
      style={{
        fill: isFavorite ? "red" : "none",
        cursor: "pointer",
      }}
    />
  );
}

export default MovieFavoriteIcon;
