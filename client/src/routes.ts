import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import { HomePage } from "./pages/HomePage.tsx"; // Updated path

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, // App is the layout component
    children: [
      {
        index: true, // This makes HomePage the default child for "/"
        Component: HomePage,
      },
      // No other child routes for a single-page app with section scrolling
    ],
  },
]);

export default router;
