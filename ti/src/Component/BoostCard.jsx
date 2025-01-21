
const BoostCard = () => {
  return (
   
    <main className="boost-container ">
  <div className="boosts-grid">
    <div className="boost-card" data-boost="potion">
      <img src="../public/img/Boosts/Potion.png" alt="Potion" className="boost-image" />
      <div className="boost-info">
        <h3>POTION</h3>
        <p>PASSIVE TAPS</p>
        <p>Get passive taps, a small boost that help when you’re lazy.</p>
        <button className="boost-button" data-price="0.001">
          +
        </button>
      </div>
    </div>
    <div className="boost-card" data-boost="sword">
      <img src="../public/img/Boosts/Sword.png" alt="Sword" className="boost-image" />
      <div className="boost-info">
        <h3>SWORD</h3>
        <p>MORE TAPS</p>
        <p>
          Get 3x more taps when you tap. Don’t worry it doesn’t hurt. That’s
          cool isn’t it?
        </p>
        <button className="boost-button" data-price="0.002">
          +
        </button>
      </div>
    </div>
    <div className="boost-card" data-boost="bag">
      <img src="../public/img/Boosts/Bag.png" alt="Bag" className="boost-image" />
      <div className="boost-info">
        <h3>BAG</h3>
        <p>MORE GEMS</p>
        <p>
          Get 2x more gems when you tap. Our king will no longer have a penny.
        </p>
        <button className="boost-button" data-price="0.003">
          +
        </button>
      </div>
    </div>
    <div className="boost-card" data-boost="book">
      <img src="../public/img/Boosts/Book.png" alt="Book" className="boost-image" />
      <div className="boost-info">
        <h3>BOOK</h3>
        <p>MORE DAILY TAPS</p>
        <p>
          Get 2x more taps per day. Your finger will be as smooth as our king’s
          head
        </p>
        <button className="boost-button" data-price="0.004">
          +
        </button>
      </div>
    </div>
  </div>
</main>

  );
}
  export default BoostCard;