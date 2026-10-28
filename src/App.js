import './App.css';
import AppBar from './components/AppBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import ContactUs from './components/ContactUs';
import CVSection from './components/CVSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <AppBar />
      <main id="main" tabIndex={-1}>
        <Header />
        <Skills />
        <Projects />
        <About />
        <CVSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
