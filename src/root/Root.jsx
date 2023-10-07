import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div className=" max-w-7xl mx-auto font-Poppine ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;