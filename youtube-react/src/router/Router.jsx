import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([

{
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>
},
{
    path:"/home",
    element:<App/>
}

]);

export default Router