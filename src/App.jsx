import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { SepSec } from './components/SectionsSeparation/SepSec';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <About />
    <SepSec />
    <Experience />
    <SepSec />
    <Projects />
    <SepSec />
    <Contact />
    <Footer />
  </div>;
}

export default App
