import "./App.css";
import Footer from "./Footer";
// import List from "./List";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import {Switch, Route} from "react-router-dom";

const App = () => {
  return <>
  <Menu/>
  <Switch>
  <Route exact path="/" component={Footer}/>
  <Route exact path="/contact" component={Contact}/>
  <Route exact path="/about" component={About}/>
  {/* <Route path="/contact/Name" component={Name}/> */}

  </Switch>
  </>
};

export default App;
 