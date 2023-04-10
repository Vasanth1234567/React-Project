
import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import RickMortyapi from './components/RickMortyapi'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link><br/>
        <Link to='/Calculator'>Calculator</Link><br/>
        <Link to="/RickandMorty">RickandMorty</Link>
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/Calculator" element={<CalculatorComponent/>}></Route>
          <Route exact path="/RickandMorty" element={<RickMortyapi/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
