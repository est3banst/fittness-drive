import React from 'react'

const GymClass = ({ text, src, alt, link }) => {
    return (
        <>

            <article className="w-full relative h-[350px]">

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>

                <img className="w-full h-full object-cover rounded-lg" src={src} alt={alt} />
                <div className='h-full absolute w-full bg-white/5 flex items-start justify-end flex-col gap-4 p-4 left-0 bottom-0'>
                    <p className='text-white px-2 relative z-50 font-black text-xl'>{text}</p>
                    <button className='p-2 border-[.5px] cursor-pointer bg-[#b67929ad] font-medium hover:bg-white/90 hover:text-[#cb7e58] relative z-50 border-slate-500'>Más información</button>
                </div>
            </article>
        </>
    )
}

export default GymClass