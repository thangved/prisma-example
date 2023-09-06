import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Layout from "../pages/_layout";
import UsersPage from "../pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: HomePage,
      },
      {
        path: "users",
        Component: UsersPage,
      },
    ],
  },
]);

export default router;
