
import './App.css'
import {GameStateProvider} from './Context/GamestateProvider'
import TapsPage from './Pages/TapsPage'

function App() {


  return (
    <>
    <GameStateProvider>
      <TapsPage/>
    </GameStateProvider>
    
    </>
  )
}

export default App
