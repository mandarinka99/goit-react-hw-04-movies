import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./container/Container";
import React, { lazy, Suspense } from 'react';
import AppBar from "./appBar/AppBar";
import Spiner from "./spiner/Spiner";

const HomePage = lazy(() => import('../pages/HomePage.js'));
const MoviesPage =lazy(() => import('../pages/MoviesPage.js'));
const NoPage =lazy(() => import('../pages/NoPage.js'));
const MovieDetailsPage =lazy(() => import('../pages/MovieDetailsPage.js'));

const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Spiner/>}>
      <Switch>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/error" exact>
          <NoPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

        <Redirect to="/" />
        
      </Switch>

      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
