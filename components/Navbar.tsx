
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GAMES_DATA } from '../data/games';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * GAMES_DATA.length);
    const randomGameId = GAMES_DATA[randomIndex].id;
    navigate(`/play/${randomGameId}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="fa-solid fa-gamepad text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">NEXUS<span className="text-indigo-500">GAMES</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">Browse</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">Requests</a>
            <button 
              onClick={handleRandomGame}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20"
            >
              Random Game
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-slate-400">
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
