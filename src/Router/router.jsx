import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forget from "../pages/Forget";
import AddCampaign from "../pages/AddCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("http://localhost:5000/campaigns"),
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/forget",
                element: <Forget></Forget>
            },
            {
                path: "/addCampaign",
                element: <AddCampaign></AddCampaign>
            }
        ]
    },
]);
export default router;