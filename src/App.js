
import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import RickMortyapi from './components/RickMortyapi'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
function App() {
  return (
    <div className="App">
      <div className="menu">
      <Router className="menuData">
        <Link to="/">Home</Link><br/>
        <Link to='/Calculator'>Calculator</Link><br/>
        <Link to="/RickandMorty">RickandMorty</Link>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}></Route>
          <Route exact path="/Calculator" element={<CalculatorComponent/>}></Route>
          <Route exact path="/RickandMorty" element={<RickMortyapi/>}></Route>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
