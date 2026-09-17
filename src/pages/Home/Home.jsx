import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-20">
        <div className="max-w-3xl">
          
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Welcome to MovieExplorer
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Discover Your
            <span className="block text-red-500">
              Next Favorite Movie
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
            Explore thousands of movies and TV shows, discover new stories,
            check ratings, and find something perfect to watch tonight.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/movies"
              className="rounded-lg bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
            >
              Explore Now
            </Link>

            <a
              href="#about"
              className="rounded-lg border border-white/30 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p>Movies & Shows</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">4.8</p>
              <p>Average Rating</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Free</p>
              <p>To Explore</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;