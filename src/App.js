import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Graph from './components/Graph';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/graph/:id" component={Graph}/>
      </Router>
      
    </div>
  );
}

export default App;
