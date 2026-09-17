import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
        
        <div>
          <h2 className="text-lg font-bold">
            🎬 Movie<span className="text-red-500">Explorer</span>
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Discover. Explore. Enjoy.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <a
          href="https://github.com/JannatJimu"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          GitHub
        </a>

      </div>
    </footer>
  );
};

export default Footer;