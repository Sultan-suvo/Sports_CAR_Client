import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: 'blogs',
            element: <Blog></Blog>,
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>,
        },
      ]
    },
  ]);

  export default router;