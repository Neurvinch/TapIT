const Header = () =>{ 
  return (
    <header className="logo-container">
      <div className="header-left">
        <p className="gem-counter">
          <span className="gemCount" id="gemCount">0</span>
          <br />
          GEMS
        </p>
      </div>
      <div className="header-center">
        <img src="img/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <p className="leaderboard_counter">
          <span className="leaderboardcounter" id="leaderboardcount">0</span>
          <br />
          Leaderboard
        </p>
      </div>
    </header>
  );
}
  export default Header;
  