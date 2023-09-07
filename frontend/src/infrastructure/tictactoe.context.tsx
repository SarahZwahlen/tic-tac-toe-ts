import { createContext, useContext, useState } from "react";
import { Player } from "./types/player.type";

type TitTacToeContextType = {
  round: number;
  player1: Player | null;
  player2: Player | null;
  createPlayer: (number: number, playerData: Player) => void;
  incrementRound: () => void;
  resetRound: () => void;
  resetPlayers: () => void;
};

const TicTacToeContext = createContext<TitTacToeContextType>({
  round: 0,
  player1: null,
  player2: null,
  createPlayer: (number: number, playerData: Player) => {},
  incrementRound: () => {},
  resetRound: () => {},
  resetPlayers: () => {},
});

const useTicTacToeContext = () => useContext(TicTacToeContext);

const TicTacToeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  const [round, setRound] = useState<number>(0);

  const createPlayer = (number: number, playerData: Player) => {
    number === 1 ? setPlayer1(playerData) : setPlayer2(playerData);
  };

  const incrementRound = () => {
    setRound(round + 1);
  };

  const resetRound = () => {
    setRound(0);
  };

  const resetPlayers = () => {
    setPlayer1(null);
    setPlayer2(null);
  };

  const ticTacToeContext: TitTacToeContextType = {
    player1,
    player2,
    round,
    createPlayer,
    incrementRound,
    resetRound,
    resetPlayers,
  };

  return (
    <TicTacToeContext.Provider value={ticTacToeContext}>
      {children}
    </TicTacToeContext.Provider>
  );
};

export { useTicTacToeContext, TicTacToeProvider };
