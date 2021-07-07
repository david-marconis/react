import classes from "./Greeting.module.css";

const Greeting = props => {
  return (
    <section className={classes.summary}>
      <h2>Superdigg sushi i Strandvegen</h2>
      <p>
        Velg din favorittsushi fra vårt store utvalg av deilige sushi retter og
        tilbehør, og nyt en fantastisk matopplevelse i vår restaurant eller
        hjemme.
      </p>
      <p>
        Alle våre retter blir laget med høy kvalitet og lokal fisk fra Gaula.
        Vår mesterkokk Kine er en av landets fremste sushikokker og har studert
        biologi!
      </p>
    </section>
  );
};

export default Greeting;
