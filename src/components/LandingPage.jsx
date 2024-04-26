import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
  
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="textstructure mt-52 px-20">
        
          {["We Create","Eye Opening","Presentations"].map((item,index)=>(
            <div className='masker '>
              <div  className="w-fit flex items-center">
                {index === 1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1],duration : 1}} className="w-[5vw] h-[6vw] bg-red-500 relative rounded-md -top-[.2vw] mr-[.5vw]"></motion.div>}
             <h1 className="uppercase text-[9vw] pt-[2vw] -mb-[1vw] leading-[6vw] font-['Founders_Grotesk_X-Condensed'] font-bold">{item}</h1>
              </div>
              </div>
          ))}
        </div>
    
     <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between py-5 px-20">
    {["For public and private companies","From the first pitch to IPO"].map((item)=>(
      <p className="text-md  font-light tracking-tight leading-none flex items-center">{item}</p>
    ))}
    <div className="start py-[10px] flex items-center gap-5 ">
      <div className="px-5 py-1 border-[1px] border-zinc-300 font-light uppercase text-sm rounded-full">Start the Project</div>
      <div className="w-10 h-10 rounded-full border-zinc-300 flex items-center justify-center border-[1px]">
        <span className="rotate-[45deg]"><FaArrowUpLong /></span>
      </div>
    </div>
    </div>
    </div>
  )   
}

export default LandingPage;
