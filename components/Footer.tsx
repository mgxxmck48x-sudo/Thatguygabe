
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-gamepad text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">NEXUS<span className="text-indigo-500">GAMES</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Nexus Games is dedicated to providing high-quality, web-based gaming experiences that bypass school and workplace filters. Play anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Explore</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Puzzle Challenges</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Arcade Classics</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Strategy Hits</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Support</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Report Broken Link</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Suggest a Game</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2024 Nexus Games Unblocked. All rights reserved. Game icons and trademarks belong to their respective owners.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-600 hover:text-white transition-colors"><i className="fa-brands fa-discord text-xl"></i></a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
