

 import BoostCard from "../Component/BoostCard";

const MainContainer = () =>{
  return  (
    <main className="main-container">
      <div className="boosts-grid">
        <BoostCard
          boostName="potion"
          image="../public/img/Boosts/Potion.png"
          description="Get passive taps, a small boost that helps when you’re lazy."
          price="0.001"
        />
        <BoostCard
          boostName="sword"
          image="../public/img/Boosts/Sword.png"
          description="Get 3x more taps when you tap. Don’t worry it doesn’t hurt."
          price="0.002"
        />
        <BoostCard
          boostName="bag"
          image="../public/img/Boosts/Bag.png"
          description="Get 2x more gems when you tap."
          price="0.003"
        />
        <BoostCard
          boostName="book"
          image="../public/img/Boosts/Book.png"
          description="Get 2x more taps per day. Your finger will be as smooth as our king’s head."
          price="0.004"
        />
      </div>
    </main>
  );
}
  export default MainContainer;