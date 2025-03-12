import React from 'react'
import Card from './Card'

const Section = () => {
  return (
    <>
    <div className='w-full flex h-full  gap-6 flex-col'>
        <section className='flex flex-col py-8 px-4 gap-6'>
        <p className="anton leading-relaxed text-5xl">
  <b className="bg-gradient-to-r from-[#e5691c] to-[#d5601296] bg-clip-text text-transparent">
    TU NUEVO PROYECTO SOS VOS
  </b>
</p>
            <p className='text-slate-400 text-2xl'>ELEVA TU PRESENCIA Y POTENCIA TU CUERPO</p>
            <p className='text-slate-400 text-2xl'>DONDE LOS CAMPEONES SE HACEN 24/7</p>
        </section>
        <section className='grid w-full bg-[#020202] py-24 px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                cards.map((card, idx) => (
                    <Card 
                    icon={card.icon}
                    text={card.text}
                    title={card.title}
                    key={idx}
                    />
                ))
            }

        </section>
    </div>
    </>
  )
}

const cards = [
    {
        icon : (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50">
            <path fill="#a5691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
            <path fill="#a5691c" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
        </svg>),
        title: 'Entrenadores altamente capacitados',
        text: 'Entrenadores con vasta experiencia y amplia formación dedicados a tus rutinas'
    },
    {
        icon : (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 20 20">
            <path fill="#a5691c" d="M10 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M7 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0M5.053 9.996q-.051.244-.051.504v.545l-2.631.705a.5.5 0 0 0-.354.612l.647 2.415A3 3 0 0 0 5.98 16.97c.23.31.495.594.789.843l-.171.05a4 4 0 0 1-4.9-2.828l-.647-2.415a1.5 1.5 0 0 1 1.061-1.837zM15 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M16.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-13 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M1 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 9A1.5 1.5 0 0 0 6 10.5V14a4 4 0 0 0 4.25 3.992a5.5 5.5 0 0 1-.665-1.02A3 3 0 0 1 7 14v-3.5a.5.5 0 0 1 .5-.5h3.837a5.5 5.5 0 0 1 1.839-.84A1.5 1.5 0 0 0 12.5 9zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></path>
        </svg>),
        title: 'Comunidad motivada',
        text: 'Unete a una comunidad de entusiastas del fitness muy motivada'
    },
    {
        icon : (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
            <g fill="none" stroke="#a5691c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                <path d="M14.5 10q-.331.087-.647.21M17.5 10c2.588.677 4.5 3.063 4.5 5.904C22 19.271 19.314 22 16 22a5.9 5.9 0 0 1-2-.347m-3.5-8.19a6.2 6.2 0 0 0-.5 2.441c0 .928.204 1.808.57 2.596"></path>
                <path d="M15.998 7c1.417 0 2.205 3.498.65 3.924a2.8 2.8 0 0 1-1.301 0c-1.552-.425-.753-3.924.65-3.924M16 7V2m-9.5 8c-2.588.677-4.5 3.063-4.5 5.904C2 19.271 4.686 22 8 22s6-2.73 6-6.096c0-2.84-1.912-5.227-4.5-5.904"></path>
                <path d="M7.998 7c1.417 0 2.205 3.498.65 3.924a2.8 2.8 0 0 1-1.301 0C5.795 10.499 6.594 7 7.997 7M8 7V2"></path>
            </g>
        </svg>),
        title: 'Entrenamiento de Elite',
        text: 'Todo el equipamiento más un coaching personalizado para la mejor experiencia y mejores resultados'
    },
    {
        icon : (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 1024 1024">
            <path fill="#a5691c" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7M378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211z"></path>
        </svg>),
        title: 'Instalaciones de lujo',
        text: 'Las más completas y modernas instalaciones, incluyendo actividades como boxeo, sauna, spa y más '
    }
]

export default Section