import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Discover from "./pages/Portfolio/Portfolio";
import Search from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <NavBar currentPage="about"/>
      <Switch>
        <Route exact path ="/about">
          <About />
        </Route>
        <Route exact path ="/portfolio">
          <Discover/>
        </Route>
        <Route exact path ="/contact">
          <Search/>
        </Route>
        <Route exact path ="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;