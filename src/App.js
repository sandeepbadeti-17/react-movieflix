import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import Serach from "./components/Search/Search";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <div className="mv">
            <Movies type="movie" />
          </div>
        </Route>
        <Route path="/series">
          <div className="mv">
            <Series />
          </div>
        </Route>
        <Route path="/search">
          <div className="mv">
            <Serach />{" "}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
