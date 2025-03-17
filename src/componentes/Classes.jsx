import React from 'react'
import GymClass from './GymClass'

const Classes = () => {
    return (
        <>
            <div className='bg-[url(bg-fitness-class.jpg)] relative h-auto bg-center bg-cover bg-no-repeat'>
                <div className='relative left-0 h-auto py-12 md:py-8 inset-0 bg-[#181818c1] '>
                    <section className='flex w-full px-2 justify-center flex-col items-center py-6 md:py-12'>
                        <h2 className='text-3xl md:text-4xl font-black my-2'>Nuestras clases más populares</h2>
                        <p className='text-slate-400 text-xl font-bold'>Animate a probar una clase, te vas a divertir</p>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-3 lg:h-auto gap-7 px-4 md:py-6">
                        {
                            clases.map((clas, key) => (
                                <GymClass 
                                key={key}
                                text={clas.text}
                                alt={clas.alt}
                                link={clas.link}
                                src={clas.src}
                                />
                            ))
                        }
                    
                        
                    </section>

                </div>
            </div>
        </>
    )
}

export default Classes
const clases = [
    {
        text: 'HIIT',
        src: 'hiit-class.webp',
        alt: 'HIIT Clases',
        link: '#'
    },
    {
        text: 'Powerlifting',
        src: 'powrrlift-fit.webp',
        alt: 'Powerlift sesión',
        link: '#'

    },
    {
        text: 'Boxeo',
        src: 'boxing-gloves.webp',
        alt: 'Boxeo clases',
        link: '#'
    },
]