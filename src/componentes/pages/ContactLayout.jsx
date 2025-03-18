import React, {useEffect} from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

const ContactLayout = () => {
    useEffect(() => {
        scrollTo(0, 0);
      }, [])
    return (
        <>
            <Nav />
            <div className='bg-[url(/contact-gym.webp)] bg-cover bg-bottom relative md:bg-center h-[80vh]'></div>
            <div className='absolute inset-0 bg-linear-to-b from-transparent via-[#02020244] to-[#020202] h-[80vh]'></div>

            <span className='absolute top-1/2'>
                <h2 className='px-3 text-6xl text-amber-600 font-black anton md:text-8xl uppercase'>Contacto</h2>
            </span>
            <div className='grid grid-cols-1 py-16 lg:grid-cols-2 gap-2 p-4 bg-[#02020224] w-full'>
                <section className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-bold mb-4'>Dejanos tu consulta</h2>
                    <p className='text-xl text-gray-400'>Nuestro equipo de profesionales está listo para asistirte o guíarte en tu camino por el fitness</p>
                    <span className='flex gap-3 mt-3'>
                        <span className='w-12 h-12 bg-[#5b36269f] flex justify-center items-center rounded-lg'>
                        <svg className='fill-amber-500' xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
                            <path d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4l-.037.037l3.646 3.646H5.707l3.646-3.646zM5 17.293V10.54l3.602 3.151zm10.398-3.602L19 10.54v6.75zM19 9v.21l-6.576 5.754a.68.68 0 0 1-.848 0L5 9.21V9z"></path>
                        </svg>
                        </span>
                        <span>
                            <h2>Contacto</h2>
                            <p>info@fitnessdrive.com</p>
                            <p>(598) 91632722</p>
                        </span>

                    </span>
                    <span className='flex gap-3'>
                    <span className='w-12 h-12 bg-[#5b36269f] flex justify-center items-center rounded-lg'>

                        <svg className='fill-amber-500' xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
                            <g className='fill-amber-500' fillRule="evenodd">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                <path d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path>
                            </g>
                        </svg>
                        </span>
                        <span>
                            <h2>Ubicación</h2>
                            <p>Calle 12 esq. Calle 13</p>
                            <p>Uruguay, Montevideo</p>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                    <span className='w-12 h-12 bg-[#5b36269f] flex justify-center items-center rounded-lg'>

                        <svg className='fill-amber-500' xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"></path>
                        </svg>
                        </span>
                        <span>
                            <h2>Horarios</h2>
                            <p>Lun. - Viernes: 8:00 - 23:00</p>
                            <p>Sábado: 9:00 - 22:00</p>
                            <p>Domingo: 10:00 - 22:00</p>
                        </span>
                    </span>
                </section>
                <form
                    className='flex flex-col justify-center min-w-80 p-4 gap-4'
                    action="">
                    <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-4'>
                        <div className='flex justify-between items-center gap-2'>
                            <label className='text-lg font-medium anton w-32' htmlFor="">Nombre: </label>
                            <input className='border-[.5px] w-full active:border-amber-600 focus:bg-white focus:text-slate-900 rounded-xs border-gray-500 py-1 px-2' type="text" />
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <label className='text-lg font-medium anton w-32' htmlFor="">Correo: </label>
                            <input className='border-[.5px] w-full focus:bg-white focus:text-slate-900 rounded-xs border-gray-500 py-1 px-2' type="text" />
                        </div>
                    </div>
                    <div className='flex w-full items-center gap-2'>
                        <label className='text-lg font-medium anton w-32' htmlFor="">Teléfono: </label>
                        <input className='border-[.5px] focus:bg-white focus:text-slate-900 w-full rounded-xs border-gray-500 py-1 px-2' type="text" />
                    </div>
                    <div className='flex w-full justify-between items-center gap-2'>
                        <label className='text-lg font-medium anton w-32' htmlFor="">Tema: </label>
                        <select className='border-[.5px] rounded-xs w-full border-gray-500 py-1 px-2' name="" id="">
                            <option value="">Membresías</option>
                            <option value="">Entrenamiento Personalizado</option>
                            <option value="">Guía nutricional</option>
                        </select>
                    </div>
                    <div className='flex w-full items-center gap-2'>
                        <label className='text-lg font-medium anton w-32' htmlFor="">Mensaje: </label>
                        <textarea className='w-full focus:bg-white focus:text-slate-900 border-[.5px] rounded-xs border-slate-200 py-1 px-2' rows={4} placeholder='Tu mensaje' name="" id=""></textarea>
                    </div>

                    <div className='m-auto'>
                        <button className='bg-amber-600 hover:text-amber-500 hover:bg-slate-50 px-8 text-lg rounded-xs cursor-pointer py-3 anton'>Enviar</button>
                    </div>
                </form>
            </div>
            <Footer />

        </>

    )
}

export default ContactLayout