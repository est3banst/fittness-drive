import React from 'react'
import MemberPlans from './pages/MemberPlans.jsx';
import ClasesLayout from './pages/ClasesLayout.jsx';
import Main from './Main.jsx';
import ContactLayout from './pages/ContactLayout.jsx';
import AgendaLt from './pages/AgendaLt.jsx';
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/membresias' element={<MemberPlans/>} />
    <Route path='/contacto' element={<ContactLayout/>} />
    <Route path='/clases' element={<ClasesLayout/>} />
    <Route path='/agenda' element={<AgendaLt/>} />
    </Routes>
  )
}

export default AppRoutes