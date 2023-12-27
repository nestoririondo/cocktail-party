import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  const handleSetCocktails = (cocktails) => {
    setCocktails(cocktails);
  };

  return (
    <div>
      <SearchBar handleSetCocktails={handleSetCocktails} />
      <Results cocktails={cocktails} />
    </div>
  );
};

export default App;