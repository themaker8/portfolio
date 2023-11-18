import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact =  ()=>{
    return(
        <section className=" w-full text-start h-screen">
        <h1 className=" text-textPrim text-2xl pb-8">Connect me on</h1>
        <div className="flex flex-col gap-4">
            <a href="https://github.com/themaker8" target="_blank" rel="noreferrer" className=" flex gap-5 items-center w-fit">
                <button className=" p-2 bg-[#262626] rounded-md"><FaGithub size={25} className=""/></button>
                <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/abu-talha-tech/" target="_blank" rel="noreferrer" className=" flex gap-5 items-center w-fit">
                <button className=" p-2 bg-[#262626] rounded-md"><FaLinkedin size={25} className=""/></button>
                <p>Linkedin</p>
            </a>
            <a href="mailto:talhamlops@gmail.com" target="_blank" rel="noreferrer" className=" flex gap-5 items-center w-fit">
                <button className=" p-2 bg-[#262626] rounded-md"><MdOutlineAlternateEmail size={25} className=""/></button>
                <p>Email</p>
            </a>
        </div>
      </section>
    )
}
export default Contact;