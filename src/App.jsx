import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Footer from "./components/Footer";
import CocktailDetail from './components/CocktailDetail'; // Import the CocktailDetail component

import "./App.css";

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  const handleSetCocktails = (cocktails) => {
    setCocktails(cocktails);
  };

  return (
    <Router>
      <div>
        <div className="content">
          <Switch>
            <Route path="/cocktail/:id" component={CocktailDetail} />
            <Route  path="/">
              <SearchBar handleSetCocktails={handleSetCocktails} />
              <Results cocktails={cocktails} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
