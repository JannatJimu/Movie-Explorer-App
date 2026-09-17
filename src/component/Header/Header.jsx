import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>

            <span className="text-xl font-bold tracking-wide text-white">
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-red-500"
                  : "text-gray-300 transition hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-red-500"
                  : "text-gray-300 transition hover:text-white"
              }
            >
              Movies
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/movies"
            className="hidden rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 md:block"
          >
            Explore Movies
          </Link>

          {/* Mobile Menu  */}
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-2xl text-white transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-72 transform bg-slate-950 p-6 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🎬</span>

            <span className="font-bold text-white">
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </Link>

          <button
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-red-600"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-3">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/movies"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            🎬 Movies
          </NavLink>

        </nav>

        <div className="mt-8 border-t border-white/10 pt-6">
          <Link
            to="/movies"
            onClick={closeMenu}
            className="block w-full rounded-lg bg-red-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-red-700"
          >
            Explore Movies
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Header;