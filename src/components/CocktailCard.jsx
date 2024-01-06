import { Link } from "react-router-dom";
import { ingredientsString } from '../utils/ingredientsString.js';

const CocktailCard = ({ cocktail }) => {

  return (
    <Link to={`/cocktail/${cocktail.idDrink}`} state={cocktail}>
      <div className="cocktail-card">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="cocktail-info">
          <p className="cocktail-name">{cocktail.strDrink}</p>
          <p className="cocktail-ingredients">
            {ingredientsString ? ingredientsString(cocktail) : null}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
