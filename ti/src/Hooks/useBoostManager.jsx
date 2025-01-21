import { useContext, useEffect ,useRef,useState } from "react"
import { GameStateContext } from "../Context/GamestateProvider"
import { useCallback } from "react"
import { GAME_CONFIG } from "../GAME_CONFIG"



const UseBoostManager = () => {
  const[activeBoosts,setActiveBoosts] = useState({
    potion:false,
    sword:false,
    bag:false,
    book : false,
  })

  const boostTimers = useRef({
    potion: null,
    sword:null,
    bag:null,
    book:null,
  })
  const potionInterval = useRef(null);

  const {setDailyLimit,spendGems,tapsLeft ,dailyTapCount} = useContext(GameStateContext)
  


const activateBoost = useCallback((boostType,duration)=>{
  if( activeBoosts[boostType]){
 return false;
  }
  setActiveBoosts((prev) =>({
    ...prev,[boostType ] : true 
  }))
  if(boostType === "potion"){
    startPotionEffect();
  } 
   if(boostType === "boook"){
    setDailyLimit(GAME_CONFIG.dailyTapLimit * 2)
  }

  startBoostTimer(duration, boostType);
  setActiveBoosts();
  updateBoostDisplay();
  return true;


},[])

const deactivateBoost = useCallback((boostType)=>{
  setActiveBoosts(prev=>({
    ...prev,[boostType]:false
  }))
          if(boostType === "potion"){
            stopPotionEffect();
            }
            if(boostType === "book"){
              setDailyLimit(GAME_CONFIG.dailyTapLimit )
            }

            if(boostTimers.current(boostType)){
              clearTimeout(boostTimers.current(boostType))
              boostTimers.current[boostType] = null
            };
            removeBoostTimer(boostType);
            updateBoostDisplay();
            setActiveBoosts();
},[])

const handleBoostActivation = useCallback((boostType) => {
  if(!GAME_CONFIG.boostPrices[boostType] || activeBoosts[boostType]){
    return;
  }

  if(spendGems(GAME_CONFIG.boostPrices[boostType])){
    activateBoost(boostType,GAME_CONFIG.boostDurations[boostType])
  }
}, []);


   useEffect(() =>{
    const savedBoosts = localStorage.getItem('activeBoosts');
    if(savedBoosts){
      loadBoosts();
    }
    else {
      updateBoostDisplay();
    }
    return () =>{
  resetBoosts();
    }
   },[])

   const loadBoosts = useCallback(() =>{
    try {
      const savedBoosts = JSON.parse(localStorage.getItem('activeBoosts') || "{}");
      setActiveBoosts(savedBoosts);
       loadSavedTimers();
      
    } catch (error) {
       console.error('Error loading boosts:', error);
       resetBoosts();
    }
   },[])

   const loadSavedTimers = useCallback(() =>{
    const savedTimers = JSON.parse(localStorage.getItem("boostTimers") || "{}");
    const currentTime = Date.now();


   },[])

  

   const startPotionEffect = useCallback(()=>{
     if(potionInterval.current ){
      clearInterval(potionInterval.current);
     }

     potionInterval.current = setInterval(() =>{
       if(!activeBoosts.potion || tapsLeft <= 0||dailyTapCount <= 0 ){
        stopPotionEffect();
        return;
       }

     const effectiveTaps = 1;
     setTapsLeft(tapsLeft - effectiveTaps);
     setDailyTapCount(dailyTapCount - effectiveTaps);
     setSessionTapCount (sessionTapCount - effectiveTaps);

     const gemsEarned = GAME_CONFIG.gemsPerTap * effectiveTaps;
     addGems(gemsEarned);
     saveDailyCount(dailyTapCount);
     saveState();
     },GAME_CONFIG.potionInterval);
   },[])

   const stopPotionEffect = useCallback( ()=>{
    if(potionInterval.current){
      clearInterval(potionInterval.current);
      potionInterval.current = null;
    }
   },[])


  return{
    loadSavedTimers,
    startPotionEffect,
    stopPotionEffect,
    handleBoostActivation,
    deactivateBoost,
    activateBoost,
      loadBoosts,


     
  }
}

export default UseBoostManager