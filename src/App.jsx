import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  const handleSetCocktails = (cocktails) => {
    setCocktails(cocktails);
  };

  return (
    <div>
      <div className="content">
        <SearchBar handleSetCocktails={handleSetCocktails} />
        <Results cocktails={cocktails} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
