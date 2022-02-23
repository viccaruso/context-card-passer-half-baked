import {
  createContext,
  useContext,
  useState,
} from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

export default function GameProvider({ children }) {


  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);


  const gameStateAndSetters = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,
  };

  return <GameContext.Provider value={gameStateAndSetters}>
    { children }
  </GameContext.Provider>;

}

export function useGameContext() {
  return useContext(GameContext);
}