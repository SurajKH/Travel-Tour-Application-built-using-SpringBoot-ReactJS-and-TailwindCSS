import './App.css';
import DisplayTourManagers from './components/DisplayTourManagers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <h1>App Component....</h1> */}
      <DisplayTourManagers/>
    </div>
  );
}

export default App;
