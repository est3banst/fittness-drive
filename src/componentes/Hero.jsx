import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const cycleVideos = () => {
      setShowFirst(true); 
      setTimeout(() => setShowFirst(false), 4000);

      return setTimeout(cycleVideos, 11000);
    };

    const interval = cycleVideos();

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className='relative top-0 z-10 min-h-screen left-0 flex items-center w-full'>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
       
        <video
          className={`absolute w-full h-full object-cover aspect-video transition-opacity duration-[3500ms] ${
            showFirst ? "opacity-100" : "opacity-0"
          }`}
          src="fit-box.mp4"
          autoPlay
          muted
          loop
        ></video>

        <video
          className={`absolute w-full h-[120vh] object-cover object-bottom aspect-video transition-opacity duration-1000 ${
            showFirst ? "opacity-0" : "opacity-100"
          }`}
          src="rope-jump.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

        <div className='relative flex justify-center gap-7 flex-col items-center'>
        <section className='uppercase anton px-4 text-7xl'>
        <p>
        <b className='text-[#e5691c]'>Es hora</b> de
        </p>
        <p>
        pasar al siguiente nivel
        </p>
        </section>
        <section className='flex w-full px-6 gap-6'>
          
          <Link to='/membresias'>
          <button className='bg-[#e5691c] px-7 py-4 hover:bg-white hover:text-[#e5691c] uppercase font-bold cursor-pointer'>EMPEZAR AHORA</button>
          
          </Link>
            <button className='py-4 px-7 bg-white/10 font-medium border-2 cursor-pointer hover:opacity-60 border-slate-500'>VER AGENDA</button>
        </section>
        </div>
    </div>
 
  )
}

export default Hero