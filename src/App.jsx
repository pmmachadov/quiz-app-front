import { BrowserRouter as Router } from "react-router-dom";
import RoutesWeb from "./routes/Routes";
import Layout from "./components/Layout/Layout";



function App() {
 

  return (
    <Router>
          <RoutesWeb />
    </Router>
  );
}

export default App;
