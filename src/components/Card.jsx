import React from 'react'

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh] ">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center ">
          <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
          <button className="absolute left-7 px-5 py-1 border-2 rounded-full bottom-10  text-[.9vw]">&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex gap-5  h-[50vh]">
        <div className="card w-1/2 rounded-xl h-full relative flex items-center justify-center bg-[#203b38]">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
          <button className="absolute left-5 px-5 py-1 border-2 rounded-full bottom-10 uppercase text-[.9vw] ">Rating 5.0 on clutch</button>
        </div>
        <div className="card w-1/2 rounded-xl h-full relative flex items-center justify-center bg-[#203b38]">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
          <button className="absolute left-7 px-5 py-1 border-2 rounded-full bottom-10 uppercase text-[.9vw] ">Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Card