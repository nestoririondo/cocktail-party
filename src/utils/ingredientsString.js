export const ingredientsString = (cocktail) => {
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

  return ingredientsString;
};
