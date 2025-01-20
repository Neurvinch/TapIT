import { useContext } from "react";
import {GameStateContext }from "../Context/GamestateProvider";
import  useTapManager  from "../Hooks/useTapManager";

const TapsPage = () => {
    const { tapsLeft, totalGems, dailyTapLimit, dailyTapCount, sessionTapCount, resetGame } = useContext( GameStateContext );
    const { handleTap } = useTapManager();

    return (
        <>
            <p>Tap to earn gems</p>
            <p>Taps left: {tapsLeft}</p>
            <p>Total gems: {totalGems}</p>
            <p>Daily tap limit: {dailyTapLimit}</p>
            <p>Daily tap count: {dailyTapCount}</p>
            <p>Session tap count: {sessionTapCount}</p>
            <button onClick={handleTap}>Tap</button>
            <button onClick={resetGame}>Reset Game</button>
        </>
    );
}

export default TapsPage;
