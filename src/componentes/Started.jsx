import React from 'react'
import { useInView } from 'react-intersection-observer';

const Started = () => {
    const {ref, inView} = useInView({
        threshold: 0.1,
    })
  return (
<div className='anton relative w-full bg-gradient-to-r from-[#a5691c] via-[#b47b3c] to-[#935d2b6d] py-32'>
<h2 ref={ref} className={`text-4xl md:text-6xl lg:text-7xl p-2 w-full text-center opacity-0 scale-75 transition-all duration-1000 ease-in uppercase ${inView ? 'scale-100 opacity-100' : ''}`}>Empezá tu transformación hoy</h2>
        <div className='flex gap-6 justify-center p-4'>
        <button className='cursor-pointer px-6 py-3 uppercase text-xl text-slate-950 border-2 bg-[#f4f4f4a0] hover:bg-[#24242449] hover:text-slate-50 border-slate-500'>Unirme</button>
        <button className='cursor-pointer px-6 py-3 uppercase text-xl border-2 bg-[#24242424] hover:bg-[#f4f4f4] hover:text-slate-900 border-slate-500'>Contacto</button>
        </div>
    </div>
  )
}

export default Started