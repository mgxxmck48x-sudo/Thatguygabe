
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GAMES_DATA } from '../data/games';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isCloaked, setIsCloaked] = useState(false);

  const handleRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * GAMES_DATA.length);
    const randomGameId = GAMES_DATA[randomIndex].id;
    navigate(`/play/${randomGameId}`);
  };

  const handlePanic = () => {
    window.location.href = 'https://classroom.google.com';
  };

  const toggleCloak = () => {
    const newStatus = !isCloaked;
    setIsCloaked(newStatus);
    
    if (newStatus) {
      document.title = 'Google Docs';
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (link) link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
    } else {
      document.title = 'Nexus Games';
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (link) link.href = '/favicon.ico';
    }
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
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">Browse</Link>
            
            <button 
              onClick={toggleCloak}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                isCloaked 
                ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Change tab name to 'Google Docs'"
            >
              <i className={`fa-solid ${isCloaked ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              {isCloaked ? 'CLOAKED' : 'CLOAK TAB'}
            </button>

            <button 
              onClick={handleRandomGame}
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl font-semibold text-sm transition-all border border-slate-800"
            >
              Random
            </button>

            <button 
              onClick={handlePanic}
              className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
            >
              <i className="fa-solid fa-circle-exclamation"></i>
              PANIC
            </button>
          </div>

          <div className="md:hidden flex gap-2">
            <button onClick={handlePanic} className="p-2 text-red-500">
               <i className="fa-solid fa-circle-exclamation text-2xl"></i>
            </button>
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
