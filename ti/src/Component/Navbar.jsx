const Navbar = () => {
  return(
    <nav className="navbar">
      <a href="profile.html" className="nav-item" data-default-src="img/navbar/Icon2_bw.png" data-active-src="img/navbar/Icon2_color.png">
        <img src="img/navbar/Icon2_bw.png" alt="Profile" />
      </a>
      <a href="leaderboard.html" className="nav-item" data-default-src="img/navbar/Icon3_bw.png" data-active-src="img/navbar/Icon3_color.png">
        <img src="img/navbar/Icon3_bw.png" alt="Leaderboard" />
      </a>
      <a href="tap.html" className="nav-item active" data-default-src="img/navbar/Icon1_bw.png" data-active-src="img/navbar/Icon1_color.png">
        <img src="img/navbar/Icon1_color.png" alt="Tap" />
      </a>
      <a href="boosts.html" className="nav-item" data-default-src="img/navbar/Icon4_bw.png" data-active-src="img/navbar/Icon4_color.png">
        <img src="img/navbar/Icon4_bw.png" alt="Boosts" />
      </a>
    </nav>
  );
}

export default Navbar