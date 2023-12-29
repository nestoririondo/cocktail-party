import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]))
      .catch((error) => console.error(error));
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  let ingredientsString = "";
  for (let i = 1; i < 10; i++) {
    cocktail[`strIngredient${i}`]
      ? (ingredientsString +=
          cocktail[`strMeasure${i}`] +
          " " +
          cocktail[`strIngredient${i}`] +
          ", ")
      : null;
  }
  ingredientsString = ingredientsString.slice(0, -2) + ".";

  const backButton = () => {
    window.history.back();
  };

  return (
    <div className="cocktail-detail-wrapper">
      <button className="back-btn" onClick={backButton}>Back</button>
      <div className="cocktail-detail">
        <img
          className="cocktail-detail-img"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div className="cocktail-detail-info">
        <p className="cocktail-detail-name">{cocktail.strDrink}</p>
        <p className="cocktail-detail-ingredients">{ingredientsString}</p>
        <p className="cocktail-detail-instructions">
          {cocktail.strInstructions}
        </p>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
