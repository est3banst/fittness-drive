import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import CardAgenda from '../CardAgenda'

const AgendaLt = () => {
    useEffect(() => {
        scrollTo(0, 0);
      }, [])
    const [selectedDay, setSelectedDay] = useState('Lunes');
    return (
        <>
            <Nav />
            <div className='bg-[url(/hiit-class.webp)] bg-cover min-h-[80vh] bg-center'></div>
            <span className='absolute bottom-1/4 left-0'>
                <h2 className='text-7xl md:text-8xl text-amber-600 uppercase anton px-2'>Agenda</h2>
            </span>
            <div className=''>

                <section className='flex custom-scroll gap-5 md:gap-8 mt-4 pb-2 overflow-x-auto'>
                    {Object.keys(weekly).map((day) => (
                        <button
                            key={day}
                            className={`text-xl px-5 py-3 m-2 anton rounded-2xl border font-black border-gray-500 cursor-pointer ${selectedDay === day ? 'bg-amber-50 text-amber-600' : 'bg-amber-600'}`}
                            onClick={() => setSelectedDay(day)}
                        >{day}</button>

                    ))}
                </section>
                <div className='grid grid-cols-1 py-10 md:grid-cols-2 gap-4'>
                    {weekly[selectedDay].map((clase, idx) => (
                        <CardAgenda
                            key={idx}
                            title={clase.title}
                            hour={clase.hour}
                            inst={clase.inst}
                            time={clase.time}
                            level={clase.level}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
const weekly = {
    Lunes: [
        { title: 'HIIT', inst: 'Diego Lopez', hour: '08:30 AM', time: '45', level: 'Principiante' },
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '08:30 AM', time: '45', level: 'Principiante' },
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '10:00 AM', time: '70', level: 'Principiante' },
        { title: 'Powerlifting', inst: 'Eduardo Hall', hour: '05:00 PM', time: '80', level: 'Intermedio' },
        { title: 'Crossfit Elite', inst: 'Martin Danm', hour: '08:00 PM', time: '60', level: 'Avanzado' }
    ],
    Martes: [
        { title: 'Yoga', inst: 'Diana Uribe', hour: '08:30 AM', time: '60', level: 'Principiante' },
        { title: 'HIIT', inst: 'Diego Lopez', hour: '09:00 AM', time: '45', level: 'Principiante' },
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '11:00 AM', time: '70', level: 'Principiante' },
        { title: 'Beast mode', inst: 'Pablo Itrue', hour: '06:00 PM', time: '90', level: 'Avanzado' },
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '08:00 PM', time: '45', level: 'Principiante' }
    ],
    Miércoles: [
        { title: 'Crossfit Elite', inst: 'Martin Danm', hour: '08:30 AM', time: '60', level: 'Avanzado' },
        { title: 'Powerlifting', inst: 'Eduardo Hall', hour: '09:00 AM', time: '80', level: 'Intermedio' },
        { title: 'Yoga', inst: 'Diana Uribe', hour: '11:00 AM', time: '60', level: 'Principiante' },
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '05:00 PM', time: '70', level: 'Principiante' },
        { title: 'Beast mode', inst: 'Pablo Itrue', hour: '08:00 PM', time: '90', level: 'Avanzado' }
    ],
    Jueves: [
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '07:30 AM', time: '45', level: 'Principiante' },
        { title: 'HIIT', inst: 'Diego Lopez', hour: '09:30 AM', time: '45', level: 'Principiante' },
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '11:30 AM', time: '70', level: 'Principiante' },
        { title: 'Crossfit Elite', inst: 'Martin Danm', hour: '05:30 PM', time: '60', level: 'Avanzado' },
        { title: 'Beast mode', inst: 'Pablo Itrue', hour: '07:30 PM', time: '90', level: 'Avanzado' }
    ],
    Viernes: [
        { title: 'Yoga', inst: 'Diana Uribe', hour: '09:00 AM', time: '60', level: 'Principiante' },
        { title: 'HIIT', inst: 'Diego Lopez', hour: '09:00 AM', time: '45', level: 'Principiante' },
        { title: 'Powerlifting', inst: 'Eduardo Hall', hour: '11:00 AM', time: '80', level: 'Intermedio' },
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '05:00 PM', time: '45', level: 'Principiante' },
        { title: 'Crossfit Elite', inst: 'Martin Danm', hour: '08:00 PM', time: '60', level: 'Avanzado' },
        { title: 'Beast Mode', inst: 'Martin Danm', hour: '09:00 PM', time: '90', level: 'Avanzado' }

    ],
    Sábado: [
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '10:00 AM', time: '70', level: 'Principiante' },
        { title: 'HIIT', inst: 'Diego Lopez', hour: '10:00 AM', time: '45', level: 'Principiante' },
        { title: 'Beast mode', inst: 'Pablo Itrue', hour: '12:00 PM', time: '90', level: 'Avanzado' },
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '13:00 PM', time: '45', level: 'Principiante' },
        { title: 'Powerlifting', inst: 'Eduardo Hall', hour: '03:00 PM', time: '80', level: 'Intermedio' },
        { title: 'Yoga', inst: 'Diana Uribe', hour: '05:00 PM', time: '60', level: 'Principiante' }
    ],
    Domingo: [
        { title: 'Yoga', inst: 'Diana Uribe', hour: '11:00 AM', time: '60', level: 'Principiante' },
        { title: 'Pilates', inst: 'Victoria Rodriguez', hour: '12:00 AM', time: '45', level: 'Principiante' },
        { title: 'HIIT', inst: 'Diego Lopez', hour: '01:00 PM', time: '45', level: 'Principiante' },
        { title: 'Boxeo', inst: 'Marcos Maidana', hour: '02:00 PM', time: '70', level: 'Principiante' },
        { title: 'Beast mode', inst: 'Pablo Itrue', hour: '04:00 PM', time: '90', level: 'Avanzado' }
    ]
};


export default AgendaLt