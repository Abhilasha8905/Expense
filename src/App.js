import React from "react";
import "./App.css";
import Home from "./components/home";
import Settings from "./components/settings";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-md-3">
          <ul>
            <li>
              <button>
                <Link to="/home">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/settings">Settings</Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <Route path="/home" component={App}>
            <Route path="/home" component={Home} />
            <Route path="/settings" component={Settings} />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
