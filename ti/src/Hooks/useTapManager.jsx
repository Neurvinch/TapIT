import { useCallback, useContext , useState,useRef , useEffect } from 'react';
import{ GameStateContext } from '../Context/GamestateProvider';
import { GAME_CONFIG } from '../GAME_CONFIG';

  const useTapManager = () => {
    const { tapsLeft, dailyTapCount, setTapsLeft, setDailyTapCount, addGems,saveState,saveDailyTapCount ,regenerateTaps,setSessionTapCount} = useContext(GameStateContext);


    const [circleImage, setCircleImage] = useState("../public/img/Chest/1/Chest1_1.png");
  
  
    const tapCircleRef = useRef(null);
    const particleSystemRef = useRef(null);
  
    const createTapEffects = useCallback(() => {
      if (tapCircleRef.current) {
        setCircleImage("../public/img/Chest/1/Chest1_3.png");
  
        const rect = tapCircleRef.current.getBoundingClientRect();
        if (particleSystemRef.current) {
          particleSystemRef.current.createParticle(rect.width / 2, rect.height / 2);
        }
  
        setTimeout(() => {
          if (tapsLeft > 0) {
            setCircleImage("../public/img/Chest/1/Chest1_1.png");
          }
        }, 100);
      }
    }, [tapsLeft]);
  
    const resetTapSeries = useCallback(() => {
      setTapsLeft( GAME_CONFIG.initialTaps);
      setSessionTapCount  (0);
  
      setCircleImage("../public/img/Chest/1/Chest1_1.png");
      setTapsLeft(tapsLeft);
  
      saveState();
    }, []);
  
    const endTapSeries = useCallback(() => {
      if (tapCircleRef.current) {
        setCircleImage("../public/img/Chest/1/Chest1_3.png");
  
        const rect = tapCircleRef.current.getBoundingClientRect();
        if (particleSystemRef.current) {
          particleSystemRef.current.createParticle(rect.width / 2, rect.height / 2);
        }
  
        const timeoutId = setTimeout(() => resetTapSeries(), 3000);
        return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
      }
    }, [resetTapSeries]);
  
    useEffect(() => {
    //   particleSystemRef.current = new ParticleSystem("particleCanvas");
    //   loadState();
  
      const regenInterval = setInterval(() => {
        regenerateTaps();
        setTapsLeft(tapsLeft);
      }, GAME_CONFIG.tapRegenInterval);
  
      return () => clearInterval(regenInterval); // Cleanup
    }, []);
  


    const handleTap = useCallback(() => {
        if (tapsLeft <= 0) {
            alert("No taps left! Please reset the game.");
            endTapSeries();
            return;
        }
        if (dailyTapCount <= 0) {
            alert("Daily tap limit reached! Please reset the game.");
            endTapSeries();
            return;
        }


        const effectiveTaps = 1;
        updateTapState(effectiveTaps);
    }, [tapsLeft, dailyTapCount]);

    const updateTapState = useCallback((effectiveTaps) => {
        setTapsLeft(tapsLeft - effectiveTaps);
        setDailyTapCount(Math.max(0, dailyTapCount - 1));
        createTapEffects();
        addGems(GAME_CONFIG.gemsPerTap * effectiveTaps);
        saveDailyTapCount( Math.max(0,dailyTapCount - effectiveTaps))
        saveState();
        
    }, [tapsLeft, dailyTapCount, addGems]);

    return { handleTap
        ,updateTapState,
        endTapSeries,
        resetTapSeries,
        createTapEffects,
        circleImage,
        tapCircleRef
        

     };
}
 export default useTapManager;


