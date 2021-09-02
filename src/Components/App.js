import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import Container from "./container/Container";
import Header from "./header/Header";

const App = () => {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
