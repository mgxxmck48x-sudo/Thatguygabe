
export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  iframeUrl: string;
  category: GameCategory;
  tags: string[];
}

export enum GameCategory {
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  ARCADE = 'Arcade',
  SPORTS = 'Sports',
  CLASSIC = 'Classic',
  STRATEGY = 'Strategy'
}

export interface GameStore {
  games: Game[];
}
