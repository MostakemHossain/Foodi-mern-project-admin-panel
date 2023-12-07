import {
  createBrowserRouter
} from "react-router-dom";
import SignUp from "../components/signUp";
import Main from "../layout/Main";
import UpdateProfile from "../pages/dashboard/UpdateDashboard";
import Home from "../pages/Home/Home";
import Menu from "../pages/shop/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
      },
        {
          path:'/update-profile',
          element:<UpdateProfile/>
      },
      ]
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ]);

  export default router