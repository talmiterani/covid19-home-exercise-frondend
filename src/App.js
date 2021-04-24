import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import TestsGraph from './components/TestsGraph';
import HospitalizationGraph from './components/HospitalizationGraph';
import OutcomesGraph from './components/OutcomesGraph';
import Navigation from './components/Navigation'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/graph/tests" component={TestsGraph}/>
            <Route exact path="/graph/hospitalization" component={HospitalizationGraph}/>
            <Route exact path="/graph/outcomes" component={OutcomesGraph}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
