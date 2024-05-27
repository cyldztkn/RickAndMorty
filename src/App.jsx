// Router requirments
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/Error";
// Router Pages
import Homepage from "./routes/Homepage";
import CharacterPage from "./routes/CharacterPage";
import LoadingPage from "./components/sections/LoadingPage/LoadingPage";
// ContextProvider
import { ContextProvider } from "./ContextProvider";

// Stylesheet
import "./App.css";

// Rout Directives
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loading-page",
    element: <LoadingPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
