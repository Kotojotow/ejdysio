import Appwidget1 from "./Appwidget1";
import Appwidget2 from "./Appwidget2";
import Navigation from './Navigation';
import './App.css'

function App() {
  return (
  <div className="App">
    <Navigation/>
    <div className="Strech"></div>
    <div className="Content">
      <Appwidget1/>
      <Appwidget2/>
      <Appwidget1/>
      <Appwidget2/>
    </div>
  </div>
  );
}

export default App;
