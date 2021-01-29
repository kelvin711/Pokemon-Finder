import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import './App.css';
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>


      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
         <Redirect to={"/"} /> {/*Acts as a default route */}
      </Switch>


    </div>
  );
}

export default App;
