import React from 'react'
import Nav from '../Nav'
import ClasesCard from '../ClasesCard'
import Footer from '../Footer'

const ClasesLayout = () => {

  const clases = [
    {
      title: 'HIIT',
      desc: 'Entrenamiento de alta intensidad en intervalos, nada quema más calorías y mejora tu salud cardiovascular',
      inst: 'Diego Lopez',
    },
    {
      title: 'Pilates',
      desc: 'Pilates con un enfoque moderno en el que incorporarás movimientos dinámicos y entrenamientos de resistencia',
      inst: 'Victoria Rodriguez',
    },
    {
      title: 'Boxeo',
      desc: 'Aprende la técnica correcta del boxeo mientras aumentas tu agilidad y tu resistencia',
      inst: 'Marcos Maidana',
    },
    {
      title: 'Powerlifting',
      desc: 'Aumenta tu fuerza y tu resistencia con entrenamientos pesados y ejercicios compuestos',
      inst: 'Eddie Hall',
    },
    {
      title: 'Crossfit Elite',
      desc: 'Supera tus límites con nuestro entrenamiento funcional de alta intensidad combinando movimientos gimnasticos, pesas y cardio',
      inst: 'Martin Danm',
    },
    {
      title: 'Beast mode',
      desc: 'Incrementa tu fuerza y tonifica tu cuerpo con nuestros entrenamientos de alta intensidad aplicando el principio de sobrecarga progresiva',
      inst: 'Pablo Itrue',
    },
    {
      title: 'Yoga',
      desc: 'Conecta tu mente con tu cuerpo con movimientos dinámicos que mejoran tu postura y disminuyen tu estrés',
      inst: 'Diana Urie'
    }
  ]
  return (
    <>
    <Nav/>
    <div className='bg-[url(/clases-bg.jpg)] relative bg-no-repeat bg-cover bg-center h-screen'>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
    <span className='flex w-full items-center h-full p-2'>
      <h2 className='anton uppercase relative text-6xl md:text-7xl lg:text-8xl'>
        Nuestras <b className='text-amber-600'>clases</b>
      </h2>
      </span>
    </div>
    <div className="absolute inset-0 custom-clases">
    <div className='w-full inset-0 border-2 border-slate-50 bg-amber-50' 
         style={{ clipPath: 'polygon(100% 51%, 100% 84%, 100% 100%, 0% 100%, 50% 88%, 80% 75%)', height: '2px', borderTop: '2px solid #f8fafc' }}></div>    
         </div>   
    <div className='my-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {clases.map((item, idx) => (
        <ClasesCard 
        title={item.title}
        desc={item.desc}
        inst={item.inst}/>

      ))}
    </div>
    <Footer/>
    </>
  )
}

export default ClasesLayout