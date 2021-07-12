import "./App.css";
import TableContainer from "./containers/TableContainer";
import { Route } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <div className="container">
        <Route path="/" exact component={TableContainer} />
      </div>
    </div>
  );
}

export default App;
