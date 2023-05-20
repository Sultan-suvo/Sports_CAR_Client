import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import ShopCategoryViewDetails from "../Pages/Home/ShopByCategory/ShopCategoryViewDetails";
import ToyDetails from "../Pages/AllToys/ToyDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "shopDetails",
                element: <PrivateRoute><ShopCategoryViewDetails></ShopCategoryViewDetails></PrivateRoute>,
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/addToys')
            },
            {
                path: 'toyDetails',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: 'addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
            },
            {
                path: 'blogs',
                element: <Blog></Blog>,
            },

            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
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