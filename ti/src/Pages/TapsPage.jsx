
import { useContext } from "react";
import { GameStateContext } from "../Context/GamestateProvider";
import useTapManager from "../Hooks/useTapManager";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";

const TapsPage = () => {
  const { 
    tapsLeft, 
    totalGems, 
    dailyTapLimit, 
    dailyTapCount, 
    sessionTapCount, 
    resetGame 
  } = useContext(GameStateContext);

  const { 
    handleTap, 
    endTapSeries, 
    resetTapSeries, 
    createTapEffects, 
    circleImage, 
    tapCircleRef 
  } = useTapManager();

  return (
    <>
      <Header/>

     
          <canvas id="particleCanvas"></canvas>

          <div className="numberstats_counter">
            <p className="tap-counter">
              <span className="tapcounter" id="tapCount">{tapsLeft}</span>
            </p>
          </div>

          <div className="numberstats">
            <p className="tap-session-counter">
              <span className="tapsessioncount" id="sessionTapCount">{sessionTapCount}</span>
              <br />
              Current game taps
            </p>
            <p className="tap-daily-counter">
              <span className="tapdailycount" id="dailyTapCount">{dailyTapCount}</span>
              <br />
              Daily taps limit
            </p>
          </div>

          <div 
            className="big-circle" 
            id="tapCircle" 
            ref={tapCircleRef} 
            onClick={handleTap} 
            
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          >
            <img 
               onClick={createTapEffects}
               ref={tapCircleRef}
              id="circleImage" 
              src={circleImage || "img/Chest/1/Chest1_1.png"} 
              alt="Circle content" 
            />
          </div>
      
     

      

      <Navbar />
    </>
  );
};

export default TapsPage;
