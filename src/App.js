import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import ContactUs from './components/ContactUs';
import CVSection from './components/CVSection';





function App() {
  return (
    <div className="App">
      <AppBar/>
      <div id="home">
        <Header/>
      </div>
      <div id="about">
        <About/>
      </div>
      {/* <Skills/> */}
      <div id="projects">
        <Projects/>
      </div>
      <div id="cv">
        <CVSection />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
     
     
    </div>
  );
}

export default App;
