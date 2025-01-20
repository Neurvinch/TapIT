import { createContext, useCallback, useContext, useState } from 'react';
import { GAME_CONFIG } from '../GAME_CONFIG';

const GameStateContext = createContext();

 const GameStateProvider = ({ Children }) => {
    const [tapsLeft, setTapsLeft] = useState(GAME_CONFIG.initialTaps);
    const [sessionTapCount, setSessionTapCount] = useState(0);
    const [dailyTapCount, setDailyTapCount] = useState(0);
    const [dailyTapLimit, setDailytapLimit] = useState(GAME_CONFIG.dailyTapLimit);
    const [totalGems, setTotalGems] = useState(0);
   // const [lastRegenTime, setLastRegenTime] = useState(Date.now());

    const addGems = useCallback((amount) => {
        setTotalGems((prev) => prev + amount);
    }, []);

    const spendGems = useCallback((amount) => {
        if (totalGems >= amount) {
            setTotalGems((prev) => prev - amount);
            return true;
        }
        return false;
    }, [totalGems]);

    const resetGame = useCallback(() => {
        // Reset all game state variables to their initial values
        setTapsLeft(GAME_CONFIG.initialTaps);
        setSessionTapCount(0);
        setDailyTapCount(0);
        setDailytapLimit(GAME_CONFIG.dailyTapLimit);
        setTotalGems(0);
        setLastRegenTime(Date.now());
    }, []);

    const value = {
        tapsLeft,
        sessionTapCount,
        dailyTapCount,
        dailyTapLimit,
        totalGems,
        
        addGems,
        spendGems,
        resetGame,
        setTapsLeft,
        setDailyTapCount
    };

    return (
        <GameStateContext.Provider value={value}>
            {Children}
        </GameStateContext.Provider>
    );
}

 export default GameStateProvider;

export const useGameState = () => {
    return useContext(GameStateContext);
}
