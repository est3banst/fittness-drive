import React from 'react'

const Memberships = ({ title, desc, popular, price, plan , points }) => {
    return (
      <div className={`group-hover:translate-y-1.5 anton p-6 relative transition-all duration-700 ease-in`}
        style={{ background: popular }}>
          <h2 className='uppercase text-2xl'>{title}</h2>
          <p className='text-slate-400'>{desc}</p>
          <span className='text-3xl'>{price}<b className='text-slate-400 text-xs'>/{plan}</b></span>
  
          <section className="mt-4">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white mb-2">
                <span className="text-lg">{item.icon}</span>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </section>
  
          <button className='px-6 py-3 border-2 my-2 transition-all duration-300 
            bg-transparent text-white border-white 
            hover:bg-white hover:text-black'>
            COMENZAR
          </button>
      </div>
    )
  }
  

export default Memberships