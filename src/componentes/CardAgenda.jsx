import React from 'react'

const CardAgenda = ({ title, inst, hour, time, level }) => {
  return (
    <>
    <div className='bg-[#020202] p-6'>
    <span className='flex justify-between py-2'>
    <h2 className='font-black anton text-2xl'>{title}</h2>
    <p className='anton text-xl text-amber-600'>{hour}</p>
    </span>
    <p className='text-sm text-gray-400 py-1'>{inst}</p>
    <span className='flex text-gray-400 text-xs gap-4'>
        <p className='border-r-4 border-amber-800 pr-4'>
            {time} min.
            </p>
        <p>
        {level}

        </p>
    </span>
    </div>
    </>
  )
}

export default CardAgenda