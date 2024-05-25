
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWeb from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <main className="flex-grow">
          <RoutesWeb></RoutesWeb>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}
