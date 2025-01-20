import { createContext, useCallback, useState } from 'react';
import { GAME_CONFIG } from '../GAME_CONFIG';

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => { // Changed 'Children' to 'children'
    const [tapsLeft, setTapsLeft] = useState(GAME_CONFIG.initialTaps);
    const [sessionTapCount, setSessionTapCount] = useState(0);
    const [dailyTapCount, setDailyTapCount] = useState(0);
    const [dailyTapLimit, setDailyTapLimit] = useState(GAME_CONFIG.dailyTapLimit);
    const [totalGems, setTotalGems] = useState(0);

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
        setTapsLeft(GAME_CONFIG.initialTaps);
        setSessionTapCount(0);
        setDailyTapCount(0);
        setDailyTapLimit(GAME_CONFIG.dailyTapLimit);
        setTotalGems(0);
    }, []);

    return (
        <GameStateContext.Provider value={{
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
        }}>
            {children} {/* Ensure children are rendered */}
        </GameStateContext.Provider>
    );
}
