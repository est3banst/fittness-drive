import React from 'react'

const Classes = () => {
    return (
        <>
            <div className='bg-[url(bg-fitness-class.jpg)] relative h-screen bg-center bg-cover bg-no-repeat'>
                <div className='absolute inset-0 bg-[#181818c1] '>
                    <section className='flex w-full justify-center flex-col items-center py-12'>
                        <h2 className='text-3xl md:text-4xl font-black my-2'>Nuestras clases más populares</h2>
                        <p className='text-slate-400 text-xl font-bold'>Animate a probar una clase, te vas a divertir</p>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-7 px-4 py-6">
                        <article className="w-full relative h-[350px]">
                            <img className="w-full h-full object-cover rounded-lg" src="hiit-fit.jpg" alt="HIIT Class" />
                            <div className='absolute h-full bg-white/5 w-full flex items-start justify-end flex-col gap-4 p-4 left-0 bottom-0'>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
                            <p className='text-white px-2 relative z-50 font-black text-xl'>HIIT</p>
                            <button className='p-2 border-[.5px] relative z-50 border-slate-500'>Más información</button>
                            </div>
                        </article>
                        <article className="w-full relative h-[350px]">
                            <img className="w-full h-full object-cover rounded-lg" src="powrrlift-fit.jpg" alt="Powerlifting Class" />
                            <div className='absolute h-full bg-white/5 w-full flex items-start justify-end flex-col gap-4 p-4 left-0 bottom-0'>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
                            <p className='text-white relative px-2 z-50 font-black text-xl'>Powerlifting</p>
                            <button className='p-2 border-[.5px] relative z-50 border-slate-500'>Más información</button>
                            </div>
                        </article>
                        <article className="w-full relative h-[350px]">
                            <img className="w-full h-full object-cover rounded-lg" src="boxing-gloves.jpg" alt="Boxing Class" />
                            <div className='absolute h-full bg-white/5 w-full flex items-start justify-end flex-col gap-4 p-4 left-0 bottom-0'>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
                            <p className='text-white px-2 relative z-50 font-black text-xl'>Boxeo</p>
                            <button className='p-2 border-[.5px] relative z-50 border-slate-500'>Más información</button>
                            </div>
                        </article>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Classes