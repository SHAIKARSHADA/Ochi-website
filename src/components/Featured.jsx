import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  return (
    <div className="w-full py-20  bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className='text-8xl font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer w-1/2 h-[75vh] relative "
          >
            <div className="card w-full h-full overflow-hidden  rounded-xl  ">
              <h1 className="absolute left-full overflow-hidden z-[9] flex -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter text-[#CDEA68]">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                  className="inline-block"
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh] relative ">
            <div className="card w-full h-full overflow-hidden  rounded-xl  ">
              <h1 className="absolute flex overflow-hidden right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
