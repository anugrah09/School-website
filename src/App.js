import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CoverPhoto from './components/CoverPhoto';
import Houses from './components/Houses';
import Welcome from './components/Welcome';
import Slider from './components/Slider';
import Slide from './components/Slide';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <CoverPhoto />
      <Navbar />
      <Houses />
      <Welcome />
      <Slide />
      <Slider />
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
