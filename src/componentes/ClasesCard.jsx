import React from 'react'

const ClasesCard = ({ src, title, desc, time, diff, inst }) => {
  return (
    <div className="relative w-full min-h-96 mt-4 px-2 rounded-lg anton leading-relaxed overflow-hidden">

<div className="absolute inset-0 transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform">
        <img className="w-full h-full object-cover" src={src} alt={title} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#020202ad] to-transparent"></div>
      </div>
      <div className="absolute flex flex-col leading-relaxed gap-2 bottom-4 left-4 right-4 text-white z-50">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-base text-gray-200">{desc}</p>

        <article className="flex items-center gap-6 mt-2 text-xs">
          <div className='flex items-center gap-2'>
          <p className='text-red-200'>{time}'</p>
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
            <path fill="#c5691c" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7z"></path>
          </svg>
          </div>
          <p>{diff}</p>
        </article>

        <article className="flex w-4/6 items-center py-2 gap-4 mt-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
              <g fill="none" stroke="#c5691c" strokeWidth={2}>
                <circle cx={12} cy={7} r={5}></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"></path>
              </g>
            </svg>
          </span>
          <h2 className="text-sm font-medium">{inst}</h2>
        </article>
      </div>
    </div>

  )
}

export default ClasesCard