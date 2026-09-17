import React from "react";

const MovieCard = ({ movie, onDetails }) => {
  const poster =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const rating = movie.rating?.average || "N/A";

  const releaseYear = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-red-500/40">

      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={movie.name}
          className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3 rounded-lg bg-black/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-white">
          {movie.name}
        </h2>

        <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
          <span>📅 {releaseYear}</span>

          {movie.genres?.length > 0 && (
            <span className="truncate">
              🎭 {movie.genres[0]}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onDetails(movie)}
          className="mt-5 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;