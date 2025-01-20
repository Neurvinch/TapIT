
import './App.css'

import {GameStateProvider} from './Context/GamestateProvider'
import TapsPage from './Pages/TapsPage'
import Header from "../src/Component/Header";
// import BoostCard from "./Component/BoostCard";
import FactionSelection from "./Component/FactionSelection";
// import MainContainer from "./Component/MainContainer";
import Navbar from "./Component/Navbar";

function App() {


  return (
    <>
    <GameStateProvider>
      <TapsPage/>
      <Header/>
      {/* <BoostCard/> */}
         <FactionSelection/>
         {/* <MainContainer/> */}
         <Navbar/>
        
    </GameStateProvider>
    
    </>
  )
}

export default App
