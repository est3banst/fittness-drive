import React, { useEffect } from 'react'
import Nav from '../Nav'
import ClasesCard from '../ClasesCard'
import Footer from '../Footer'

const ClasesLayout = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, [])

  const clases = [
    {
      title: 'HIIT',
      desc: 'Entrenamiento de alta intensidad en intervalos, nada quema más calorías y mejora tu salud cardiovascular',
      inst: 'Diego Lopez',
      src: 'hiit-clas.webp',
      time: '45',
      diff: 'Principiante',
    },
    {
      title: 'Pilates',
      desc: 'Pilates con un enfoque moderno en el que incorporarás movimientos dinámicos y entrenamientos de resistencia',
      inst: 'Victoria Rodriguez',
      src: 'pilates.webp',
      time: '45',
      diff: 'Principiante',
    },
    {
      title: 'Boxeo',
      desc: 'Aprende la técnica correcta del boxeo mientras aumentas tu agilidad y tu resistencia',
      inst: 'Marcos Maidana',
      src: 'boxing.webp',
      time: '70',
      diff: 'Principiante'
    },
    {
      title: 'Powerlifting',
      desc: 'Aumenta tu fuerza y tu resistencia con entrenamientos pesados y ejercicios compuestos',
      inst: 'Eduardo Hall',
      src: 'powerlift.webp',
      time: '80',
      diff: 'Avanzado'
    },
    {
      title: 'Crossfit Elite',
      desc: 'Supera tus límites con nuestro entrenamiento funcional de alta intensidad combinando movimientos gimnasticos, pesas y cardio',
      inst: 'Martin Danm',
      src: 'crossfit.webp',
      time: '60',
      diff: 'Avanzado',
    },
    {
      title: 'Beast mode',
      desc: 'Incrementa tu fuerza y tonifica tu cuerpo con nuestros entrenamientos de alta intensidad aplicando el principio de sobrecarga progresiva',
      inst: 'Pablo Itrue',
      src: 'beast-mode.webp',
      time: '90',
      diff: 'Avanzado'
    },
    {
      title: 'Yoga',
      desc: 'Conecta tu mente con tu cuerpo con movimientos dinámicos que mejoran tu postura y disminuyen tu estrés',
      inst: 'Diana Urie',
      src: 'yoga.webp',
      time: '60',
      diff: 'Principiante',
    }
  ]
  return (
    <>
      <Nav />
      <div className='bg-[url(/clases-bg.webp)] relative bg-no-repeat bg-cover bg-bottom lg:bg-[70%] h-screen'>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <span className='flex w-full items-center h-full p-2'>
          <h2 className='anton uppercase relative text-6xl md:text-7xl lg:text-8xl'>
            Nuestras <b className='text-amber-600'>clases</b>
          </h2>
        </span>
      </div>
      <div className="absolute inset-0 py-4 h-screen custom-clases">
      </div>

      <div className='w-full grid leading-relaxed grid-cols-1 md:grid-cols-2 h-auto'>
        <section className='self-center flex py-12 flex-col gap-4 px-3'>
          <h2 className='text-4xl anton uppercase'>
            <b className='pr-2 text-amber-600'>
              Es momento
            </b>
            de ir por tu mejor versión
          </h2>
          <hr />
          <p className='text-2xl'>Encontrá tu clase favorita en nuestro cátalogo</p>
          <p className='text-base'>Tenemos un amplio rango de actividades guiadas por expertos en la materia para obtener los mejores resultados</p>
          <span className='flex gap-4'>
            <span className='bg-[#02020249] p-6 rounded-lg'>
              <p className='text-3xl font-black'>
                7
              </p>
              <p className='text-xs'>Categorías distintas</p>
            </span>
            <span className='bg-[#02020249] p-6 rounded-lg'>
              <p className='text-3xl font-black'>
                45-90

              </p>
              <p className='text-xs'>Minutos por clase</p>
            </span>
          </span>
        </section>

        <div className='w-full h-screen relative flex justify-center center px-4'>

          <img
            src="gymtime.webp"
            className='
        rounded-lg max-h-5/6 bottom-10 my-auto absolute object-cover md:object-contain transition-transform duration-500 ease-in-out 
        hover:scale-[102%]'
            alt=""
          />

          <span className='absolute bottom-2 left-20 text-center w-44 h-auto bg-black/40 text-white rounded-lg p-4 uppercase font-bold text-base shadow-md'>
            Primer clase - 8:30 AM
          </span>




        </div>

      </div>
      <div className='my-4 py-4 relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {clases.map((item, idx) => (
          <ClasesCard
            key={idx}
            title={item.title}
            desc={item.desc}
            inst={item.inst}
            src={item.src}
            time={item.time}
            diff={item.diff} />

        ))}
      </div>
      <Footer />
    </>
  )
}

export default ClasesLayout