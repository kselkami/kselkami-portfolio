import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-900">
      <div className="bg-gradient-to-r from-[#a4e6f3] to-[#ff96ff] pb-1">
        <section className="text-gray-100 bg-gray-900 border-gray-900 w-full h-full">
          <Navbar />
          <About />
          <div className="w-[350px] p-1 h-24 bg-gradient-to-r from-[#a4e6f3] to-[#ff96ff] mx-auto translate-y-[50%] rounded-lg border-gray-900 md:translate-x-[-180px] lg:translate-x-[-300px] xl:translate-x-[-380px]">
            <div className="w-full h-full rounded-md bg-gray-900 text-gray-100 text-4xl font-semibold flex justify-center items-center">
              Case Studies
            </div>
          </div>
        </section>
      </div>
      <section className="w-full h-full bg-gray-100">
        <Work />
      </section>
      <section className="w-full h-full">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
