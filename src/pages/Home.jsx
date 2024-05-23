import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        {/* Otras partes de tu aplicación */}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;