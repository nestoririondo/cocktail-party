import { useState, useEffect } from "react";

const SearchBar = ({ handleSetCocktails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => handleSetCocktails(data.drinks))
        .catch((error) => console.error(error));
    }
  }, [searchTerm]);

  return (
    <>
      <input
        autoFocus
        className="search-bar"
        type="text"
        placeholder="Search for a cocktail..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filter-bar"></div>
    </>
  );
};

export default SearchBar;
