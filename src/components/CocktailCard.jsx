import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  let ingredientsString = "";

  for (let i = 1; i < 10; i++) {
    cocktail[`strIngredient${i}`]
      ? (ingredientsString += cocktail[`strIngredient${i}`] + ", ")
      : null;
  }
  // Remove the last comma and space, then add a dot
  ingredientsString = ingredientsString.slice(0, -2) + ".";

  return (
    <Link to={`/cocktail/${cocktail.idDrink}`} state={cocktail}>
      <div className="cocktail-card">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="cocktail-info">
          <p className="cocktail-name">{cocktail.strDrink}</p>
          <p className="cocktail-ingredients">
            {ingredientsString ? ingredientsString : null}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
