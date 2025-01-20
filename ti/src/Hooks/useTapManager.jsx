import { useCallback } from 'react';
import{ useGameState} from '../Context/GamestateProvider';
import { GAME_CONFIG } from '../GAME_CONFIG';

 export const useTapManager = () => {
    const { tapsLeft, dailyTapCount, setTapsLeft, setDailyTapCount, addGems } = useGameState();

    const handleTap = useCallback(() => {
        if (tapsLeft <= 0) {
            alert("No taps left! Please reset the game.");
            return;
        }
        if (dailyTapCount <= 0) {
            alert("Daily tap limit reached! Please reset the game.");
            return;
        }

        const effectiveTaps = 1;
        updateTapState(effectiveTaps);
    }, [tapsLeft, dailyTapCount]);

    const updateTapState = useCallback((effectiveTaps) => {
        setTapsLeft(tapsLeft - effectiveTaps);
        setDailyTapCount(Math.max(0, dailyTapCount - 1));
        addGems(GAME_CONFIG.gemsPerTap * effectiveTaps);
    }, [tapsLeft, dailyTapCount, addGems]);

    return { handleTap };
}


