import './App.css';
import Carousel from './Components/Carousel/Carousel';
import FeatureFoods from './Components/FeatureFoods/FeatureFoods';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';




function App() {
  return (
    <>
      <Navbar/> 
      <TopBanner/>
      <Carousel/>
      <FeatureFoods/>
      <Menu/>
    </>
  );
}

export default App;
