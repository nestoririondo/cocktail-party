
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="about">
                <p>
                    <strong>Drink Finder</strong> is a web application built with React that allows users to search for cocktails by name. The application uses the <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noreferrer">CocktailDB API</a> to fetch cocktail data.
                </p>

            </div>
            <div className="contact">
                <p>
                    <strong>Developer:</strong> <a href="
                    http://www.nestoririondo.com" target="_blank" rel="noreferrer">Néstor Iriondo</a>
                </p>
                <p>
                    <strong>GitHub:</strong> <a href="
                    https://github.com/nestoririondo" target="_blank" rel="noreferrer">nestoririondo</a>
                </p>
            </div>


        </div>
     );
}
 
export default Footer;
