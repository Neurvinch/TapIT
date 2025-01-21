// import { useContext } from "react";
// import {GameStateContext }from "../Context/GamestateProvider";
// import  useTapManager  from "../Hooks/useTapManager";
// import Header from "../Component/Header";
// import Navbar from "../Component/Navbar";

// const TapsPage = () => {
//     const { tapsLeft, totalGems, dailyTapLimit, dailyTapCount, sessionTapCount, resetGame } = useContext( GameStateContext );
//     const { handleTap ,endTapSeries,
//         resetTapSeries,
//         createTapEffects,
//         circleImage,
//     tapCircleRef } = useTapManager();

//     return (
//         <>
//             <h1>Taps Page</h1>

//             <div
//            id='tapCircle'
//            ref={tapCircleRef}
//            onClick={handleTap}
//            style={{
//             width:'200px',
//             height:'200px',
//             borderRadius:'50%',
//            // backgroundColor: `url(${circleImage}) no-repeat center/contain`,
//            }}
        
//         >
//              <img src={circleImage} alt="" />
//         </div>
//         <canvas 
//          id='particleCanvas' 
//          style={{
//             width: '100%',
//             height: '100%',

//          }}
//         />
// <Header/>
//             <p>Tap to earn gems</p>
//             <p>Taps left: {tapsLeft}</p>
//             <p>Total gems: {totalGems}</p>
//             <p>Daily tap limit: {dailyTapLimit}</p>
//             <p>Daily tap count: {dailyTapCount}</p>
//             <p>Session tap count: {sessionTapCount}</p>
//             <button onClick={handleTap}>Tap</button>
//             <button onClick={resetGame}>Reset Game</button>
//             <Navbar/>
//         </>
//     );
// }

// export default TapsPage;










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
      <header className="logo-container">
        <div className="header-left">
          <p className="gem-counter">
            <span className="gemCount gem-counter" id="gemCount">{totalGems.toFixed(3)}</span>
            <br />
            GEMS
          </p>
        </div>

        <div className="header-center">
          <img src="../public/img/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="header-right">
          <p className="leaderboard_counter">
            <span className="leaderboardcounter leaderboard_counter" id="leaderboardcount"></span>
            <br />
            Leaderboard
          </p>
        </div>
      </header>

     
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
      
      <Header />

      

      <Navbar />
    </>
  );
};

export default TapsPage;
