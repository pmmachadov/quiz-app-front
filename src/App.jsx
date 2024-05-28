import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <RoutesWeb />
      </Router>
    </GameProvider>
  );
}

export default App;
