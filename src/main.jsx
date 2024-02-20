import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OptionsProvider } from "./stores/OptionsContext";
import MovieSearchPage from "./pages/MovieSearchPage";
import MovieFavouritesPage from "./pages/MovieFavouritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/movies/search" />,
      },
      {
        path: "/movies",
        element: <Outlet />,
        children: [
          {
            path: "search",
            element: <MovieSearchPage />,
          },
          {
            path: "favourites",
            element: <MovieFavouritesPage />,
          },
          {
            path: ":movieId",
            element: <MovieDetailsPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OptionsProvider>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </OptionsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
