import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Project from './components/projects/Project'
import Qualifications from './components/qualifications/Qualifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Project/>
      <Qualifications/>
      <Contact/>
      <Footer/>
    </main>
   </>
  );
}

export default App;
