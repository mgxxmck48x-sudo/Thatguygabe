
import { Game, GameCategory } from '../types';

export const GAMES_DATA: Game[] = [
  {
    id: 'slope',
    title: 'Slope',
    description: 'The ultimate 3D running game. Control a ball rolling down a steep slope. Avoid obstacles and reach for the high score!',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://slope-game.github.io/',
    category: GameCategory.ACTION,
    tags: ['3D', 'fast', 'high-score']
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    description: 'The perfect game for the armchair quarterback. Can you manage your team and lead them to the ultimate prize?',
    thumbnail: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://game31211.github.io/rb1/',
    category: GameCategory.SPORTS,
    tags: ['football', 'retro', 'management']
  },
  {
    id: '1v1-lol',
    title: '1v1.LOL',
    description: 'Build and shoot in this competitive third-person shooter. Practice your building skills and fight against others.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://box-io.github.io/1v1-lol/',
    category: GameCategory.ACTION,
    tags: ['multiplayer', 'shooter', 'build']
  },
  {
    id: 'run-3',
    title: 'Run 3',
    description: 'Run, skate, and jump through a series of tunnels in space. Gravity is just a suggestion.',
    thumbnail: 'https://images.unsplash.com/photo-1478479474719-173d101c4769?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://lekug.github.io/run3/',
    category: GameCategory.ACTION,
    tags: ['space', 'gravity', 'runner']
  },
  {
    id: 'drive-mad',
    title: 'Drive Mad',
    description: 'Can you reach the finish line without flipping your truck? Challenging physics-based driving.',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://drive-mad.github.io/',
    category: GameCategory.ARCADE,
    tags: ['car', 'physics', 'levels']
  },
  {
    id: 'bitlife',
    title: 'BitLife',
    description: 'Live your best life... or your worst. Make choices from birth to death in this life simulator.',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://bitlifeonline.io/',
    category: GameCategory.STRATEGY,
    tags: ['simulator', 'text-based', 'choices']
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    description: 'Capture as much territory as possible. Be careful, your tail is your weakness!',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://paper-io.com/',
    category: GameCategory.ARCADE,
    tags: ['io', 'multiplayer', 'territory']
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    description: 'Click the cookie, buy grandmas, and build an intergalactic cookie empire.',
    thumbnail: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://cookieclicker.ee/',
    category: GameCategory.CLASSIC,
    tags: ['idle', 'clicker', 'addictive']
  },
  {
    id: 'tetris',
    title: 'Tetris Classic',
    description: 'The world-famous block-stacking puzzle game. Clear lines and reach higher levels.',
    thumbnail: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://tetris.com/play-tetris',
    category: GameCategory.PUZZLE,
    tags: ['classic', 'puzzle', 'blocks']
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    description: 'Awesome bike racing game with crazy levels and stunts. Flip for time reductions!',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://moto-x3m.io/',
    category: GameCategory.ARCADE,
    tags: ['bike', 'racing', 'stunts']
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    description: 'Why did the chicken cross the road? Tap to jump and avoid traffic in this endless hopper.',
    thumbnail: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://crossy-road.github.io/',
    category: GameCategory.ARCADE,
    tags: ['endless', 'simple', 'hopper']
  },
  {
    id: '2048',
    title: '2048',
    description: 'Swipe to move tiles. When two tiles with the same number touch, they merge into one!',
    thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://play2048.co/',
    category: GameCategory.PUZZLE,
    tags: ['math', 'numbers', 'logic']
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    description: 'Jump and fly your way through danger in this rhythm-based platformer.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://geometrydash.io/',
    category: GameCategory.ACTION,
    tags: ['rhythm', 'hard', 'platformer']
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    description: 'Run through the subway, dodge trains, and collect coins in this endless runner.',
    thumbnail: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://subway-surfers.github.io/',
    category: GameCategory.ACTION,
    tags: ['runner', 'endless', 'mobile-classic']
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    description: 'Battle your way through musical challenges to impress the Girlfriends Dad.',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://ubg77.github.io/edit/fnf/',
    category: GameCategory.ACTION,
    tags: ['music', 'rhythm', 'battle']
  },
  {
    id: 'minecraft-classic',
    title: 'Minecraft Classic',
    description: 'The original creative building game. Build anything you can imagine with friends in your browser.',
    thumbnail: 'https://images.unsplash.com/photo-1627163439134-7a8c47ee80c7?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://classic.minecraft.net/',
    category: GameCategory.CLASSIC,
    tags: ['building', 'survival', 'multiplayer']
  },
  {
    id: 'pacman',
    title: 'Google Pac-Man',
    description: 'The classic 1980 arcade game. Navigate the maze, eat pellets, and avoid the ghosts!',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: GameCategory.ARCADE,
    tags: ['classic', 'retro', 'google']
  },
  {
    id: 'smash-karts',
    title: 'Smash Karts',
    description: '3D multiplayer kart battle game. Drive fast, collect weapons, and blow up other karts!',
    thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80',
    iframeUrl: 'https://smashkarts.io/',
    category: GameCategory.ACTION,
    tags: ['multiplayer', 'kart', 'battle']
  }
];
