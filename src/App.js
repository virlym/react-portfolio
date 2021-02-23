import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Discover from "./pages/Portfolio/Portfolio";
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: slategrey; }'}</style>
      </Helmet>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path ="/about">
          <About />
        </Route>
        <Route exact path ="/portfolio">
          <Discover/>
        </Route>
        {/* <Route exact path ="/contact">
          <Search/>
        </Route> */}
        <Route exact path ="/">
          <About />
        </Route>
        <Route path = "*">
          <About />
        </Route>
      </Switch>
    <Footer />
    </Router>

    </div>
  );
}

export default App;