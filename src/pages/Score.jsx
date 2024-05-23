import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import DashStats from '../components/DashStats/DashStats';

 const Score = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
       <DashStats></DashStats>
      </main>
      <Footer></Footer>
    </div>
  )
}


export default Score;