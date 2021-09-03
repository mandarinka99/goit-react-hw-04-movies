import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import Container from "./container/Container";
import Header from "./header/Header";
import MovieDetails from "./movieDetails/MovieDetails";
import NoPage from "../pages/NoPage";

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>

        <Route path="/error" exact>
          <NoPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

        <Redirect to="/" />
        
      </Switch>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
