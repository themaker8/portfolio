import { FaPython } from "react-icons/fa6";
import { ReactComponent as CLang} from './assets/icons8-c-programming.svg';

const Home = ()=>{
    return(
        <>
        <div className="App ">
          <div className=" flex flex-col gap-8 text-start">
            <h1 className=" text-textPrim text-2xl">Hi! I am Abu-Talha👋</h1>
            {/* Intro */}
            <section id="home" className=" text-textPrimary h-screen">
            <p className="">I am a computer science enthusiast, exploring different programming languages, from&nbsp;
            <span><a href="https://vercel.com" target="_blank" rel="noreferrer" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"><FaPython />Python </a></span>
            &nbsp;to&nbsp;
            <span className=""><a href="https://react.dev" target="_blank" rel="noreferrer" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-0.5 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"><CLang className=" w-5 h-[19px]"/></a></span>
             . I have worked with Tkinter to create personal projects, and Flask to build websites. And have a basic understanding of Artficial Intelligence and Machine Learning.</p>
            </section>
            {/* Images */}
            {/* <section className="columns-2 sm:columns-3 gap-4 my-8">
            {data.images.map((item,index)=>{
              return(
                <img key={index} src={item} alt="myImages" />
              )
            })}
            </section> */}
          </div>
        </div>
      </>
    )
}

export default Home;