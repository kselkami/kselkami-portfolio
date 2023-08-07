import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-900">
      <div className="bg-gray-900 text-gray-100 w-full h-full rounded-b-2xl">
        <Navbar />
        <About />
        <div className="w-[70%] h-24 bg-gray-100 mx-auto translate-y-[50%] rounded-lg"></div>
      </div>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
