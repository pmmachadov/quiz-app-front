import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import InputCode from '../components/InputCode/InputCode';



const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        <InputCode></InputCode>
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;