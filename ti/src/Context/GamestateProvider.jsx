import { createContext, useCallback, useState } from 'react';
import { GAME_CONFIG } from '../GAME_CONFIG';

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => { // Changed 'Children' to 'children'
    const [tapsLeft, setTapsLeft] = useState(GAME_CONFIG.initialTaps);
    const [sessionTapCount, setSessionTapCount] = useState(0);
    const [dailyTapCount, setDailyTapCount] = useState(1000);
    const [dailyTapLimit, setDailyTapLimit] = useState(GAME_CONFIG.dailyTapLimit);
    const [totalGems, setTotalGems] = useState(0);
    const [lastRegenTime , setLastRegenTime] = useState(Date.now());
  let lastSavetime;


    const saveState = useCallback ( () =>{
        try {
            const state = {
                tapsLeft,
                sessionTapCount,
                dailyTapCount,
                dailyTapLimit,
                totalGems,
                lastSavetime : Date.now()
            };
            localStorage.setItem('tapGameState' ,JSON.stringify(state))
            localStorage.setItem('tapGameData_Backup' , JSON.stringify(state));
            
        } catch (error) {
            console,error( 'Error saving state' ,error);
            const backup =localStorage.getItem("tapGameData_Backup")
            if(backup){
                localStorage.setItem('tapGameState',backup)
            }
        }
    },[ tapsLeft, sessionTapCount,lastSavetime,totalGems,dailyTapCount,dailyTapLimit])


    const saveDailyTapCount = useCallback( (remainingTaps) =>{
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem("dailyTapData",JSON.stringify({
            date:today,
            remainingTaps,
            dailyTapLimit
        }))

    },[dailyTapLimit])


    const regenratetaps = useCallback( () =>{
        const currentTime = Date.now();
        const ElapsedTime = currentTime - lastRegenTime;
        const tapsToRegen = Math.floor(ElapsedTime / GAME_CONFIG.tapRegenInterval)

        if(tapsToRegen > 0){
            const newDailyCount = Math.min(dailyTapLimit, dailyTapCount + tapsToRegen);
            setDailyTapCount(newDailyCount);
            saveDailyTapCount(newDailyCount);
            setLastRegenTime(lastRegenTime + tapsToRegen * GAME_CONFIG.tapRegenInterval);
            saveState();

        }
    },[ dailyTapCount,dailyTapLimit,lastRegenTime,saveDailyTapCount,saveState])

    const resetDailyTaps = useCallback( () =>{
        setDailyTapCount(GAME_CONFIG.dailyTapCount);
        saveDailyTapCount(GAME_CONFIG.dailyTapCount);
        saveDailyTapCount(GAME_CONFIG.dailyTapLimit)
    },[])

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
            setDailyTapCount,
            saveState,saveDailyTapCount
        }}>
            {children} {/* Ensure children are rendered */}
        </GameStateContext.Provider>
    );
}
