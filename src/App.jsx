import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
