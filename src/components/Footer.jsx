import githubMark from "../assets/github-mark.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <p>
          Cocktail party is a web application built with React that allows users
          to search for cocktails by name. The application uses the{" "}
          <a
            href="https://www.thecocktaildb.com/api.php"
            target="_blank"
            rel="noreferrer"
          >
            CocktailDB API
          </a>{" "}
          to fetch cocktail data.
        </p>
      </div>
      <div className="contact">
        <p>
          Developed by{" "}
          <a
            href="
                    http://www.nestoririondo.com"
            target="_blank"
            rel="noreferrer"
          >
            Néstor Iriondo
          </a>
        </p>
        <a href="https://github.com/nestoririondo">
          <img src={githubMark} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
