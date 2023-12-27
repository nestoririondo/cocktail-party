import CocktailCard from "./CocktailCard";

const Results = ({ cocktails }) => {
  return (
    <div className="results-grid">
      {cocktails ? (
        cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))
      ) : (
        <div className="no-results">
          <h2>No results found!</h2>
        </div>
      )}
    </div>
  );
};

export default Results;
