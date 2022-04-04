import logo from './logo.svg';
import './App.css';
import eiemotes01 from './ei/img_01.jpg'
import eiemotes02 from './ei/img_02.jpg'
import eiemotes03 from './ei/img_03.jpg'
import eiemotes04 from './ei/img_04.jpg'
import eiemotes05 from './ei/img_05.jpg'

function App() {
  return (
    <div className="App">
      <img src={eiemotes01} alt="eiemotes"></img>
      <img src={eiemotes02} alt="eiemotes"></img>
      <img src={eiemotes03} alt="eiemotes"></img>
      <img src={eiemotes04} alt="eiemotes"></img>
      <img src={eiemotes05} alt="eiemotes"></img>
      <h1>deploy success!!!!!!!</h1>
    </div>
  );
}

export default App;
