import './App.css';
import { GameStateProvider } from './Context/GamestateProvider';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import BoostPage from './Pages/BoostPage';
import LeaderBoard from './Pages/LeaderBoard';
import ProfilePage from './Pages/ProfilePage';


// Lazy-loaded components for optimization
const LazyTapsPage = React.lazy(() => import('./Pages/TapsPage'));
const LazyFactionSelection = React.lazy(() => import('./Component/FactionSelection'));

function App() {
  return (
    <GameStateProvider>
    
      <Router>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyFactionSelection />} />
            <Route path="/taps" element={<LazyTapsPage />} />
            <Route path="/boosts" element={<BoostPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/leaderboard" element={<LeaderBoard/>} />
            <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Fallback route */}
          </Routes>
        </Suspense>
      </Router>
    </GameStateProvider>
  );
}

export default App;
