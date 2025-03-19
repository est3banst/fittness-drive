import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Section from './Section'
import Classes from './Classes'
import Started from './Started'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <div className='grid h-auto overflow-hidden grid-cols-1'>
      <div className='relative'>
      <Nav />
      <Hero />
      </div>
      <Section/>
      <div className='h-auto flex flex-col relative'>
  <Classes/>
  

  </div>

  <Started/>
  <Footer/>
    </div>
  </>
  )
}

export default Main