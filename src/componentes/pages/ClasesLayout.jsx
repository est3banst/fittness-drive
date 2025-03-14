import React from 'react'
import Nav from '../Nav'

const ClasesLayout = () => {
  return (
    <>
    <Nav/>
    <div className='bg-[url(/clases-bg.jpg)] relative bg-no-repeat bg-cover bg-center h-screen'>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
   
    </div>
    <div className="absolute inset-0 custom-clases">
    <div className='w-full inset-0 border-2 border-slate-50 bg-amber-50' 
         style={{ clipPath: 'polygon(100% 51%, 100% 84%, 100% 100%, 0% 100%, 50% 88%, 80% 75%)', height: '2px', borderTop: '2px solid #f8fafc' }}></div>    
         </div>   
    </>
  )
}

export default ClasesLayout