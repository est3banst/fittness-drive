import React from 'react'

const Card = ({ icon, title, text }) => {
  return (
    <div className="relative p-4 bg-[#0e0e0ea4] rounded-md flex flex-col gap-4 group">
    <div className="absolute inset-0 border-[.5px] border-gray-300 rounded-md transition-all duration-500 group-hover:border-amber-500 group-hover:w-full group-hover:scale-[1.02] group-hover:h-full"></div>
    <div className="relative z-10 hover:scale-[1.03] transition-all duration-700 ease-out">{icon}</div>
    <p className="relative z-10 text-white font-black anton-sc uppercase">{title}</p>
    <p className="relative z-10 text-slate-400">{text}</p>
  </div>
  
  )
}

export default Card