import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forget from "../pages/Forget";
import AddCampaign from "../pages/AddCampaign";
import AllCampaign from "../pages/AllCampaign";
import Details from "../pages/Details";
import MyDonations from "../pages/MyDonations";
import MyCampaign from "../pages/MyCampaign";
import PrivateRoute from "../components/PrivateRoute";
import UpdateCampaign from "../pages/UpdateCampaign";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("https://backend-crowd-funding.vercel.app/campaigns"),
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
                element: <PrivateRoute>
                    <AddCampaign></AddCampaign>
                </PrivateRoute>
            },
            {
                path: "/campaigns",
                loader: () => fetch("https://backend-crowd-funding.vercel.app/campaigns"),
                element: <AllCampaign></AllCampaign>
            },
            {
                path: "/campaign/:id",
                loader: ({ params }) => fetch(`https://backend-crowd-funding.vercel.app/campaign/${params.id}`),
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>
            },
            {
                path: "/donate/:id",
                loader: ({ params }) => fetch(`https://backend-crowd-funding.vercel.app/donate/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/myDonations",
                loader: () => fetch("https://backend-crowd-funding.vercel.app/donateds"),
                element: <PrivateRoute>
                    <MyDonations></MyDonations>
                </PrivateRoute>
            },
            {
                path: "/myCampaign",
                loader: () => fetch("https://backend-crowd-funding.vercel.app/campaigns"),
                element: <PrivateRoute>
                    <MyCampaign></MyCampaign>
                </PrivateRoute>
            },
            {
                path: "/updateCampaign/:id",
                loader: ({ params }) => fetch(`https://backend-crowd-funding.vercel.app/campaign/${params.id}`),
                element: <UpdateCampaign></UpdateCampaign>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>,
    },
]);
export default router;