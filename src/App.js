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
      <Header/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      <ContactUs />
      <CVSection />
     
    </div>
  );
}

export default App;
