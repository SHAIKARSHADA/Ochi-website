import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[Neue_Montreal] text-[4vw] leading-[4.2vw] tracking-tight " >Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="border-t-[2px] w-full border-[#738146] mt-20 pt-10 flex">
      <div className="w-1/2  mt-10">
        <h1 className="text-7xl">Our Approach</h1>
        <button className="px-10 uppercase flex gap-10 items-center py-6 bg-zinc-900 rounded-full mt-10 text-white">Read More
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div></button>
      </div>
      <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a0af67]"></div>
      </div>
    </div>
  )
}

export default About