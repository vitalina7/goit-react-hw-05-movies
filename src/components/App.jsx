import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index path="/" element={<Home />} />
    <Route path="movies" element={<Movies />} />
    <Route path="movies/:movieId" element={<MovieDetails />} />
    <Route path="movies/:movieId/cast" element={<Cast />} />
    <Route path="movies/:movieId/reviews" element={<Reviews />} />
  </Route>
</Routes>

  );
};
