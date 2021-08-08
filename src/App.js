import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Roadmap } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/roadmap" exact component={() => <Roadmap />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
