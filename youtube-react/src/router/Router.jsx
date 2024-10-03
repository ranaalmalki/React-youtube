import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserPage from "../pages/UserPage";

const Router = createBrowserRouter([

{
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>
},
{
    path:"/home",
    element:<App/>
},
{
path:"/Login",
element:<Login/>


},
{
    path:"/signup",
    element:<SignUp/>
    
    
    }
    ,
{
    path:"/userpage/:id",
    element:<UserPage/>
    
    
    }



]);

export default Router