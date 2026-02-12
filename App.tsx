
import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useSearchParams, useLocation } from 'react-router-dom';
import { GAMES_DATA } from './data/games';
import { Game, GameCategory } from './types';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'All'>('All');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <header className="mb-12 text-center relative py-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent blur-3xl"></div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white via-white to-indigo-500/50 bg-clip-text text-transparent tracking-tighter">
          NEXUS GAMES
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          The high-performance unblocked portal. Fast, stealthy, and always available.
        </p>
      </header>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between sticky top-24 z-40 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-2xl">
        <div className="relative w-full md:w-96">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
          <input 
            type="text" 
            placeholder="Search games, tags, or genres..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-200 placeholder:text-slate-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {['All', ...Object.values(GameCategory)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap uppercase tracking-widest ${
                selectedCategory === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                : 'bg-slate-900 text-slate-500 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-grow bg-white/5"></div>
            <h2 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
                {selectedCategory === 'All' ? 'Discover All Titles' : `${selectedCategory} Collection`}
            </h2>
            <div className="h-px flex-grow bg-white/5"></div>
        </div>
        
        {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-32 text-slate-500">
            <i className="fa-solid fa-ghost text-7xl mb-6 opacity-10"></i>
            <p className="text-xl font-bold">Nothing found in the void.</p>
            <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-4 text-indigo-500 font-bold hover:underline"
            >
                Clear all filters
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/play/:id" element={<GamePlayer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
