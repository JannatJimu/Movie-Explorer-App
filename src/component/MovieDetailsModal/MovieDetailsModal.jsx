import React from "react";

const MovieDetailsModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const image =
        movie.image?.original ||
        movie.image?.medium ||
        "https://via.placeholder.com/800x450?text=No+Image";

    const rating = movie.rating?.average || "N/A";

    const releaseDate = movie.premiered
        ? new Date(movie.premiered).toLocaleDateString()
        : "N/A";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-red-600"
                >
                    ✕
                </button>

                <div className="relative">
                    <img
                        src={image}
                        alt={movie.name}
                        className="h-64 w-full object-cover sm:h-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        {movie.name}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
                            ⭐ {rating}
                        </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
                            📅 {releaseDate}
                        </span>

                        {movie.runtime && (
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
                                ⏱️ {movie.runtime} min
                            </span>
                        )}
                    </div>

                    {movie.genres?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="rounded-md bg-red-500/10 px-3 py-1 text-sm text-red-400"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <h3 className="mb-2 text-xl font-semibold text-white">
                            Overview
                        </h3>

                        <div
                            className="leading-7 text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html:
                                    movie.summary ||
                                    "<p>No description available for this show.</p>",
                            }}
                        />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {movie.language && (
                            <div className="rounded-lg bg-slate-800 p-4">
                                <p className="text-sm text-gray-500">Language</p>
                                <p className="mt-1 font-medium text-white">
                                    {movie.language}
                                </p>
                            </div>
                        )}

                        {movie.status && (
                            <div className="rounded-lg bg-slate-800 p-4">
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="mt-1 font-medium text-white">
                                    {movie.status}
                                </p>
                            </div>
                        )}

                        {movie.network?.name && (
                            <div className="rounded-lg bg-slate-800 p-4">
                                <p className="text-sm text-gray-500">Network</p>
                                <p className="mt-1 font-medium text-white">
                                    {movie.network.name}
                                </p>
                            </div>
                        )}

                        {movie.type && (
                            <div className="rounded-lg bg-slate-800 p-4">
                                <p className="text-sm text-gray-500">Type</p>
                                <p className="mt-1 font-medium text-white">
                                    {movie.type}
                                </p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-8 w-full rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsModal;