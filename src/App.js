import React from "react";
import CamCapture from "./components/CamCapture/CamCapture";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route exact path="/">
              <CamCapture />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
