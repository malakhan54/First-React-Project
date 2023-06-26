import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./Components/NavBar";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="container">
        <Router></Router>
      </div>
    </div>
  );
}

export default App;
