import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { AuthProvider } from './services/authContext';


function App() {
  return (
    <AuthProvider>
    <Router>
      <RoutesWeb />
    </Router>
    </AuthProvider>
  )
}

export default App;