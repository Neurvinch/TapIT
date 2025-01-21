import { GameStateContext } from "../Context/GamestateProvider";
import { useContext } from "react";
const Header = () =>{ 
  const {totalGems } = useContext(GameStateContext);
  return (
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
        <span className="leaderboardcounter leaderboard_counter" id="leaderboardcount">5674</span>
        <br />
        Leaderboard
      </p>
    </div>
  </header>
  );
}
  export default Header;
  