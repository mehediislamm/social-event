import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../component/home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json')
            }
        ]
        
    }
])


export default router;