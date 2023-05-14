import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';


function App() {
  return (

    <div className="App">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>

  );
}

export default App;
