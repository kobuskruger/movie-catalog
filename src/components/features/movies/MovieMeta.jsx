import { IconStarFilled } from "@tabler/icons-react";
import { roundToDecimalPlace } from "../../../utils/calculations";

function MovieMeta({ voteAverage, voteCount, releaseDate }) {
  return (
    <div>
      <span className="text-slate-600">
        <span className="text-md font-semibold">
          <IconStarFilled
            size={16}
            className="mr-2 inline align-middle text-yellow-500"
          ></IconStarFilled>
          {roundToDecimalPlace(voteAverage, 1)}
        </span>{" "}
        <span className="text-sm">/ 10 ({voteCount} votes)</span>
      </span>
      <span className="mx-2">•</span>
      <span className="text-sm text-slate-600">Released: {releaseDate}</span>
    </div>
  );
}

export default MovieMeta;
