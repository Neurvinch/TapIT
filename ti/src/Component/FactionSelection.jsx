import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FactionSelection = () => {
  const [selectedFaction, setSelectedFaction] = useState(null);
  const navigate = useNavigate();

  const handleTeamSelect = (
    
  ) => {
     console.log(selectedFaction); 
      navigate('/taps');
    
  };

  return (
    <div className="container">
      <h1>CHOOSE YOUR FACTION</h1>
      <div className="factions-container">
        <div
          className={`factions-wrapper ${selectedFaction === "Azurians" ? "selected" : ""}`}
          onClick={() => setSelectedFaction("Azurians")}
          data-img-default="img/Fac_Azu_1.png"
          data-img-selected="img/Fac_Azu_2.png"
        >
          <img
            src={selectedFaction === "Azurians" ? "img/Fac_Azu_2.png" : "img/Fac_Azu_1.png"}
            alt="Azurians"
          />
          <p className="faction-title azurians">AZURIANS</p>
        </div>
        <div
          className={`factions-wrapper ${selectedFaction === "Crimsons" ? "selected" : ""}`}
          onClick={() => setSelectedFaction("Crimsons")}
          data-img-default="img/Fac_Cri_1.png"
          data-img-selected="img/Fac_Cri_2.png"
        >
          <img
            src={selectedFaction === "Crimsons" ? "img/Fac_Cri_2.png" : "img/Fac_Cri_1.png"}
            alt="Crimsons"
          />
          <p className="faction-title crimsons">CRIMSONS</p>
        </div>
      </div>
      <div className="factions-text-container">
        <p id="faction-description" className="description-text">
          The two moons of Selenor, Azura and Crimara, have split the world into two factions, historical rivals with distinct ideals.
          Now is the time to choose your path and join the fight with your new fam!
        </p>
      </div>
      <button
        id="nextPageButton"
        onClick={ () =>handleTeamSelect()}
        disabled={!selectedFaction} // Disable button until a faction is selected
      >
        LET'S FIGHT!
      </button>
    </div>
  );
};

export default FactionSelection;
