import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Nav = () => {

  const [isOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {

    setMenuOpen(!isOpen);
  }
  return (

    <>
      <header className='flex fixed top-0 left-0 z-50 w-full text-xl anton uppercase lg:justify-around gap-4 bg-transparent items-center px-4 py-2'>
        <Link to='/' className='w-3/6'>
          <img
            className='max-w-24'
            src="fitdrive.svg" alt="Fitness Drive logo" />
        </Link>
        <div className='hidden lg:flex w-full gap-8 justify-around items-center'>
          <ul className='flex gap-8 font-bold '>
            <Link to="/clases">
              <li className='hover:text-[#e5691c] cursor-pointer'>Clases</li>
            </Link>
            <Link to='#'>
              <li className='hover:text-[#e5691c] cursor-pointer'>Entrenadores</li>
            </Link>
            <Link to='/agenda'>
              <li className='hover:text-[#e5691c] cursor-pointer'>Agenda</li>
            </Link>
            <Link to='/contacto'>
              <li className='hover:text-[#e5691c] cursor-pointer'>Contacto</li>

            </Link>
          </ul>
          <Link to="/membresias">
            <button className='px-6 py-3 rounded-xs cursor-pointer hover:bg-slate-50 hover:text-[#e5691c] bg-[#e5691c] uppercase'>Unite hoy</button>

          </Link>
        </div>


      </header>
      <div
        onClick={toggleMenu}
        className={`fixed lg:hidden cursor-pointer z-[998] flex right-12 top-10 flex-col gap-2`}>
        <div className={`w-6 h-[2px] relative transition-all duration-1000 ease-in-out bg-[#f2f2f2] ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-[2px] relative transition-all duration-1000 ease-in-out bg-[#f2f2f2] ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-[2px] relative transition-all duration-1000 ease-in-out bg-[#f2f2f2] ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
      </div>
      <div className={`bg-gradient-to-b from-[#242424] via-[#272727] to-[#a6611c] flex flex-col h-screen w-full overflow-hidden anton fixed -translate-x-full transition-all duration-700 ease-out opacity-0 right-0 ${isOpen ? 'opacity-100 z-[987] translate-x-0' : 'opacity-0 z-0'}`}>
        <Link to="/">
          <img
            className='max-w-24 p-4'
            src="fitdrive.svg" alt="Fitness Drive logo" />
        </Link>
        <div className='flex flex-col justify-between h-full'>
          <ol className='flex px-2 relative text-2xl flex-col pt-20 gap-3'>

            {mobileMenu.map((item, index) => (
              <Link
                key={index}
                to={item.link}>
                <li
                  className='relative bg-[#22222149] hover:scale-[102%] transition-all uppercase duration-500 ease-in cursor-pointer p-3 w-full 
        before:absolute before:inset-0 before:border before:border-transparent before:rounded-md 
        before:transition-all before:duration-500 hover:before:border-amber-500'>
                  {item.text}
                </li>
              </Link>
            ))}

          </ol>
          <Link to="/membresias" className='self-center'>
            <button className='bg-amber-600 hover:bg-amber-200 transition-all duration-700 ease-in hover:text-slate-900 cursor-pointer mx-auto w-max px-12 mb-4 py-6 text-2xl'>
              UNIRME HOY
            </button>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Nav

const mobileMenu = [
  {
    text: 'Clases',
    link: '/clases'
  },
  {
    text: 'Entrenadores',
    link: '#',
  },
  {
    text: 'Agenda',
    link: '/agenda',
  },
  {
    text: 'Contacto',
    link: '/contacto',
  }
]