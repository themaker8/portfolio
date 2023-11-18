import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className=" w-full flex gap-10 text-textPrim justify-start items-start text-start">
            <Link to="/" href="*">home</Link>
            <Link to="projects">projects</Link>
            <Link to="contact">contact</Link>
        </div>
    )
}

export default Navbar;