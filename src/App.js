import logo from './logo.svg';
import './App.css';
import SideMenu from"./components/SideMenu.js";
import UpperMenue from './components/UpperMenue';
function App() {
  return (
    <div className='wholeBackground'>
    <UpperMenue/>
    <div  className="downBackground">
      <SideMenu/>
      <div className="main">ddd</div>
    </div>
    </div>
  );
}

export default App;
