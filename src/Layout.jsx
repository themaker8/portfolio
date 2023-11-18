import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ()=>{
    return(
        <div className="max-w-2xl mx-auto font-geist  flex flex-col justify-center items-center gap-20 text-textSec scroll-smooth">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;