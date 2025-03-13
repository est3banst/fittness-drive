import Nav from './componentes/Nav'
import Hero from './componentes/Hero'
import Section from './componentes/Section'
import Classes from './componentes/Classes'
import Started from './componentes/Started'
import Footer from './componentes/Footer'

function App() {

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

export default App
