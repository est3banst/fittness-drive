import React from 'react'

const Memberships = ({ title, desc, save, popular, price, plan , points }) => {
    return (
      <div className={`hover:translate-y-1.5 transition-all duration-700 ease-in anton p-6 relative`}
        style={{ background: popular }}>
           {save &&  (<span className='bg-green-500 px-2 py-1 rounded-md text-xs absolute top-0 right-0 font-sans text-slate-900'>
                Ahorras ${save}
                </span>)}
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
  
          <button className='px-6 py-3 border-2 my-2 cursor-pointer transition-all duration-300 
            bg-transparent text-white border-white 
            hover:bg-white hover:text-black'>
            COMENZAR
          </button>
      </div>
    )
  }
  

export default Memberships