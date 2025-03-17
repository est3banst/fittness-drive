import React from 'react'
import Memberships from '../Memberships'
import Nav from '../Nav'
import Footer from '../Footer'
import { useState } from 'react'
import { useEffect } from 'react'

export const MemberPlans = () => {
    useEffect(() => {
        scrollTo(0, 0);
    }, [])
    const [active, setActive] = useState(0);

    const memeberships = [
        {
            title: 'Básico',
            desc: 'Perfecto para personas que recien comienzan a entrenar',
            price: 1200,
            bg: '#383838',
            plan: active === 0 ? 'mensual' : 'anual',
            sections: [
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Acceso al área de pesas' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: '3 Clases grupales semanales' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Acceso en horario regular' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
                    <path fill="#b2beb5" d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path>
                </svg>), text: 'Sesiones de entrenamiento personalizado' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
                    <path fill="#b2beb5" d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path>
                </svg>), text: 'Spa y zonas de recuperación' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
                    <path fill="#b2beb5" d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path>
                </svg>), text: 'Guía nutricional' },
            ]
        },
        {
            title: 'Élite',
            desc: 'El plan más popular para entusiastas del fitness dedicados',
            price: 2500,
            bg: '#c7691c',
            plan: active === 0 ? 'mensual' : 'anual',
            sections: [
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Acceso al área de pesas' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Clases grupales todos los dias' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Acceso en horario regular' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: '2 Sesiones de entrenamiento personalizadas mensuales' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
                    <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                    <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                </svg>), text: 'Spa y zonas de recuperación' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
                    <path fill="#b2beb5" d="m8.4 16.308l3.6-3.6l3.6 3.6l.708-.708l-3.6-3.6l3.6-3.6l-.708-.708l-3.6 3.6l-3.6-3.6l-.708.708l3.6 3.6l-3.6 3.6zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path>
                </svg>), text: 'Guía nutricional' },
            ]
        },
        {
            title: 'Ultimatum',
            desc: 'El plan completo, pase libre a todas las salas',
            price: 4500,
            bg: '#383838',
            plan: active === 0 ? 'mensual' : 'anual',
            sections: [
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: 'Acceso al área de pesas' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: 'Clases grupales todos los días' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: 'Acceso 24/7' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: '4 Sesiones de entrenamiento personalizadas mensuales' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: 'Spa y zonas de recuperación' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 50 50">
        <path fill="#a6691c" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
        <path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
    </svg>), text: 'Guía nutricional' },
            ]
        }
    ]

  return (
    <>
    <div className='bg-[#02020248] w-full relative z-[999]'>

    <Nav />
    </div>
    <div className='bg-[url(/dumbells-memb.webp)] flex items-center relative bg-no-repeat bg-cover w-full h-[50vh] md:h-screen'>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

  <span className='absolute left-10 md:left-20 top-3/4 -translate-y-1/2 text-5xl md:text-7xl anton text-white'>
    ELIGE <b className='text-amber-500'>TU CAMINO</b>
  </span>
  <div className="absolute z-[777] border-2 bg-[#4f4e4ed8] border-black rounded-full bottom-[-40px] left-1/2 -translate-x-1/2 flex">
        
        <button 
          className={`font-medium border-r-2 border-slate-900 px-6 py-3 rounded-l-full transition-all duration-300
          ${active === 0 ? 'bg-orange-400 text-black' : 'text-white'}`}
          onClick={() => setActive(0)}>
          Mensual
        </button>

        <button 
          className={`font-medium px-6 py-3 relative rounded-r-full transition-all duration-300
          ${active === 1 ? 'bg-orange-400 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
          onClick={() => setActive(1)}
        >
          Anual
          <span className='absolute custom-size bg-green-400 rounded-md p-1 text-slate-900 z-[9999] -top-3 left-0'>Ahorras un 20%</span>
        </button>
      </div>

</div>
    <div className='pt-26 px-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
    {memeberships.map((plan, idx) => {
        const priceMemb = active === 1 ? plan.price * 12 * 0.8 : plan.price;
        const savings = active === 1 ? plan.price * 12 * 0.2 : '';
        return ( <Memberships 
        title={plan.title}
        desc={plan.desc}
        save={`${savings.toLocaleString()}`}
        popular={plan.bg}
        price={`$${priceMemb.toLocaleString()}`}
        points={plan.sections}
        key={idx}
        plan={plan.plan}
        /> )
})}
    </div>
    <Footer />
    </>
  )
}

