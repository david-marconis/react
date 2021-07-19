import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

const dummyQuotes = [
  { id: 1, author: "David", text: "This was easy!" },
  { id: 2, author: "David", text: "I am amazing!" }
];

function App() {
  const [quotes, setQuotes] = useState(dummyQuotes);
  const history = useHistory();
  const addQuoteHandler = quote => {
    setQuotes(prevQuotes => [
      ...prevQuotes,
      { id: prevQuotes.length + 1, ...quote }
    ]);
    history.push("/quotes");
  };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes quotes={quotes} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={quotes} />
        </Route>
        <Route path="/new-quote">
          <AddQuote onAddQuote={addQuoteHandler} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
