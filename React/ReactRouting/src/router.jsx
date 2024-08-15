import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
];

export default routes;
