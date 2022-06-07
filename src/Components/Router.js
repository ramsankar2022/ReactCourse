import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./CSS/sample.css";

//Pages
import FirstPage from "./Firstpage";
import StateVariables from "./StateVariables";
import Login from "./Login";
import ChangeDivColor from "./ChangeDivColor";
import ParentComponent from "./LifeCycle/ParentComponent";
import MaterialUISample from "./MaterialUISample";

class Routers extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h1>REACT ASSIGNMENTS</h1>
          <Link to="/">First Page</Link>
          <Link to="/statevariables">State Variables</Link>
          <Link to="/changedivcolor">Change Color</Link>
          <Link to="/lifecycle/parentcomponent">Life Cycle</Link>
          {/* <Link to="/apirequest">API Request</Link> */}
          <Link to="/login">Login</Link>
          <Link to="/materialuisample">Material UI</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/statevariables" element={<StateVariables />} />
          <Route path="/changedivcolor" element={<ChangeDivColor />} />
          <Route path="/statevariables" element={<StateVariables />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/lifecycle/parentcomponent"
            element={<ParentComponent />}
          />
          <Route path="/materialuisample" element={<MaterialUISample />} />
        </Routes>
      </Router>
    );
  }
}

export default Routers;