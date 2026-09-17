import React, { useEffect, useState } from "react";
import MovieCard from "../../component/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearchText(value);

    if (!value.trim()) {
      try {
        setLoading(true);

        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();

        setMovies(data);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setMovies(searchResults);
    } catch (error) {
      setError("Unable to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Movie Collection
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Explore Movies & Shows
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Search and discover your favorite movies and TV shows.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>

            <input
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search for a movie..."
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-12 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-500"
            />
          </div>
        </div>

        {loading && (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500"></div>

              <p className="text-gray-400">
                Loading movies...
              </p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-5xl">🎬</p>

            <h2 className="mt-4 text-2xl font-semibold">
              No movies found
            </h2>

            <p className="mt-2 text-gray-400">
              Try searching with a different title.
            </p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;