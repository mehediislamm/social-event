import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../component/home/Home";
import Login from "../component/login/Login";
import Register from "../component/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
        
    }
])


export default router;