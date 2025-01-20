const BoostCard = ({ boostName, image, description, price }) => (
    <div className="boost-card" data-boost={boostName}>
      <img src={image} alt={boostName} className="boost-image" />
      <div className="boost-info">
        <h3>{boostName.toUpperCase()}</h3>
        <p>{description}</p>
        <button className="boost-button" data-price={price}>+</button>
      </div>
    </div>
  );
  
  export default BoostCard;