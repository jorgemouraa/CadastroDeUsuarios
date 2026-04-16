import { createHashRouter } from "react-router-dom";
import Home from './pages/Home';
import ListUsers from "./pages/Home/listUsers";


const router = createHashRouter([
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
