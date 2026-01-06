import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ListUsers from "./pages/home/listUsers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <ListUsers />,
  },
]);


export default router;
