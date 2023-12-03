import data from "./assets/data";
import { FaPython } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { LuWebhook } from "react-icons/lu";

const Projects =  ()=>{
    return(
        <section className=" w-full text-start ">
        <h1 className=" text-textPrim text-2xl mb-10">My projects 👨‍💻</h1>
        <div className=" grid grid-cols-2 gap-5">
        {data.projects.map((item,index)=>{
          return(
              <a href={item.link} key={index} className=" bg-neutral-800 p-3 rounded-md flex flex-col justify-between">
                {/* <img className="mb-5" src="/images/1.png" alt="jarvis" /> */}
                  <h1 className=" text-xl mb-5 text-center text-textPrim">{item.title}</h1>
                  <p className=" ">{item.discription}</p>
                  <p className=" rounded-md bg-neutral-500 w-fit p-1 mt-4 whitespace-nowrap flex items-center gap-2"><span>{item.tag==="Python"?<FaPython/>:item.tag==="Web"?<FaGlobe/>:<LuWebhook/>}</span><span>{item.tag}</span></p>
              </a> 
          )
        })}
          {/* <div className=" bg-neutral-800 p-3 rounded-md">
            <img className="mb-5" src="/images/1.png" alt="jarvis" />
            <h1 className=" text-xl mb-5">Jarvis-AI_Python</h1>
            <p>Today i made Jarvis AI in python.

              First you have to create a folder name jarvis and then add an icon file wihich you have to set to exe. and then add a main.py

              install all the required libraries.

              and install pyinstaller.

              then go to the terminal and type the following statement: pyinstaller --onefile --icon='you icon name in my case jarvis.ico' main.py and hit enter it will take some time and your exe will be created.

              go to dist folder i jarvis folder ther you can find your main.exe rename it to jarvis.exe</p>
          </div> */}
        </div>
      </section>
    )
}
export default Projects;