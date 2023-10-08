import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../component/home/Home";
import Login from "../component/login/Login";
import Register from "../component/Register";
import Card from "../component/cards/card";
import PrivateRoute from "./PrivateRoute";
import Service from "../component/service/Service";


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
                path:'/card/:id',
                element:<PrivateRoute><Card></Card></PrivateRoute>,
                loader:()=>fetch('/data.json')
                
            },
            {
                path:'/servic',
                element:<Service></Service>
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