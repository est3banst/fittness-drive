import Nav from './componentes/Nav'
import Hero from './componentes/Hero'
import Section from './componentes/Section'
import Classes from './componentes/Classes'

function App() {

  return (
    <>
      <div className='grid grid-cols-1'>
        <div className='relative'>
        <Nav />
        <Hero />
        </div>
        <Section/>
        <Classes/>
      </div>
    </>
  )
}

export default App
