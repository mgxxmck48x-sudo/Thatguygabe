
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES_DATA } from '../data/games';
import { Game } from '../types';

const GamePlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const found = GAMES_DATA.find(g => g.id === id);
    if (found) setGame(found);
    window.scrollTo(0, 0);
  }, [id]);

  const handleReload = () => {
    setIframeKey(prev => prev + 1);
  };

  const handleOpenAboutBlank = () => {
    if (!game) return;
    const win = window.open('about:blank', '_blank');
    if (win) {
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      const iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.src = game.iframeUrl;
      win.document.body.appendChild(iframe);
    }
  };

  const handleOpenDirect = () => {
    if (game) {
      window.open(game.iframeUrl, '_blank');
    }
  };

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <i className="fa-solid fa-triangle-exclamation text-6xl text-slate-700 mb-6"></i>
        <h2 className="text-2xl font-bold text-white mb-2">Game not found</h2>
        <p className="text-slate-500 mb-8">The game you are looking for might have been moved or removed.</p>
        <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all">
          Return Home
        </Link>
      </div>
    );
  }

  const toggleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      try {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if ((iframe as any).webkitRequestFullscreen) {
          (iframe as any).webkitRequestFullscreen();
        } else if ((iframe as any).msRequestFullscreen) {
          (iframe as any).msRequestFullscreen();
        }
      } catch (e) {
        console.error("Fullscreen blocked by browser policy", e);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="animate-in fade-in slide-in-from-left duration-500">
          <nav className="flex gap-2 text-sm text-slate-500 mb-2">
            <Link to="/" className="hover:text-slate-300 flex items-center gap-1">
              <i className="fa-solid fa-house text-[10px]"></i>
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">{game.category}</span>
          </nav>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">{game.title}</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-right duration-500">
          <button 
            onClick={handleReload}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-sm transition-all border border-slate-700 text-slate-200"
            title="Reload Game"
          >
            <i className="fa-solid fa-rotate-right"></i>
            Reload
          </button>
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-sm transition-all border border-slate-700 text-slate-200"
          >
            <i className="fa-solid fa-expand"></i>
            Fullscreen
          </button>
          <button 
            onClick={handleOpenAboutBlank}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 text-white"
            title="Open in stealth about:blank page"
          >
            <i className="fa-solid fa-ghost"></i>
            Stealth Launch
          </button>
          <button 
            onClick={handleOpenDirect}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all border border-slate-800 text-slate-400"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Source
          </button>
        </div>
      </div>

      <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-800 ring-1 ring-white/5 animate-in zoom-in duration-700 group">
        <iframe 
          key={iframeKey}
          ref={iframeRef}
          id="game-iframe"
          src={game.iframeUrl} 
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          allow="autoplay; fullscreen; pointer-lock; gamepad"
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin"
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <i className="fa-solid fa-circle-info text-indigo-500"></i>
              Description
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {game.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {game.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-bold rounded-lg border border-slate-700 uppercase tracking-tighter">
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <i className="fa-solid fa-keyboard text-indigo-500"></i>
              Controls & Troubleshooting
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-slate-400 text-sm font-medium">Quick Fixes:</p>
                <ul className="text-slate-500 text-xs space-y-3">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-indigo-500 mt-1"></i>
                    <span>Use <strong>Stealth Launch</strong> if the game is blocked by filtering extensions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-indigo-500 mt-1"></i>
                    <span>Press <strong>Reload</strong> if the screen stays black for more than 5 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-indigo-500 mt-1"></i>
                    <span>Ensure you click the game window to enable sound and keyboard input.</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Movement</span>
                  <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-600 text-[10px] font-mono font-bold text-slate-200">WASD / ARROWS</kbd>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Action</span>
                  <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-600 text-[10px] font-mono font-bold text-slate-200">SPACE / ENTER</kbd>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Pause</span>
                  <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-600 text-[10px] font-mono font-bold text-slate-200">ESC / P</kbd>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2 text-white">
            <i className="fa-solid fa-bolt text-yellow-500"></i>
            Recommended
          </h3>
          <div className="space-y-4">
            {GAMES_DATA.filter(g => g.id !== id).sort(() => Math.random() - 0.5).slice(0, 5).map(rec => (
              <Link 
                key={rec.id} 
                to={`/play/${rec.id}`}
                className="flex gap-4 p-3 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all group backdrop-blur-sm"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-slate-800">
                  <img src={rec.thumbnail} alt={rec.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <h4 className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors line-clamp-1 truncate text-sm">{rec.title}</h4>
                  <span className="text-[9px] text-indigo-400 mt-1 uppercase font-black tracking-widest">{rec.category}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-800 p-8 rounded-3xl text-center shadow-2xl shadow-indigo-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <h4 className="text-2xl font-black text-white mb-2 italic">CLOAKED</h4>
            <p className="text-indigo-100/80 text-sm mb-6 leading-relaxed">Don't forget to use <strong>Stealth Mode</strong> in the navbar to hide this tab from prying eyes.</p>
            <div className="flex flex-col gap-2">
                <button className="w-full py-3 bg-white text-indigo-700 font-black rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-widest">
                Support Discord
                </button>
                <button className="w-full py-3 bg-indigo-900/30 text-white font-bold rounded-xl hover:bg-indigo-900/50 transition-all text-xs">
                Request a Game
                </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GamePlayer;
