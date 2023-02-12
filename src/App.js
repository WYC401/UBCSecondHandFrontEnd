import logo from './logo.svg';
import './App.css';
import SideMenu from"./components/SideMenu.js";
import UpperMenue from './components/UpperMenue';
import ItemBox from './components/ItemBox';
function App() {
  return (
    <div className='wholeBackground'>
    <UpperMenue/>
    <div  className="downBackground">
      <SideMenu/>
      <div className="main"><ItemBox imgPath="./images/ubc-logo.png" title="Road Bike" category="Bike" description="this is a bike"/></div>
    </div>
    </div>
  );
}

export default App;
