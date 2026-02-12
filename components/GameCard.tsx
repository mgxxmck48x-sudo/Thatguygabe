
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link 
      to={`/play/${game.id}`}
      className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {game.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-black/50 backdrop-blur-md rounded text-[10px] uppercase font-bold text-slate-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{game.category}</span>
          <div className="flex gap-1">
            <i className="fa-solid fa-star text-yellow-500 text-[10px]"></i>
            <span className="text-slate-400 text-[10px] font-bold">4.8</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
          {game.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </Link>
  );
};

export default GameCard;
