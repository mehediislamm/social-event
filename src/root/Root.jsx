import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../component/footer/Footer";


const Root = () => {
    return (
        <div className=" max-w-7xl mx-auto font-Poppine ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;