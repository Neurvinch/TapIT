import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  // Define navigation items
  const navItems = [
    {
      name: "Profile",
      path: "/profile",
      defaultSrc: "../public/img/navbar/Icon2_bw.png",
      activeSrc: "../public/img/navbar/Icon2_color.png",
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      defaultSrc: "../public/img/navbar/Icon3_bw.png",
      activeSrc: "../public/img/navbar/Icon3_color.png",
    },
    {
      name: "",
      path: "/",
      defaultSrc: "../public/img/navbar/Icon1_bw.png",
      activeSrc: "../public/img/navbar/Icon1_color.png",
    },
    {
      name: "Boosts",
      path: "/boosts",
      defaultSrc: "../public/img/navbar/Icon4_bw.png",
      activeSrc: "../public/img/navbar/Icon4_color.png",
    },
  ];

  // Apply theme based on faction
  const setUpTheme = () => {
    const faction = localStorage.getItem("faction");
    if (faction === "azurians") {
      document.body.classList.add("theme-azurians");
    } else if (faction === "crimsons") {
      document.body.classList.add("theme-crimsons");
    }
  };

  // Update active item based on the current route
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    setActiveItem(currentPath || "/"); // Default to "profile"
    setUpTheme();
  }, [location]);

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`nav-item ${activeItem === item.path.slice(1) ? "active" : ""}`}
        >
          <img
            src={activeItem === item.path.slice(1) ? item.activeSrc : item.defaultSrc}
            alt={item.name}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
