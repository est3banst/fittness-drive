import React from 'react'

const ClasesCard = ({ src, title, desc, time, diff, inst }) => {
  return (
    <div className='w-full relative'>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>

      <section>
        <img className="w-full h-full object-cover rounded-lg" src={src} alt={title}/>
        <p>{title}</p>
        <p>{desc}</p>
        <article>
          <p>
            {time}
          </p>
          <p>
            {diff}
          </p>
        </article>
        <article>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={12} cy={7} r={5}></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"></path>
              </g>
            </svg>
          </span>
          <h2>
            {inst}
          </h2>
        </article>
      </section>
    </div>
  )
}

export default ClasesCard