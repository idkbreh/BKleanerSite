import {createBrowserRouter} from "react-router-dom"
import App from "../page/HomeScreen"
import LoginForm from "../page/LoginScreen"
import Logout from "../page/Logout"

export const pageRoutes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/login',
        element:<LoginForm/>
    },
    {
        path:'/logout',
        element:<Logout/>
    },
])