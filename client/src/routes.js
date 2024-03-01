import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROCEDURE_ROUTE, CATEGORY_ROUTE} from "./utils/consts";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AboutUs from "./components/AboutUs";
import AdmCategory from "./pages/AdmCategory";
import AdmProcedure from "./pages/AdmProcedure";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutUs
    },
    {
        path: PROCEDURE_ROUTE + '/:id',
        Component: AdmProcedure
    },
    {
        path: CATEGORY_ROUTE + '/:id',
        Component: AdmCategory
    },
]
