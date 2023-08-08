import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-900">
      <div className="bg-gradient-to-r from-purple-400 to-yellow-400 pb-1">
        <section className="text-gray-100 bg-gray-900 border-gray-900 w-full h-full">
          <Navbar />
          <About />
          <div className="w-[70%] p-1 h-24 bg-gradient-to-r from-purple-400 to-yellow-400 mx-auto translate-y-[50%] rounded-lg border-gray-900">
            <div className="w-full h-full rounded-md bg-gray-900"></div>
          </div>
        </section>
      </div>
      <section className="w-full h-full">
        <Work />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
