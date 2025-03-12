import React from 'react'

const Nav = () => {
  return (
   
    <>
     <header className='flex fixed top-0 left-0 z-50 w-full text-xl anton uppercase justify-around gap-4 bg-transparent items-center px-4 py-2'>
        <div className='w-3/6'>
        <img
        className='max-w-24'
        src="fitdrive.svg" alt="Fitness Drive logo" />
        </div>
       <div className='flex w-full gap-8 justify-around items-center'>
       <ul className='flex gap-8 font-bold '>
            <li className='hover:text-[#e5691c] cursor-pointer'>Clases</li>
            <li className='hover:text-[#e5691c] cursor-pointer'>Entrenadores</li>
            <li className='hover:text-[#e5691c] cursor-pointer'>Agenda</li>
            <li className='hover:text-[#e5691c] cursor-pointer'>Contacto</li>
        </ul>
        <button className='px-6 py-3 rounded-xs cursor-pointer hover:bg-slate-50 hover:text-[#e5691c] bg-[#e5691c] uppercase'>Unite hoy</button>
       </div>
     </header>
    </>
  )
}

export default Nav